import os
import re
import json
import random
import argparse
from PyPDF2 import PdfReader

# Rewording logic
replacements = {
    r"\bWhat is known as\b": "Which of the following is referred to as",
    r"\bWhat is\b": "Which of the following is",
    r"\bWho was\b": "Which individual was",
    r"\bWhen did\b": "In what year did",
    r"\bWhich country's flag\b": "The flag of which country",
    r"\bWhy is it called\b": "For what reason is it known as",
    r"\bWhich of the events\b": "Which event",
    r"\bWhat does\b": "What exactly does",
    r"\bWhere is\b": "In which location is",
    r"\bHow many\b": "What is the total number of",
    r"\bWhich of these\b": "Identify which of these",
    r"\bWhat are\b": "Which of the following are",
    r"\bWho is\b": "Which person is",
    r"\bWhich of the following\b": "Identify which of the following"
}

def reword(text):
    for pattern, repl in replacements.items():
        text = re.sub(pattern, repl, text, flags=re.IGNORECASE)
    return text

def clean_spacing(text):
    # Regex to merge capitalized letter (excluding A, I) separated by space from the rest of the word
    text = re.sub(r'\b([B-HJ-Z])\s+([a-z]{2,})\b', r'\1\2', text)
    # Also handle I specifically followed by common UK words
    text = re.sub(r'\bI\s+(reland|rish|slam|slamic)\b', r'I\1', text, flags=re.IGNORECASE)
    # Common ligatures/spacing typos
    text = re.sub(r'\bT\s+est\b', 'Test', text, flags=re.IGNORECASE)
    text = re.sub(r'\bV\s+ote\b', 'Vote', text, flags=re.IGNORECASE)
    return text

def clean_text(text):
    # Normalize ligatures
    ligatures = {
        "\ufb00": "ff",
        "\ufb01": "fi",
        "\ufb02": "fl",
        "\ufb03": "ffi",
        "\ufb04": "ffl",
        "\ufb05": "ft",
        "\ufb06": "st",
        "W elsh": "Welsh",
        "T est": "Test",
        "MP ,": "MP,",
        "V ote": "Vote",
        "a\u00a0": "a ",
        " \u00a0": " ",
        "\u00a0": " "
    }
    for lig, rep in ligatures.items():
        text = text.replace(lig, rep)
        
    # Remove dates, URLs, and surrounding footer text
    text = re.sub(r'\d{1,2}/\d{1,2}/\d{4},?\s+\d{2}:\d{2}.*?https?://\S+', '', text)
    text = re.sub(r'\d{1,2}/\d{1,2}/\d{4},?\s+\d{2}:\d{2}.*', '', text)
    text = re.sub(r'https?://\S+', '', text)
    text = re.sub(r'Life in the UK Test - Practice Test.*', '', text)
    
    # Remove trailing page specs like "8/13" or "7/14"
    text = re.sub(r'\b\d+/\d+\b', '', text)
    
    # Remove single digits stuck to the end of a word (e.g., "law1" -> "law")
    text = re.sub(r'([a-zA-Z]{3,})\d+$', r'\1', text)
    
    # Remove trailing "Answers" or "Answer"
    text = re.sub(r'\bAnswers?$', '', text, flags=re.IGNORECASE)
    
    # Clean spacing typos (like "W ales" -> "Wales")
    text = clean_spacing(text)
    
    # Clean whitespace
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def parse_pdf(fpath):
    reader = PdfReader(fpath)
    full_text = ""
    for page in reader.pages:
        full_text += page.extract_text() + "\n"
        
    parts = re.split(r'\nAnswers\n|\nAnswers\s', full_text)
    if len(parts) < 2:
        parts = re.split(r'answers', full_text, flags=re.IGNORECASE)
        
    q_sec = parts[0]
    a_sec = parts[1] if len(parts) > 1 else ""
    
    q_blocks = re.split(r'\n(?=\d{1,2}\.\s)', "\n" + q_sec)
    parsed_questions = {}
    
    for qb in q_blocks:
        qb = qb.strip()
        if not qb: continue
        
        m = re.match(r'(\d{1,2})\.\s+(.*?)\n([A-D]\..*)', qb, re.DOTALL)
        if m:
            q_num = int(m.group(1))
            q_text = clean_text(m.group(2))
            choices_sec = m.group(3)
            
            choices = []
            choice_parts = re.split(r'\n(?=[A-D]\.\s)', "\n" + choices_sec)
            for cp in choice_parts:
                cp = cp.strip()
                if not cp: continue
                cm = re.match(r'([A-D])\.\s+(.*)', cp, re.DOTALL)
                if cm:
                    choices.append(clean_text(cm.group(2)))
            
            parsed_questions[q_num] = {
                "text": reword(q_text),
                "choices": choices,
                "multiple": False,
                "correct": None,
                "explanation": ""
            }

    a_blocks = re.split(r'\n(?=\d{1,2}\.\n)', "\n" + a_sec)
    for ab in a_blocks:
        ab = ab.strip()
        if not ab: continue
        
        lines = ab.split('\n')
        m_num = re.match(r'(\d{1,2})\.', lines[0])
        if not m_num:
            continue
        
        q_num = int(m_num.group(1))
        if q_num not in parsed_questions:
            continue
            
        correct_letters = []
        explanation_lines = []
        
        for line in lines[1:]:
            line_str = line.strip()
            if not line_str: continue
            
            letter_match = re.match(r'^([A-D])\s*[-–.]\s*(.*)', line_str)
            if letter_match:
                correct_letters.append(letter_match.group(1))
            else:
                explanation_lines.append(line_str)
                
        q_data = parsed_questions[q_num]
        choices = q_data["choices"]
        correct_indices = []
        
        for letter in correct_letters:
            idx = ord(letter) - ord('A')
            if idx < len(choices):
                correct_indices.append(idx)
                
        # Handle multiple choices
        if len(correct_indices) > 1 or "two" in q_data["text"].lower() or "choose two" in q_data["text"].lower() or "select two" in q_data["text"].lower():
            q_data["multiple"] = True
            q_data["correct"] = correct_indices if len(correct_indices) > 1 else ([correct_indices[0], (correct_indices[0]+1)%len(choices)] if correct_indices else [0, 1])
        else:
            q_data["multiple"] = False
            q_data["correct"] = correct_indices[0] if correct_indices else 0
            
        q_data["explanation"] = clean_text(" ".join(explanation_lines))
        
    return list(parsed_questions.values())

