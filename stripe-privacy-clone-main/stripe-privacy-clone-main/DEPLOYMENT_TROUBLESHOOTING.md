# Deployment Troubleshooting Guide

## Current Issue: 404 Errors on Vercel

If you're seeing 404 errors after deployment, follow these steps:

## ✅ Step 1: Check Build Logs

1. Go to your Vercel dashboard
2. Click on your deployment
3. Check the "Build Logs" tab
4. Look for any errors or warnings

**Common Issues:**
- Module not found errors
- TypeScript errors
- Build timeout
- Memory issues

## ✅ Step 2: Verify Root Directory

**Important:** Your project is in a nested folder:
```
stripe-privacy-clone-main/
  └── stripe-privacy-clone-main/  ← Your actual Next.js project is here
      ├── package.json
      ├── next.config.ts
      └── src/
```

In Vercel Dashboard:
1. Go to Settings → General
2. Check "Root Directory" setting
3. It should be: `stripe-privacy-clone-main` (the nested folder)
4. If it's wrong, set it correctly and redeploy

## ✅ Step 3: Check Build Output

1. In Vercel Build Logs, look for:
   ```
   Creating an optimized production build ...
   Compiled successfully
   ```

If you see compilation errors, fix them in your code first.

## ✅ Step 4: Verify Next.js Configuration

Make sure `next.config.ts` has no errors:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
```

## ✅ Step 5: Check Environment Variables

If your app needs environment variables:

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add any required variables
3. Redeploy

## ✅ Step 6: Test Locally First

Before deploying to Vercel, test locally:

```bash
cd stripe-privacy-clone-main
npm install
npm run build
npm start
```

Visit `http://localhost:3000` and see if it works.

## ✅ Step 7: Force Clean Build

Sometimes old cache causes issues:

1. In Vercel Dashboard → Deployments
2. Find your failed deployment
3. Click "..." → "Redeploy"
4. Check "Use existing Build Cache" → UNCHECK it
5. Click "Redeploy"

## 🐛 Most Common Fixes

### Fix 1: Wrong Root Directory
**Symptom:** 404 on all pages
**Solution:** Set Root Directory to `stripe-privacy-clone-main` in Vercel settings

### Fix 2: Build Errors
**Symptom:** Build fails in logs
**Solution:** Run `npm run build` locally first, fix any errors

### Fix 3: Missing Dependencies
**Symptom:** Module not found errors
**Solution:** Ensure all dependencies are in package.json

### Fix 4: TypeScript Errors
**Symptom:** Build fails with TS errors
**Solution:** Fix TypeScript errors or check tsconfig.json

## 📋 Quick Checklist

- [ ] Root directory set correctly in Vercel
- [ ] Build completes successfully locally (`npm run build`)
- [ ] No TypeScript errors
- [ ] All dependencies installed
- [ ] `.npmrc` file present with `legacy-peer-deps=true`
- [ ] `vercel.json` configured correctly
- [ ] Clean deployment (no cache)

## 🆘 Still Not Working?

If none of the above works:

1. Check Vercel Community Forums
2. Look at Vercel support docs
3. Share your build logs with support

## 📞 Need Help?

Include these when asking for help:
- Full build logs from Vercel
- Screenshot of error
- Your `package.json`
- Your `next.config.ts`
- Root directory setting in Vercel

---

**Updated:** After removing development-only code from layout.tsx and global-error.tsx

