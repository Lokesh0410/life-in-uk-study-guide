---
name: parse-mock-exams
description: >-
  Generates additional "Life in the UK" mock exams by parsing local PDFs from the Downloads folder and rewording them to avoid plagiarism.
---

# Parse Mock Exams

## Overview
This skill generates additional practice mock exams (e.g., exams 14-45) for the Life in the UK Study Guide application. It parses questions from the provided PDF question banks in the `~/Downloads` directory, slightly rewords them, and appends them securely to the `src/mockExamsData.js` file.

## Quick Start
"Please generate 10 more mock exams using PDFs 11 through 20." -> The agent will invoke this skill and run the script below.

## Utility Scripts

### Generate Exams Script
Location: `.agents/skills/parse-mock-exams/scripts/generate_exams.py`

This script parses a range of PDFs, shuffles and rewords the extracted questions, and generates a specified number of new mock exams (24 questions each) which are then automatically appended to `src/mockExamsData.js`.

**Requirements:**
- A python virtual environment with `PyPDF2` installed is required. If not present, the agent should create a temporary one (`python3 -m venv /tmp/venv && source /tmp/venv/bin/activate && pip install PyPDF2`).

**Usage:**
```bash
python3 .agents/skills/parse-mock-exams/scripts/generate_exams.py --start-exam <EXAM_START_ID> --num-exams <NUMBER_OF_EXAMS> --start-pdf <START_PDF_NUM> --end-pdf <END_PDF_NUM>
```

**Arguments:**
- `--start-exam`: The ID of the next exam to generate (e.g., if there are 13 exams, this should be `14`).
- `--num-exams`: How many new exams to generate (e.g., `10`).
- `--start-pdf`: The starting number for the PDFs in the `~/Downloads` folder (e.g., `11`).
- `--end-pdf`: The ending number for the PDFs (e.g., `20`).

**Example:**
To generate exams 14 through 23 from PDFs #11 through #20:
```bash
python3 .agents/skills/parse-mock-exams/scripts/generate_exams.py --start-exam 14 --num-exams 10 --start-pdf 11 --end-pdf 20
```

## Workflow

1. Determine how many exams currently exist in `mockExamsData.js` (e.g., 13).
2. Ask the user (or determine from their prompt) how many new exams they want (e.g., 10) and what range of PDFs to read from.
3. Run the Python script with the appropriate arguments.
4. Verify the `mockExamsData.js` file ends with the correct syntax `];`.
