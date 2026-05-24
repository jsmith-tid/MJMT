# Master Jud Muay Thai Coaching - Website Demo

A clean, mobile-responsive website for Master Jud Muay Thai Coaching in Phuket, Thailand.

## 🎯 What's Included

- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- **Dark Theme** — Professional charcoal + gold color scheme 
- **Inquiry Form** — Integrated with Formspree for email capture
- **Coach Profiles** — Showcase your experienced trainers
- **Training Packages** — Display pricing tiers (Standard, Elite, Custom)
- **Student Reviews** — Build credibility with testimonials
- **Information Sections** — For Overseas Students, Training Details, FAQ

## 📁 Project Structure

```
website/
├── index.html          # Main page
├── style.css           # Styling (dark theme)
├── script.js           # Form handling & interactivity
├── images/             # Coach & training photos
│   ├── Master-Jud-3040879388.jpg
│   ├── Surachai-3368412999.jpg
│   └── OIP-41752969.jpg
└── README.md          # This file
```

## 🚀 Setup Instructions

### 1. **Copy Images to Project**

Copy the following images from your `Images/` folder to the `website/images/` folder:

```
From: c:\Users\alans\WORK\MJ5PMT\Images\
To:   c:\Users\alans\WORK\MJ5PMT\website\images\

Files to copy:
- Master-Jud-3040879388.jpg
- Surachai-3368412999.jpg
- OIP-41752969.jpg
```

### 2. **Test Locally (Optional)**

Open `index.html` directly in your browser:
- Double-click the `index.html` file, OR
- Right-click → Open With → Your preferred browser

The site will work but the form won't submit (needs web server for Formspree).

### 3. **Deploy to GitHub Pages**

#### A. Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click **New Repository**
3. Name: `mj-muay-thai-funnel`
4. Description: "Muay Thai Training Funnel for Master Jud Coaching"
5. Public repo
6. Click **Create Repository**

#### B. Push Code to GitHub

In your terminal/PowerShell, navigate to the `website` folder:

```powershell
cd c:\Users\alans\WORK\MJ5PMT\website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Master Jud website demo"

# Add remote (replace YOUR_USERNAME with jsmith-tid)
git remote add origin https://github.com/jsmith-tid/mj-muay-thai-funnel.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### C. Enable GitHub Pages

1. Go to your repo: `https://github.com/jsmith-tid/mj-muay-thai-funnel`
2. Click **Settings**
3. Scroll to **Pages** section
4. Under "Source", select `main` branch and `/root` folder
5. Click **Save**
6. Wait ~1-2 minutes
7. Your site will be live at: `https://jsmith-tid.github.io/mj-muay-thai-funnel/`

## 📧 Form Configuration

The inquiry form is currently configured to send to **jsmithtid@outlook.com** via Formspree.

To test or change this:
1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create a new form
4. Copy your Form ID
5. Replace the form ID in `script.js` line with: `https://formspree.io/f/YOUR_FORM_ID`

## 🎨 Customization

### Change Colors
Edit `style.css` at the top:
```css
:root {
    --primary-dark: #1a1a1a;      /* Main dark color */
    --accent-gold: #d4af37;        /* Gold accent */
    --accent-red: #c41e3a;         /* Red accent */
    /* etc. */
}
```

### Update Content
- Edit `index.html` directly in any text editor
- Change coach names, prices, descriptions
- Add/remove sections as needed

### Update Images
- Replace images in the `images/` folder
- Keep the same filenames or update references in `index.html`

## 📱 Mobile Responsiveness

The site is fully responsive:
- **Desktop** (1200px+): Multi-column layouts
- **Tablet** (768px-1199px): Adjusted columns
- **Mobile** (under 768px): Single column, optimized for touch

Test on your phone by sending the GitHub Pages link: `https://jsmith-tid.github.io/mj-muay-thai-funnel/`

## ✅ Next Steps

1. **Copy images** to the `website/images/` folder
2. **Push to GitHub** using the instructions above
3. **Test the form** by submitting an inquiry
4. **Share the link** with Master Jud: `https://jsmith-tid.github.io/mj-muay-thai-funnel/`
5. **Gather feedback** and iterate

## 📝 Version Notes

- Demo built: May 2026
- Features: Landing page, package showcase, coach profiles, inquiry form
- Status: Ready for Master Jud review

## 🔗 Useful Links

- GitHub Repo: https://github.com/jsmith-tid/mj-muay-thai-funnel
- Live Demo: https://jsmith-tid.github.io/mj-muay-thai-funnel/
- Formspree: https://formspree.io
- GitHub Pages Docs: https://pages.github.com

---

**Questions?** Refer back to the planning document in `For_Claude.md` for business strategy context.