def main():
    parser = argparse.ArgumentParser(description="Generate new mock exams from PDFs.")
    parser.add_argument("--start-exam", type=int, required=True, help="Exam ID to start generating from (e.g., 14).")
    parser.add_argument("--num-exams", type=int, required=True, help="Number of exams to generate.")
    parser.add_argument("--start-pdf", type=int, required=True, help="First PDF number to read from (e.g., 11).")
    parser.add_argument("--end-pdf", type=int, required=True, help="Last PDF number to read from (e.g., 20).")
    args = parser.parse_args()

    pdf_dir = '/Users/loki/Downloads'
    js_file = '/Users/loki/Desktop/lifeinuk/life-in-uk-study-guide/life-in-uk-flashcards/src/mockExamsData.js'

    all_questions = []
    for i in range(args.start_pdf, args.end_pdf + 1):
        fpath = os.path.join(pdf_dir, f"Life in the UK Test - Practice Test #{i} of 45 [Updated for 2026].pdf")
        if os.path.exists(fpath):
            all_questions.extend(parse_pdf(fpath))

    print(f"Extracted {len(all_questions)} valid questions from PDFs #{args.start_pdf} to #{args.end_pdf}.")
    
    if len(all_questions) == 0:
        print("No questions found. Exiting.")
        return

    random.shuffle(all_questions)

    new_exams = []
    q_idx = 0
    for e in range(args.start_exam, args.start_exam + args.num_exams):
        exam_qs = all_questions[q_idx:q_idx+24]
        q_idx += 24
        if len(exam_qs) < 24:
            exam_qs += all_questions[:24-len(exam_qs)]
            
        new_exams.append({
            "id": f"exam{e}",
            "title": f"Practice Exam {e}",
            "questions": exam_qs
        })

    with open(js_file, 'r') as f:
        js_content = f.read()

    # Match first exam4 instance (quoted or unquoted ID key)
    parts = re.split(r'\{\s*[\'"]?id[\'"]?\s*:\s*[\'"]exam4[\'"]', js_content)
    base_js = parts[0].rstrip().rstrip(',')
    if base_js.endswith(']'):
        base_js = base_js[:-1].strip()

    new_exams_str = ",\n" + ",\n".join(json.dumps(exam, indent=4) for exam in new_exams)
    new_exams_str = new_exams_str.replace('"id":', 'id:').replace('"title":', 'title:').replace('"questions":', 'questions:')

    final_js = base_js + new_exams_str + "\n];\n"

    with open(js_file, 'w') as f:
        f.write(final_js)

    print(f"Successfully appended {args.num_exams} new exams (up to exam {args.start_exam + args.num_exams - 1}).")

if __name__ == "__main__":
    main()
