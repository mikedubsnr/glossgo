#!/bin/bash
# Setup script for GlossGo - run this after extracting the ZIP

echo "Setting up GlossGo..."

# Navigate to project directory
cd "$(dirname "$0")"

# Install dependencies and generate package-lock.json
echo "Installing dependencies..."
npm install

# Initialize git if not already done
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
fi

echo "Setup complete!"
echo ""
echo "Next steps:"
echo "1. git add ."
echo "2. git commit -m 'Initial commit'"
echo "3. git remote add origin https://github.com/YOUR_USERNAME/glossgo.git"
echo "4. git push -u origin main"
