#!/usr/bin/env node
/**
 * Parse all 45 "Life in the UK Test - Practice Test #N of 45" PDFs into
 * a fresh src/mockExamsData.js, with a `topic` tag on every question
 * matched against the section titles in src/studyGuideData.js.
 *
 * Uses pdf-parse v2 API: `import { PDFParse } from 'pdf-parse'` with
 * `new PDFParse({ data: buffer }).getText()`.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOWNLOADS_DIR = '/Users/loki/Downloads';
const OUTPUT_PATH = path.join(__dirname, '../src/mockExamsData.js');
const SCRATCH = '/private/tmp/claude-501/-Users-loki-Desktop-lifeinuk-life-in-uk-study-guide/4e4469ed-5811-41c1-b338-44920b0e90af/scratchpad';

// ── Load study guide sections for topic matching ───────────────────
const study = await import(path.resolve(__dirname, '../src/studyGuideData.js'));
const sections = study.sections;

function stripEmoji(s) {
    return s
        .replace(/[\u{1F300}-\u{1FAFF}\u{1F900}-\u{1F9FF}\u{2700}-\u{27BF}\u{2600}-\u{26FF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}️]/gu, '')
        .replace(/^\s*\d+\.\s*/, '')
        .replace(/\s+/g, ' ')
        .trim();
}

const TOPICS = sections.map(s => stripEmoji(s.title));

