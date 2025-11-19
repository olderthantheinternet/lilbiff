# Lil Biff Website 🎭

Welcome to the whimsical world of Lil Biff! This is a one-page interactive website for lilBiff.com, featuring a cheeky puppet character with playful animations, smooth scrolling sections, and delightful interactions.

## 🎨 Features

- **Hero Section**: Animated puppet with googly eyes and bowtie easter egg
- **About Section**: Bio with stats and YouTube embed placeholder
- **Adventures Gallery**: Filterable grid of puppet adventures (videos, photos, stories)
- **Make Your Own Puppet**: Step-by-step crafting guide
- **Join the Puppet Parade**: Newsletter signup and social links
- **Easter Egg**: Click the bowtie for a confetti explosion! 🎉
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Accessible**: ARIA labels, keyboard navigation, high contrast support

## 🚀 Deployment to GitHub Pages

### Option 1: Deploy from a Branch (Simplest - Recommended for Static Sites)

This is the simplest method and perfect for this static website since there's no build step needed.

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Lil Biff website"
   git branch -M main
   git remote add origin https://github.com/yourusername/lilbiff.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be available at `https://yourusername.github.io/lilbiff/`

**Why this method?** Since this is a pure static site (HTML/CSS/JS with no build step), GitHub can serve the files directly from your branch. No compilation needed!

### Option 2: GitHub Actions (More Control)

If you prefer using GitHub Actions (useful if you want to add build steps later, run tests, or have more deployment control):

1. **Push your code** (same as Option 1, step 1)

2. **Enable GitHub Pages with Actions**
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow file (`.github/workflows/deploy.yml`) is already included in this project
   - On your next push, GitHub Actions will automatically deploy your site

**Why this method?** 
- More control over the deployment process
- Can add build steps, tests, or optimizations later
- Consistent with projects that use build tools
- Better for CI/CD workflows

**Note:** Both methods work equally well for this static site. Choose based on your preference!

## 📁 Project Structure

```
lilbiff/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles and animations
├── script.js           # JavaScript for interactivity
├── .nojekyll          # Prevents Jekyll processing on GitHub Pages
└── README.md          # This file
```

## 🎯 Customization

### Replace Placeholder Content

1. **Hero Image**: Replace the emoji (🎭) with an actual image of Lil Biff
   ```html
   <img src="lil-biff-hero.jpg" alt="Lil Biff winking mischievously">
   ```

2. **YouTube Videos**: Replace the placeholder with actual YouTube embeds
   ```html
   <iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0"></iframe>
   ```

3. **Adventure Cards**: Add real images and links to videos/photos/stories
   ```html
   <img src="adventure-1.jpg" alt="The Great Cookie Caper">
   ```

4. **Social Media Links**: Update with actual handles
   ```html
   <a href="https://instagram.com/yourhandle">Instagram</a>
   ```

5. **Newsletter Integration**: Connect the form to Mailchimp or your backend
   - Update the form action in `script.js`
   - Or use Mailchimp's embed code

### Add Real Images

1. Create an `images/` folder
2. Optimize images (WebP format, <100KB)
3. Update image paths in `index.html`
4. Add proper alt text for accessibility

### Google Analytics

Uncomment and add your Google Analytics ID in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🎨 Color Palette

- **Mustard Yellow**: `#FFD700`
- **Circus Red**: `#FF6B6B`
- **Puppet Teal**: `#4ECDC4`
- **Creamy Off-White**: `#FFF8E7`
- **Deep Navy**: `#2C3E50`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom animations and Tailwind CSS (via CDN)
- **JavaScript**: Vanilla JS for interactivity
- **AOS Library**: Scroll animations
- **Google Fonts**: Fredoka One, Bangers, Comic Neue, Quicksand

## 🐛 Troubleshooting

### Images not loading?
- Check file paths (use relative paths for GitHub Pages)
- Ensure images are in the repository
- Check browser console for 404 errors

### Animations not working?
- Ensure AOS library is loaded (check network tab)
- Verify JavaScript is enabled in browser
- Check console for errors

### Mobile menu not working?
- Clear browser cache
- Check that `script.js` is loaded
- Verify no JavaScript errors in console

## 📝 License

This project is created for Lil Biff. Feel free to customize it for your own puppet character!

## 🎭 Credits

Built with ❤️ and glue for Lil Biff's whimsical adventures!

---

**Pulling strings since 2023!** 🎪

