import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { BeforeAfter } from '@/components/multi-root/before-after'
import { CompatTable } from '@/components/multi-root/compat-table'
import { InstallTabs } from '@/components/multi-root/install-tabs'
import { SecurityDiagram } from '@/components/multi-root/security-diagram'
import { TopologyDiagram } from '@/components/multi-root/topology-diagram'
import { ButtonLink } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import { Container } from '@/components/ui/container'
import { RootsMark } from '@/components/ui/logo'
import { Section } from '@/components/ui/section'
import { Frame, Screenshot } from '@/components/ui/screenshot'
import { COMPAT_PLUGIN_VERSION } from '@/lib/multi-root-compat'
import { SHOTS } from '@/lib/screenshots'
import { links, MULTI_ROOT_PACKAGE } from '@/lib/site'

const path = '/plugins/multi-root-workspace'
const title = 'Multi-root Workspace — one agent session, several writable folders'
const description =
  'A DSH plugin that widens the workspace sandbox from one root to a primary root plus additional roots, so the agent can read, edit and run commands across several repositories. Native tools, kernel-level enforcement, fail-closed.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  keywords: ['DeepSeek Harness', 'DSH plugin', 'multi-root workspace', 'monorepo', 'coding agent', 'sandbox'],
  openGraph: { type: 'website', url: path, siteName: 'Multi-root Workspace for DSH', title, description, locale: 'en_US' },
  twitter: { card: 'summary_large_image', title, description },
}

const nav = [
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'Install', href: '#install' },
  { label: 'Compatibility', href: '#compatibility' },
  { label: 'GitHub', href: links.multiRoot.repo, external: true },
  { label: 'npm', href: links.multiRoot.npm, external: true },
] as const

const footerColumns = [
  {
    title: 'Plugin',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Security', href: '#security' },
      { label: 'Install', href: '#install' },
      { label: 'Compatibility', href: '#compatibility' },
    ],
  },
  {
    title: 'Docs',
    links: [
      { label: 'README', href: links.multiRoot.readme },
      { label: 'Architecture', href: links.multiRoot.architecture },
      { label: 'Compatibility contract (ADR-0009)', href: links.multiRoot.adr.compat },
      { label: 'Changelog', href: links.multiRoot.changelog },
    ],
  },
  {
    title: 'Source',
    links: [
      { label: 'GitHub repository', href: links.multiRoot.repo },
      { label: 'npm package', href: links.multiRoot.npm },
      { label: 'Report an issue', href: links.multiRoot.issues },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { label: 'DeepSeek Harness', href: links.upstream },
      { label: 'Rivetdeck desktop app', href: '/' },
    ],
  },
]

export default function MultiRootPage() {
  return (
    <div data-identity="multi-root">
      <SiteHeader
        brand={
          <a href={path} className="flex items-center gap-2.5 font-semibold tracking-[-0.02em]" aria-label="Multi-root Workspace home">
            <span className="text-accent">
              <RootsMark />
            </span>
            Multi-root Workspace
            <span className="hidden rounded border border-border-strong px-1.5 py-0.5 font-mono text-[10px] font-normal text-fg-subtle sm:inline">DSH plugin</span>
          </a>
        }
        items={nav}
        cta={{ label: 'Install', href: '#install' }}
      />

      <main id="main">
        <Hero />
        <Problem />
        <Features />
        <Security />
        <Install />
        <Compatibility />
        <FinalCta />
      </main>

      <SiteFooter
        columns={footerColumns}
        note="Multi-root Workspace is an independent, MIT-licensed plugin for DSH (DeepSeek Harness). It is not made, endorsed or supported by DeepSeek. “DeepSeek Harness” is a trademark of DeepSeek and is used here only to describe compatibility."
      />
    </div>
  )
}

