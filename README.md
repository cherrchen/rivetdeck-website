# Rivetdeck website

Static-first Next.js site with two independent pages:

| Route | Purpose |
| --- | --- |
| `/` | Rivetdeck, the desktop app built on DeepSeek Harness: features, bundled plugins, downloads from GitHub Releases |
| `/plugins/multi-root-workspace` | Standalone product page for the Multi-root Workspace DSH plugin, with its own SEO and compatibility matrix |

Rivetdeck and the plugin are unofficial, third-party projects. They are not made,
endorsed or supported by DeepSeek.

## Requirements

Node.js `^22.19.0 || >=24` and pnpm 11 (`packageManager` in `package.json`).

## Run

```sh
pnpm install
pnpm dev          # http://localhost:3000
pnpm check        # lint, typecheck, unit tests, production build
pnpm build && pnpm start
```

## Configuration

| Variable | Use |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for canonical URLs, Open Graph, `sitemap.xml` and `robots.txt`. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is the fallback; locally the site uses `http://localhost:3000`. |

No other variables, database or CMS are used.

## Deploy

Import the repository into Vercel as a Next.js project and set
`NEXT_PUBLIC_SITE_URL` to the production origin. Both routes are prerendered
statically; the Open Graph images are generated at build time.

## Where content comes from

Facts are kept in typed data modules so a release changes one file:

| File | Content |
| --- | --- |
| `lib/site.ts` | Repository, release, npm and documentation URLs |
| `lib/releases.ts` | Rivetdeck release assets and sizes (from the GitHub Release) |
| `lib/multi-root-compat.ts` | Multi-root Workspace compatibility matrix and platforms |
| `lib/themes.ts` | Theme Studio palettes used by the interactive preview |
| `lib/screenshots.ts` | Screenshot dimensions and alt text |

When a new Rivetdeck release or plugin version ships, update those files and
re-run `pnpm check`. Compatibility status is declared per release and is never
inferred from version order.

## Screenshots

Product images are captures of the native Rivetdeck Electron app; see
[`public/screenshots/README.md`](public/screenshots/README.md) for provenance and
`scripts/capture/` for the capture scripts.

## Design

Neutral black/white/gray scale with Geist, light and dark themes, and one
restrained accent per page identity (`data-identity` on the page root). Motion is
limited to short transitions and respects `prefers-reduced-motion`.
