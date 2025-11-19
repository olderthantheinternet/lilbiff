#!/bin/bash
# Video Compression Script for GitHub Pages
# This script compresses MP4 videos to reduce file size while maintaining quality

echo "Compressing videos for web delivery..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed."
    echo "Install it with: sudo apt-get install ffmpeg (Linux) or brew install ffmpeg (Mac)"
    exit 1
fi

# Create compressed directory
mkdir -p images/compressed

# Compress each video
echo "Compressing lilbiff_sing_01.mp4..."
ffmpeg -i images/lilbiff_sing_01.mp4 -vcodec libx264 -crf 28 -preset slow -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" -acodec aac -b:a 128k images/compressed/lilbiff_sing_01.mp4 -y

echo "Compressing lilbiff_sing_02.mp4..."
ffmpeg -i images/lilbiff_sing_02.mp4 -vcodec libx264 -crf 28 -preset slow -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" -acodec aac -b:a 128k images/compressed/lilbiff_sing_02.mp4 -y

echo "Compressing lilbiff_lilkrista.mp4..."
ffmpeg -i images/lilbiff_lilkrista.mp4 -vcodec libx264 -crf 28 -preset slow -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" -acodec aac -b:a 128k images/compressed/lilbiff_lilkrista.mp4 -y

echo "Compressing lilbiff_thanksgiving.mp4 (this is the large one)..."
ffmpeg -i images/lilbiff_thanksgiving.mp4 -vcodec libx264 -crf 30 -preset slow -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" -acodec aac -b:a 96k images/compressed/lilbiff_thanksgiving.mp4 -y

echo ""
echo "Compression complete! Check images/compressed/ for the new files."
echo "Compare file sizes:"
ls -lh images/*.mp4
ls -lh images/compressed/*.mp4

