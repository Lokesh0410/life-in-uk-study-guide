#!/usr/bin/env node
/**
 * Parse Life in the UK Practice Test PDFs and generate clean mockExamsData.js
 */

const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

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

// Clean text - fix OCR artifacts
function cleanText(text) {
    if (!text) return '';
    return text
        .replace(/\bf\s+f/g, 'ff')
        .replace(/\bf\s+l/g, 'fl')
        .replace(/\bf\s+i/g, 'fi')
        .replace(/\s+/g, ' ')
        .replace(/af fect/g, 'affect')
        .replace(/ef fect/g, 'effect')
        .replace(/dif ferent/g, 'different')
        .replace(/of ficial/g, 'official')
        .replace(/Suf folk/g, 'Suffolk')
        .replace(/Nor folk/g, 'Norfolk')
        .replace(/Geof frey/g, 'Geoffrey')
        .trim();
}

// Parse questions from text
function parseQuestions(text) {
    const questions = [];
    const lines = text.split('\n').map(l => l.trim()).filter(l => l);

    let currentQ = null;
    let currentChoices = [];
    let inQuestion = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check for question start (e.g., "1. What is...")
        const qMatch = line.match(/^(\d+)\.\s+(.+)/);
        if (qMatch) {
            const qNum = parseInt(qMatch[1]);
            if (qNum <= 24) {
                // Save previous question
                if (currentQ && currentChoices.length >= 2) {
                    questions.push({
                        number: currentQ.number,
                        text: currentQ.text,
                        choices: currentChoices
                    });
                }
                currentQ = { number: qNum, text: qMatch[2] };
                currentChoices = [];
                inQuestion = true;
                continue;
            }
        }

        // Check for choice (e.g., "A. Wales")
        const choiceMatch = line.match(/^([A-D])\.\s+(.+)/);
        if (choiceMatch && inQuestion) {
            currentChoices.push(choiceMatch[2]);
            continue;
        }

        // Continue question text if no choice marker
        if (inQuestion && currentQ && !choiceMatch && currentChoices.length === 0 && line.length > 3) {
            currentQ.text += ' ' + line;
        }
    }

    // Don't forget the last question
    if (currentQ && currentChoices.length >= 2) {
        questions.push({
            number: currentQ.number,
            text: currentQ.text,
            choices: currentChoices
        });
    }

    return questions;
}

// Parse answers from text
function parseAnswers(text) {
    const answers = {};
    const lines = text.split('\n').map(l => l.trim()).filter(l => l);

    let currentNum = null;
    let currentAnswer = null;
    let currentExplanation = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check for answer number (e.g., "1.")
        const numMatch = line.match(/^(\d+)\.$/);
        if (numMatch) {
            // Save previous answer
            if (currentNum && currentAnswer) {
                answers[currentNum] = {
                    ...currentAnswer,
                    explanation: currentExplanation.join(' ')
                };
            }
            currentNum = parseInt(numMatch[1]);
            currentAnswer = null;
            currentExplanation = [];
            continue;
        }

        // Check for answer line (e.g., "A - Wales" or "A - France" followed by "D - England")
        const answerMatch = line.match(/^([A-D])\s*-\s*(.+)/);
        if (answerMatch && currentNum) {
            if (!currentAnswer) {
                currentAnswer = {
                    letter: answerMatch[1],
                    letters: [answerMatch[1]],
                    answerText: answerMatch[2]
                };
            } else {
                // Multiple choice answer
                currentAnswer.letters.push(answerMatch[1]);
            }
            continue;
        }

        // Explanation text
        if (currentAnswer && line.length > 10) {
            currentExplanation.push(line);
        }
    }

    // Don't forget the last answer
    if (currentNum && currentAnswer) {
        answers[currentNum] = {
            ...currentAnswer,
            explanation: currentExplanation.join(' ')
        };
    }

    return answers;
}

// Parse a single PDF
async function parsePdf(pdfPath, examNumber) {
    const dataBuffer = fs.readFileSync(pdfPath);
    const parser = new PDFParse(dataBuffer);
    const data = await parser.parse();
    const text = data.text;

    // Split at "Answers"
    const answersIndex = text.indexOf('Answers');
    if (answersIndex === -1) {
        console.error(`  No Answers section found`);
        return null;
    }

    const questionsText = text.substring(0, answersIndex);
    const answersText = text.substring(answersIndex);

    const questions = parseQuestions(questionsText);
    const answers = parseAnswers(answersText);

    // Merge
    const mergedQuestions = [];
    for (const q of questions) {
        const a = answers[q.number];
        if (!a) {
            console.warn(`  Missing answer for Q${q.number}`);
            continue;
        }

        // Calculate correct index
        let correct;
        let multiple = false;

        if (a.letters.length > 1) {
            multiple = true;
            correct = a.letters.map(l => l.charCodeAt(0) - 65);
        } else {
            correct = a.letter.charCodeAt(0) - 65;
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

// Main
async function main() {
    console.log('='.repeat(60));
    console.log('PDF to Mock Exams Parser');
    console.log('='.repeat(60));

    const pdfFiles = getPdfFiles();
    console.log(`Found ${pdfFiles.length} PDF files\n`);

    const allExams = [];

    for (const pdfFile of pdfFiles) {
        process.stdout.write(`Processing exam #${pdfFile.number}... `);
        try {
            const exam = await parsePdf(pdfFile.path, pdfFile.number);
            if (exam && exam.questions.length > 0) {
                console.log(`${exam.questions.length} questions`);
                allExams.push(exam);
            } else {
                console.log('FAILED');
            }
        } catch (err) {
            console.log(`ERROR: ${err.message}`);
        }
    }

    // Sort
    allExams.sort((a, b) => {
        const numA = parseInt(a.id.replace('exam', ''));
        const numB = parseInt(b.id.replace('exam', ''));
        return numA - numB;
    });

    const totalQuestions = allExams.reduce((sum, e) => sum + e.questions.length, 0);

    console.log('\n' + '='.repeat(60));
    console.log(`DONE: ${allExams.length} exams, ${totalQuestions} questions`);
    console.log('='.repeat(60));

    // Write output
    const output = `// Auto-generated from PDF practice tests - ${new Date().toISOString()}
// ${allExams.length} exams with ${totalQuestions} total questions

export const mockExams = ${JSON.stringify(allExams, null, 2)};
`;

    fs.writeFileSync(OUTPUT_PATH, output);
    console.log(`\nWritten to: ${OUTPUT_PATH}`);
}

main().catch(console.error);
