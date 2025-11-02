# Environment Variable Setup for Vercel

## For the React App (Landing Page) Deployment:

1. Go to your React app project in Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Key:** `VITE_NEXTJS_APP_URL`
   - **Value:** `https://your-nextjs-app-url.vercel.app` (replace with your actual Next.js app URL)
   - **Environment:** Production, Preview, Development (check all)
4. **Save** and **Redeploy** your React app

## How to Find Your Next.js App URL:

1. Go to your Next.js project in Vercel
2. Look at the top of the page - you'll see something like:
   - `https://savecash-nextjs-abc123.vercel.app`
   - Or your custom domain if you set one up
3. Copy that entire URL (without trailing slash)

## After Setting the Environment Variable:

- The footer links will automatically point to your deployed Next.js app
- Links will open in a new browser tab (thanks to `target="_blank"`)
- No more localhost errors!

## Development vs Production:

- **Development:** Links point to `http://localhost:3000` (Next.js dev server)
- **Production:** Links point to your deployed Next.js app URL (set via environment variable)

