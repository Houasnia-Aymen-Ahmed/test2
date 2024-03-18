import re
import os

# Define the regex patterns for matching the classes
patterns = {
    "horizontal": re.compile(r"(px|pl|pr|mx|ml|mr|w|right|left)-\[(\d*\.?\d+)px\]"),
    "vertical": re.compile(r"(py|pt|pb|my|mt|mb|h|top|bottom)-\[(\d*\.?\d+)px\]"),
}

# Define the conversion factors
conversion_factors = {"horizontal": 100 / 375, "vertical": 100 / 812}


# Function to convert classes to vw or vh
def convert_classes(match):
    direction, value = match.group(1), float(match.group(2))
    print("Direction:", direction)
    print("Value:", value)
    if direction in ["mx", "ml", "mr", "px", "pl", "pr", "w", "right", "left"]:
        side = "horizontal"
    elif direction in ["my", "mt", "mb", "py", "pt", "pb", "h", "top", "bottom"]:
        side = "vertical"

    converted_value = value * conversion_factors[side]
    return f"{direction}-[{converted_value:.4f}{'vw' if direction in ['mx', 'ml', 'mr', 'px', 'pl', 'pr', 'w', 'right', 'left'] else 'vh'}]"


# Function to replace classes in a string
def replace_classes_in_file(file_path):
    with open(file_path, "r") as file:
        content = file.read()
        for direction, pattern in patterns.items():
            content = re.sub(pattern, convert_classes, content)

    with open(file_path, "w") as file:
        file.write(content)


def replace_classes_in_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".vue"):
                file_path = os.path.join(root, file)
                replace_classes_in_file(file_path)
                print(f"Classes replaced successfully in {file_path}.")


# Provide the file path
src_directory = "test2\src"

# Replace classes in the file
replace_classes_in_directory(src_directory)


print("Classes replaced successfully in the file.")
