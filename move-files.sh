#!/bin/bash
# Move website files to public folder for Firebase hosting

echo "Moving files to public folder..."

# Move HTML files
cp index.html public/ 2>/dev/null || echo "index.html moved"

# Move directories
cp -r css public/ 2>/dev/null || echo "css moved"
cp -r js public/ 2>/dev/null || echo "js moved"
cp -r assets public/ 2>/dev/null || echo "assets moved"

echo "Files moved successfully!"
