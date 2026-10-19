import csv

INPUT_FILE = "naturalistic_story_sentence_rows_plus5q.csv"

NUMBER_OF_STORIES = 5

OUTPUT_FILE = f"latin_square_{NUMBER_OF_STORIES}stories_20groups.csv"


# -------------------------
# Read file
# -------------------------

with open(INPUT_FILE, "r", encoding="utf-8-sig") as file:
    reader = csv.DictReader(file)
    rows = list(reader)


# -------------------------
# Find all stories
# -------------------------

story_numbers = sorted(
    set(row["StoryNum"] for row in rows),
    key=int
)

if len(story_numbers) != 10:
    raise ValueError("Expected exactly 10 stories.")

if not 1 <= NUMBER_OF_STORIES <= 10:
    raise ValueError(
        "NUMBER_OF_STORIES must be between 1 and 10."
    )


# -------------------------
# Latin Square
# -------------------------

latin_square = [
    ["A", "B", "J", "C", "I", "D", "H", "E", "G", "F"],
    ["B", "C", "A", "D", "J", "E", "I", "F", "H", "G"],
    ["C", "D", "B", "E", "A", "F", "J", "G", "I", "H"],
    ["D", "E", "C", "F", "B", "G", "A", "H", "J", "I"],
    ["E", "F", "D", "G", "C", "H", "B", "I", "A", "J"],
    ["F", "G", "E", "H", "D", "I", "C", "J", "B", "A"],
    ["G", "H", "F", "I", "E", "J", "D", "A", "C", "B"],
    ["H", "I", "G", "J", "F", "A", "E", "B", "D", "C"],
    ["I", "J", "H", "A", "G", "B", "F", "C", "E", "D"],
    ["J", "A", "I", "B", "H", "C", "G", "D", "F", "E"]
]


# -------------------------
# Map A-J to StoryNum
# -------------------------

letters = "ABCDEFGHIJ"

story_map = dict(zip(letters, story_numbers))


# -------------------------
# Select first N rows
# -------------------------

selected_square = latin_square[:NUMBER_OF_STORIES]


# -------------------------
# First create original 10 lists
# -------------------------

original_lists = []

for column in range(10):

    selected_stories = []

    for latin_row in selected_square:

        letter = latin_row[column]

        story = story_map[letter]

        selected_stories.append(story)

    original_lists.append(selected_stories)


# -------------------------
# Add reversed 10 lists
# -------------------------

all_lists = []

# Groups 1-10: original
for story_list in original_lists:
    all_lists.append(story_list)

# Groups 11-20: reversed
for story_list in original_lists:
    all_lists.append(list(reversed(story_list)))


# -------------------------
# Show groups
# -------------------------

for group, story_list in enumerate(all_lists, start=1):

    print(
        f"Group {group}: {story_list}"
    )


# -------------------------
# Make output rows
# -------------------------

output_rows = []

for group, selected_stories in enumerate(
    all_lists,
    start=1
):

    # Position = story position within this list
    for position, story in enumerate(
        selected_stories,
        start=1
    ):

        for row in rows:

            if row["StoryNum"] == story:

                new_row = row.copy()

                new_row["group"] = group
                new_row["Position"] = position

                # Optional but useful:
                # tells us whether this is
                # original or reversed
                if group <= 10:
                    new_row["ListDirection"] = "Forward"
                else:
                    new_row["ListDirection"] = "Reverse"

                output_rows.append(new_row)


# -------------------------
# Save file
# -------------------------

columns = (
    ["group", "Position", "ListDirection"]
    + list(rows[0].keys())
)

with open(
    OUTPUT_FILE,
    "w",
    newline="",
    encoding="utf-8-sig"
) as file:

    writer = csv.DictWriter(
        file,
        fieldnames=columns
    )

    writer.writeheader()
    writer.writerows(output_rows)


print("Done!")