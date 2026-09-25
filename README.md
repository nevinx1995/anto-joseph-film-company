# Anto Joseph Film Company — website concept

A responsive, bilingual (English/Malayalam) static website. It uses plain HTML, CSS, and JavaScript, so there is no build step or server requirement.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new **public** GitHub repository, for example `anto-joseph-film-company`.
2. Upload **the contents of this folder** to the repository root, including `index.html`, `styles.css`, `script.js`, `.nojekyll`, and `assets/`.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**. Select `main`, select `/(root)`, and save.
5. GitHub will show the published address in the Pages settings when deployment completes. A project site normally has the form `https://YOUR-USERNAME.github.io/anto-joseph-film-company/`.

All asset links are relative, so this works under a project repository path.

## Content to review before public release

- Film titles and years are a small editorial selection. Confirm the company wants these three highlighted.
- Add an approved business email or other contact method when supplied. No address has been invented.
- The supplied AJ logo appears in the company section. `assets/cinema-night.webp` is original generated atmosphere artwork, not a still from a production.
- The YouTube links point to the Anto Joseph Film Company channel.

## Files

- `index.html` — content and metadata
- `styles.css` — layout, typography, responsive design, motion
- `script.js` — menu, language toggle, scroll reveal
- `assets/ajfc-logo.webp` — optimized copy of the user supplied logo
- `assets/cinema-night.webp` — generated cinematic hero artwork
- `assets/favicon.svg` — small site icon
