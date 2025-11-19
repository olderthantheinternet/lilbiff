# Video File Setup Guide

## Problem
The MP4 files are too large to push directly to GitHub:
- `lilbiff_thanksgiving.mp4`: **196MB** (exceeds GitHub's 100MB limit)
- Other videos: 2.7MB - 34MB (may cause slow sync)

## Solutions

### Option 1: Compress Videos (Recommended - Best for Web)

1. **Install ffmpeg** (if not already installed):
   ```bash
   # Linux
   sudo apt-get install ffmpeg
   
   # Mac
   brew install ffmpeg
   
   # Windows
   # Download from https://ffmpeg.org/download.html
   ```

2. **Run the compression script**:
   ```bash
   ./compress_videos.sh
   ```

3. **Replace original files with compressed versions**:
   ```bash
   mv images/compressed/*.mp4 images/
   ```

4. **Remove from git tracking and re-add**:
   ```bash
   git rm --cached images/*.mp4
   git add images/*.mp4
   git commit -m "Add compressed video files"
   git push
   ```

### Option 2: Use Git LFS (Large File Storage)

1. **Install Git LFS**:
   ```bash
   # Linux
   sudo apt-get install git-lfs
   
   # Mac
   brew install git-lfs
   ```

2. **Initialize Git LFS in your repo**:
   ```bash
   git lfs install
   git lfs track "*.mp4"
   git add .gitattributes
   git commit -m "Add Git LFS tracking for MP4 files"
   ```

3. **Add videos to LFS**:
   ```bash
   git rm --cached images/*.mp4
   git add images/*.mp4
   git commit -m "Move videos to Git LFS"
   git push
   ```

**Note:** Git LFS has free tier limits (1GB storage, 1GB bandwidth/month). For public repos, bandwidth can be an issue.

### Option 3: Host Videos Elsewhere (Best for Performance)

Upload videos to:
- **YouTube** (unlisted/private) - Free, unlimited
- **Vimeo** - Free tier available
- **Cloudflare Stream** - Free tier
- **AWS S3 + CloudFront** - Pay as you go

Then embed using iframe in your HTML instead of `<video>` tags.

### Option 4: Remove Large File Temporarily

If you need to push immediately:

```bash
# Remove the large file from git (but keep local copy)
git rm --cached images/lilbiff_thanksgiving.mp4
git commit -m "Remove large video file temporarily"
git push

# Add it back later after compression or using LFS
```

## Recommended Approach

**For immediate fix:** Use Option 1 (compression) - it's the best balance of:
- ✅ Keeps files in your repo
- ✅ Reduces file sizes significantly
- ✅ Better for web performance
- ✅ No additional services needed

The compression script will reduce file sizes by 60-80% while maintaining good quality for web streaming.

