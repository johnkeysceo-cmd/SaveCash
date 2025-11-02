# Vercel Setup Checklist - Fix "localhost refused to connect"

## ✅ Step-by-Step Fix

### 1. **Get Your Next.js App URL**
   - Go to Vercel dashboard
   - Open your Next.js project (the one with root directory `stripe-privacy-clone-main/stripe-privacy-clone-main`)
   - Look at the **Domains** section or deployment card
   - Copy the production URL (e.g., `https://save-cash-nextjs-xyz123.vercel.app`)
   - **WRITE IT DOWN:** _________________________

### 2. **Set Environment Variable in React App**
   - Go to your React app project in Vercel (the one WITHOUT root directory)
   - Click **Settings** → **Environment Variables**
   - Click **Add New**
   - Fill in:
     - **Key:** `VITE_NEXTJS_APP_URL`
     - **Value:** (paste the URL from step 1, NO trailing slash)
     - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **Save**

### 3. **Redeploy React App**
   - Go to **Deployments** tab
   - Click **"..."** on latest deployment
   - Click **"Redeploy"**
   - Wait for deployment to complete

### 4. **Test**
   - Open your React app in browser
   - Open browser DevTools (F12) → Console tab
   - Look for log: `Next.js App URL: [your-url]`
   - Click any footer link
   - Should open Next.js app in new tab ✅

### 5. **If Still Not Working**
   - Check browser console for the logged URL
   - Verify environment variable is set correctly in Vercel
   - Make sure you redeployed AFTER setting the variable
   - Check that both projects deployed successfully

## 🔍 Debugging

### Check Environment Variable:
1. Go to React app → Settings → Environment Variables
2. Verify `VITE_NEXTJS_APP_URL` exists and has correct value
3. Value should start with `https://` not `http://localhost`

### Check Browser Console:
1. Open deployed React app
2. Press F12 → Console
3. Look for: `Next.js App URL: ...`
4. If it says "Using fallback", the env var isn't set correctly

### Verify Both Apps Are Deployed:
1. Next.js app: Should be accessible at its URL
2. React app: Should be accessible at its URL
3. Both should show "Ready" status in Vercel

