# ilmiahmad.github.io

Personal resume site for Ahmad Jabar Ilmi, built with Next.js (static export) and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Edit content

All resume content lives in `src/data/resume.ts`. Styles are in `src/app/globals.css`.
`public/` holds `photo.jpg` and `resume.pdf`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `out/`.
Repo Settings → Pages → Source must be set to **GitHub Actions**.
