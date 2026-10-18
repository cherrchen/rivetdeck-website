# Rivetdeck website

Static-first Next.js site with independent pages per product:

| Route | Purpose |
| --- | --- |
| `/` | Rivetdeck, the desktop app built on DeepSeek Harness: features, bundled plugins, downloads (Microsoft Store and GitHub Releases) |
| `/plugins/git` | Product page for the Git DSH plugin |
| `/plugins/theme-studio` | Product page for the Theme Studio DSH plugin |
| `/plugins/multi-root-workspace` | Standalone product page for the Multi-root Workspace DSH plugin, with its own SEO and compatibility matrix |
| `/plugins/git/changelog` etc. | Per-plugin release history, transcribed from each plugin repository's bilingual `CHANGELOG` files; linked from the product-page header and linking back |

Every route exists in English (unprefixed, the default) and Simplified Chinese
(`/zh/...`).

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
| `NEXT_PUBLIC_BASE_PATH` | Public path prefix; empty for a root site, `/rivetdeck-website` for this repository on GitHub Pages. |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for canonical URLs, Open Graph, `sitemap.xml` and `robots.txt`. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is the fallback; locally the site uses `http://localhost:3000`. |

No other variables, database or CMS are used.

## Deploy

### GitHub Pages

The repository is prepared for `https://cherrchen.github.io/rivetdeck-website/`.
The workflow in `.github/workflows/pages.yml` checks pull requests and deploys
pushes to `main` (or a manual **Run workflow**) using GitHub Actions.

To activate the first deployment:

1. In the repository, open **Settings → Pages → Build and deployment** and select
   **GitHub Actions** as the source.
2. Commit and push the deployment changes to `main`.
3. Open **Actions → Deploy GitHub Pages** and check that both jobs succeed.

No deployment token or repository secret is required. The deploy job uses the
built-in GitHub token with `pages: write` and `id-token: write` permissions;
`github-pages` environment rules still apply.

```sh
pnpm build:pages   # Exports to out/ with this repository's Pages URL by default
```

The build uses an ignored `.pages-build/` workspace to export real English routes
at `/` and the plugin (product and changelog) pages, plus the Chinese `/zh/` routes.
It omits the server proxy and catch-all route, exports `404.html`, disables
server image optimization, and adds `.nojekyll`. All page URLs below the Pages
origin include the `/rivetdeck-website` prefix. On Pages, unprefixed routes always
serve English; visitors choose Chinese using the language switcher. Server-side
cookie/header language negotiation remains available with the normal Next.js
build. Social images are generated at build time and are English only.

For another repository or a custom domain, set repository **Settings → Secrets
and variables → Actions → Variables**:

| Variable | Default | Custom domain example |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://cherrchen.github.io` | `https://example.com` |
| `PAGES_BASE_PATH` | `/rivetdeck-website` | `/` (root site) |

`NEXT_PUBLIC_SITE_URL` is an origin, without the repository path. Configure the
custom domain separately in **Settings → Pages**. Local root-domain exports use
`NEXT_PUBLIC_BASE_PATH='' NEXT_PUBLIC_SITE_URL=https://example.com pnpm build:pages`.
Rebuild after changing the path: it is embedded in browser bundles.

### Vercel / Next.js server

Import the repository into Vercel as a Next.js project and set
`NEXT_PUBLIC_SITE_URL` to the production origin. Leave `NEXT_PUBLIC_BASE_PATH`
empty. Every page and locale is prerendered statically; `proxy.ts` runs in front
of the cache and only decides which locale to serve. Use `pnpm build && pnpm start`
for a local production server; `pnpm start` does not serve the Pages `out/` export.

## Where content comes from

Facts are kept in typed data modules so a release changes one file:

| File | Content |
| --- | --- |
| `lib/site.ts` | Repository, release, npm and documentation URLs |
| `lib/releases.ts` | Rivetdeck downloads per platform (Microsoft Store listing, GitHub Release assets and sizes) and the recommendation order |
| `lib/multi-root-compat.ts` | Multi-root Workspace compatibility matrix and platforms |
| `lib/changelog.ts` | Changelog types, GitHub URL helpers and per-plugin documentation link maps; release content itself lives in the dictionaries under `*.changelog.releases` |
| `lib/themes.ts` | Theme Studio palettes used by the interactive preview |
| `lib/screenshots.ts` | Screenshot dimensions (alt text lives in the dictionaries) |
| `lib/i18n/dictionaries/` | All page copy, one typed file per locale |

When a new Rivetdeck release or plugin version ships, update those files and
re-run `pnpm check`. Compatibility status is declared per release and is never
inferred from version order.

## Languages

Locales are `en` (default, no URL prefix) and `zh` (`/zh/...`, Simplified Chinese).

How a request is routed (`proxy.ts`, pure logic in `lib/i18n/routing.ts`):

1. `/zh/...` is served and remembered in the `NEXT_LOCALE` cookie.
2. `/en/...` redirects (308) to the unprefixed URL and remembers English.
3. An unprefixed URL uses the cookie if present, otherwise the best match of
   `Accept-Language` (q-values respected; `zh-TW`, `zh-HK` etc. map to `zh`).
   English is served in place; Chinese redirects (307) to `/zh/...`.

Next follows the English rewrite with another proxy call, and that call is
served.

The language switcher in the header sets the cookie, so an explicit choice
always beats the browser language. Every page declares `hreflang` alternates and
`x-default` (`lib/i18n/metadata.ts`), and the sitemap lists each locale.

Copy lives in `lib/i18n/dictionaries/`. `en.ts` defines the structure and
`zh.ts` must match it exactly; `tests/i18n.test.ts` fails when keys, `{placeholders}`
or `<rich>` tags differ. Product names, commands, package names and paths are not
translated. Pages are server components that receive a dictionary; there is no
client-side i18n runtime.

To add a locale (for example `ja`):

1. Add it to `locales` and `localeConfig` in `lib/i18n/config.ts`.
2. Add `dictionaries/ja.ts` (typed as `Dictionary`) and register it in
   `dictionaries/index.ts`.
3. Check fonts in `app/globals.css` and run `pnpm check`. Routing, metadata, the
   sitemap and the language switcher read the locale list and need no changes.

## Downloads

The download section and the hero button adapt to the visitor's system
(`lib/platform.ts`, `components/home/download.tsx`):

- The server HTML lists every platform. After hydration the browser is inspected
  (`navigator.userAgentData`, then the user agent) and the matching platform is
  recommended; the other platforms stay one click away under "Other platforms
  and versions". Phones, iPadOS and ChromeOS keep the full list.
- **Windows:** the Microsoft Store listing is always first; the GitHub Release
  installers (matching architecture first) are the second choice.
- **macOS / Linux:** the GitHub Release build matching the CPU architecture.
  Only Chromium reports the architecture; elsewhere macOS defaults to Apple
  Silicon with a link to the Intel build, and Linux defaults to x64.

## Screenshots

Product images are captures of the native Rivetdeck Electron app; see
[`public/screenshots/README.md`](public/screenshots/README.md) for provenance and
`scripts/capture/` for the capture scripts.

## Design

Neutral black/white/gray scale with Geist, light and dark themes, and one
restrained accent per page identity (`data-identity` on the page root). Motion is
limited to short transitions and respects `prefers-reduced-motion`.
