# Building Tailwind CSS for Production

This project uses Tailwind CSS with a proper build process instead of the CDN.

## Initial Setup

1. Install dependencies:
```bash
npm install
```

## Building CSS

### Production Build (minified)
```bash
npm run build
```

This will:
- Process `src/input.css`
- Generate optimized, minified `styles.css`
- Remove all unused Tailwind utilities (purging)

### Development Build (with watch mode)
```bash
npm run dev
```

This will:
- Watch for changes in `index.html` and `script.js`
- Automatically rebuild `styles.css` when you make changes
- Keep the CSS unminified for easier debugging

## Before Deploying

**Always run `npm run build` before deploying to production!**

This ensures:
- ✅ CSS is optimized and minified
- ✅ Unused Tailwind classes are removed
- ✅ File size is significantly smaller
- ✅ Better performance for users

## Cloudflare Pages Build Settings

If deploying to Cloudflare Pages, configure the build settings:

**Build command:**
```
npm run build
```

**Build output directory:**
```
/ (root)
```

**Node version:**
```
18 or 20
```

## File Structure

```
lilbiff/
├── src/
│   └── input.css          # Source CSS with Tailwind directives
├── styles.css             # Generated CSS (built from input.css)
├── index.html             # Uses compiled styles.css
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies and build scripts
```

## Troubleshooting

**Styles not working after build?**
- Make sure you ran `npm run build`
- Check that `styles.css` was generated
- Verify `index.html` references `/styles.css` (not the CDN)

**Build fails?**
- Run `npm install` to ensure dependencies are installed
- Check Node.js version (requires Node 14+)

