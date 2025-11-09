# Teja - Portfolio

This is a React portfolio for **Bala Shiva Teja Kandimalla** built from the provided resume content.

## Features

- Single page app (React)
- Experience, Skills, Projects sections
- Downloadable Resume (place `Teja_MERN.pdf` in `public/`)
- Responsive layout
- CI: tests + build on push/PR to `main`
- Auto-deploy to **GitHub Pages** on push to `main`

## Quick start (local)

```bash
# clone your repo (replace URL)
git clone git@github.com:BalaShivaTeja/teja-portfolio.git
cd teja-portfolio

# install (use npm ci for CI parity)
npm ci

# run locally
npm start

# run tests
npm test

# build
npm run build
```

## GitHub Actions included

- `.github/workflows/ci.yml` — runs tests & build on push / PR to `main`.
- `.github/workflows/deploy-ghpages.yml` — builds and publishes `build/` to `gh-pages` branch on push to `main`.

## Deploy (GitHub Pages)

1. Push to `main`.
2. The `deploy-ghpages` workflow will automatically create/update the `gh-pages` branch.
3. Go to **Settings → Pages** and set the source to **Branch: gh-pages / Folder: /** if not auto-configured.
4. Wait a few minutes for GitHub Pages to publish.

