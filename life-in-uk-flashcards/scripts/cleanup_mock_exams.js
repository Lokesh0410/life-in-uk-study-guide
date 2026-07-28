// cleanup_mock_exams.js
// Replaces low-quality/hallucinated questions with quality ones from studyGuideData
// Usage: node scripts/cleanup_mock_exams.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function load() {
    const study = await import(path.resolve(__dirname, '../src/studyGuideData.js'));
    const exams = await import(path.resolve(__dirname, '../src/mockExamsData.js'));
    return { sections: study.sections, mockExams: exams.mockExams };
}

const BAD = [
    /^Identify which/i,
    /Identify which of these|Identify which of the following/i,
    /are associated with Identify which/i,
    /Mothering Sunday/i,
    /"Carry on"/i,
    /Nick Park/i,
    /Clifton Suspension Bridge/i,
    /longest straight distance on the mainland/i,
    /split the atom/i,
    /greatest Briton of all time/i,
    /77th Street/i,
    /London State University/i,
    /Nuclear Plant/i,
    /what country is swansea/i,
    /party won the General Election/i,
    /2010.*General Election/i,
    /what can 'carry on' be associated/i,
];

function isBad(text) {
    for (const p of BAD) { if (p.test(text)) return true; }
    return false;
}

function stripEmoji(s) {
    return s.replace(/[\u{1F300}-\u{1FAFF}]/gu, '').replace(/\s+/g, ' ').trim();
}

const POOL = [
    "Henry VIII", "Elizabeth I", "Queen Victoria", "King John", "Charles I",
    "Parliament", "The Supreme Court", "The Cabinet", "The House of Lords",
    "Scotland", "Wales", "Northern Ireland", "Ireland",
    "The House of Commons", "The Monarchy",
    "The Duke of Wellington", "Admiral Nelson", "Oliver Cromwell", "Sir Francis Drake",
    "Catholicism", "Protestantism", "Judaism",
    "1066", "1215", "1588", "1642", "1666", "1688", "1707", "1805", "1815",
    "1939", "1945", "1948", "1914", "1918",
    "True", "False",
    "5 years", "10 years", "3 years", "7 years",
    "5000", "2000", "10000", "3000",
    "Winston Churchill", "Margaret Thatcher", "Clement Attlee",
    "St Patrick's Day", "St Andrew's Day", "St David's Day",
    "The Blitz", "D-Day", "The Battle of Britain",
    "Canada", "Australia", "India", "South Africa",
    "Football", "Cricket", "Rugby", "Tennis",
];

function dist(correct) {
    const r = [];
    const cn = correct.toLowerCase().trim();
    for (const item of [...POOL].sort(() => Math.random() - 0.5)) {
        if (r.length >= 3) break;
        const n = item.toLowerCase().trim();
        if (n !== cn && !cn.includes(n) && !n.includes(cn)) r.push(item);
    }
    return r;
}

function yrDist(year) {
    const y = parseInt(year);
    const opts = new Set();
    for (const d of [y - 100, y - 50, y - 25, y - 10, y - 5, y + 5, y + 10, y + 25, y + 50, y + 100]) {
        if (d > 0 && d !== y && String(d).length === 4) opts.add(String(d));
        if (opts.size >= 3) break;
    }
    for (const p of ['1066', '1215', '1588', '1642', '1666', '1688', '1707', '1805', '1815', '1914', '1918', '1939', '1945', '1948']) {
        if (opts.size >= 3) break;
        if (p !== year) opts.add(p);
    }
    return [...opts].slice(0, 3);
}

function shuf(a) {
    const b = [...a];
    for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[b[i], b[j]] = [b[j], b[i]]; }
    return b;
}

