#!/bin/bash

READMES=("README.md" "README_EN.md" "README_JP.md")

# Find all numbered folders (pattern: number_name), sorted by number
folders=$(ls -d [0-9]*_* 2>/dev/null | sort -t_ -k1 -n)

for folder in $folders; do
  # Extract number and name parts
  number=$(echo "$folder" | grep -oE '^[0-9]+')
  name=$(echo "$folder" | sed "s/^${number}_//" | tr '_' ' ')

  for readme in "${READMES[@]}"; do
    # Check if this entry already exists in the README
    if ! grep -qE "^${number}\. " "$readme"; then
      echo "${number}. ${name}" >> "$readme"
      echo "Appended to ${readme}: ${number}. ${name}"
    fi
  done
done
