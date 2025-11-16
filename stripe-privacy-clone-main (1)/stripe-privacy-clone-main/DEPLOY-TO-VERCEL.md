# Deploy SaveCash Legal Terms to Vercel

This guide will help you deploy the SaveCash Legal Terms website to Vercel with a custom domain name.

## Quick Deploy Options

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Navigate to the project directory**:
   ```bash
   cd "savecash-legal"
   ```

3. **Login to Vercel**:
   ```bash
   vercel login
   ```

4. **Deploy the project**:
   ```bash
   vercel
   ```
   
   When prompted:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No** (for first deployment)
   - What's your project's name? **savecash-legal-terms** (or your preferred name)
   - In which directory is your code located? **./**

5. **Set the project name for a custom subdomain**:
   After the first deployment, you can rename your project:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your project
   - Go to **Settings** → **General**
   - Change the project name to **legal-terms** or **savecash-legal**
   - This will give you: `legal-terms.vercel.app` or `savecash-legal.vercel.app`

### Option 2: Deploy via Vercel Dashboard (GUI)

1. **Prepare your code**:
   - Push your code to GitHub, GitLab, or Bitbucket
   - Or use the Vercel Dashboard to import directly

2. **Go to Vercel Dashboard**:
   - Visit [vercel.com/new](https://vercel.com/new)
   - Sign in with GitHub/GitLab/Bitbucket

3. **Import your project**:
   - Click **Add New Project**
   - Select your repository
   - Configure project:
     - **Project Name**: `legal-terms` (or `savecash-legal`)
     - **Framework Preset**: Next.js (auto-detected)
     - **Root Directory**: `./`
     - **Build Command**: `npm run build`
     - **Install Command**: `npm install --legacy-peer-deps`
     - **Output Directory**: `.next` (default)

4. **Deploy**:
   - Click **Deploy**
   - Wait for deployment to complete
   - Your site will be live at: `legal-terms.vercel.app` (or your chosen name)

## Custom Domain Setup

To use a custom domain like `legal-terms.vercel.app`:

1. **Rename Project** (if needed):
   - Go to **Settings** → **General**
   - Change project name to `legal-terms`
   - Save changes

2. **Add Custom Domain** (Optional):
   - Go to **Settings** → **Domains**
   - Add your custom domain (e.g., `legal-terms.yourdomain.com`)
   - Follow DNS configuration instructions

## Environment Variables

If you need to set environment variables:

1. Go to **Settings** → **Environment Variables**
2. Add any required variables:
   - Example: `NEXT_PUBLIC_APP_URL=https://legal-terms.vercel.app`

## Build Settings

The project is already configured with:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Install Command**: `npm install --legacy-peer-deps`
- **Output Directory**: `.next`

These settings are in `vercel.json` and will be auto-detected.

## Post-Deployment

After deployment:

1. **Check your deployment**:
   - Visit your deployment URL (e.g., `legal-terms.vercel.app`)
   - Test all pages and navigation

2. **Monitor deployments**:
   - All future pushes to your main branch will auto-deploy
   - Check deployment status in Vercel Dashboard

3. **Customize**:
   - Update project settings in Vercel Dashboard
   - Configure custom domains if needed
   - Set up environment variables

## Troubleshooting

### Build Errors
- Ensure all dependencies are in `package.json`
- Check Node.js version (Vercel uses Node 18+ by default)
- Review build logs in Vercel Dashboard

### Deployment Issues
- Verify `vercel.json` configuration
- Check `next.config.ts` for any issues
- Ensure all required files are committed

### Domain Issues
- Allow 24-48 hours for DNS propagation
- Verify DNS settings in Vercel Dashboard
- Check domain verification status

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Dashboard](https://vercel.com/dashboard)

---

**Note**: The project name determines your Vercel subdomain. Choose a name like `legal-terms` for `legal-terms.vercel.app` or `savecash-legal` for `savecash-legal.vercel.app`.
