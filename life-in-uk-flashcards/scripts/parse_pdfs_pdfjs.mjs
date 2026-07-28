#!/usr/bin/env node
/**
 * Parse Life in the UK Practice Test PDFs using pdfjs-dist
 * and generate clean mockExamsData.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOWNLOADS_DIR = '/Users/loki/Downloads';
const OUTPUT_PATH = path.join(__dirname, '../src/mockExamsData.js');

// Get all practice test PDFs
function getPdfFiles() {
    const files = fs.readdirSync(DOWNLOADS_DIR);
    const pdfFiles = files
        .filter(f => f.includes('Life in the UK Test - Practice Test') && f.endsWith('.pdf'))
        .map(f => {
            const match = f.match(/#(\d+) of/);
            return {
                filename: f,
                number: match ? parseInt(match[1]) : 0,
                path: path.join(DOWNLOADS_DIR, f)
            };
        })
        .sort((a, b) => a.number - b.number);

    return pdfFiles;
}

// Clean text - fix OCR/PDF artifacts (ligatures like fi, fl, ff get split)
function cleanText(text) {
    if (!text) return '';
    return text
        // Fix split ligatures: "fl ag" -> "flag", "fi ghting" -> "fighting"
        .replace(/fl\s+/g, 'fl')
        .replace(/fi\s+/g, 'fi')
        .replace(/ff\s+/g, 'ff')
        // Also handle when the space is between f and the ligature letter
        .replace(/f\s+l/g, 'fl')
        .replace(/f\s+i/g, 'fi')
        .replace(/f\s+f/g, 'ff')
        // Common word fixes with spaces
        .replace(/Suf\s*folk/gi, 'Suffolk')
        .replace(/Nor\s*folk/gi, 'Norfolk')
        .replace(/af\s*fect/gi, 'affect')
        .replace(/ef\s*fect/gi, 'effect')
        .replace(/dif\s*ferent/gi, 'different')
        .replace(/of\s*ficial/gi, 'official')
        .replace(/of\s*fice/gi, 'office')
        .replace(/Geof\s*frey/gi, 'Geoffrey')
        .replace(/cof\s*fee/gi, 'coffee')
        .replace(/of\s*fer/gi, 'offer')
        .replace(/suf\s*fer/gi, 'suffer')
        .replace(/dif\s*ficult/gi, 'difficult')
        .replace(/ef\s*fort/gi, 'effort')
        .replace(/af\s*fair/gi, 'affair')
        .replace(/af\s*ford/gi, 'afford')
        .replace(/staf\s*f\b/gi, 'staff')
        // Fix double/triple spaces
        .replace(/\s+/g, ' ')
        .trim();
}

// Extract structured text from PDF page
async function extractPageItems(page) {
    const textContent = await page.getTextContent();
    // Filter out empty strings and join properly
    return textContent.items
        .map(item => item.str)
        .filter(s => s.trim() !== '');
}

// Parse a single PDF
async function parsePdf(pdfPath, examNumber) {
    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const doc = await getDocument({ data }).promise;

    const questions = [];
    const answers = {};

    // Process all pages
    let inAnswers = false;

    for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
        const page = await doc.getPage(pageNum);
        const items = await extractPageItems(page);

        // Check if we hit the Answers section
        const answersIdx = items.findIndex(s => s.trim() === 'Answers');
        if (answersIdx !== -1) {
            inAnswers = true;
        }

        if (!inAnswers) {
            // Parse questions
            parseQuestionsFromItems(items, questions);
        } else {
            // Parse answers
            parseAnswersFromItems(items, answers);
        }
    }

    // Merge questions with answers
    const mergedQuestions = [];

    for (const q of questions) {
        const a = answers[q.number];
        if (!a) {
            continue;
        }

        let correct;
        let multiple = false;

        if (a.letters.length > 1) {
            multiple = true;
            correct = a.letters.map(l => l.charCodeAt(0) - 65);
        } else {
            correct = a.letters[0].charCodeAt(0) - 65;
        }

        // Validate
        if (typeof correct === 'number' && (correct < 0 || correct >= q.choices.length)) {
            continue;
        }

        mergedQuestions.push({
            text: cleanText(q.text),
            choices: q.choices.map(c => cleanText(c)),
            multiple,
            correct,
            explanation: cleanText(a.explanation)
        });
    }

    return {
        id: `exam${examNumber}`,
        title: examNumber <= 3 ? `Mock Exam #${examNumber} (Full Test)` : `Practice Exam ${examNumber}`,
        questions: mergedQuestions
    };
}

// Parse questions from page items
function parseQuestionsFromItems(items, questions) {
    let i = 0;

    while (i < items.length) {
        // Look for question number pattern: "1." or "12."
        const numMatch = items[i].match(/^(\d+)\.$/);
        if (!numMatch) {
            i++;
            continue;
        }

        const qNum = parseInt(numMatch[1]);
        if (qNum < 1 || qNum > 24) {
            i++;
            continue;
        }

        i++; // move past the number

        // Collect question text until we hit "A."
        let questionText = '';
        while (i < items.length && items[i] !== 'A.') {
            questionText += items[i] + ' ';
            i++;
        }

        if (i >= items.length || items[i] !== 'A.') {
            continue;
        }

        // Now collect choices A, B, C, D
        const choices = [];
        const choiceLetters = ['A.', 'B.', 'C.', 'D.'];

        for (const letter of choiceLetters) {
            if (i >= items.length || items[i] !== letter) break;
            i++; // move past letter

            let choiceText = '';
            // Collect text until next letter or next question number
            while (i < items.length) {
                const next = items[i];
                // Stop if we hit next choice letter or next question number
                if (choiceLetters.includes(next) || /^\d+\.$/.test(next)) {
                    break;
                }
                // Stop if we hit page footer (date pattern or URL)
                if (/^\d{2}\/\d{2}\/\d{4}/.test(next) || next.includes('britizen.uk')) {
                    break;
                }
                choiceText += next + ' ';
                i++;
            }

            choices.push(choiceText.trim());
        }

        if (choices.length >= 2 && questionText.trim()) {
            // Check if question already exists (from previous page)
            const existing = questions.find(q => q.number === qNum);
            if (!existing) {
                questions.push({
                    number: qNum,
                    text: questionText.trim(),
                    choices: choices
                });
            }
        }
    }
}

// Parse answers from page items
function parseAnswersFromItems(items, answers) {
    let i = 0;

    while (i < items.length) {
        // Skip "Answers" header
        if (items[i] === 'Answers') {
            i++;
            continue;
        }

        // Look for answer number pattern: "1." or "12."
        const numMatch = items[i].match(/^(\d+)\.$/);
        if (!numMatch) {
            i++;
            continue;
        }

        const aNum = parseInt(numMatch[1]);
        if (aNum < 1 || aNum > 24) {
            i++;
            continue;
        }

        i++; // move past number

        // Collect answer letters (A, B, etc.) followed by "-"
        const letters = [];
        let answerText = '';

        while (i < items.length) {
            // Check for letter pattern: single letter A-D
            if (/^[A-D]$/.test(items[i])) {
                const letter = items[i];
                i++;

                // Expect "-" next
                if (i < items.length && items[i] === '-') {
                    i++;
                    letters.push(letter);

                    // Collect answer text until next letter or explanation starts
                    let text = '';
                    while (i < items.length) {
                        // Stop if we hit another answer letter pattern
                        if (/^[A-D]$/.test(items[i]) && i + 1 < items.length && items[i + 1] === '-') {
                            break;
                        }
                        // Stop if we hit a question number for next answer
                        if (/^\d+\.$/.test(items[i])) {
                            break;
                        }
                        // Stop if we hit page footer
                        if (/^\d{2}\/\d{2}\/\d{4}/.test(items[i]) || items[i].includes('britizen.uk')) {
                            break;
                        }
                        text += items[i] + ' ';
                        i++;
                    }
                    answerText = text.trim();
                } else {
                    // Not an answer pattern, continue
                    break;
                }
            } else {
                break;
            }
        }

        if (letters.length > 0) {
            // The answerText usually contains both the answer and explanation
            // First sentence is answer text, rest is explanation
            let explanation = answerText;

            // Already have this answer? Skip
            if (!answers[aNum]) {
                answers[aNum] = {
                    letters: letters,
                    explanation: explanation
                };
            }
        }
    }
}

// Main
async function main() {
    console.log('='.repeat(60));
    console.log('PDF to Mock Exams Parser (pdfjs-dist)');
    console.log('='.repeat(60));

    const pdfFiles = getPdfFiles();
    console.log(`Found ${pdfFiles.length} PDF files\n`);

    if (pdfFiles.length === 0) {
        console.log('No PDF files found.');
        return;
    }

    const allExams = [];

    for (const pdfFile of pdfFiles) {
        process.stdout.write(`Processing exam #${pdfFile.number}... `);
        try {
            const exam = await parsePdf(pdfFile.path, pdfFile.number);
            if (exam && exam.questions.length > 0) {
                console.log(`${exam.questions.length} questions`);
                allExams.push(exam);
            } else {
                console.log('FAILED (0 questions)');
            }
        } catch (err) {
            console.log(`ERROR: ${err.message}`);
        }
    }

    // Sort by exam number
    allExams.sort((a, b) => {
        const numA = parseInt(a.id.replace('exam', ''));
        const numB = parseInt(b.id.replace('exam', ''));
        return numA - numB;
    });

    const totalQuestions = allExams.reduce((sum, e) => sum + e.questions.length, 0);

    console.log('\n' + '='.repeat(60));
    console.log(`DONE: ${allExams.length} exams, ${totalQuestions} questions`);
    console.log('='.repeat(60));

    if (allExams.length === 0) {
        console.log('\nNo exams parsed successfully.');
        return;
    }

    // Write output
    const output = `// Auto-generated from PDF practice tests - ${new Date().toISOString()}
// ${allExams.length} exams with ${totalQuestions} total questions

export const mockExams = ${JSON.stringify(allExams, null, 2)};
`;

    fs.writeFileSync(OUTPUT_PATH, output);
    console.log(`\nWritten to: ${OUTPUT_PATH}`);
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
