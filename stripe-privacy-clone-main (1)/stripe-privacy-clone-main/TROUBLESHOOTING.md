# Troubleshooting Main Page Errors

## Quick Fixes to Try:

### 1. **Clear Next.js Cache**
```powershell
cd "C:\Users\bluep\Downloads\Pre-Launch Landing Page (1) (2)\stripe-privacy-clone-main (1)\savecash-legal"
Remove-Item -Recurse -Force .next
npm run dev
```

### 2. **Reinstall Dependencies**
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run dev
```

### 3. **Check Browser Console**
- Press F12 → Console tab
- Look for red error messages
- Copy the exact error text

### 4. **Check Terminal Output**
- Look for any errors when running `npm run dev`
- Check for "Module not found" or import errors

### 5. **Common Issues:**
- **404 Error**: Make sure you're going to `http://localhost:3000` (not `/page` or other paths)
- **Blank Page**: Check browser console for React errors
- **Build Errors**: Try `npm run build` to see full error messages
- **CSS Issues**: Make sure `globals.css` is being imported in `layout.tsx`

### 6. **Verify Page.tsx Imports**
All components should exist in `src/components/sections/`:
- ✅ privacy-hero.tsx
- ✅ welcome-section.tsx
- ✅ All other components listed in page.tsx

---

**Share the exact error message you're seeing** and I can provide a targeted fix!

