#!/bin/bash

# Define the template folder name
TEMPLATE_DIR="templates"

# Check if the template folder exists
if [ -d "$TEMPLATE_DIR" ]; then
    # Remove the template folder and its contents
    echo "Removing existing template folder..."
    rm -rf "$TEMPLATE_DIR"
fi

# Recreate the template folder
echo "Creating new template folder..."
mkdir "$TEMPLATE_DIR"

# Change to the template directory
cd "$TEMPLATE_DIR"

# Cloning x-app-template repository
echo "Cloning repository..."
git clone https://github.com/vechain/x-app-template.git x-app-template
cd x-app-template
rm -rf .git
cd ..

# Cloning react-dapp-template repository
echo "Cloning repository..."
git clone https://github.com/vechain/react-dapp-template.git react-dapp-template
cd react-dapp-template
rm -rf .git
cd ..

echo "Templates correctly cloned!"
