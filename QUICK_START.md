# 🚀 DEPLOYMENT QUICK REFERENCE

## 5-Second Deploy (Recommended)

### Vercel (1-click)
```
1. Push code to GitHub
2. Go to vercel.com → "New Project"
3. Import GitHub repo
4. Click "Deploy"
5. ✅ Live at yourdomain.vercel.app
```

### Netlify (1-click)
```
1. Push code to GitHub
2. Go to netlify.com → "New site from Git"
3. Select repo & deploy settings
4. Click "Deploy"
5. ✅ Live at yourdomain.netlify.app
```

---

## Local Setup (2 minutes)

```bash
# Option A: Interactive Script
bash setup.sh

# Option B: Manual Setup
npm install
npm run dev
# Open http://localhost:3000
```

---

## Docker Deployment (Local Testing)

```bash
docker-compose up -d
# Open http://localhost:3000
```

---

## Production Build

```bash
npm install
npm run build
npm run preview
```

---

## Files Included

### Core Application
- ✅ `src/ImmunityAIWebsite.jsx` - Main component
- ✅ `src/App.jsx` - App wrapper
- ✅ `src/main.jsx` - Entry point
- ✅ `src/index.css` - Global styles
- ✅ `index.html` - HTML template

### Configuration
- ✅ `package.json` - Dependencies
- ✅ `vite.config.js` - Vite config
- ✅ `tailwind.config.js` - Tailwind config
- ✅ `postcss.config.js` - PostCSS config
- ✅ `.gitignore` - Git ignore rules

### Deployment Config
- ✅ `vercel.json` - Vercel settings
- ✅ `netlify.toml` - Netlify settings
- ✅ `Dockerfile` - Docker image
- ✅ `docker-compose.yml` - Docker Compose

### CI/CD
- ✅ `.github/workflows/deploy.yml` - GitHub Actions

### Documentation
- ✅ `README.md` - Project overview
- ✅ `DEPLOYMENT_GUIDE.md` - Full deployment guide
- ✅ `setup.sh` - Quick start script

---

## Environment Setup

### Required
- Node.js 16+ (get from nodejs.org)
- npm or yarn

### Optional
- Docker (for containerized deployment)
- GitHub account (for pushing code)
- Vercel account (for Vercel deployment)
- Netlify account (for Netlify deployment)

---

## Key Features

✅ **Fully Responsive** - Mobile, tablet, desktop
✅ **Dark Mode Biotech** - Professional aesthetic
✅ **Interactive Tabs** - Functional product selection
✅ **Technical Pipelines** - Development roadmap visualization
✅ **Procurement Services** - Partnership options
✅ **Team & Facilities** - Global presence
✅ **SEO Ready** - Meta tags, keywords
✅ **Fast** - Vite + optimized build
✅ **Secure** - No sensitive data in frontend
✅ **CI/CD Ready** - GitHub Actions configured

---

## Quick Commands

```bash
# Development
npm run dev              # Start dev server @ localhost:3000
npm run build           # Build for production
npm run preview         # Preview production build

# Deployment
vercel                  # Deploy to Vercel
netlify deploy --prod   # Deploy to Netlify

# Docker
docker-compose up -d    # Start container
docker-compose down     # Stop container
docker-compose logs -f  # View logs

# Utility
npm install            # Install dependencies
npm audit              # Security audit
```

---

## Deployment Checklist

Before going live:
- [ ] Code on GitHub
- [ ] All links working
- [ ] Mobile responsive
- [ ] Contact info updated
- [ ] SEO meta tags set
- [ ] Analytics configured
- [ ] Domain DNS configured
- [ ] SSL/HTTPS enabled
- [ ] Monitoring setup
- [ ] Backups configured

---

## Post-Deployment

### Verify Live Site
1. Visit deployment URL
2. Test all interactive elements
3. Check mobile view
4. Verify contact forms
5. Check analytics

### Monitor Performance
- Vercel Analytics Dashboard
- Netlify Analytics Dashboard
- Google Analytics (if added)
- Error tracking (if configured)

### Updates & Maintenance
```bash
# Update dependencies
npm update

# Security audit
npm audit fix

# Deploy changes
git push origin main
# Vercel/Netlify auto-deploys on push
```

---

## Support Resources

| Topic | Resource |
|-------|----------|
| **React** | https://react.dev |
| **Vite** | https://vitejs.dev |
| **Tailwind** | https://tailwindcss.com/docs |
| **Vercel** | https://vercel.com/docs |
| **Netlify** | https://docs.netlify.com |
| **Git** | https://git-scm.com/doc |

---

## Contact

**ImmunityAI Biotech**
- Email: jeffyang25@immunityai.com
- Website: https://immunityai-multilang.netlify.app
- Location: Changzhou, Jiangsu, China

---

**Version**: 2.0.0
**Date**: March 2026
**Status**: ✅ Production Ready

For detailed instructions, see `DEPLOYMENT_GUIDE.md`
