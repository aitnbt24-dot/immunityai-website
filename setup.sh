#!/bin/bash

# ImmunityAI Website - Quick Start Script
# This script automates the setup and deployment process

set -e

echo "🔬 ImmunityAI Website v2 - Quick Start"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org"
    exit 1
fi

echo -e "${GREEN}✓${NC} Node.js $(node -v) found"
echo ""

# Menu
echo -e "${BLUE}Choose deployment option:${NC}"
echo "1) Local Development (npm run dev)"
echo "2) Build for Production"
echo "3) Deploy to Vercel"
echo "4) Deploy to Netlify"
echo "5) Docker (Local)"
echo "6) Just install dependencies"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo -e "${YELLOW}Installing dependencies...${NC}"
        npm install
        echo ""
        echo -e "${GREEN}✓${NC} Starting dev server..."
        echo "📱 Open http://localhost:3000 in your browser"
        echo ""
        npm run dev
        ;;
    
    2)
        echo -e "${YELLOW}Installing dependencies...${NC}"
        npm install
        echo ""
        echo -e "${YELLOW}Building for production...${NC}"
        npm run build
        echo ""
        echo -e "${GREEN}✓${NC} Build complete!"
        echo "📁 Output: ./dist"
        echo "📊 To preview: npm run preview"
        ;;
    
    3)
        echo -e "${YELLOW}Setting up Vercel deployment...${NC}"
        if ! command -v vercel &> /dev/null; then
            echo "Installing Vercel CLI..."
            npm install -g vercel
        fi
        echo ""
        echo "🔗 Connecting to Vercel..."
        vercel
        ;;
    
    4)
        echo -e "${YELLOW}Setting up Netlify deployment...${NC}"
        if ! command -v netlify &> /dev/null; then
            echo "Installing Netlify CLI..."
            npm install -g netlify-cli
        fi
        echo ""
        echo "🔗 Connecting to Netlify..."
        netlify deploy --prod
        ;;
    
    5)
        if ! command -v docker &> /dev/null; then
            echo "❌ Docker is not installed. Please install it from https://docker.com"
            exit 1
        fi
        echo ""
        echo -e "${YELLOW}Building Docker image...${NC}"
        docker-compose up -d
        echo ""
        echo -e "${GREEN}✓${NC} Docker container started!"
        echo "📱 Open http://localhost:3000 in your browser"
        echo ""
        echo "Commands:"
        echo "  View logs: docker-compose logs -f"
        echo "  Stop: docker-compose down"
        ;;
    
    6)
        echo -e "${YELLOW}Installing dependencies...${NC}"
        npm install
        echo ""
        echo -e "${GREEN}✓${NC} Dependencies installed!"
        echo ""
        echo "Next steps:"
        echo "  npm run dev      → Start development server"
        echo "  npm run build    → Build for production"
        echo "  npm run preview  → Preview production build"
        ;;
    
    *)
        echo "❌ Invalid option. Please choose 1-6."
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}✓${NC} Setup complete!"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT_GUIDE.md"
echo "🌐 Visit: https://immunityai-multilang.netlify.app"
echo ""
