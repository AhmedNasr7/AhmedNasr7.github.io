# ahmednasr7.github.io

Personal site of Ahmed Nasr, Machine Learning & Research Engineer. Live at <https://ahmednasr7.github.io>.

Static site built with [Astro](https://astro.build). No UI framework, about 2 KB of JavaScript, light and dark themes.

## Run locally

Requires Node 22+.

```bash
npm install
npm run dev       # http://localhost:4321, live reload
npm run build     # type-check + build to dist/
npm run preview   # serve the built site
```

## Where things live

All text content is in `src/data/`. Components never hard-code facts, so most updates are a one-file edit.

| File | Content |
|---|---|
| `src/data/profile.ts` | Name, title, hero sentence, contact links |
| `src/data/work.ts` | Selected Work case studies |
| `src/data/experience.ts` | Experience timeline |
| `src/data/research.ts` | Thesis, current research, open source, publications |
| `src/data/skills.ts` | Skill groups |
| `src/data/education.ts` | Degrees |
| `src/data/activities.ts` | Activities and the certificate gallery |

Other places: `src/components/` (UI pieces), `src/styles/` (design tokens and CSS), `src/scripts/` (theme toggle, nav, scroll reveals, hero loss-surface animation), `src/pages/` (`/`, `/blog`, `/404`), `public/` (files served as-is).

## Add a certificate

1. Put the PDF in `public/certs/` with a lowercase-kebab-case name, e.g. `my-cert-2027.pdf`.
2. Make a thumbnail of page 1:
   ```bash
   pdftoppm -png -r 80 -f 1 -l 1 -singlefile public/certs/my-cert-2027.pdf /tmp/my-cert-2027
   cwebp -q 80 /tmp/my-cert-2027.png -o src/assets/certs/my-cert-2027.webp
   ```
3. Import the thumbnail and add an entry to `certificates` in `src/data/activities.ts`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with `withastro/action` and publishes to GitHub Pages. In the repo settings, **Pages → Source** must be set to **GitHub Actions**.

## Blog (later)

`/blog` is a "coming soon" page for now. `src/layouts/Prose.astro` is ready for long-form posts, which can come from a `src/content/blog/` collection or an external source such as Notion.
