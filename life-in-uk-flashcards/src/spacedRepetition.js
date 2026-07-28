import { safeGetItem, safeSetItem } from './safeStorage';

const MISSED_KEY = 'lifeInUkMissedQuestions';
const MAX_TRACKED = 300;

// Record questions missed in a mock exam / quick-fire round.
// Tracks miss count + last-seen so weaker questions resurface more often.
export function updateMissedQuestions(wrongQuestions) {
    if (!wrongQuestions || wrongQuestions.length === 0) return;
    const store = safeGetItem(MISSED_KEY, {});
    const now = Date.now();

    wrongQuestions.forEach(({ text, topic }) => {
        const existing = store[text];
        store[text] = {
            topic,
            missCount: (existing?.missCount || 0) + 1,
            lastMissed: now,
        };
    });

    // Cap store size: drop oldest-missed entries beyond MAX_TRACKED
    const entries = Object.entries(store);
    if (entries.length > MAX_TRACKED) {
        entries.sort((a, b) => b[1].lastMissed - a[1].lastMissed);
        const trimmed = Object.fromEntries(entries.slice(0, MAX_TRACKED));
        safeSetItem(MISSED_KEY, trimmed);
    } else {
        safeSetItem(MISSED_KEY, store);
    }
}

// Mark a previously-missed question as answered correctly (reduces its resurfacing priority).
export function markQuestionRecovered(text) {
    const store = safeGetItem(MISSED_KEY, {});
    if (!store[text]) return;
    store[text].missCount = Math.max(0, store[text].missCount - 1);
    if (store[text].missCount === 0) delete store[text];
    safeSetItem(MISSED_KEY, store);
}

export function getMissedQuestionsMap() {
    return safeGetItem(MISSED_KEY, {});
}

// Weight a list of questions so previously-missed ones surface more often.
// Returns a new shuffled array where missed questions are duplicated proportionally to miss count (capped).
export function weightQuestionsBySpacedRepetition(questions) {
    const missed = getMissedQuestionsMap();
    if (Object.keys(missed).length === 0) return questions;

    const weighted = [];
    questions.forEach(q => {
        const record = missed[q.text];
        const weight = record ? Math.min(1 + record.missCount, 4) : 1;
        for (let i = 0; i < weight; i++) weighted.push(q);
    });
    return weighted;
}

export function getWeakTopics(limit = 3) {
    const missed = getMissedQuestionsMap();
    const topicCounts = {};
    Object.values(missed).forEach(({ topic, missCount }) => {
        if (!topic) return;
        topicCounts[topic] = (topicCounts[topic] || 0) + missCount;
    });
    return Object.entries(topicCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([topic, count]) => ({ topic, missCount: count }));
}
