# GitHub Pages 404 Troubleshooting Guide

## Step-by-Step: Finding Your Pages Status

### 1. Navigate to Pages Settings
1. Go to your repository: `https://github.com/olderthantheinternet/lilbiff`
2. Click the **Settings** tab (top menu, far right)
3. Scroll down in the left sidebar and click **Pages**

### 2. What to Look For

You should see a section called **"Build and deployment"** with:

**If it's working:**
- Source: "Deploy from a branch" 
- Branch: `main` / `/ (root)`
- A green checkmark ✅ or "Your site is live at..." message
- A link to your site

**If there's an issue:**
- Red X or warning message
- "Your site is ready to be published" (still processing)
- Error message explaining the problem

### 3. Check Repository Visibility

**Important:** Free GitHub accounts can only use Pages on **public repositories**.

1. In Settings → General (scroll to bottom)
2. Check "Danger Zone" → Repository visibility
3. If it says "Private", you need to make it public OR upgrade to GitHub Pro

### 4. Verify Files Are Pushed

1. Go to your repository main page
2. Click on the **Code** tab
3. Make sure you can see:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll` (might be hidden - that's okay)

If files are missing, you need to push them:
```bash
git add .
git commit -m "Add website files"
git push origin main
```

### 5. Check Branch Name

1. In Pages settings, verify:
   - Branch dropdown shows: `main` (not `master` or another branch)
   - Folder dropdown shows: `/ (root)` (not `/docs`)

### 6. Wait Time

After enabling Pages, it can take:
- **1-2 minutes** for initial deployment
- **Up to 10 minutes** for DNS propagation
- Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### 7. Check URL Format

Your site URL should be:
- `https://olderthantheinternet.github.io/lilbiff/` (with trailing slash)
- NOT `https://olderthantheinternet.github.io/lilbiff` (without trailing slash)

## Common Issues & Solutions

### Issue: "404 File not found"
**Possible causes:**
1. Files not in root directory
2. Repository is private (free accounts)
3. Wrong branch selected
4. Deployment still processing

**Solution:** Check all steps above

### Issue: "Your site is ready to be published"
**Solution:** Wait 1-2 minutes, then refresh the page

### Issue: Repository is Private
**Solution:** 
- Go to Settings → General → Danger Zone
- Click "Change visibility" → Make public
- OR upgrade to GitHub Pro ($4/month)

### Issue: Can't find Pages in Settings
**Solution:**
- Make sure you're the repository owner
- Check you're on the correct repository
- Try refreshing the page

## Quick Test

1. Visit: `https://github.com/olderthantheinternet/lilbiff/blob/main/index.html`
2. If you can see the HTML file, your files are pushed ✅
3. If you get 404, files aren't in the repository ❌

## Still Not Working?

Try switching to GitHub Actions:
1. Settings → Pages
2. Change Source to **"GitHub Actions"**
3. The workflow will deploy automatically on next push

