# Vercel CLI Deployment Steps

When prompted, follow these responses:

1. **Set up and deploy?** → Type `Y` and press Enter

2. **Which scope?** → Select your account/team

3. **Link to existing project?** → Type `N` (no, create new project)

4. **What's your project's name?** → Enter something like `savecash-privacy-pages` or `privacy-legal-pages`

5. **In which directory is your code located?** → Press Enter (default `./` is correct)

6. **Want to override the settings?** → Type `N` (no, use defaults)

7. **Deploying...** → Wait for build to complete

8. **Success!** → Copy the URL (e.g., `https://your-app.vercel.app`)

## After Deployment:

1. Copy the deployment URL
2. Go to your MAIN React app's Vercel dashboard
3. Settings → Environment Variables
4. Add: `VITE_NEXTJS_APP_URL` = `https://your-app.vercel.app`
5. Redeploy main app

## Troubleshooting:

- If build fails, check the error log
- Make sure `npm install --legacy-peer-deps` runs (Vercel should auto-detect)
- The Next.js app should build successfully