// Build a keyword bag per topic from its own cards (front+back text) to use for scoring.
const TOPIC_KEYWORDS = sections.map((s, idx) => {
    const words = new Set();
    for (const card of s.cards) {
        const text = (stripEmoji(card.front) + ' ' + card.back).toLowerCase();
        for (const w of text.match(/[a-z']{4,}/g) || []) {
            words.add(w);
        }
    }
    return { topic: TOPICS[idx], words };
});

// Manual keyword -> topic override rules (higher precision than bag-of-words for
// common Life in the UK test question categories). Checked in order; first match wins.
const RULES = [
    { topic: 'Justice System', kws: [/\bjudici/i, /\bjury\b/i, /\bmagistrat/i, /\bjustice of the peace/i, /\bcrown court/i, /\bsupreme court/i, /small claims/i, /\bsolicitor/i, /\bbarrister/i, /\bguilty\b/i, /\bcourt of appeal/i, /criminal record/i, /county court/i] },
    { topic: 'Legal System & Courts', kws: [/\bcourt\b/i, /sheriff court/i, /court of session/i, /coroner/i, /tribunal/i] },
    { topic: 'Government & Law', kws: [/\bpolice\b/i, /chief constable/i, /crime commissioner/i, /\blaw\b/i, /\blegislation\b/i, /\bact\b.*\d{4}/i, /human rights act/i, /rule of law/i] },
    { topic: 'Parliament & Government', kws: [/\bparliament\b/i, /house of commons/i, /house of lords/i, /\bmp\b/i, /\bspeaker\b/i, /\bcabinet\b/i, /prime minister/i, /general election/i, /\bconstituency\b/i, /devolved/i, /scottish parliament/i, /welsh assembly/i, /senedd/i, /stormont/i] },
    { topic: 'Elections & Voting', kws: [/\bvote\b/i, /\bvoting\b/i, /\bballot\b/i, /electoral/i, /suffragette/i, /right to vote/i, /franchise/i] },
    { topic: 'The Monarchy', kws: [/\bqueen\b/i, /\bking\b/i, /\bmonarch/i, /\bthrone\b/i, /royal family/i, /head of state/i, /coronation/i] },
    { topic: 'Local Government', kws: [/local council/i, /local government/i, /\bcouncillor/i, /council tax/i, /borough/i] },
    { topic: 'Taxation & Driving', kws: [/\btax\b/i, /\btaxes\b/i, /income tax/i, /\bvat\b/i, /driving licen/i, /\bmot\b/i, /car insurance/i, /road tax/i] },
    { topic: 'Human Rights & Equal Opportunities', kws: [/human rights/i, /equal opportunit/i, /discrimination/i, /equality act/i] },
    { topic: 'Migration & Citizenship', kws: [/permanent resident/i, /indefinite leave/i, /naturalisation/i, /citizenship ceremony/i, /settle in the uk/i, /visa\b/i, /home office/i] },
    { topic: 'Community & Citizenship', kws: [/voluntary work/i, /community life/i, /charity/i, /volunteer/i] },
    { topic: 'British Values', kws: [/british values/i, /tolerance/i, /individual liberty/i, /democracy\b/i] },
    { topic: 'British Values & Principles (Detailed)', kws: [/fundamental principles/i, /pledge\b/i] },
    { topic: 'Religion & Faith', kws: [/church of england/i, /church of scotland/i, /\bpope\b/i, /archbishop/i, /\bmuslim/i, /\bislam\b/i, /\bhindu/i, /\bsikh\b/i, /\bjewish\b/i, /\bjudaism/i, /\bbuddhis/i, /\bchristian/i, /\bcatholic/i, /\bprotestant/i, /\bpuritan/i, /\breligio/i, /\blent\b/i, /\beaster\b/i, /\bchristmas\b/i, /st patrick/i, /st andrew/i, /st david/i, /st george/i] },
    { topic: 'Symbols & Saints', kws: [/patron saint/i, /national flower/i, /national flag/i, /union flag/i, /union jack/i, /thistle/i, /daffodil/i, /shamrock\b/i, /\brose\b/i, /leek\b/i] },
    { topic: 'Customs & Traditions', kws: [/\btradition/i, /\bcustom\b/i, /remembrance day/i, /bonfire night/i, /guy fawkes/i, /halloween/i, /mother'?s day/i, /hogmanay/i] },
    { topic: 'Traditions & Holidays', kws: [/bank holiday/i, /public holiday/i, /new year/i, /boxing day/i] },
    { topic: 'Food & Leisure', kws: [/haggis/i, /\bpub\b/i, /\brestaurant/i, /national dish/i, /afternoon tea/i] },
    { topic: 'Sports & Icons', kws: [/\bcricket\b/i, /\bfootball\b/i, /\brugby\b/i, /the ashes/i, /olympic/i, /paralympic/i, /wimbledon/i, /\bgolf\b/i, /\btennis\b/i, /grand national/i, /six nations/i] },
    { topic: 'Arts & Science', kws: [/\bnewton\b/i, /gravity\b/i, /\bscientist/i, /\binvent/i, /\bdiscover/i] },
    { topic: 'British Inventions & Discoveries', kws: [/steam engine/i, /world wide web/i, /penicillin/i, /dna\b/i, /telephone\b/i, /television\b/i, /industrial revolution/i] },
    { topic: 'Literature & Writers', kws: [/shakespeare/i, /\bnovel\b/i, /\bpoet\b/i, /\bplaywright/i, /literature\b/i, /jane austen/i, /charles dickens/i, /robert burns/i] },
    { topic: 'Arts, Literature & Culture', kws: [/\bpainter/i, /\bartist\b/i, /\bmusic\b/i, /\bcomposer/i, /brit awards/i, /\btheatre\b/i, /\bfilm\b/i] },
    { topic: 'Places of Interest', kws: [/\bcastle\b/i, /\bcathedral\b/i, /world heritage/i, /national trust/i, /\bmuseum\b/i, /stonehenge/i, /ben nevis/i, /snowdonia/i] },
    { topic: 'Modern Society & Demographics', kws: [/\bcensus\b/i, /population of/i, /\bdemographic/i, /ethnic/i] },
    { topic: 'Everyday Life', kws: [/tv licen/i, /\bnhs\b/i, /national insurance/i, /\brent\b/i, /\bmortgage/i, /\bschool\b/i, /\buniversity\b/i, /\bgcse/i] },
    { topic: 'Britain & the World', kws: [/commonwealth/i, /european union/i, /\beu\b/i, /nato\b/i, /united nations/i, /council of europe/i, /overseas territor/i, /crown dependenc/i] },
    { topic: 'International Relations', kws: [/foreign polic/i, /\bbrexit\b/i, /security council/i] },
    { topic: 'The 4 Nations', kws: [/four nations/i, /\bwales\b/i, /\bscotland\b/i, /northern ireland/i, /\bengland\b/i, /crown dependenc/i, /channel island/i, /isle of man/i, /capital city/i] },
    { topic: 'Early Britain & Prehistory', kws: [/stone age/i, /bronze age/i, /iron age/i, /\bcelt/i, /prehistor/i] },
    { topic: 'Early History', kws: [/\bhadrian/i, /alfred the great/i, /\bviking/i, /danelaw/i, /domesday/i] },
    { topic: 'Roman Britain', kws: [/\broman\b/i, /\bromans\b/i, /hadrian's wall/i, /boudicca/i] },
    { topic: 'Anglo-Saxons & Vikings', kws: [/anglo.saxon/i, /\bjutes\b/i, /sutton hoo/i, /\bviking/i, /\bdane/i] },
    { topic: 'Norman Conquest & Middle Ages', kws: [/battle of hastings/i, /william the conqueror/i, /norman conquest/i, /magna carta/i, /black death/i, /peasants'? revolt/i, /wat tyler/i, /wars of the roses/i] },
    { topic: 'Middle Ages & Rights', kws: [/habeas corpus/i, /bill of rights/i, /glorious revolution/i] },
    { topic: 'Tudors & Stuarts', kws: [/henry viii/i, /elizabeth i\b/i, /spanish armada/i, /gunpowder plot/i, /guy fawkes/i, /english civil war/i, /oliver cromwell/i, /mary i\b/i, /bloody mary/i] },
    { topic: 'Tudors & Stuarts (Detailed)', kws: [/lady jane grey/i, /union of the crowns/i, /great fire of london/i, /great plague/i, /restoration\b/i] },
    { topic: 'Enlightenment & Empire', kws: [/enlightenment/i, /adam smith/i, /david hume/i, /isaac newton/i, /east india company/i, /industrial revolution/i, /slave trade/i, /abolition/i, /battle of trafalgar/i, /battle of waterloo/i, /napoleon/i] },
    { topic: 'Global Power & Empire', kws: [/british empire/i, /\bcolon/i, /commonwealth of nations/i] },
    { topic: 'The 20th Century', kws: [/first world war/i, /world war one/i, /world war two/i, /second world war/i, /\bthe blitz\b/i, /battle of britain/i, /d-day/i, /\bnhs\b/i, /aneurin bevan/i, /suffragette/i] },
    { topic: '20th Century & Modern Britain', kws: [/margaret thatcher/i, /winston churchill/i, /clement attlee/i, /tony blair/i, /devolution\b/i] },
    { topic: 'Key Dates & Quick Facts', kws: [/^when\b/i, /^what year/i, /^in what year/i] },
];

function scoreTopic(text) {
    for (const rule of RULES) {
        for (const kw of rule.kws) {
            if (kw.test(text)) return rule.topic;
        }
    }
    return null;
}

function bestBagOfWordsTopic(text) {
    const words = (text.toLowerCase().match(/[a-z']{4,}/g) || []);
    let best = null, bestScore = 0;
    for (const { topic, words: bag } of TOPIC_KEYWORDS) {
        let score = 0;
        for (const w of words) if (bag.has(w)) score++;
        if (score > bestScore) { bestScore = score; best = topic; }
    }
    return bestScore > 0 ? best : null;
}

function assignTopic(question) {
    const combined = `${question.text} ${question.choices.join(' ')} ${question.explanation}`;
    let topic = scoreTopic(combined);
    if (!topic) topic = bestBagOfWordsTopic(combined);
    if (!topic) topic = 'Key Dates & Quick Facts'; // safe fallback bucket
    if (!TOPICS.includes(topic)) topic = 'Key Dates & Quick Facts';
    return topic;
}

// ── PDF discovery ───────────────────────────────────────────────────
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

// ── Text cleanup ─────────────────────────────────────────────────────
function stripPageNoise(text) {
    return text
        // Remove footer lines like "11/04/2026, 12:12 \tLife in the UK Test - Practice Test #1 of 45 [Updated for 2026]"
        .replace(/^\d{2}\/\d{2}\/\d{4},\s*\d{2}:\d{2}\s*\t.*$/gm, '')
        // Remove URL footer lines
        .replace(/^https?:\/\/\S+\s+\d+\/\d+$/gm, '')
        // Remove page markers like "-- 1 of 13 --"
        .replace(/^--\s*\d+\s*of\s*\d+\s*--$/gm, '')
        .replace(/\r/g, '');
}

function cleanText(text) {
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

// ── Parse questions ──────────────────────────────────────────────────
function parseQuestions(text) {
    const questions = [];
    const questionPattern = /(\d+)\.\s+([^]*?)(?=\n\d+\.\s+|$)/g;
    let match;

    while ((match = questionPattern.exec(text)) !== null) {
        const qNum = parseInt(match[1]);
        const qContent = match[2].trim();
        if (qNum > 24) continue;

        // Choice markers (A./B./C./D.) always start at the beginning of a line
        // in the source PDFs. Matching "A." anywhere in the question text would
        // false-positive on things like "R. A. Butler" (initials), so require
        // it to be at a line start.
        const firstChoiceMatch = qContent.match(/(?:^|\n)A\.\s+/);
        if (!firstChoiceMatch) continue;
        const firstChoiceIndex = firstChoiceMatch.index + (firstChoiceMatch[0].startsWith('\n') ? 1 : 0);

        const questionText = qContent.substring(0, firstChoiceIndex).trim();
        const choicesText = qContent.substring(firstChoiceIndex);

        const choicePattern = /(?:^|\n)([A-D])\.\s+([^]*?)(?=\n[A-D]\.\s+|$)/g;
        const choices = [];
        let choiceMatch;
        while ((choiceMatch = choicePattern.exec(choicesText)) !== null) {
            choices.push(choiceMatch[2].trim().replace(/\n/g, ' '));
        }

        if (choices.length >= 2) {
            questions.push({ number: qNum, text: questionText, choices });
        }
    }
    return questions;
}

function parseAnswers(text) {
    const answers = [];
    // Split the answers text into per-question blocks: "N.\n<rest until next N.\n[A-D] ->"
    const blockPattern = /(\d+)\.\s*\n([\s\S]*?)(?=\n\d+\.\s*\n[A-D]\s*-|$)/g;

    let blockMatch;
    while ((blockMatch = blockPattern.exec(text)) !== null) {
        const num = parseInt(blockMatch[1]);
        if (num > 24) continue;
        const block = blockMatch[2];

        // Walk the block line by line. Lines matching "X - text" start a new
        // answer-choice entry; any following line that does NOT start a new
        // "[A-D] - " entry is a continuation (wrapped choice text) UNTIL we've
        // seen the choice line(s) followed by what is clearly explanation prose.
        // Heuristic: choice continuation lines are short (no sentence-ending
        // punctuation followed by end, and don't start mid-explanation). We use
        // a simpler and robust rule instead: a continuation line belongs to the
        // previous choice only if the accumulated choice text does not yet end
        // in terminal punctuation AND the line itself doesn't look like the
        // start of explanation prose (heuristically: explanation prose blocks
        // tend to be much longer / multi-sentence). To keep this deterministic
        // and correct for the observed PDF structure, we instead detect the
        // wrap-case directly: a bare continuation line is one that is followed
        // (after itself) by either another "[A-D] - " line or a blank/short
        // line, AND it does not itself contain a period followed by a capital
        // letter start (a strong sign of explanation prose).
        const lines = block.split('\n');
        const letters = [];
        const choiceTexts = {};
        let i = 0;
        let lastLetter = null;
        while (i < lines.length) {
            const line = lines[i];
            const m = line.match(/^([A-D])\s*-\s*(.*)$/);
            if (m) {
                lastLetter = m[1];
                letters.push(lastLetter);
                choiceTexts[lastLetter] = m[2].trim();
                i++;
                continue;
            }
            // Not a new letter line. Could be a wrapped continuation of the
            // previous choice's text, or the start of the explanation.
            if (lastLetter && line.trim() !== '') {
                const nextLine = lines[i + 1] || '';
                const nextIsLetter = /^[A-D]\s*-\s*/.test(nextLine);
                const looksLikeContinuation =
                    nextIsLetter && // only treat as continuation if a letter line follows immediately
                    line.trim().length < 60 &&
                    !/[.!?]$/.test(line.trim());
                if (looksLikeContinuation) {
                    choiceTexts[lastLetter] = (choiceTexts[lastLetter] + ' ' + line.trim()).trim();
                    i++;
                    continue;
                }
            }
            break; // remainder is explanation prose
        }
        const explanation = lines.slice(i).join('\n').trim();

        if (letters.length === 0) continue;
        if (letters.length >= 2) {
            answers.push({
                number: num,
                correctLetter: letters[0],
                correctLetters: letters,
                choiceTexts,
                explanation
            });
        } else {
            answers.push({ number: num, correctLetter: letters[0], choiceTexts, explanation });
        }
    }
    return answers;
}

// GARBAGE_VALUES / sanity heuristic reused from fix_mock_exams_data.mjs, used only
// to FLAG (not silently fix) potential answer-key mismatches for the report.
const GARBAGE_VALUES = new Set([
    'True', 'False', 'Islam', 'Judaism', 'Buddhism', 'Hinduism', 'Catholicism',
    'Protestantism', 'Anglican', 'Normans', 'Vikings', 'Romans', 'The Saxons',
    'Anglo-Saxons', 'Celts', 'Puritans', 'The Monarchy', 'Speaker', 'Parliament',
    'Football', 'Tennis', 'Rugby', 'Golf', 'Cricket', 'The House of Lords',
    'The House of Commons', 'South Africa', 'Australia', 'New Zealand', 'Ireland',
    'England', 'Scotland', 'Wales', 'Northern Ireland', 'Liverpool', 'Birmingham',
]);

function normalize(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

function flagPotentialMismatch(q, correctIdx) {
    // Heuristic sanity check: does the explanation clearly support a DIFFERENT
    // choice than the one marked correct? Only flag strong evidence, to avoid
    // false positives (we do NOT auto-correct, per task instructions).
    if (Array.isArray(correctIdx)) return null;
    const chosen = q.choices[correctIdx];
    const explNorm = normalize(q.explanation);
    const chosenNorm = normalize(chosen);
    if (chosenNorm.length > 3 && explNorm.includes(chosenNorm)) return null; // supported, fine

    for (let i = 0; i < q.choices.length; i++) {
        if (i === correctIdx) continue;
        const alt = q.choices[i];
        const altNorm = normalize(alt);
        if (altNorm.length > 8 && explNorm.includes(altNorm) && !GARBAGE_VALUES.has(chosen)) {
            return `Q "${q.text.slice(0, 60)}..." marked correct="${chosen}" but explanation seems to support "${alt}"`;
        }
    }
    return null;
}

// ── Parse a single PDF ────────────────────────────────────────────────
async function parsePdf(pdfPath, examNumber, mismatches) {
    const dataBuffer = fs.readFileSync(pdfPath);
    const parser = new PDFParse({ data: dataBuffer });
    const result = await parser.getText();
    await parser.destroy();
    const rawText = stripPageNoise(result.text);

    // Find the real "Answers" section header. Some question text itself contains
    // the word "Answers" (e.g. "Choose Two Answers"), so a naive indexOf() can
    // false-match mid-question. The real header is on its own line and is
    // immediately followed by "1." (the first answer entry).
    let answersIndex = -1;
    const headerPattern = /(?:^|\n)Answers\s*\n\s*1\.\s*\n/g;
    const headerMatch = headerPattern.exec(rawText);
    if (headerMatch) {
        answersIndex = headerMatch.index + headerMatch[0].indexOf('Answers');
    } else {
        // Fallback: last occurrence of standalone "Answers" line
        const lines = rawText.split('\n');
        let runningIdx = 0;
        for (const line of lines) {
            if (line.trim() === 'Answers') answersIndex = runningIdx;
            runningIdx += line.length + 1;
        }
    }
    if (answersIndex === -1) {
        console.error(`  Could not find Answers section in ${pdfPath}`);
        return null;
    }

    const questionsText = rawText.substring(0, answersIndex);
    const answersText = rawText.substring(answersIndex);

    const questions = parseQuestions(questionsText);
    const answers = parseAnswers(answersText);

    const mergedQuestions = [];
    const seenInExam = new Set();

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const a = answers.find(x => x.number === q.number);
        if (!a) {
            console.warn(`  Missing answer for Q${q.number} in exam ${examNumber}`);
            continue;
        }

        const correctLetter = a.correctLetter.toUpperCase();
        const correctIndex = correctLetter.charCodeAt(0) - 65;

        let correct = correctIndex;
        let multiple = false;
        if (a.correctLetters && a.correctLetters.length > 1) {
            multiple = true;
            correct = a.correctLetters.map(l => l.charCodeAt(0) - 65);
        }

        let explanation = cleanText(a.explanation || '');
        const text = cleanText(q.text);
        const choices = q.choices.map(c => cleanText(c));

        const key = text.toLowerCase().trim();
        if (seenInExam.has(key)) {
            console.warn(`  Duplicate question within exam ${examNumber}, skipping dup: "${text.slice(0, 50)}"`);
            continue;
        }
        seenInExam.add(key);

        const question = { text, choices, multiple, correct, explanation };

        // Strong structural check: does the answer key's own text for the
        // correct letter(s) actually match the corresponding parsed choice?
        // A mismatch here means the question's A-D choices and the answer
        // key's letter mapping got misaligned during parsing (real bug),
        // as opposed to the softer explanation-based heuristic below (which
        // is prone to false positives when the explanation just mentions
        // multiple choices as context).
        if (a.choiceTexts) {
            const letters = multiple ? a.correctLetters : [correctLetter];
            for (const letter of letters) {
                const idx = letter.charCodeAt(0) - 65;
                const keyText = normalize(cleanText(a.choiceTexts[letter] || ''));
                const parsedText = normalize(choices[idx] || '');
                if (keyText.length > 3 && parsedText.length > 3 && !parsedText.includes(keyText.slice(0, Math.min(15, keyText.length))) && !keyText.includes(parsedText.slice(0, Math.min(15, parsedText.length)))) {
                    mismatches.push(`exam${examNumber}: STRUCTURAL Q "${text.slice(0, 60)}..." answer key says ${letter}="${a.choiceTexts[letter]}" but parsed choice[${idx}]="${choices[idx]}"`);
                }
            }
        }

        if (!multiple) {
            const mismatch = flagPotentialMismatch(question, correct);
            if (mismatch) mismatches.push(`exam${examNumber}: SOFT ${mismatch}`);
        }

        question.topic = assignTopic(question);

        mergedQuestions.push(question);
    }

    return {
        id: `exam${examNumber}`,
        title: examNumber <= 3 ? `Mock Exam #${examNumber} (Full Test)` : `Practice Exam ${examNumber}`,
        questions: mergedQuestions
    };
}

// ── Main ──────────────────────────────────────────────────────────────
async function main() {
    console.log('='.repeat(60));
    console.log('PDF to Mock Exams Parser (all 45)');
    console.log('='.repeat(60));

    const pdfFiles = getPdfFiles();
    console.log(`Found ${pdfFiles.length} PDF files`);

    const allExams = [];
    const failures = [];
    const mismatches = [];

    for (const pdfFile of pdfFiles) {
        console.log(`\nProcessing: ${pdfFile.filename}`);
        try {
            const exam = await parsePdf(pdfFile.path, pdfFile.number, mismatches);
            if (exam && exam.questions.length === 24) {
                console.log(`  -> Extracted ${exam.questions.length} questions OK`);
                allExams.push(exam);
            } else if (exam) {
                console.warn(`  -> Only extracted ${exam.questions.length}/24 questions`);
                failures.push({ number: pdfFile.number, count: exam.questions.length });
                allExams.push(exam); // still keep it, report will flag
            } else {
                console.warn(`  -> Failed to extract questions entirely`);
                failures.push({ number: pdfFile.number, count: 0 });
            }
        } catch (err) {
            console.error(`  -> Error: ${err.message}`);
            failures.push({ number: pdfFile.number, count: 0, error: err.message });
        }
    }

    allExams.sort((a, b) => parseInt(a.id.replace('exam', '')) - parseInt(b.id.replace('exam', '')));

    const totalQuestions = allExams.reduce((sum, e) => sum + e.questions.length, 0);
    const topicTagged = allExams.reduce((sum, e) => sum + e.questions.filter(q => q.topic).length, 0);

    console.log('\n' + '='.repeat(60));
    console.log(`SUMMARY: ${allExams.length} exams, ${totalQuestions} questions, ${topicTagged} topic-tagged`);
    console.log(`Failures/short exams: ${JSON.stringify(failures)}`);
    console.log(`Potential answer mismatches flagged: ${mismatches.length}`);
    for (const m of mismatches) console.log('  MISMATCH: ' + m);
    console.log('='.repeat(60));

    const output = `// Auto-generated from PDF practice tests (all 45 official PDFs) - ${new Date().toISOString()}
// ${allExams.length} exams with ${totalQuestions} total questions
// Each question includes a topic tag matched against src/studyGuideData.js sections

export const mockExams = ${JSON.stringify(allExams, null, 2)};
`;

    fs.writeFileSync(OUTPUT_PATH, output);
    console.log(`\nWritten to: ${OUTPUT_PATH}`);

    // Write report data for later reference
    fs.writeFileSync(path.join(SCRATCH, 'parse_report.json'), JSON.stringify({ failures, mismatches, totalQuestions, examCount: allExams.length, topicTagged }, null, 2));
}

main().catch(err => { console.error(err); process.exit(1); });
