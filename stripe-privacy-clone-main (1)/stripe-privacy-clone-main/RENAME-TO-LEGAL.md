# How to Rename Your Vercel Project

## Option 1: Change Vercel Project Name (Automatic Domain Update)

1. Go to: https://vercel.com/dashboard
2. Find your project: `stripe-privacy-clone-main`
3. Click on the project
4. Go to **Settings** tab
5. Scroll down to **General** section
6. Find **Project Name**
7. Click **Edit**
8. Change from: `stripe-privacy-clone-main`
9. To: `legalterms` (or whatever you want)
10. Click **Save**

**Your new URL will be**: `https://legalterms-xxx-savecashs-projects.vercel.app`

## Option 2: Custom Domain (Professional: legalterms.vercel.app)

1. Go to your Vercel project dashboard
2. Click **Settings** tab
3. Go to **Domains** section
4. Click **Add Domain**
5. Type: `legalterms` (or your preferred name)
6. Click **Add**

**Your professional URL will be**: `https://legalterms.vercel.app` ✅

## After Changing Domain:

**IMPORTANT**: Update environment variable in your MAIN React app!

1. Go to your main React app's Vercel dashboard
2. Settings → Environment Variables
3. Find `VITE_NEXTJS_APP_URL`
4. Update value to your new domain (e.g., `https://legalterms.vercel.app`)
5. Click **Save**
6. Redeploy your main app

## Option 3: Use via CLI

```bash
vercel domains add legalterms.vercel.app
```

Then update your main app's environment variable.

