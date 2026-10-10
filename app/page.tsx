import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemePreview } from '@/components/home/theme-preview'
import { ButtonLink } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import { Container } from '@/components/ui/container'
import { RivetMark } from '@/components/ui/logo'
import { Section } from '@/components/ui/section'
import { Frame, Screenshot } from '@/components/ui/screenshot'
import { assetUrl, DOWNLOADS, formatSize, RELEASE } from '@/lib/releases'
import { SHOTS } from '@/lib/screenshots'
import { links } from '@/lib/site'

const title = 'Rivetdeck — a native desktop app for DeepSeek Harness'
const description =
  'Rivetdeck packages the DeepSeek Harness agent runtime as a desktop app for macOS, Windows and Linux, with Git and Theme Studio preinstalled. Unofficial, open source, MIT.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: '/', siteName: 'Rivetdeck', title, description, locale: 'en_US' },
  twitter: { card: 'summary_large_image', title, description },
}

const nav = [
  { label: 'Features', href: '#features' },
  { label: 'Plugins', href: '#plugins' },
  { label: 'Download', href: '#download' },
  { label: 'GitHub', href: links.rivetdeck.repo, external: true },
] as const

const footerColumns = [
  {
    title: 'Rivetdeck',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Plugins', href: '#plugins' },
      { label: 'Download', href: '#download' },
      { label: `Release ${RELEASE.tag}`, href: RELEASE.url },
    ],
  },
  {
    title: 'Plugins',
    links: [
      { label: 'Git', href: links.git.repo },
      { label: 'Theme Studio', href: links.themeStudio.repo },
      { label: 'Multi-root Workspace', href: '/plugins/multi-root-workspace' },
    ],
  },
  {
    title: 'Source',
    links: [
      { label: 'Rivetdeck on GitHub', href: links.rivetdeck.repo },
      { label: 'MIT license', href: links.rivetdeck.license },
      { label: 'Report an issue', href: links.rivetdeck.issues },
    ],
  },
  {
    title: 'Upstream',
    links: [
      { label: 'DeepSeek Harness', href: links.upstream },
      { label: 'Brand guidelines', href: links.rivetdeck.brandGuidelines },
    ],
  },
]

export default function HomePage() {
  return (
    <>
      <SiteHeader
        brand={
          <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-[-0.02em]" aria-label="Rivetdeck home">
            <RivetMark />
            Rivetdeck
          </Link>
        }
        items={nav}
        cta={{ label: 'Download', href: '#download' }}
      />

      <main id="main" data-identity="rivetdeck">
        <Hero />
        <Features />
        <Plugins />
        <Download />
        <OpenSource />
      </main>

      <SiteFooter
        columns={footerColumns}
        note="Rivetdeck is an unofficial, third-party desktop distribution built on DeepSeek Harness. It is not made, endorsed or supported by DeepSeek. “DeepSeek Harness” is a trademark of DeepSeek and is used here only to describe compatibility."
      />
    </>
  )
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <Container className="pt-16 pb-12 sm:pt-24">
        <a
          href={RELEASE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rise inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg px-3 py-1 font-mono text-xs text-fg-muted hover:text-fg"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-warn" aria-hidden="true" />
          {RELEASE.tag} · pre-release
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <h1 id="hero-title" className="rise rise-1 mt-6 max-w-4xl text-[40px] leading-[1.04] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
          DeepSeek Harness, as a desktop app.
        </h1>
        <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-8 text-fg-muted">
          Rivetdeck wraps the DeepSeek Harness runtime in a native window for macOS, Windows and Linux. Pick a workspace, start a session, review changes with Git, and theme it, all without leaving the app.
        </p>
        <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href="#download">Download for your platform</ButtonLink>
          <ButtonLink href={links.rivetdeck.repo} variant="secondary">
            <GitHubIcon /> View on GitHub
          </ButtonLink>
        </div>
        <p className="mt-4 text-sm text-fg-subtle">Developer preview · MIT licensed · Unofficial</p>
      </Container>

      <Container className="pb-20">
        <Frame>
          <Screenshot shot={SHOTS.gitDiff} priority crop="aspect-[16/9] object-cover object-top" sizes="(min-width: 1200px) 1136px, 100vw" />
        </Frame>
        <p className="mt-3 text-sm text-fg-subtle">Captured from the Rivetdeck desktop build: Workspaces sidebar, session composer and the preinstalled Git panel.</p>
      </Container>
    </section>
  )
}

