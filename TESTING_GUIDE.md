# 🧪 SplunkProV2 Testing Guide

Complete testing procedures for all features.

---

## Prerequisites for Testing

✅ Valid Roblox account  
✅ Access to Roblox cookies  
✅ Discord account (for webhook testing)  
✅ Browser with F12 dev tools  

---

## How to Get a Roblox Cookie

### Method 1: From Browser

1. Log in to Roblox.com
2. Press F12 (Developer Tools)
3. Go to "Application" tab
4. Left sidebar → "Cookies" → "https://www.roblox.com"
5. Find ".ROBLOSECURITY"
6. Right-click → Copy value
7. This is your cookie!

### Method 2: From Incognito

- Open incognito window
- Log in to Roblox
- Get cookie from there
- Use for testing

---

## Test 1: UI Loading

**Expected:** Page loads with proper styling

### Steps
1. Open your Railway URL
2. Wait for page to load
3. Verify you see:
   - ✅ 🛡️ Shield icon (animated, blue glow)
   - ✅ "SplunkProV2" title (blue gradient)
   - ✅ "Cookie Refresher" subtitle
   - ✅ Textarea for cookie input
   - ✅ "Show Account Data" toggle (OFF state)
   - ✅ "Submit" button (blue)
   - ✅ "Clear" button (gray)
   - ✅ Result box (hidden initially)

**Status:** ✅ PASS / ❌ FAIL

---

## Test 2: Textarea Functionality

**Expected:** Textarea accepts input and clears properly

### Steps
1. Click textarea
2. Paste Roblox cookie
3. Verify cookie appears in textarea
4. Click "Clear" button
5. Verify textarea is empty and result box hidden

**Status:** ✅ PASS / ❌ FAIL

---

## Test 3: Toggle Switch

**Expected:** Toggle switches state on/off

### Steps
1. Click toggle switch (should be OFF)
2. Verify toggle moves to ON position (visual feedback)
3. Toggle should have blue gradient background when ON
4. Click toggle again
5. Verify toggle moves to OFF position (gray background)

**Status:** ✅ PASS / ❌ FAIL

---

## Test 4: Form Validation

**Expected:** Form requires cookie before submission

### Steps
1. Leave textarea empty
2. Click "Submit" button
3. Verify error message: "Error: Cookie required"
4. Enter cookie
5. Click Submit
6. Processing should start

**Status:** ✅ PASS / ❌ FAIL

---

## Test 5: Logout All Devices

**Expected:** Backend successfully logs out all devices