function Hero() {
  return (
    <section aria-labelledby="mr-hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <Container className="pt-16 pb-6 sm:pt-24">
        <div className="rise flex flex-wrap items-center gap-2 font-mono text-xs text-fg-muted">
          <a href={links.multiRoot.changelog} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg px-3 py-1 hover:text-fg">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />v{COMPAT_PLUGIN_VERSION}
            <span className="sr-only"> changelog (opens in a new tab)</span>
          </a>
          <span>MIT · npm · macOS · Linux</span>
        </div>
        <h1 id="mr-hero-title" className="rise rise-1 mt-6 max-w-4xl text-[40px] leading-[1.04] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
          One Workspace.
          <br />
          <span className="text-accent">Multiple Roots.</span>
        </h1>
        <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-8 text-fg-muted">
          Let a DSH agent read, edit and run commands across several repositories in a single session. The plugin widens the workspace sandbox from one root to a primary root plus N additional roots, and changes nothing else about how the agent works.
        </p>
        <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href="#install">Install the plugin</ButtonLink>
          <ButtonLink href={links.multiRoot.architecture} variant="secondary">
            Read the architecture ↗
          </ButtonLink>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
          {['Native read, write, edit and bash tools', 'Kernel and in-process enforcement', 'Absent when you add no roots'].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-accent">
                ●
              </span>
              {t}
            </li>
          ))}
        </ul>
      </Container>
      <Container className="pt-8 pb-20">
        <TopologyDiagram />
      </Container>
    </section>
  )
}

function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="The problem"
      title="Real projects are several repositories. A session only had one."
      lead="DSH treats the session origin as the only writable root. Work that spans a service, its client and a design system meant juggling sessions."
    >
      <BeforeAfter />
    </Section>
  )
}

const commands = [
  '# list the primary root and the additional roots',
  '/workspace-folders',
  '# register, name, remove or reveal a root',
  '/workspace-folders add ~/code/another-repo',
  '/workspace-folders alias 1 payments',
  '/workspace-folders remove 1',
  '/workspace-folders reveal 1',
]

function Features() {
  return (
    <Section
      id="features"
      tone="subtle"
      eyebrow="Features"
      title="Wider scope. Same agent."
      lead="The plugin answers one question differently: which directories belong to this workspace. Everything built on that answer keeps working."
    >
      <div className="space-y-20">
        <FeatureRow
          kicker="Multiple roots"
          title="A primary root plus as many additional roots as you register"
          body="The primary root is the session origin and cannot be removed. Additional roots are canonicalized, checked against the primary root and each other, and kept in an ordered list. Each one can be aliased, reordered, copied or revealed in your file manager."
          points={['Overlapping or nested roots are rejected at registration', 'A root that disappears or is swapped for a symlink stays listed but is not granted', 'With no additional root, behavior matches an uninstalled harness']}
          visual={
            <Frame caption="Workspace folders dialog in Rivetdeck (plugin v0.1.5, DSH 0.2.0-rc.2).">
              <Screenshot shot={SHOTS.foldersDialog} sizes="(min-width: 1200px) 560px, 100vw" />
            </Frame>
          }
        />

        <FeatureRow
          reverse
          kicker="Native tools"
          title="No new tools to learn"
          body="The agent keeps using read, write, edit and bash. The plugin adds no workspace_* tools. It replaces the two sandbox provider rows with subclasses that consult one shared scope, so file tools, bash and the terminal all see the same roots."
          points={['bash and the PTY keep the primary root as their default working directory', 'The additional-root topology reaches the model as part of the sandbox policy context, so it needs no introspection tool', 'Sandbox modes still apply: read-only grants no additional root']}
          visual={<ToolsVisual />}
        />

        <FeatureRow
          kicker="Workspace management"
          title="A command and a panel, one registry"
          body="Manage roots from a session with /workspace-folders, or from the Folders dialog at the sidebar foot of the Web GUI. Both go through the same validated registry, persisted per primary root, and both show the true state of every root."
          points={['Panel authority comes from the live session, never from a client-supplied path', 'Only one process per store may grant roots; a contending process fails closed', 'The panel is bilingual and follows the interface language']}
          visual={<CodeBlock title="session" prompt="" lines={commands} copyText={commands.filter((l) => !l.startsWith('#')).join('\n')} />}
        />

        <CrossRepo />

        <InstructionsFeature />
      </div>
    </Section>
  )
}

