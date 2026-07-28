import { safeGetItem, safeSetItem } from './safeStorage';

const STREAKS_KEY = 'lifeInUkQuickFireStreaks';

// Shape: { overall: number, byTopic: { [topic]: number } }
export function getBestStreaks() {
    return safeGetItem(STREAKS_KEY, { overall: 0, byTopic: {} });
}

export function recordStreakResult(bestStreakThisRound, topic) {
    const stats = getBestStreaks();
    if (bestStreakThisRound > stats.overall) stats.overall = bestStreakThisRound;
    if (topic && topic !== 'Mixed') {
        const prevTopicBest = stats.byTopic[topic] || 0;
        if (bestStreakThisRound > prevTopicBest) stats.byTopic[topic] = bestStreakThisRound;
    }
    safeSetItem(STREAKS_KEY, stats);
    return stats;
}
