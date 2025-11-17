# Deploy Next.js App to Vercel

This folder contains the Next.js app that powers your footer links.

## Quick Deploy Steps:

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard

2. **Click "Add New Project"**

3. **Import this folder**:
   - Select "Import Git Repository" OR
   - Drag and drop this entire folder: `stripe-privacy-clone-main (1)/stripe-privacy-clone-main`

4. **Configure Project**:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: Leave as default or set to `./` if needed
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install --legacy-peer-deps`
   - **Output Directory**: `.next` (auto-detected)

5. **Deploy!**

6. **After deployment, copy the Vercel URL** (e.g., `https://your-app-name.vercel.app`)

7. **Add Environment Variable to Main React App**:
   - Go to your MAIN React app's Vercel project settings
   - Go to Environment Variables
   - Add: `VITE_NEXTJS_APP_URL` = `https://your-nextjs-app.vercel.app`
   - Redeploy the main React app

## Alternative: Deploy via Vercel CLI

```bash
cd "stripe-privacy-clone-main (1)/stripe-privacy-clone-main"
npm install -g vercel
vercel login
vercel
```

Follow the prompts and you're done!

## Notes:
- The Next.js app should deploy independently
- Make sure to use `--legacy-peer-deps` in install command
- After deployment, update the main app's `VITE_NEXTJS_APP_URL` environment variable

