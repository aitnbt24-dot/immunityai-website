# ImmunityAI Website - Deployment Guide

## 🚀 Quick Start

### Option 1: Deploy to Vercel (Recommended - 1 minute)

Vercel is the easiest way to deploy this React/Vite application with zero configuration.

#### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Framework: Select "Vite"
6. Click "Deploy"

**That's it!** Your site will be live at `yourname.vercel.app`

### Option 2: Deploy to Netlify (5 minutes)

#### Steps:
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect GitHub account
5. Select repository
6. Build command: `npm run build`
7. Publish directory: `dist`
8. Click "Deploy"

**Your site will be live at `yourname.netlify.app`**

---

## 🛠️ Local Development

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Setup
```bash
# Clone repository
git clone https://github.com/yourrepo/immunityai-website.git
cd immunityai-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in browser
```

### Build for Production
```bash
npm run build

# Preview production build locally
npm run preview
```

---

## 🐳 Docker Deployment

### Build and Run Locally
```bash
# Build Docker image
docker build -t immunityai-website .

# Run container
docker run -p 3000:3000 immunityai-website

# Access at http://localhost:3000
```

### Using Docker Compose
```bash
# Start service
docker-compose up -d

# Stop service
docker-compose down

# View logs
docker-compose logs -f
```

---

## ☁️ Cloud Deployment Options

### AWS (Amplify, CloudFront + S3)
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify project
amplify init

# Deploy
amplify publish
```

### Google Cloud (App Engine, Cloud Run)
```bash
# Install Google Cloud CLI
# https://cloud.google.com/sdk/docs/install

gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# Deploy to Cloud Run
gcloud run deploy immunityai-website \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create immunityai-website

# Deploy
git push heroku main

# Open app
heroku open
```

---

## 📋 Custom Domain Setup

### For Vercel
1. Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records (provided by Vercel)
4. Verify domain

### For Netlify
1. Settings → Domain Management
2. Add custom domain
3. Update DNS records
4. Automatic HTTPS provisioning

### DNS Configuration (General)
```
Type: CNAME/A Record
Name: www (or @)
Value: [provided by hosting]
TTL: 3600
```

---

## 🔒 Environment Variables

### Vercel
1. Settings → Environment Variables
2. Add key-value pairs
3. Redeploy to apply

### Netlify
1. Site settings → Build & deploy → Environment
2. Add variables
3. Trigger new deploy

### Local Development (.env.local)
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=ImmunityAI
```

---

## 🚨 Troubleshooting

### Build fails with "Module not found"
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- --port 3001
```

### Vercel deployment slow
- Check build logs in Vercel dashboard
- Ensure `npm ci` vs `npm install` (ci is faster)
- Verify node_modules isn't being uploaded

### 404 on refresh (SPA routing)
- **Vercel**: Automatically handled ✓
- **Netlify**: Use `netlify.toml` (already configured) ✓
- **Other**: Configure server to redirect `/` to `index.html`

---

## 📊 Performance Optimization

### Current Setup
- ✅ Vite for fast builds
- ✅ Code splitting enabled
- ✅ CSS minification
- ✅ Tree-shaking
- ✅ Lazy loading ready

### Further Optimization
```bash
# Analyze bundle size
npm install --save-dev vite-plugin-visualizer

# Build and analyze
npm run build
```

---

## 🔄 Continuous Deployment (CI/CD)

### GitHub Actions (Already configured)

The `.github/workflows/deploy.yml` file automatically:
1. Runs on push to `main`/`master`
2. Installs dependencies
3. Builds project
4. Deploys to Vercel (with secrets configured)

### Setup GitHub Secrets
1. Go to Settings → Secrets and variables → Actions
2. Add:
   - `VERCEL_TOKEN`: Get from Vercel account
   - `VERCEL_ORG_ID`: Vercel organization ID
   - `VERCEL_PROJECT_ID`: Vercel project ID

### Other CI/CD Platforms
- **GitLab CI**: Use `.gitlab-ci.yml`
- **Bitbucket Pipelines**: Use `bitbucket-pipelines.yml`
- **CircleCI**: Use `.circleci/config.yml`

---

## 📈 Monitoring & Analytics

### Add Google Analytics
```jsx
// In src/main.jsx
import ReactGA from 'react-ga4';
ReactGA.initialize('G-XXXXXXXXXX');
```

### Add Sentry for Error Tracking
```jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: process.env.NODE_ENV,
});
```

---

## 📝 Production Checklist

Before going live:
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Check all links work
- [ ] Verify contact form/CTA buttons
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Validate HTML/CSS
- [ ] Check SEO metadata
- [ ] Set up SSL/HTTPS
- [ ] Configure 404 page
- [ ] Set up error tracking (Sentry)
- [ ] Enable monitoring
- [ ] Backup database/content
- [ ] Document deployment process
- [ ] Set up regular backups

---

## 🆘 Support & Resources

### Documentation
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

### Quick Links
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Netlify App**: https://app.netlify.com
- **GitHub**: https://github.com

---

## 📞 Contact

**ImmunityAI Biotech**
- Email: jeffyang25@immunityai.com
- Website: https://immunityai-multilang.netlify.app
- Location: Changzhou, Jiangsu, China

---

## 📜 License & Credits

Created with React, Vite, and Tailwind CSS
© 2026 ImmunityAI · 金卓吉（常州）生物科技有限公司

---

**Last Updated**: March 2026
**Status**: ✅ Production Ready
