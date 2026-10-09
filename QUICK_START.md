# ⚡ Quick Start - 10 Minute Deployment

**TL;DR version for the impatient!**

---

## 3-Step Deployment

### Step 1: Create GitHub Repo (2 min)

```
1. Go to github.com/new
2. Name: splunkprov2-cookie-refresher
3. Click Create
4. Copy your HTTPS URL
```

### Step 2: Push Code (3 min)

```bash
cd splunkprov2-app
git init
git add .
git commit -m "v1.0"
git remote add origin YOUR_URL_HERE
git push -u origin main
```

### Step 3: Deploy to Railway (5 min)

```
1. Go to railway.app/dashboard
2. "New Project"
3. "Deploy from GitHub"
4. Pick your repo
5. Click Deploy
6. Wait 2 minutes
7. Copy your live URL
```

**Done!** Your app is live ✅

---

## Test It

```
1. Open your Railway URL
2. Paste Roblox cookie
3. Click Submit
4. See fresh cookie in 2-3 seconds
5. Toggle ON for account data
6. Copy cookie button
```

---

## Future Updates

```bash
# Make changes locally
git add .
git commit -m "Your changes"
git push origin main
# Railway auto-deploys!
```

---

## Your URL

```
https://splunkprov2-[random].up.railway.app
```

Share this! 🚀

---

## That's It!

For detailed help, see:
- `README.md` - Full documentation
- `GITHUB_RAILWAY_SETUP.md` - Step-by-step guide
- `DEPLOY_TO_RAILWAY.md` - Detailed deployment

---

**Need more info?** Check the full guides! Otherwise, you're done! 🎉