function FeatureRow({
  kicker,
  title,
  body,
  points,
  visual,
  reverse = false,
}: {
  kicker: string
  title: string
  body: string
  points: readonly string[]
  visual: React.ReactNode
  reverse?: boolean
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div className={reverse ? 'lg:order-2' : undefined}>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{kicker}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl">{title}</h3>
        <p className="mt-4 text-[15px] leading-7 text-fg-muted">{body}</p>
        <ul className="mt-5 space-y-2.5">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-sm leading-6 text-fg-muted">
              <span aria-hidden="true" className="mt-0.5 text-accent">
                →
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className={`min-w-0 ${reverse ? 'lg:order-1' : ''}`}>{visual}</div>
    </div>
  )
}

function ToolsVisual() {
  const kept = ['read', 'write', 'edit', 'bash', 'terminal']
  return (
    <div className="rounded-xl border border-border-strong bg-bg p-5 sm:p-6">
      <p className="text-xs font-medium text-fg-subtle">Unchanged for the agent</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {kept.map((t) => (
          <li key={t} className="rounded-md border border-border-strong bg-bg-subtle px-3 py-1.5 font-mono text-sm">
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs font-medium text-fg-subtle">Not added</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        <li className="rounded-md border border-dashed border-border-strong px-3 py-1.5 font-mono text-sm text-fg-subtle line-through decoration-fg-subtle">workspace_*</li>
      </ul>
      <p className="mt-6 text-xs font-medium text-fg-subtle">Widened</p>
      <p className="mt-3 rounded-md border border-accent bg-accent-soft px-3 py-2.5 font-mono text-sm">which directories belong to this workspace?</p>
    </div>
  )
}

function CrossRepo() {
  const steps = [
    { n: '1', title: 'Register', body: 'Add the other repositories to the session’s workspace.' },
    { n: '2', title: 'Ask once', body: 'Describe a change that touches the service and its client.' },
    { n: '3', title: 'Edit across roots', body: 'The agent edits files and runs commands in every granted root.' },
    { n: '4', title: 'Review per repo', body: 'Each repository keeps its own Git state, so changes stay reviewable.' },
  ]
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Cross-repo workflow</p>
      <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl">Change an API and its client in one turn</h3>
      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-fg-muted">
        The plugin’s journey test drives a real agent turn across two Git repositories in both the web and headless compositions, using a scripted model endpoint, so it needs no credentials.
      </p>
      <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="bg-bg p-5">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-accent font-mono text-xs text-accent">{s.n}</span>
            <h4 className="mt-4 font-medium">{s.title}</h4>
            <p className="mt-1.5 text-sm leading-6 text-fg-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function InstructionsFeature() {
  const roots = [
    { name: 'web', file: 'AGENTS.md', note: 'primary · upstream discovery' },
    { name: 'api', file: 'AGENTS.md', note: 'additional · injected by plugin' },
    { name: 'design-system', file: 'CLAUDE.md', note: 'additional · injected by plugin' },
  ]
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Workspace instructions</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl">Each root’s own AGENTS.md reaches the model</h3>
        <p className="mt-4 text-[15px] leading-7 text-fg-muted">
          Upstream discovery walks upward from the session directory, so it can never reach an additional root. The plugin adds exactly that missing path, with strict limits.
        </p>
        <figure className="mt-6 rounded-xl border border-border-strong bg-bg p-5" aria-label="Example: which instruction files reach the model">
          <ul className="space-y-2.5">
            {roots.map((r) => (
              <li key={r.name} className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-border bg-bg-subtle px-3 py-2">
                <span className="font-mono text-sm">
                  {r.name}/<span className="text-accent">{r.file}</span>
                </span>
                <span className="text-xs text-fg-subtle">{r.note}</span>
              </li>
            ))}
          </ul>
          <figcaption className="mt-3 text-xs text-fg-subtle">Example roots.</figcaption>
        </figure>
      </div>
      <div className="rounded-xl border border-border bg-bg p-6">
        <h4 className="font-medium">Accurate limits</h4>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-fg-muted marker:text-accent">
          <li>Covers the top level of each additional root, plus subdirectories the session has successfully read, written or edited.</li>
          <li>Delivered as a user-context message, never as system authority.</li>
          <li>One shared byte budget across all additional roots (64 KiB by default).</li>
          <li>Removing or redirecting a root sends an explicit revocation, because the earlier text is still in the conversation.</li>
          <li>Delivery state lives in process memory, so after a resume an instruction may be told again.</li>
          <li>Nested discovery for the primary root stays with upstream.</li>
        </ul>
      </div>
    </div>
  )
}

const controls = [
  {
    title: 'Re-resolving a path is not re-authorizing it',
    body: 'A registration records the canonical directory it was granted for. The scope grants it only while the path still resolves to that directory; a swapped directory or symlink is reported as redirected and not granted.',
  },
  {
    title: 'One scope, two enforcers',
    body: 'The in-process fence and the kernel sandbox consume the same scope. A parity matrix test compares the fence’s write decisions with the paths each kernel profile grants.',
  },
  {
    title: 'Fail closed',
    body: 'If the upstream sandbox profile cannot be recognized, the plugin refuses to run the command instead of quietly granting only the primary root. An unsupported DSH release stops the gated rows from starting.',
  },
  {
    title: 'Modes are inherited',
    body: 'Read-only grants no additional root. Workspace-write grants the primary root plus the registered roots. Full access is upstream’s decision and bypasses the sandbox.',
  },
  {
    title: 'One authority per store',
    body: 'A store-wide kernel lease means only one process grants roots. A contending process publishes an empty scope and rejects changes. Panel requests are tied to a live session, not to a client-supplied path.',
  },
  {
    title: 'Instructions are context, not authority',
    body: 'Instruction files from additional roots arrive as user-role context and are recorded in the session log like any other model-visible input.',
  },
]

function Security() {
  return (
    <Section
      id="security"
      eyebrow="Security architecture"
      title="Widen the grant. Keep the mechanism."
      lead="Additional roots are granted by the same mechanisms the harness already uses, not by prompts and not by switching to full access."
    >
      <SecurityDiagram />
      <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {controls.map((c, i) => (
          <li key={c.title} className="bg-bg p-5">
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-2 font-medium">{c.title}</h3>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{c.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-xl border border-border bg-bg-subtle p-5 sm:p-6">
        <h3 className="font-medium">What this does not claim</h3>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-fg-muted">
          <li>It is not a new security boundary. It extends the harness sandbox and inherits that sandbox’s guarantees and gaps.</li>
          <li>Enforcement covers writes. Read access follows the upstream sandbox.</li>
          <li>On Windows, the released version fences file tools only; kernel-level grants for bash are on the development branch.</li>
          <li>Upstream DSH is pre-stable. The plugin depends on internals, which is why support is an exact list of tested releases.</li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href={links.multiRoot.architecture} variant="secondary">
            Read the Architecture ↗
          </ButtonLink>
          <ButtonLink href={links.multiRoot.adr.dialect} variant="ghost">
            How kernel grants widen ↗
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}

function Install() {
  return (
    <Section
      id="install"
      tone="subtle"
      eyebrow="Getting started"
      title="Two commands, then add a folder."
      lead="The plugin installs through the DSH plugin manager. It is published on npm and works with the web and desktop profiles."
    >
      <ol className="space-y-10">
        <Step n="1" title="Install the package" body="Run this with a supported DSH runtime. Replace the profile for Electron desktop.">
          <InstallTabs />
        </Step>
        <Step
          n="2"
          title="Approve the one-time build step"
          body={
            <>
              The first install stops with <code className="rounded bg-bg-muted px-1.5 py-0.5 text-[13px]">ERR_PNPM_IGNORED_BUILDS</code>. The plugin carries one native dependency, <code className="rounded bg-bg-muted px-1.5 py-0.5 text-[13px]">koffi</code>, and pnpm 10 and later does not run dependency scripts unless you allow them. Set it to <code className="rounded bg-bg-muted px-1.5 py-0.5 text-[13px]">true</code> in that profile’s <code className="rounded bg-bg-muted px-1.5 py-0.5 text-[13px]">pnpm-workspace.yaml</code>, then run the install again. This lets that script run on your machine, outside the agent’s sandbox.
            </>
          }
        >
          <CodeBlock title="pnpm-workspace.yaml" prompt="" lines={['allowBuilds:', '  koffi: true']} copyText={'allowBuilds:\n  koffi: true'} />
        </Step>
        <Step n="3" title="Add a folder" body="The Folders action appears at the sidebar foot. In a session you can also use the command.">
          <CodeBlock
            title="session"
            prompt=""
            lines={['/workspace-folders add ~/code/another-repo', '/workspace-folders']}
            copyText="/workspace-folders add ~/code/another-repo"
          />
          <p className="mt-3 text-sm text-fg-subtle">The agent now has the same write rights in that directory as in the session’s own workspace.</p>
        </Step>
      </ol>

      <div className="mt-12 rounded-xl border border-border bg-bg p-5 text-sm leading-6 text-fg-muted sm:p-6">
        <h3 className="font-medium text-fg">Other sources and notes</h3>
        <ul className="mt-3 space-y-2">
          <li>
            Also installable from a tarball, a local path, or <code className="rounded bg-bg-muted px-1.5 py-0.5 text-[13px]">github:cherrchen/dsh-plugin-multi-root-workspace</code> (pin a tag). See the{' '}
            <a className="text-fg underline underline-offset-2" href={`${links.multiRoot.readme}#installation`} target="_blank" rel="noopener noreferrer">
              README<span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </li>
          <li>
            Running DSH from a source checkout? Use <code className="rounded bg-bg-muted px-1.5 py-0.5 text-[13px]">pnpm dsh</code> instead of <code className="rounded bg-bg-muted px-1.5 py-0.5 text-[13px]">dsh</code>.
          </li>
          <li>The plugin is not bundled with Rivetdeck. It installs separately and appears in the app’s Installed plugins.</li>
        </ul>
      </div>
    </Section>
  )
}

function Step({ n, title, body, children }: { n: string; title: string; body: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-12">
      <div>
        <span className="grid h-8 w-8 place-items-center rounded-full border border-accent font-mono text-sm text-accent">{n}</span>
        <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-fg-muted">{body}</p>
      </div>
      <div className="min-w-0">{children}</div>
    </li>
  )
}

function Compatibility() {
  return (
    <Section
      id="compatibility"
      eyebrow="Compatibility"
      title="An exact list, not a range."
      lead={
        <>
          The plugin replaces sandbox providers whose internals carry no semver promise, so it supports exact DSH releases that CI has run. The table shows the released plugin (v{COMPAT_PLUGIN_VERSION}) and, separately, what only the development branch accepts.
        </>
      }
    >
      <CompatTable />
      <p className="mt-6 max-w-3xl text-sm leading-6 text-fg-subtle">
        Status is declared per release and never inferred from version order. A green CI run on an unlisted release is evidence, not support. Read{' '}
        <a className="text-fg underline underline-offset-2" href={links.multiRoot.adr.compat} target="_blank" rel="noopener noreferrer">
          the compatibility contract<span className="sr-only"> (opens in a new tab)</span>
        </a>{' '}
        for the rules.
      </p>
    </Section>
  )
}

function FinalCta() {
  return (
    <section aria-labelledby="mr-cta-title" className="border-t border-border bg-bg-subtle py-20 sm:py-28">
      <Container className="text-center">
        <h2 id="mr-cta-title" className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">
          Give your agent the whole workspace.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-fg-muted">One command to install. No new tools to learn. Remove the roots and it behaves like it was never there.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="#install">Install the plugin</ButtonLink>
          <ButtonLink href={links.multiRoot.repo} variant="secondary">
            View on GitHub
          </ButtonLink>
          <ButtonLink href={links.multiRoot.npm} variant="ghost">
            {MULTI_ROOT_PACKAGE} ↗
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
