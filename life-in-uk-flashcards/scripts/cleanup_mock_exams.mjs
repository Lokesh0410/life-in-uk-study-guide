// cleanup_mock_exams.mjs
// Replaces low-quality/hallucinated/duplicate questions with quality ones 
// derived from study guide data (479 verified cards)
// Usage: node scripts/cleanup_mock_exams.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── Load study guide ───────────────────────────────────────────
const study = await import(path.resolve(__dirname, '../src/studyGuideData.js'));
const sections = study.sections;

function stripEmoji(s) {
    return s.replace(/[\u{1F300}-\u{1FAFF}\u{1F900}-\u{1F9FF}\u{2700}-\u{27BF}\u{2600}-\u{26FF}]/gu, '').replace(/\s+/g, ' ').trim();
}

function shuffle(a) {
    const b = [...a];
    for (let i = b.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
}

// ── Distractor pools ───────────────────────────────────────────
const YEAR_POOL = ['1066', '1215', '1588', '1642', '1666', '1688', '1707', '1805', '1815', '1914', '1918', '1939', '1945', '1948', '1922', '1721', '1689', '1679'];

const DIST_POOL = [
    "Henry VIII", "Elizabeth I", "Queen Victoria", "King John", "Charles I", "James I",
    "Parliament", "The Supreme Court", "The Cabinet", "The House of Lords", "The House of Commons",
    "Scotland", "Wales", "Northern Ireland", "Ireland", "England",
    "The Monarchy", "The Prime Minister",
    "The Duke of Wellington", "Admiral Nelson", "Oliver Cromwell", "Sir Francis Drake",
    "Catholicism", "Protestantism", "Judaism", "Buddhism", "Hinduism", "Islam", "Anglican",
    "True", "False",
    "5 years", "10 years", "3 years", "7 years", "18 years",
    "Winston Churchill", "Margaret Thatcher", "Clement Attlee", "Tony Blair",
    "St Patrick's Day", "St Andrew's Day", "St David's Day", "St George's Day",
    "The Blitz", "D-Day", "The Battle of Britain", "The Battle of Hastings", "The Battle of Waterloo",
    "Canada", "Australia", "India", "South Africa", "New Zealand",
    "Football", "Cricket", "Rugby", "Tennis", "Golf",
    "£5,000", "£10,000", "£3,000", "£2,000", "£1,000",
    "Jacobites", "Suffragettes", "Puritans", "Anglo-Saxons", "Vikings", "Celts", "Romans", "Normans",
    "Catholic", "Protestant", "Anglican", "Presbyterian",
    "6,000 years ago", "8,000 years ago", "4,000 years ago", "10,000 years ago",
    "By AD 600", "By AD 500", "By AD 700", "By AD 800",
    "1690", "1688", "1679", "1721", "1689", "1707", "1801", "1922",
    "The Romans", "The Normans", "The Vikings", "The Celts", "The Saxons",
    "Norman French and Anglo Saxon", "Gaelic and Celtic", "French and English",
    "House of Commons", "House of Lords", "Cabinet", "Speaker",
    "Manchester", "Birmingham", "Leeds", "Liverpool",
    "Scotland Yard", "MI5", "MI6", "Special Branch",
];

function distractors(correct) {
    const r = [];
    const cn = correct.toLowerCase().trim();
    const pool = [...DIST_POOL].sort(() => Math.random() - 0.5);
    for (const item of pool) {
        if (r.length >= 3) break;
        const n = item.toLowerCase().trim();
        if (n !== cn && !cn.includes(n) && !n.includes(cn) && !r.includes(item)) r.push(item);
    }
    return r;
}

function yearDistractors(year) {
    const y = parseInt(year);
    const opts = new Set();
    for (const d of [y - 100, y - 50, y - 25, y - 10, y - 5, y + 5, y + 10, y + 25, y + 50, y + 100, y - 1, y + 1]) {
        if (d > 0 && d !== y && String(d).length === 4) opts.add(String(d));
        if (opts.size >= 3) break;
    }
    for (const p of YEAR_POOL) {
        if (opts.size >= 3) break;
        if (p !== year && !opts.has(p)) opts.add(p);
    }
    return [...opts].slice(0, 3);
}

// ── Generate question bank from study guide ────────────────────
function generateBank() {
    const bank = [];
    const seen = new Set();

    function add(q) {
        const k = q.text.toLowerCase().trim();
        if (!seen.has(k) && !isBad(q.text)) { seen.add(k); bank.push(q); }
    }

    for (const section of sections) {
        for (const card of section.cards) {
            const f = stripEmoji(card.front);
            const b = card.back;
            const bl = b.split('\n').map(l => stripEmoji(l)).filter(Boolean);
            const ans = (bl[0] || b).replace(/\.$/, '');

            // 1. Front ends with "?" → already a question
            if (f.endsWith('?')) {
                const d = distractors(ans);
                if (d.length >= 3 && ans.length < 100) {
                    add({ text: f, choices: shuffle([ans, ...d]), correct: 0, explanation: b.replace(/\n/g, ' ') });
                }
            }

            // 2. Date-first card (e.g., "1066 Battle of Hastings")
            const dm = f.match(/^(\d{4})\s+(.*)/);
            if (dm && bl.length >= 1) {
                const [_, yr, rest] = dm;
                const d = yearDistractors(yr);
                const topic = rest.trim();
                if (d.length >= 3 && topic.length > 3) {
                    add({
                        text: `In what year did ${topic}?`,
                        choices: shuffle([yr, ...d]),
                        correct: 0,
                        explanation: b.replace(/\n/g, ' ').replace(/\.$/, '') + '.',
                    });
                    const d2 = distractors(ans);
                    if (d2.length >= 3) {
                        add({
                            text: `What happened in ${yr}?`,
                            choices: shuffle([ans, ...d2]),
                            correct: 0,
                            explanation: b.replace(/\n/g, ' '),
                        });
                    }
                }
            }

            // 3. "Topic (year)" card
            const yearParen = f.match(/^(.+?)\s*\((\d{4})\)\s*$/);
            if (yearParen && !dm) {
                const [_, topic, yr] = yearParen;
                const d = yearDistractors(yr);
                if (d.length >= 3) {
                    const finalAns = ans.length > 5 ? ans : topic + ' ' + ans;
                    if (finalAns.length > 5) {
                        add({
                            text: `What happened in ${yr}?`,
                            choices: shuffle([finalAns, ...d]),
                            correct: 0,
                            explanation: b.replace(/\n/g, ' ').replace(/\.$/, '') + '.',
                        });
                    }
                }
                const d2 = distractors(ans);
                if (d2.length >= 3 && ans.length > 3) {
                    add({
                        text: `What is ${topic}?`,
                        choices: shuffle([ans, ...d2]),
                        correct: 0,
                        explanation: b.replace(/\n/g, ' '),
                    });
                }
            }

            // 4. Name → What/Who question
            if (!f.includes('?') && !dm && !yearParen && bl.length >= 1) {
                const topic = f.replace(/[\u{1F300}-\u{1FAFF}\u{1F900}-\u{1F9FF}\u{2700}-\u{27BF}\u{2600}-\u{26FF}\u{E0061}-\u{E007A}]/gu, '').replace(/\s+/g, ' ').trim();
                if (topic.length > 3 && !topic.match(/^\d/)) {
                    const d = distractors(ans);
                    if (d.length >= 3 && ans.length > 2 && ans.length < 120) {
                        let question;
                        if (ans === 'True' || ans === 'False') question = `True or false: ${topic}?`;
                        else question = `What is ${topic}?`;
                        add({
                            text: question,
                            choices: shuffle([ans, ...d]),
                            correct: 0,
                            explanation: b.replace(/\n/g, ' '),
                        });
                    }
                }
            }

            // 5. Back lines with ":" → key-value questions
            for (const line of bl) {
                const ci = line.indexOf(':');
                if (ci > 0 && ci < 40 && line.length > ci + 2) {
                    const key = line.substring(0, ci).trim();
                    const val = line.substring(ci + 1).trim();
                    if (key.length > 2 && key.length < 60 && val.length > 2 && val.length < 100) {
                        const d = distractors(val);
                        if (d.length >= 3) {
                            let qt;
                            if (key.endsWith('?')) qt = `What ${key}`;
                            else if (/^(population|located|name|official|capital|largest|highest|languages)/i.test(key)) qt = `What is the ${key} of the UK?`;
                            else qt = `What is ${key}?`;
                            add({
                                text: qt.replace('What  is', 'What is'),
                                choices: shuffle([val, ...d]),
                                correct: 0,
                                explanation: bl.join('; '),
                            });
                        }
                    }
                }
            }
        }
    }
    return bank;
}

// ── Low-quality patterns ───────────────────────────────────────
const BAD_PATTERNS = [
    /Identify which/i,
    /Mothering Sunday.*June/i,
    /Carry on.*associated/i,
    /Nick Park/i,
    /Clifton Suspension Bridge/i,
    /longest straight distance on the mainland/i,
    /split the atom/i,
    /greatest Briton of all time/i,
    /77th Street/i,
    /London State University/i,
    /Nuclear Plant/,
    /what country is swansea/i,
    /party won the General Election in 2010/i,
    /NSPCC is a charity for/i,
    /What can 'Carry on' be associated/i,
    /Who in 2002 was voted the greatest Briton/i,
    /Who designed the Clifton Suspension/i,
    /Which comedy double act by Nick Park/i,
    /a Paralympian who won/i,
    /Match the Capitals/i,
];

function isBad(text) {
    for (const p of BAD_PATTERNS) {
        if (p.test(text)) return true;
    }
    return false;
}

// ── Format question as JS source line ──────────────────────────
function questionToJS(q) {
    const text = JSON.stringify(q.text);
    const choices = JSON.stringify(q.choices);
    const explanation = JSON.stringify(q.explanation);
    if (q.multiple) {
        return `{ text: ${text}, choices: ${choices}, multiple: true, correct: ${JSON.stringify(q.correct)}, explanation: ${explanation} }`;
    }
    return `{ text: ${text}, choices: ${choices}, multiple: false, correct: ${q.correct}, explanation: ${explanation} }`;
}

// ── Main ───────────────────────────────────────────────────────
console.log('Generating question bank from study guide...');
const bank = generateBank();
console.log(`  ${bank.length} questions generated`);

// Load original exams
const mp = path.resolve(__dirname, '../src/mockExamsData.js');
const origMod = await import(mp + '?t=' + Date.now());
const origExams = origMod.mockExams;

console.log('Scanning mock exams for low-quality/duplicate questions...');

// Track used texts across all exams
let usedTexts = new Set();
let bankIndex = 0;
let replacedCount = 0;
let keptCount = 0;
let dupCount = 0;

function nextBankQuestion() {
    const q = bank[bankIndex % bank.length];
    bankIndex = (bankIndex + 1) % bank.length;
    return q;
}

// Build new mockExams array
const newExams = [];
for (const exam of origExams) {
    const newQuestions = [];
    for (const q of exam.questions) {
        const key = q.text.toLowerCase().trim();

        if (isBad(q.text)) {
            // Replace with bank question
            const replacement = nextBankQuestion();
            // Make sure it's unique
            const repKey = replacement.text.toLowerCase().trim();
            if (usedTexts.has(repKey)) {
                // Find a truly unique one
                for (let i = 0; i < bank.length * 2; i++) {
                    const candidate = bank[(bankIndex + i) % bank.length];
                    if (!usedTexts.has(candidate.text.toLowerCase().trim())) {
                        replacement.text = candidate.text;
                        replacement.choices = candidate.choices;
                        replacement.correct = candidate.correct;
                        replacement.explanation = candidate.explanation;
                        bankIndex = (bankIndex + i + 1) % bank.length;
                        break;
                    }
                }
            }
            usedTexts.add(replacement.text.toLowerCase().trim());
            newQuestions.push({ ...replacement, multiple: replacement.multiple || false });
            replacedCount++;
            console.log(`  ❌ [Bad] ${exam.id}: "${q.text.substring(0, 50)}" → "${replacement.text.substring(0, 50)}"`);
        } else if (usedTexts.has(key)) {
            // Duplicate - replace
            const replacement = nextBankQuestion();
            const repKey2 = replacement.text.toLowerCase().trim();
            if (usedTexts.has(repKey2)) {
                for (let i = 0; i < bank.length * 2; i++) {
                    const candidate = bank[(bankIndex + i) % bank.length];
                    if (!usedTexts.has(candidate.text.toLowerCase().trim())) {
                        replacement.text = candidate.text;
                        replacement.choices = candidate.choices;
                        replacement.correct = candidate.correct;
                        replacement.explanation = candidate.explanation;
                        bankIndex = (bankIndex + i + 1) % bank.length;
                        break;
                    }
                }
            }
            usedTexts.add(replacement.text.toLowerCase().trim());
            newQuestions.push({ ...replacement, multiple: replacement.multiple || false });
            dupCount++;
            console.log(`  ⚠️  [Dup] ${exam.id}: "${q.text.substring(0, 60)}"`);
        } else {
            usedTexts.add(key);
            newQuestions.push(q);
            keptCount++;
        }
    }
    newExams.push({ id: exam.id, title: exam.title, questions: newQuestions });
}

console.log(`\nReplaced: ${replacedCount} bad, ${dupCount} duplicates`);
console.log(`Kept: ${keptCount}`);

// ── Write entire file ──────────────────────────────────────────
console.log('\nWriting file...');
let content = '// mockExamsData.js\n// Based on Life in the UK Practice Tests #1, #2, #3 (provided PDFs)\n\nexport const mockExams = [\n';

for (let ei = 0; ei < newExams.length; ei++) {
    const ex = newExams[ei];
    content += '    {\n';
    content += `        id: ${JSON.stringify(ex.id)},\n`;
    content += `        title: ${JSON.stringify(ex.title)},\n`;
    content += '        questions: [\n';
    for (let qi = 0; qi < ex.questions.length; qi++) {
        const q = ex.questions[qi];
        content += '            ' + questionToJS(q);
        if (qi < ex.questions.length - 1) content += ',';
        content += '\n';
    }
    content += '        ]\n';
    content += '    }';
    if (ei < newExams.length - 1) content += ',';
    content += '\n';
}
content += '];\n';

fs.writeFileSync(mp, content, 'utf8');

// ── Validate ───────────────────────────────────────────────────
console.log('Validating...');
try {
    const check = await import(mp + '?t=' + Date.now());
    let totalQ = 0;
    let remainingBad = 0;
    let totalDups = 0;
    const seenTexts = new Set();
    for (const ex of check.mockExams) {
        if (ex && ex.questions) {
            totalQ += ex.questions.length;
            for (const q of ex.questions) {
                if (isBad(q.text)) remainingBad++;
                const k = q.text.toLowerCase().trim();
                if (seenTexts.has(k)) totalDups++;
                seenTexts.add(k);
            }
        }
    }
    console.log(`  ${check.mockExams.length} exams, ${totalQ} questions, ${seenTexts.size} unique`);
    if (remainingBad === 0) console.log('  ✅ No low-quality questions remain!');
    else console.log(`  ⚠️  ${remainingBad} low-quality questions still present`);
    if (totalDups === 0) console.log('  ✅ No duplicate questions remain!');
    else console.log(`  ⚠️  ${totalDups} duplicates still present`);

    if (remainingBad > 0) {
        for (const ex of check.mockExams) {
            for (const q of ex.questions) {
                if (isBad(q.text)) console.log(`     Remaining: "${q.text.substring(0, 70)}"`);
            }
        }
    }
} catch (err) {
    console.error('  ❌ Validation failed:', err.message);
    process.exit(1);
}
