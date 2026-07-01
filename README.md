# Vaibhav-Rawat03.github.io

Personal about-me site for **Vaibhav Rawat** — DevOps / SRE Engineer.

Live at: **https://vaibhav-rawat03.github.io** (after first push + Pages enable).

## Stack

- Plain HTML, CSS, and vanilla JS — zero build step, zero dependencies
- Dark / light theme toggle (persists via `localStorage`)
- Responsive, accessible (keyboard focus, `prefers-reduced-motion`)
- Hosted on **GitHub Pages** (free)

## Local preview

Any static server works. Two easy options:

```bash
# Python (built in)
python -m http.server 8000

# Node (if installed)
npx serve .
```

Then open http://localhost:8000

## Deploy to GitHub Pages

Because the repo is named `Vaibhav-Rawat03.github.io`, Pages auto-serves the `main` branch
at the root of that URL — no build config needed.

First-time setup:

```bash
git init
git add .
git commit -m "Initial commit: about-me site"
git branch -M main
git remote add origin https://github.com/Vaibhav-Rawat03/Vaibhav-Rawat03.github.io.git
git push -u origin main
```

Then, on GitHub:

1. Open the repo → **Settings** → **Pages**
2. Under **Build and deployment**, source = **Deploy from a branch**
3. Branch = **main**, folder = **/ (root)**, click **Save**
4. Wait ~30–60 seconds, then visit https://vaibhav-rawat03.github.io

## Project structure

```
.
├── index.html      # Page content
├── styles.css      # Styling + theme tokens
├── script.js       # Theme toggle + scroll reveal
├── .nojekyll       # Tell Pages to serve files as-is (skip Jekyll)
├── .gitignore
└── README.md
```

## Updating content

All copy lives in `index.html`. Skills chips are simple `<li>` items — add/remove
freely. Colors and spacing are tokenised at the top of `styles.css` under `:root`
(and `html[data-theme="light"]` for the light theme).