function genBank(sections) {
    const bank = [];
    const seen = new Set();
    function add(q) {
        const k = q.text.toLowerCase().trim();
        if (!seen.has(k)) { seen.add(k); bank.push(q); }
    }
    for (const section of sections) {
        for (const card of section.cards) {
            const f = stripEmoji(card.front);
            const b = card.back;
            const bl = b.split('\n').map(l => stripEmoji(l)).filter(Boolean);
            const dm = f.match(/^(\d{4})\b/);
            if (dm) {
                const yr = dm[1];
                const ev = bl[0] || b;
                const d = yrDist(yr);
                if (d.length >= 3) {
                    add({ text: `In what year did ${ev.charAt(0).toLowerCase() + ev.slice(1)}?`.replace(/\.$/, ''), choices: shuf([yr, ...d]), correct: 0, explanation: (ev.endsWith('.') ? ev : ev + '.'), multiple: false });
                }
            }
            if (/^(What|Who|Where|Which)\s/i.test(f)) {
                const ans = bl[0] || b;
                const d = dist(ans);
                if (d.length >= 3) add({ text: f, choices: shuf([ans, ...d]), correct: 0, explanation: b, multiple: false });
            }
            if (bl.length >= 2) {
                for (const line of bl) {
                    const ci = line.indexOf(':');
                    if (ci > 0 && ci < 40 && line.length > ci + 2) {
                        const key = line.substring(0, ci).trim();
                        const val = line.substring(ci + 1).trim();
                        if (key.length > 2 && key.length < 50 && val.length > 2 && val.length < 100) {
                            const d = dist(val);
                            if (d.length >= 3) {
                                add({ text: `What ${key.endsWith('?') ? '' : 'is'} ${key}?`.replace('What  is', 'What').replace('What ?', 'What?'), choices: shuf([val, ...d]), correct: 0, explanation: b, multiple: false });
                            }
                        }
                    }
                }
            }
        }
    }
    return bank;
}

function qStr(q) {
    const t = JSON.stringify(q.text);
    const c = JSON.stringify(q.choices);
    const e = JSON.stringify(q.explanation);
    if (q.multiple) return `            { "text": ${t}, "choices": ${c}, "multiple": true, "correct": ${JSON.stringify(q.correct)}, "explanation": ${e} }`;
    return `            { "text": ${t}, "choices": ${c}, "multiple": false, "correct": ${q.correct}, "explanation": ${e} }`;
}

function extract(line) {
    const m = line.match(/"text":\s*"((?:[^"\\]|\\.)*)"/);
    return m ? m[1] : null;
}

async function main() {
    console.log('Loading...');
    const { sections, mockExams } = await load();
    const mp = path.resolve(__dirname, '../src/mockExamsData.js');

    console.log('Generating questions from study guide...');
    const bank = genBank(sections);
    console.log('  ' + bank.length + ' questions in bank');

    const existing = new Set();
    for (const ex of mockExams) for (const q of ex.questions) existing.add(q.text.toLowerCase().trim());
    const fresh = bank.filter(q => !existing.has(q.text.toLowerCase().trim()));
    console.log('  ' + fresh.length + ' fresh questions');

    console.log('\nScanning exams...');
    const lines = fs.readFileSync(mp, 'utf8').split('\n');
    const rep = [];
    const seen = new Map();

    for (let i = 0; i < lines.length; i++) {
        const t = extract(lines[i]);
        if (!t) continue;
        const k = t.toLowerCase().trim();
        if (isBad(t)) {
            rep.push({ idx: i, text: t });
            console.log('  BAD L' + (i + 1) + ': ' + t.substring(0, 60));
        } else if (seen.has(k)) {
            rep.push({ idx: i, text: t });
        } else {
            seen.set(k, true);
        }
    }

    console.log('\n' + rep.length + ' to replace');

    if (rep.length === 0) { console.log('Done.'); return; }

    const pool = fresh.length > 0 ? fresh : bank;
    const sorted = [...rep].sort((a, b) => b.idx - a.idx);
    let replaced = 0;

    for (const item of sorted) {
        const nq = pool[replaced % pool.length];
        if (!nq) continue;
        const nl = qStr(nq);
        lines[item.idx] = lines[item.idx].trimEnd().endsWith(',') ? nl + ',' : nl;
        replaced++;
    }

    fs.writeFileSync(mp, lines.join('\n'), 'utf8');
    console.log('Wrote ' + replaced + ' replacements');

    console.log('\nValidating...');
    const updated = await import(mp + '?t=' + Date.now());
    let total = 0, rem = 0;
    for (const ex of updated.mockExams) {
        if (ex && ex.questions) {
            total += ex.questions.length;
            for (const q of ex.questions) if (isBad(q.text)) rem++;
        }
    }
    console.log('  ' + updated.mockExams.length + ' exams, ' + total + ' questions');
    console.log(rem === 0 ? '  No low-quality remain!' : '  ' + rem + ' low-quality remain');
}

main().catch(console.error);
