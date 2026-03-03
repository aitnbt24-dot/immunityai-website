#!/bin/bash

# ImmunityAI Website - GitHub Push Setup Script
# This script initializes git and helps push to GitHub

set -e

echo "🚀 ImmunityAI Website - GitHub Setup"
echo "===================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed${NC}"
    echo "Install from: https://git-scm.com/downloads"
    exit 1
fi

echo -e "${GREEN}✓${NC} Git found: $(git --version)"
echo ""

# Check if already a git repo
if [ -d ".git" ]; then
    echo -e "${YELLOW}⚠ This directory is already a Git repository${NC}"
    read -p "Continue with existing repo? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    echo -e "${BLUE}Initializing Git repository...${NC}"
    git init
    echo -e "${GREEN}✓${NC} Git repository initialized"
    echo ""
fi

# Configure git user (if not already set)
if [ -z "$(git config --global user.name)" ]; then
    echo -e "${BLUE}Configure Git user (global)${NC}"
    read -p "Your name: " git_name
    read -p "Your email: " git_email
    git config --global user.name "$git_name"
    git config --global user.email "$git_email"
    echo -e "${GREEN}✓${NC} Git user configured"
    echo ""
fi

# Show current git config
echo -e "${BLUE}Current Git Configuration:${NC}"
echo "Name:  $(git config --global user.name)"
echo "Email: $(git config --global user.email)"
echo ""

# Add all files
echo -e "${BLUE}Adding files to Git...${NC}"
git add .
echo -e "${GREEN}✓${NC} Files added"
echo ""

# Show status
echo -e "${BLUE}Git Status:${NC}"
git status
echo ""

# Create initial commit
read -p "Create initial commit? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Commit message (default: 'Initial commit'): " commit_msg
    commit_msg=${commit_msg:-"Initial commit - ImmunityAI Website v2"}
    git commit -m "$commit_msg"
    echo -e "${GREEN}✓${NC} Commit created"
    echo ""
fi

# GitHub instructions
echo -e "${YELLOW}════════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}NEXT STEPS - Push to GitHub${NC}"
echo -e "${YELLOW}════════════════════════════════════════════════════════════════${NC}"
echo ""
echo "1️⃣  Create a new repository on GitHub:"
echo "   • Go to https://github.com/new"
echo "   • Name: immunityai-website"
echo "   • Description: AI-driven vaccine adjuvant biotech company website"
echo "   • Choose: Public (for Vercel/Netlify auto-deploy)"
echo "   • DON'T initialize with README (we have one)"
echo "   • Click 'Create repository'"
echo ""
echo "2️⃣  Copy the repository URL from GitHub"
echo "   • Should look like: https://github.com/YOUR-USERNAME/immunityai-website.git"
echo ""
echo "3️⃣  Run these commands:"
echo ""
echo -e "${GREEN}git remote add origin https://github.com/YOUR-USERNAME/immunityai-website.git${NC}"
echo -e "${GREEN}git branch -M main${NC}"
echo -e "${GREEN}git push -u origin main${NC}"
echo ""
echo "4️⃣  Deploy to Vercel or Netlify:"
echo "   • Go to https://vercel.com (recommended)"
echo "   • Click 'New Project'"
echo "   • Import your GitHub repository"
echo "   • Click 'Deploy'"
echo ""
echo -e "${YELLOW}════════════════════════════════════════════════════════════════${NC}"
echo ""

# Ask if they want to continue
read -p "Do you want to push now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter your GitHub repository URL: " repo_url
    
    if [ -z "$repo_url" ]; then
        echo -e "${RED}❌ No URL provided${NC}"
        exit 1
    fi
    
    echo ""
    echo -e "${BLUE}Adding remote and pushing...${NC}"
    
    # Add remote
    if ! git remote | grep -q origin; then
        git remote add origin "$repo_url"
        echo -e "${GREEN}✓${NC} Remote added"
    else
        echo -e "${YELLOW}⚠ Remote already exists, updating...${NC}"
        git remote set-url origin "$repo_url"
        echo -e "${GREEN}✓${NC} Remote updated"
    fi
    
    # Rename branch to main if needed
    if [ "$(git rev-parse --abbrev-ref HEAD)" != "main" ]; then
        git branch -M main
        echo -e "${GREEN}✓${NC} Branch renamed to 'main'"
    fi
    
    echo ""
    echo -e "${BLUE}Pushing to GitHub...${NC}"
    git push -u origin main
    
    echo ""
    echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
    echo ""
    echo -e "${BLUE}Next Steps:${NC}"
    echo "1. Go to https://github.com/YOUR-USERNAME/immunityai-website"
    echo "2. Verify your code is there"
    echo "3. Go to https://vercel.com → New Project"
    echo "4. Import the repository"
    echo "5. Deploy!"
    echo ""
    echo -e "${GREEN}Your site will be live in ~2 minutes! 🚀${NC}"
    
else
    echo ""
    echo -e "${YELLOW}To push later, use:${NC}"
    echo "git remote add origin <YOUR-REPO-URL>"
    echo "git branch -M main"
    echo "git push -u origin main"
fi

echo ""