const featureItems = [
  {
    title: 'A real operating-system window',
    body: 'Electron starts DeepSeek Harness on a random 127.0.0.1 port and shows its Web application in a native window, with installers for macOS, Windows and Linux.',
  },
  {
    title: 'A locked-down renderer',
    body: 'The renderer has no Node.js integration, uses context isolation and Chromium sandboxing, and opens HTTP and HTTPS links in your system browser.',
  },
  {
    title: 'Workspace-first sessions',
    body: 'Choose the workspace folder from the app. The composer shows the sandbox mode and the current Git branch; agent shell commands otherwise start in your home directory.',
  },
  {
    title: 'Same runtime as upstream',
    body: 'Rivetdeck keeps the upstream Web application, agent runtime, profiles and workspace workflow. Provider setup happens in the Harness UI you already know.',
  },
] as const

function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title="The harness you know, with the desktop parts handled."
      lead="Rivetdeck does not replace the agent runtime. It packages it, supervises it, and adds the native surface around it."
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <Frame caption="Start screen: workspace picker, session composer, sandbox mode and Git branch.">
          <Screenshot shot={SHOTS.home} sizes="(min-width: 1200px) 640px, 100vw" />
        </Frame>
        <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">
          {featureItems.map((f) => (
            <div key={f.title} className="bg-bg p-5">
              <dt className="text-[15px] font-medium">{f.title}</dt>
              <dd className="mt-1.5 text-sm leading-6 text-fg-muted">{f.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

function Plugins() {
  return (
    <Section
      id="plugins"
      tone="subtle"
      eyebrow="Plugin ecosystem"
      title="Plugins are first-class, not bolted on."
      lead="Two portable DSH plugins ship inside Rivetdeck. Others install separately and run on the same plugin system."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <PluginCard
          name="Git"
          status="Preinstalled"
          href={links.git.repo}
          summary="Local Git status, diffs, staging, commits and branch controls in the right sidebar."
        >
          <Frame>
            <Screenshot shot={SHOTS.gitDiff} crop="aspect-[5/4] object-cover object-right-top" sizes="(min-width: 1200px) 560px, 100vw" />
          </Frame>
        </PluginCard>

        <PluginCard
          name="Theme Studio"
          status="Preinstalled"
          href={links.themeStudio.repo}
          summary="Eight builtin palettes under Settings → General → Themes, alongside the official Light, Dark and System appearance."
        >
          <Frame>
            <Screenshot shot={SHOTS.themes} crop="aspect-[5/4] object-cover object-center" sizes="(min-width: 1200px) 560px, 100vw" />
          </Frame>
        </PluginCard>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-bg p-5 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em]">Try the themes</h3>
            <p className="mt-1.5 max-w-xl text-sm leading-6 text-fg-muted">Pick a palette to see how the app chrome changes. Values come straight from Theme Studio.</p>
          </div>
        </div>
        <div className="mt-6">
          <ThemePreview />
        </div>
        <div className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
          <Frame caption="Real capture: Nordic, dark.">
            <Image src="/screenshots/app-theme-nordic-dark.png" alt="Rivetdeck with the Nordic theme applied in dark mode." width={2880} height={1800} sizes="(min-width: 1200px) 540px, 100vw" loading="lazy" className="h-auto w-full" />
          </Frame>
          <Frame caption="Real capture: Claude, light.">
            <Image src="/screenshots/app-theme-claude-light.png" alt="Rivetdeck with the Claude theme applied in light mode." width={2880} height={1800} sizes="(min-width: 1200px) 540px, 100vw" loading="lazy" className="h-auto w-full" />
          </Frame>
        </div>
      </div>

      <Link
        href="/plugins/multi-root-workspace"
        className="group mt-6 grid gap-8 rounded-xl border border-border-strong bg-bg p-5 transition-colors hover:border-fg sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center"
      >
        <div>
          <span className="inline-flex rounded-full border border-border-strong px-2.5 py-0.5 font-mono text-xs text-fg-muted">Optional · installed separately</span>
          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">Multi-root Workspace</h3>
          <p className="mt-3 max-w-md text-[15px] leading-7 text-fg-muted">
            Give an agent write access to a primary root and additional folders at once. The native read, write, edit and bash tools stay the same; the sandbox scope gets wider.
          </p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
            Explore Multi-root Workspace
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
        <Frame>
          <Screenshot shot={SHOTS.folders} sizes="(min-width: 1200px) 600px, 100vw" />
        </Frame>
      </Link>
    </Section>
  )
}

function PluginCard({
  name,
  status,
  href,
  summary,
  children,
}: {
  name: string
  status: string
  href: string
  summary: string
  children: React.ReactNode
}) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-bg p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-[-0.02em]">{name}</h3>
        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-xs text-accent">{status}</span>
      </div>
      <p className="mt-2 text-sm leading-6 text-fg-muted">{summary}</p>
      <div className="mt-5">{children}</div>
      <a href={href} target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 text-sm font-medium text-fg hover:underline">
        Source on GitHub <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </article>
  )
}

function Download() {
  return (
    <Section
      id="download"
      eyebrow="Download"
      title="Installers from GitHub Releases."
      lead={
        <>
          Version <span className="font-mono text-fg">{RELEASE.version}</span>, published {RELEASE.publishedAt}. This is a pre-release; every link below is a file attached to the release.
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {DOWNLOADS.map((platform) => (
          <article key={platform.id} className="flex flex-col rounded-xl border border-border bg-bg p-5">
            <h3 className="text-lg font-semibold tracking-[-0.02em]">{platform.name}</h3>
            <p className="mt-1 text-sm text-fg-subtle">{platform.note}</p>
            <ul className="mt-5 flex flex-1 flex-col gap-2">
              {platform.assets.map((asset) => (
                <li key={asset.file}>
                  <a
                    href={assetUrl(asset.file)}
                    className={`flex items-center justify-between gap-3 rounded-md border px-3 py-2.5 text-sm transition-colors ${
                      asset.primary ? 'border-fg bg-inverse-bg text-inverse-fg hover:opacity-90' : 'border-border hover:bg-bg-muted'
                    }`}
                  >
                    <span>
                      <span className="block font-medium">{asset.kind}</span>
                      <span className={`block font-mono text-xs ${asset.primary ? 'opacity-70' : 'text-fg-subtle'}`}>{asset.file.replace(`Rivetdeck-${RELEASE.version}-`, '')}</span>
                    </span>
                    <span className={`shrink-0 font-mono text-xs ${asset.primary ? 'opacity-70' : 'text-fg-subtle'}`}>{formatSize(asset.bytes)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm leading-6 text-fg-subtle">
        Verify downloads with <a className="text-fg underline underline-offset-2" href={assetUrl(RELEASE.checksums)}>{RELEASE.checksums}</a>. Release notes and the Store (.appx) packages are on the{' '}
        <a className="text-fg underline underline-offset-2" href={RELEASE.url} target="_blank" rel="noopener noreferrer">
          release page<span className="sr-only"> (opens in a new tab)</span>
        </a>
        . After installing, finish provider setup in the Harness UI before you start an agent session.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.02em]">Or run from source</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-fg-muted">Needs Node.js ^22.19.0 or ≥ 24 and pnpm. Builds the Harness runtime, then starts Electron.</p>
        </div>
        <CodeBlock
          title="shell"
          lines={[
            'git clone https://github.com/cherrchen/rivetdeck.git',
            'cd rivetdeck',
            'pnpm install',
            'pnpm run build',
            'pnpm --filter @dsh-electron/dsh-electron start',
          ]}
        />
      </div>
    </Section>
  )
}

function OpenSource() {
  return (
    <Section
      id="open-source"
      tone="subtle"
      eyebrow="Open source"
      title="Independent, MIT-licensed, built on DeepSeek Harness."
      lead="Rivetdeck is a community desktop distribution. It follows upstream development and maintains only the desktop packaging."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Fact title="Unofficial" body="Not affiliated with DeepSeek. The project follows the DeepSeek Harness brand guidelines: it describes compatibility and does not claim endorsement." />
        <Fact title="MIT license" body="Source, issues and releases are public. Third-party dependency notices ship with the repository." />
        <Fact title="Developer preview" body="Upstream now ships a first-party Desktop app, so this Electron distribution may move to archived maintenance. Its unique part is Electron integration (ctx.desktop) for portable plugins." />
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={links.rivetdeck.repo} variant="secondary">
          <GitHubIcon /> Rivetdeck on GitHub
        </ButtonLink>
        <ButtonLink href={links.upstream} variant="ghost">
          Upstream DeepSeek Harness ↗
        </ButtonLink>
      </div>
    </Section>
  )
}

function Fact({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-bg p-5">
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-fg-muted">{body}</p>
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  )
}
