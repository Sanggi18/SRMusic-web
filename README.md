# SRMusic Website — screenshot showcase template

Lightweight static showcase site for SRMusic, built with SvelteKit +
Svelte 5 + Tailwind CSS 4 + TypeScript + Vite, linted with ESLint and
formatted with Prettier. Builds to plain static HTML — no server, no
runtime cost beyond Svelte's tiny compiled output.

## Stack

- **SvelteKit** (frontend + backend in one — server routes if you ever need them)
- **Svelte 5** (compiler, no virtual DOM, tiny bundle)
- **Tailwind CSS 4** (via `@tailwindcss/vite`, purged automatically)
- **TypeScript**, **Vite**, **ESLint**, **Prettier**

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run check      # svelte-check
npm run lint       # eslint
npm run format     # prettier
npm run build      # static output in build/
npm run preview
```

## Add your screenshots

1. Export screenshots as WebP (max ~1600px wide, quality ~80):
   `cwebp -q 80 shot.png -o shot.webp`
2. Drop them into `static/screenshots/`.
3. List them in `src/lib/screenshots.ts` (src, caption, alt).

Images are shown with `object-fit: contain` at their natural aspect
ratio — never cropped, never squished — on desktop, Chrome, and mobile.
The grid is responsive (1 → 2 → 3 columns) and images are lazy-loaded.

## Deploy to GitHub Pages (free)

1. Create the repo (e.g. `srmusic-website`) and push this template.
2. In repo Settings → Pages → Build and deployment → **GitHub Actions**.
3. Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          BASE_PATH: /srmusic-website
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build
      - uses: actions/deploy-pages@v4
```

4. Your site is live at `https://<user>.github.io/srmusic-website/`.

Notes:

- `BASE_PATH` must match the repo name for project pages. For a user
  site (`<user>.github.io` repo) leave it empty.
- `adapter-static` + `prerender = true` in `src/routes/+layout.ts` make
  the whole site static — nothing to host but files.
