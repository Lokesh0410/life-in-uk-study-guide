#!/usr/bin/env node
/**
 * Script to fix corrupted mock exam data
 *
 * The corruption pattern:
 * - Questions have `correct: 0` but the actual correct answer is elsewhere
 * - Choices contain garbage values from other questions
 * - The explanation usually contains the correct answer
 *
 * This script:
 * 1. Reads the current mockExamsData.js
 * 2. Identifies corrupted questions
 * 3. Attempts to fix them by matching explanation to choices
 * 4. Outputs statistics and a fixed version
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the source file
const srcPath = path.join(__dirname, '../src/mockExamsData.js');
const content = fs.readFileSync(srcPath, 'utf-8');

// Parse the mockExams array
const match = content.match(/export const mockExams = (\[[\s\S]*?\]);/);
if (!match) {
    console.error('Could not find mockExams in file');
    process.exit(1);
}

// Use Function constructor to evaluate the array safely
let mockExams;
try {
    mockExams = (new Function('return ' + match[1]))();
} catch (e) {
    console.error('Failed to parse mockExams:', e.message);
    process.exit(1);
}

// Common garbage/filler values that indicate corruption
const GARBAGE_VALUES = new Set([
    'True', 'False', 'Islam', 'Judaism', 'Buddhism', 'Hinduism', 'Catholicism',
    'Protestantism', 'Anglican', 'Normans', 'Vikings', 'Romans', 'The Saxons',
    'Anglo-Saxons', 'Celts', 'Puritans', 'The Monarchy', 'Speaker', 'Parliament',
    'Football', 'Tennis', 'Rugby', 'Golf', 'Cricket', 'The House of Lords',
    'The House of Commons', 'South Africa', 'Australia', 'New Zealand', 'Ireland',
    'England', 'Scotland', 'Wales', 'Northern Ireland', 'Liverpool', 'Birmingham',
    'Henry VII', 'Henry VIII', 'Elizabeth I', 'James I', 'Oliver Cromwell',
    'Tony Blair', 'Margaret Thatcher', 'Winston Churchill', 'The Duke of Wellington',
    'Admiral Nelson', 'King John', 'Queen Victoria', 'Clement Attlee',
    'The Battle of Hastings', 'The Blitz', 'The Battle of Britain', 'D-Day',
    '4,000 years ago', '6,000 years ago', 'By AD 600', 'By AD 700',
    '£1,000', '£3,000', '£5,000', '5 years', '7 years',
    'St David\'s Day', 'The Prime Minister', 'The Supreme Court'
]);

// Function to normalize text for comparison
function normalize(text) {
    return text.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

// Function to find the best matching choice for an explanation
function findCorrectChoiceIndex(question) {
    const explanation = question.explanation || '';
    const explNorm = normalize(explanation);
    const choices = question.choices;

    let bestIdx = -1;
    let bestScore = 0;

    for (let i = 0; i < choices.length; i++) {
        const choice = choices[i];
        const choiceNorm = normalize(choice);

        // Skip garbage values at index 0 when checking
        if (i === 0 && GARBAGE_VALUES.has(choice)) continue;

        // Check various matching strategies
        let score = 0;

        // Strategy 1: Choice appears in explanation
        if (explNorm.includes(choiceNorm) && choiceNorm.length > 5) {
            score += choiceNorm.length * 2;
        }

        // Strategy 2: Explanation starts with choice
        if (explNorm.startsWith(choiceNorm.substring(0, Math.min(20, choiceNorm.length)))) {
            score += 50;
        }

        // Strategy 3: For "What is X?" questions, look for definitions
        if (question.text.startsWith('What is ')) {
            const subject = question.text.replace('What is ', '').replace('?', '').trim();
            if (explNorm.includes(normalize(subject)) && choiceNorm.length > 15) {
                score += 30;
            }
        }

        // Strategy 4: Choice is longer and more descriptive (not a garbage value)
        if (choice.length > 30 && !GARBAGE_VALUES.has(choice)) {
            score += 20;
        }

        if (score > bestScore) {
            bestScore = score;
            bestIdx = i;
        }
    }

    return bestIdx !== -1 ? bestIdx : question.correct;
}

// Check if a question appears corrupted
function isCorrupted(question) {
    if (question.multiple) return false; // Skip multiple choice for now

    const currentAnswer = question.choices[question.correct];
    const explanation = question.explanation || '';

    // Check if current answer is a garbage value but explanation suggests otherwise
    if (GARBAGE_VALUES.has(currentAnswer)) {
        // Check if any other choice matches the explanation better
        for (let i = 0; i < question.choices.length; i++) {
            if (i === question.correct) continue;
            const choice = question.choices[i];
            if (!GARBAGE_VALUES.has(choice) && choice.length > 10 &&
                normalize(explanation).includes(normalize(choice).substring(0, 20))) {
                return true;
            }
        }
    }

    // Check if first choice is garbage and marked as correct but explanation says otherwise
    if (question.correct === 0 && GARBAGE_VALUES.has(currentAnswer)) {
        const explNorm = normalize(explanation);
        for (let i = 1; i < question.choices.length; i++) {
            const choiceNorm = normalize(question.choices[i]);
            if (choiceNorm.length > 10 && explNorm.includes(choiceNorm.substring(0, Math.min(15, choiceNorm.length)))) {
                return true;
            }
        }
    }

    return false;
}

// Process all exams
console.log('='.repeat(80));
console.log('MOCK EXAM DATA CORRUPTION ANALYSIS');
console.log('='.repeat(80));

let totalQuestions = 0;
let corruptedCount = 0;
let fixedCount = 0;
const fixedExams = [];

for (const exam of mockExams) {
    console.log(`\n📚 ${exam.title}`);
    console.log('-'.repeat(60));

    let examCorrupted = 0;
    let examFixed = 0;
    const fixedQuestions = [];

    for (let i = 0; i < exam.questions.length; i++) {
        const q = exam.questions[i];
        totalQuestions++;

        if (isCorrupted(q)) {
            corruptedCount++;
            examCorrupted++;

            const originalCorrect = q.correct;
            const newCorrect = findCorrectChoiceIndex(q);

            if (newCorrect !== originalCorrect) {
                fixedCount++;
                examFixed++;
                console.log(`\n❌ Q${i + 1}: "${q.text.substring(0, 50)}..."`);
                console.log(`   Old: [${originalCorrect}] "${q.choices[originalCorrect]}"`);
                console.log(`   New: [${newCorrect}] "${q.choices[newCorrect]}"`);

                fixedQuestions.push({
                    ...q,
                    correct: newCorrect
                });
            } else {
                console.log(`\n⚠️  Q${i + 1}: Corrupted but couldn't auto-fix`);
                console.log(`   "${q.text.substring(0, 50)}..."`);
                fixedQuestions.push(q);
            }
        } else {
            fixedQuestions.push(q);
        }
    }

    if (examCorrupted === 0) {
        console.log('✅ No corruption detected');
    } else {
        console.log(`\nFixed ${examFixed}/${examCorrupted} corrupted questions`);
    }

    fixedExams.push({
        ...exam,
        questions: fixedQuestions
    });
}

console.log('\n' + '='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80));
console.log(`Total questions: ${totalQuestions}`);
console.log(`Corrupted: ${corruptedCount}`);
console.log(`Auto-fixed: ${fixedCount}`);
console.log(`Needs manual review: ${corruptedCount - fixedCount}`);

// Write fixed data to a new file
const outputPath = path.join(__dirname, '../src/mockExamsData_fixed.js');
const fixedContent = `// Fixed mock exams data - generated ${new Date().toISOString()}
export const mockExams = ${JSON.stringify(fixedExams, null, 2)};
`;

fs.writeFileSync(outputPath, fixedContent);
console.log(`\n✅ Fixed data written to: ${outputPath}`);