### Steps
1. Paste valid cookie
2. Toggle OFF (don't need account data)
3. Click Submit
4. Verify loading spinner appears
5. Wait 2-3 seconds
6. Verify success message appears

**What's happening:**
- Backend calls: `POST https://auth.roblox.com/v2/logout`
- Invalidates cookie on all devices
- Gets CSRF token for refresh

**Status:** ✅ PASS / ❌ FAIL

---

## Test 6: Cookie Refresh

**Expected:** Fresh cookie is generated

### Steps
1. Paste valid cookie
2. Toggle OFF
3. Click Submit
4. Wait for success message
5. Verify fresh cookie appears in green box
6. Copy the cookie (it should be different from original)
7. Can verify: original cookie won't work anymore (tested elsewhere)

**Cookie box should show:**
- Background: Dark with blue border
- Text: Green monospace font
- Content: Long string starting with `.ROBLOSECURITY=`

**Status:** ✅ PASS / ❌ FAIL

---

## Test 7: Copy Cookie Button

**Expected:** Clicking "Copy Cookie" copies to clipboard

### Steps
1. Generate fresh cookie
2. Click "Copy Cookie" button
3. Button text changes to "Copied" (green)
4. Text reverts to "Copy Cookie" after 2 seconds
5. Try pasting in notepad: `Ctrl+V`
6. Verify cookie is in clipboard

**Status:** ✅ PASS / ❌ FAIL

---

## Test 8: Account Data Toggle OFF

**Expected:** Only cookie shown when toggle is OFF

### Steps
1. Paste valid cookie
2. Ensure toggle is OFF (gray)
3. Click Submit
4. Wait for result
5. Verify result shows:
   - ✅ Success message
   - ✅ Fresh cookie in green box
   - ✅ "Copy Cookie" button
   - ❌ NO avatar image
   - ❌ NO account info grid
   - ❌ NO Username/Display/ID/Robux/Groups fields

**Status:** ✅ PASS / ❌ FAIL

---

## Test 9: Account Data Toggle ON

**Expected:** Account data shown when toggle is ON

### Steps
1. Paste valid cookie
2. Click toggle to ON (blue gradient)
3. Click Submit
4. Wait for result (may take 3-4 seconds due to API calls)
5. Verify result shows:
   - ✅ Success message
   - ✅ Fresh cookie in green box
   - ✅ Avatar thumbnail (your Roblox character)
   - ✅ Account Info Grid with 6 items:
     * Username (your username)
     * Display (your display name)
     * User ID (numeric ID)
     * Robux (balance - may be 0)
     * Groups (number of groups you're in)
     * Status (says "All Devices Logged Out")
   - ✅ "Copy Cookie" button

**Expected values example:**
```
Username: YourUsername
Display: YourDisplayName
User ID: 123456789
Robux: 50000
Groups: 5
Status: All Devices Logged Out
```

**Status:** ✅ PASS / ❌ FAIL

---

## Test 10: Avatar Display

**Expected:** Avatar image loads correctly

### Steps
1. Toggle ON
2. Click Submit
3. Wait for avatar to load
4. Verify:
   - ✅ Avatar shows (your Roblox character)
   - ✅ Square image (352x352)
   - ✅ Blue border around it
   - ✅ Properly centered

**Note:** If avatar doesn't load, it's okay (API may throttle). Error handled gracefully.

**Status:** ✅ PASS / ❌ FAIL

---

## Test 11: Error Handling - Invalid Cookie

**Expected:** Graceful error when cookie is invalid

### Steps
1. Paste random/invalid cookie (make something up)
2. Click Submit
3. Wait 2-3 seconds
4. Verify error message appears
5. Error box has red styling
6. Error text readable
7. Can try again (paste new cookie, submit)

**Expected error:** "Error: Invalid cookie" or "Error: Failed to..."

**Status:** ✅ PASS / ❌ FAIL

---

## Test 12: Error Handling - Expired Cookie

**Expected:** Expired cookies handled properly

### Steps
1. Use old/expired cookie
2. Click Submit
3. Wait for result
4. Should show error
5. Error message clear and actionable

**Status:** ✅ PASS / ❌ FAIL

---

## Test 13: Loading State

**Expected:** Loading spinner shows during processing

### Steps
1. Paste cookie
2. Click Submit
3. **Immediately** check result box
4. Verify:
   - ✅ Loading spinner appears (animated circle)
   - ✅ Text: "Processing..."
   - ✅ Loading box has blue styling
   - ✅ Spinner animates smoothly

**Status:** ✅ PASS / ❌ FAIL

---

## Test 14: Discord Webhook

**Expected:** Message sent to Discord when account data is shown

### Steps
1. Have Discord open to your webhook channel
2. Paste cookie
3. Toggle ON (important! Webhook only sends if data is fetched)
4. Click Submit
5. Wait for success
6. Check Discord channel
7. Verify message appears with:
   - ✅ Embed 1 (blue):
     * Title: "🛡️ YourUsername"
     * Description: "Cookie Refreshed"
     * Thumbnail: Your avatar
     * Fields: ID, Robux, Groups
   - ✅ Embed 2 (black):
     * Title: "Status"
     * Description: "All Devices Logged Out - Fresh Cookie Ready"

**Status:** ✅ PASS / ❌ FAIL

---

## Test 15: Responsiveness

**Expected:** UI works on mobile and desktop

### Desktop (1024px+)
1. Open on desktop browser
2. Verify:
   - ✅ Container centered
   - ✅ Good padding (50px)
   - ✅ All elements visible
   - ✅ 2-column account info grid

### Tablet (768-1024px)
1. Resize browser to 800px width
2. Verify:
   - ✅ Responsive layout
   - ✅ Still readable
   - ✅ Buttons accessible

### Mobile (≤600px)
1. Open on mobile phone (or resize to 400px)
2. Verify:
   - ✅ Single column layout
   - ✅ Buttons stack properly
   - ✅ No horizontal scroll
   - ✅ Readable text (no zoom needed)
   - ✅ Account info 1-column grid

**Status:** ✅ PASS / ❌ FAIL

---

## Test 16: Performance

**Expected:** Fast response times

### Measurements
1. Toggle OFF, Submit → Should complete in **2-3 seconds**
2. Toggle ON, Submit → Should complete in **3-4 seconds** (extra API calls)
3. Copy button → Instant
4. Page load → **<2 seconds**

**Note:** Railway free tier may occasionally be slower. Acceptable if consistently <5 seconds.

**Status:** ✅ PASS / ❌ FAIL

---

## Test 17: Browser Compatibility

**Expected:** Works on modern browsers

### Test on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

**Check for:**
- CSS displays correctly
- Animations smooth
- No console errors (F12 → Console)
- All buttons clickable

**Status:** ✅ PASS / ❌ FAIL

---

## Test 18: Form Clear

**Expected:** Clear button resets everything

### Steps
1. Paste cookie
2. Toggle ON
3. Click Submit
4. Wait for result
5. Click "Clear" button
6. Verify:
   - ✅ Textarea empty
   - ✅ Result box hidden
   - ✅ Toggle stays in current position
   - ✅ Ready for new input

**Status:** ✅ PASS / ❌ FAIL

---

## Test 19: Multiple Submissions

**Expected:** Can submit multiple times

### Steps
1. Paste cookie 1
2. Toggle OFF
3. Submit
4. See result
5. Click Clear
6. Paste cookie 2 (different Roblox account)
7. Toggle ON
8. Submit
9. See different account data
10. Repeat 2-3 times
11. No errors accumulate

**Status:** ✅ PASS / ❌ FAIL

---

## Test 20: Network Errors

**Expected:** Graceful handling of network issues

### Steps
1. Disconnect internet
2. Try to submit
3. Wait for timeout
4. Verify error message appears (not blank page)
5. Can reconnect and try again

**Note:** Cookies processed server-side, so works even if client has bad connection after submission starts.

**Status:** ✅ PASS / ❌ FAIL

---

## Summary Checklist

- [ ] Test 1: UI Loading ✅
- [ ] Test 2: Textarea Functionality ✅
- [ ] Test 3: Toggle Switch ✅
- [ ] Test 4: Form Validation ✅
- [ ] Test 5: Logout All Devices ✅
- [ ] Test 6: Cookie Refresh ✅
- [ ] Test 7: Copy Cookie Button ✅
- [ ] Test 8: Account Data OFF ✅
- [ ] Test 9: Account Data ON ✅
- [ ] Test 10: Avatar Display ✅
- [ ] Test 11: Invalid Cookie Error ✅
- [ ] Test 12: Expired Cookie Error ✅
- [ ] Test 13: Loading State ✅
- [ ] Test 14: Discord Webhook ✅
- [ ] Test 15: Responsiveness ✅
- [ ] Test 16: Performance ✅
- [ ] Test 17: Browser Compatibility ✅
- [ ] Test 18: Form Clear ✅
- [ ] Test 19: Multiple Submissions ✅
- [ ] Test 20: Network Errors ✅

**All passed?** Your SplunkProV2 is production-ready! 🎉

---

## Reporting Issues

If any test fails:

1. Check Railway logs (Project → Deployments → Logs)
2. Open browser console (F12 → Console)
3. Check for error messages
4. Try on different browser
5. Report with:
   - Test number
   - Browser used
   - Error message (if any)
   - Steps to reproduce

---

## Performance Benchmarks

| Action | Expected Time | Max Time |
|--------|---|---|
| Page Load | <2s | 5s |
| Toggle OFF Submit | 2-3s | 5s |
| Toggle ON Submit | 3-4s | 8s |
| Copy Button | <100ms | <500ms |
| Discord Webhook | <1s | (async) |

---

**Enjoy testing SplunkProV2!** 🚀

All tests passing? Your app is ready for production! ✅
