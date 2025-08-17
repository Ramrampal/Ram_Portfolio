# Rampal Lodhi — Portfolio

This repository contains the source of a single-page personal portfolio built with HTML/CSS/JS (no frameworks).

## Run locally
Option 1: open `index.html` in your browser.
Option 2: use a local server:
```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Customize
- Replace `assets/profile.svg` with your real photo (e.g., `profile.jpg`) and update `index.html` if the filename changes.
- Update links, projects, and text in `index.html`.
- Edit styling in `styles.css`.

## Deploy on GitHub Pages
1. Create a new GitHub repository (public) and **do NOT** add any files.
2. On your computer, extract this zip, open a terminal in the folder and run:
```bash
git init
git branch -M main
git add .
git commit -m "Initial commit: portfolio"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
3. On GitHub: **Settings → Pages → Build and deployment**  
   - Source: **Deploy from a branch**  
   - Branch: **main** / **root** (/)  
   - Click **Save**.
4. Your site will be available at `https://<your-username>.github.io/<repo-name>/` in ~1–2 minutes.

### Special option
If you name the repository **<your-username>.github.io**, the site appears at `https://<your-username>.github.io/`

## Update later
Edit files, then:
```bash
git add .
git commit -m "Update content"
git push
```
