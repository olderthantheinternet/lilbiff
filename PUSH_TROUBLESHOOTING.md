# Troubleshooting Git Push Issues

## Current Problem
Git push is failing due to authentication. The remote uses HTTPS which requires credentials.

## Solutions

### Option 1: Use GitHub Personal Access Token (Recommended)

1. **Create a Personal Access Token on GitHub:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it: "Cursor Git Access"
   - Select scopes: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again!)

2. **Update Git Remote to Use Token:**
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/olderthantheinternet/lilbiff.git
   ```
   Replace `YOUR_TOKEN` with your actual token.

3. **Or use Git Credential Helper:**
   ```bash
   git config --global credential.helper store
   git push origin main
   # When prompted:
   # Username: olderthantheinternet
   # Password: [paste your token here]
   ```

### Option 2: Use SSH Instead of HTTPS

1. **Check if you have SSH keys:**
   ```bash
   ls -la ~/.ssh/id_*.pub
   ```

2. **If no SSH key exists, create one:**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   # Press Enter to accept default location
   # Optionally set a passphrase
   ```

3. **Add SSH key to GitHub:**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   # Copy the output
   ```
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Paste the key and save

4. **Change remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:olderthantheinternet/lilbiff.git
   git push origin main
   ```

### Option 3: Use Cursor's Built-in Git Authentication

1. In Cursor, go to **Settings** → **Git**
2. Make sure "Git: Enabled" is checked
3. Look for authentication settings
4. You may need to sign in to GitHub through Cursor's interface

### Option 4: Manual Push via Terminal

If Cursor's sync button isn't working, you can push manually:

```bash
cd /home/hthighway/lilbiff
git push origin main
```

When prompted for credentials:
- **Username:** `olderthantheinternet`
- **Password:** Use a Personal Access Token (not your GitHub password)

## Quick Fix for Right Now

The fastest solution is to use a Personal Access Token:

1. Get token from: https://github.com/settings/tokens
2. Run this command (replace YOUR_TOKEN):
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/olderthantheinternet/lilbiff.git
   git push origin main
   ```

## Verify Your Setup

After setting up authentication, verify it works:
```bash
git push origin main
```

If successful, you should see:
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
...
To https://github.com/olderthantheinternet/lilbiff.git
   [branch updates]
```

## Current Status

- ✅ All videos are compressed and under 100MB
- ✅ All changes are committed locally
- ❌ Need to push 4 commits to GitHub
- ❌ Authentication is blocking the push

Once authentication is set up, the push should work immediately!

