# Deployment Guide for Vamo Fellowship Website

This guide will help you deploy your Vamo Fellowship website to your domain.

## Prerequisites

- A domain name (you mentioned you're in the process of buying one)
- A GitHub account (recommended for easy deployment)
- Node.js installed locally (for testing builds)

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest option and works great with Vite/React apps.

### Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and configure everything
   - Click "Deploy"

3. **Connect your domain:**
   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Add your domain (e.g., `vamofellowship.com`)
   - Follow Vercel's instructions to update your domain's DNS records
   - Usually you'll need to add a CNAME record pointing to Vercel

### Vercel automatically:
- Builds your site on every push to main
- Provides HTTPS
- Handles routing for React Router (already configured in `vercel.json`)

---

## Option 2: Deploy to Netlify

Netlify is another great option with similar ease of use.

### Steps:

1. **Push your code to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with your GitHub account
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Connect your domain:**
   - In your Netlify dashboard, go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Enter your domain
   - Follow Netlify's DNS instructions

### Netlify automatically:
- Builds on every push to main
- Provides HTTPS
- Handles routing (configured in `netlify.toml`)

---

## Option 3: Deploy to GitHub Pages

Free hosting directly from GitHub.

### Steps:

1. **Update vite.config.js:**
   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/YOUR_REPO_NAME/' // Add this if using GitHub Pages
   })
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add to package.json scripts:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Save

---

## Testing Your Build Locally

Before deploying, test that your build works:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to see your production build.

---

## Domain Setup

Once you have your domain:

1. **Get DNS instructions from your hosting provider** (Vercel/Netlify)
2. **Go to your domain registrar** (where you bought the domain)
3. **Update DNS records** as instructed:
   - Usually a CNAME record pointing to your hosting provider
   - Or A records with IP addresses (Vercel/Netlify will provide these)

### Common DNS Settings:

**For Vercel:**
- Type: CNAME
- Name: @ (or www)
- Value: cname.vercel-dns.com

**For Netlify:**
- Type: CNAME
- Name: @ (or www)
- Value: your-site.netlify.app

**Note:** DNS changes can take 24-48 hours to propagate, but usually happen within a few hours.

---

## Post-Deployment Checklist

- [ ] Test all "Apply now" buttons link to Typeform
- [ ] Test "Visit Vamo Talent" button links to vamo.xyz
- [ ] Test "Join the fellowship" button links to Typeform
- [ ] Verify all images load correctly
- [ ] Test on mobile devices
- [ ] Check that animations work smoothly
- [ ] Verify HTTPS is enabled (should be automatic)

---

## Need Help?

If you run into issues:
- Check the build logs in your hosting provider's dashboard
- Make sure all environment variables are set (if any)
- Verify your domain DNS settings are correct
- Test the build locally first with `npm run build`

