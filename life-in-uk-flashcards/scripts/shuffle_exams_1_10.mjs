#!/usr/bin/env node
// One-off script: shuffles the choice order (and remaps `correct`) for every
// question in exams 1-10, whose correct answer was always at index 0.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.join(__dirname, '../src/mockExamsData.js');

const content = fs.readFileSync(srcPath, 'utf-8');
const match = content.match(/export const mockExams = (\[[\s\S]*\]);/);
if (!match) {
    console.error('Could not find mockExams array');
    process.exit(1);
}
const mockExams = (new Function('return ' + match[1]))();

function shuffleQuestion(q, rng) {
    const n = q.choices.length;
    const indices = Array.from({ length: n }, (_, i) => i);
    // Fisher-Yates
    for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const newChoices = indices.map(i => q.choices[i]);
    // indices[newPos] = oldPos, so build oldPos -> newPos map
    const oldToNew = new Array(n);
    indices.forEach((oldPos, newPos) => { oldToNew[oldPos] = newPos; });

    let newCorrect;
    if (Array.isArray(q.correct)) {
        newCorrect = q.correct.map(oldIdx => oldToNew[oldIdx]).sort((a, b) => a - b);
    } else {
        newCorrect = oldToNew[q.correct];
    }
    return { ...q, choices: newChoices, correct: newCorrect };
}

// Simple seeded RNG for reproducibility
function mulberry32(seed) {
    return function () {
        seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

let totalShuffled = 0;
const distBefore = {};
const distAfter = {};

for (const exam of mockExams) {
    const examNum = parseInt(exam.id.replace('exam', ''), 10);
    if (examNum < 1 || examNum > 10) continue;

    exam.questions = exam.questions.map((q, idx) => {
        const before = Array.isArray(q.correct) ? q.correct[0] : q.correct;
        distBefore[before] = (distBefore[before] || 0) + 1;

        const rng = mulberry32(examNum * 1000 + idx);
        const shuffled = shuffleQuestion(q, rng);

        const after = Array.isArray(shuffled.correct) ? shuffled.correct[0] : shuffled.correct;
        distAfter[after] = (distAfter[after] || 0) + 1;
        totalShuffled++;
        return shuffled;
    });
}

console.log('Distribution before:', distBefore);
console.log('Distribution after:', distAfter);
console.log('Total questions shuffled:', totalShuffled);

const output = content.replace(
    /export const mockExams = \[[\s\S]*\];/,
    `export const mockExams = ${JSON.stringify(mockExams, null, 2)};`
);
fs.writeFileSync(srcPath, output);
console.log('Written to', srcPath);
