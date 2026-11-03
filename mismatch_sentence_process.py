import csv
import sys
from pathlib import Path

from openpyxl import load_workbook


def check_word_counts(input_file, output_file):
    workbook = load_workbook(input_file, read_only=True, data_only=True)
    mismatches = []
    checked = 0
    missing = 0

    try:
        for sheet in workbook:
            for sentence_num, sentence, recorded_count in sheet.iter_rows(
                min_row=2, max_col=3, values_only=True
            ):
                if not isinstance(sentence, str) or not sentence.strip():
                    continue
                if recorded_count is None or recorded_count == "":
                    missing += 1
                    continue

                actual_count = len(sentence.split())
                checked += 1
                if actual_count != recorded_count:
                    mismatches.append({
                        "storyname": sheet.title,
                        "sentence#": sentence_num,
                        "sentence_wordCT": actual_count,
                        "C_wordCT": recorded_count,
                        "sentence": sentence,
                    })
    finally:
        workbook.close()

    with open(output_file, "w", newline="", encoding="utf-8-sig") as file:
        writer = csv.DictWriter(file, fieldnames=[
            "storyname", "sentence#", "sentence_wordCT", "C_wordCT", "sentence"
        ])
        writer.writeheader()
        writer.writerows(mismatches)

    print(f"Checked {checked} sentences; found {len(mismatches)} mismatches.")
    print(f"Skipped {missing} sentences with missing column-C counts.")
    print(f"Saved: {output_file}")


if __name__ == "__main__":
    input_file = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).with_name("parsed-natural-stories.xlsx")
    output_file = Path(sys.argv[2]) if len(sys.argv) > 2 else input_file.with_name("word_count_mismatches.csv")
    check_word_counts(input_file, output_file)
