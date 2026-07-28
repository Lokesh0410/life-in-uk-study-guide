#!/usr/bin/env node
/**
 * Parse Life in the UK Practice Test PDFs and generate clean mockExamsData.js
 *
 * Each PDF has:
 * - 24 questions with 2-4 choices each
 * - Answers section with correct letter + explanation
 * - Format: "1." for question number, "A." for choice
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

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

// Parse a single PDF and extract questions
async function parsePdf(pdfPath, examNumber) {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    const text = data.text;

    // Split into questions and answers sections
    const answersIndex = text.indexOf('Answers');
    if (answersIndex === -1) {
        console.error(`Could not find Answers section in ${pdfPath}`);
        return null;
    }

    const questionsText = text.substring(0, answersIndex);
    const answersText = text.substring(answersIndex);

    // Parse questions
    const questions = parseQuestions(questionsText);

    // Parse answers
    const answers = parseAnswers(answersText);

    // Merge questions with answers
    const mergedQuestions = [];
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const a = answers[i];

        if (!a) {
            console.warn(`Missing answer for Q${i + 1} in exam ${examNumber}`);
            continue;
        }

        // Find the correct answer index
        const correctLetter = a.correctLetter.toUpperCase();
        const correctIndex = correctLetter.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3

        // Handle multiple choice (TWO answers)
        let correct = correctIndex;
        let multiple = false;

        if (a.correctLetters && a.correctLetters.length > 1) {
            multiple = true;
            correct = a.correctLetters.map(l => l.charCodeAt(0) - 65);
        }

        // Clean up explanation
        let explanation = a.explanation || '';
        // Fix common OCR issues
        explanation = cleanText(explanation);

        mergedQuestions.push({
            text: cleanText(q.text),
            choices: q.choices.map(c => cleanText(c)),
            multiple,
            correct,
            explanation
        });
    }

    return {
        id: `exam${examNumber}`,
        title: examNumber <= 3 ? `Mock Exam #${examNumber} (Full Test)` : `Practice Exam ${examNumber}`,
        questions: mergedQuestions
    };
}

// Parse questions from text
function parseQuestions(text) {
    const questions = [];

    // Split by question numbers (1., 2., etc.)
    const questionPattern = /(\d+)\.\s+([^]*?)(?=\d+\.\s+|$)/g;
    let match;

    while ((match = questionPattern.exec(text)) !== null) {
        const qNum = parseInt(match[1]);
        const qContent = match[2].trim();

        if (qNum > 24) continue; // Only 24 questions per test

        // Extract choices (A., B., C., D.)
        const choicePattern = /([A-D])\.\s+([^]*?)(?=[A-D]\.\s+|$)/g;
        const choices = [];
        let choiceMatch;

        // Find where choices start (first A.)
        const firstChoiceIndex = qContent.search(/\bA\.\s+/);
        if (firstChoiceIndex === -1) continue;

        const questionText = qContent.substring(0, firstChoiceIndex).trim();
        const choicesText = qContent.substring(firstChoiceIndex);

        while ((choiceMatch = choicePattern.exec(choicesText)) !== null) {
            choices.push(choiceMatch[2].trim());
        }

        if (choices.length >= 2) {
            questions.push({
                number: qNum,
                text: questionText,
                choices: choices
            });
        }
    }

    return questions;
}

// Parse answers from text
function parseAnswers(text) {
    const answers = [];

    // Pattern for single answers: "1.\nA - Answer text\nExplanation..."
    // Pattern for multiple answers: "16.\nA - France\nD - England\nExplanation..."
    const answerPattern = /(\d+)\.\s*\n([A-D])\s*-\s*([^\n]+)\n?((?:[A-D]\s*-\s*[^\n]+\n)?)([\s\S]*?)(?=\d+\.\s*\n[A-D]|$)/g;

    let match;
    while ((match = answerPattern.exec(text)) !== null) {
        const num = parseInt(match[1]);
        const letter1 = match[2];
        const answer1 = match[3].trim();
        const secondAnswer = match[4].trim();
        const explanation = match[5].trim();

        if (num > 24) continue;

        // Check for multiple choice
        if (secondAnswer) {
            const secondMatch = secondAnswer.match(/([A-D])\s*-\s*(.+)/);
            if (secondMatch) {
                answers.push({
                    number: num,
                    correctLetter: letter1,
                    correctLetters: [letter1, secondMatch[1]],
                    explanation
                });
                continue;
            }
        }

        answers.push({
            number: num,
            correctLetter: letter1,
            explanation
        });
    }

    return answers;
}

// Clean text - fix OCR artifacts
function cleanText(text) {
    return text
        // Fix "Suf folk" -> "Suffolk" type issues
        .replace(/\bf\s+f/g, 'ff')
        .replace(/\bf\s+l/g, 'fl')
        .replace(/\bf\s+i/g, 'fi')
        // Fix double spaces
        .replace(/\s+/g, ' ')
        // Fix common OCR issues
        .replace(/af fect/g, 'affect')
        .replace(/ef fect/g, 'effect')
        .replace(/dif ferent/g, 'different')
        .replace(/of ficial/g, 'official')
        .replace(/Suf folk/g, 'Suffolk')
        .replace(/Nor folk/g, 'Norfolk')
        .replace(/Geof frey/g, 'Geoffrey')
        // Trim
        .trim();
}

// Main function
async function main() {
    console.log('='.repeat(60));
    console.log('PDF to Mock Exams Parser');
    console.log('='.repeat(60));

    const pdfFiles = getPdfFiles();
    console.log(`Found ${pdfFiles.length} PDF files`);

    const allExams = [];

    for (const pdfFile of pdfFiles) {
        console.log(`\nProcessing: ${pdfFile.filename}`);
        try {
            const exam = await parsePdf(pdfFile.path, pdfFile.number);
            if (exam && exam.questions.length > 0) {
                console.log(`  -> Extracted ${exam.questions.length} questions`);
                allExams.push(exam);
            } else {
                console.warn(`  -> Failed to extract questions`);
            }
        } catch (err) {
            console.error(`  -> Error: ${err.message}`);
        }
    }

    // Sort by exam number
    allExams.sort((a, b) => {
        const numA = parseInt(a.id.replace('exam', ''));
        const numB = parseInt(b.id.replace('exam', ''));
        return numA - numB;
    });

    // Generate output
    const totalQuestions = allExams.reduce((sum, e) => sum + e.questions.length, 0);

    console.log('\n' + '='.repeat(60));
    console.log(`SUMMARY: ${allExams.length} exams, ${totalQuestions} questions`);
    console.log('='.repeat(60));

    // Write to file
    const output = `// Auto-generated from PDF practice tests - ${new Date().toISOString()}
// ${allExams.length} exams with ${totalQuestions} total questions

export const mockExams = ${JSON.stringify(allExams, null, 2)};
`;

    fs.writeFileSync(OUTPUT_PATH, output);
    console.log(`\nWritten to: ${OUTPUT_PATH}`);
}

main().catch(console.error);
