#!/bin/bash

# Define templates
REPOS=(
  "https://github.com/vechain/x-app-template.git x-app-template"
  "https://github.com/vechain/react-dapp-template.git react-dapp-template"
  "https://github.com/Agilulfo1820/react-dapp-template-with-dappkit.git react-dapp-template"
  "https://github.com/vechain/vechain-hardhat-template.git vechain-hardhat-template"
)

# Define the template folder name
TEMPLATES_DIR="templates"

# Check if the template folder exists
if [ -d "$TEMPLATES_DIR" ]; then
    # Remove the template folder and its contents
    echo "Removing existing template folder..."
    rm -rf "$TEMPLATES_DIR"
fi

# Recreate the template folder
echo "Creating new template folder..."
mkdir "$TEMPLATES_DIR"

# Cloning repositories
for repo in "${REPOS[@]}"; do
  url=$(echo "$repo" | cut -d ' ' -f 1)
  folder=$(echo "$repo" | cut -d ' ' -f 2)
  
  echo "Cloning repository $url into $TEMPLATES_DIR/$folder..."
  git clone "$url" "$TEMPLATES_DIR/$folder"
  
  echo "Removing .git folder from $TEMPLATES_DIR/$folder..."
  rm -rf "$TEMPLATES_DIR/$folder/.git"
done

echo "Templates correctly cloned!"
