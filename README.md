# Enterprise Frontend Platform Case Study

A GitHub-ready portfolio project that presents a generic enterprise micro-frontend platform as a product-style landing page and system design case study.

## What this repo includes

- `index.html` — landing page and case study content
- `styles.css` — responsive styling for the product-style UI
- `script.js` — small client-side behavior for theme toggle
- `.github/workflows/static.yml` — simple static site workflow example
- `LICENSE` — MIT license

## Project summary

This case study demonstrates how an enterprise frontend platform can support multiple web applications with:

- centralized UI state management
- reactive cross-app updates
- a typed event pipeline for analytics, errors, and navigation
- secure third-party integration patterns
- design system governance
- accessibility, observability, and release safety

## Run locally

Because this is a static site, you can open `index.html` directly in a browser.

For a simple local server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish to GitHub Pages

1. Create a new GitHub repository.
2. Upload these files.
3. Enable GitHub Pages for the repository.
4. Serve from the main branch root or your preferred Pages configuration.

## Positioning

This repo is intentionally generic and portfolio-friendly. It avoids company-specific names and focuses on reusable architecture, engineering judgment, and system design communication.
