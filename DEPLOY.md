# Quick Start Guide - Deploy to GitHub Pages

This guide will get your Master Jud website live on GitHub Pages in about 10 minutes.

## Prerequisites

- GitHub account (you have one: jsmith-tid)
- Git installed on your computer ([download](https://git-scm.com/download/win))
- The website files (you have them in `c:\Users\alans\WORK\MJ5PMT\website\`)

## Step 1: Copy Images (2 minutes)

1. Open `c:\Users\alans\WORK\MJ5PMT\website\` folder
2. Double-click **copy-images.bat** to copy all images automatically
3. You should see confirmation messages
4. **Check:** Open `website\images\` folder and verify you see:
   - `Master-Jud-3040879388.jpg`
   - `Surachai-3368412999.jpg`
   - `OIP-41752969.jpg`

## Step 2: Create GitHub Repository (2 minutes)

1. Go to [github.com](https://github.com) in your browser
2. Click your **profile icon** (top right) → **Your repositories**
3. Click the **green "New" button**
4. Fill in:
   - **Repository name:** `mj-muay-thai-funnel`
   - **Description:** "Muay Thai Training Funnel"
   - **Visibility:** Public
5. **Do NOT** check "Initialize with README" (we have one)
6. Click **Create repository**

## Step 3: Push Code to GitHub (3 minutes)

Open **PowerShell** (Windows key + type "PowerShell" + Enter):

```powershell
# Navigate to website folder
cd c:\Users\alans\WORK\MJ5PMT\website

# Initialize git repo
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Master Jud website demo"

# Add your GitHub repo
git remote add origin https://github.com/jsmith-tid/mj-muay-thai-funnel.git

# Rename branch to main (GitHub standard)
git branch -M main

# Push to GitHub
git push -u origin main
```

If you see: `fatal: Could not read from remote repository` — double-check the GitHub URL matches your username.

## Step 4: Enable GitHub Pages (2 minutes)

1. Go to: `https://github.com/jsmith-tid/mj-muay-thai-funnel`
2. Click **Settings** (tab near top)
3. Scroll left sidebar → click **Pages**
4. Under "Source":
   - Branch: select `main`
   - Folder: select `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes (you'll see a blue message saying your site is building)
7. Refresh the page — you'll see a green checkmark with your live URL:
   ```
   https://jsmith-tid.github.io/mj-muay-thai-funnel/
   ```

## ✅ You're Live!

Your website is now live at:
```
https://jsmith-tid.github.io/mj-muay-thai-funnel/
```

**Test it:**
- Open the URL in your browser
- Try the form (submit test inquiry)
- Check it on your phone (send link to someone)

## Troubleshooting

### "Pages aren't working" message?
- Wait another 1-2 minutes, then refresh
- Make sure you selected `main` branch and `/root` folder in Settings

### Form doesn't send emails?
- The form is configured to use Formspree
- You'll get your first email when someone submits
- If you don't get it, check your email spam folder

### Images not showing?
- Make sure you ran the `copy-images.bat` file
- Check that images are in `website/images/` folder
- Push changes again: 
  ```powershell
  cd c:\Users\alans\WORK\MJ5PMT\website
  git add .
  git commit -m "Add images"
  git push
  ```

## Sharing with Master Jud

Send him this link:
```
https://jsmith-tid.github.io/mj-muay-thai-funnel/
```

Tell him:
- It's mobile-friendly (test on phone)
- The form is ready to test
- You're gathering feedback before finalizing the design
- This is a demo for review only

## Next Steps

1. ✅ Website is live
2. Get feedback from Master Jud
3. Make updates as needed (edit files → push to GitHub)
4. When ready, buy a custom domain and point it to GitHub Pages
5. Integrate with marketing channels (YouTube, Reddit, etc.)

---

**Questions?** Refer to the README.md file for more details or the main project document.
