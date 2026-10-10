/**
 * English copy, and the structural source of truth: `Dictionary` is derived
 * from this object, so every other locale must provide exactly these keys.
 *
 * Conventions
 * - `{name}` is replaced by `fmt()`.
 * - `<tag>text</tag>` marks inline rich text rendered by `rich()`; a locale may
 *   reorder tags but must keep the same set of tags in each string.
 * - Product names (Rivetdeck, Theme Studio, Multi-root Workspace, DeepSeek
 *   Harness), commands, package names and paths are never translated.
 */

const en = {
  common: {
    skipToContent: 'Skip to content',
    opensInNewTab: ' (opens in a new tab)',
    themeToggle: 'Toggle light and dark theme',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    mobileNav: 'Mobile',
    primaryNav: 'Primary',
    switchLanguage: 'Switch language to {language}',
    copy: {
      label: 'Copy command',
      copy: 'Copy',
      copied: 'Copied',
      failed: 'Select & copy',
      announceCopied: 'Copied to clipboard',
      announceFailed: 'Copy failed; select the text manually',
    },
    notFound: {
      title: 'Page not found',
      body: 'That page does not exist or has moved.',
      home: 'Back to the home page',
    },
  },

  shots: {
    gitDiff: 'Rivetdeck window with the Workspaces sidebar, a new session composer, and the Git Changes panel listing two modified files and one untracked file on branch feat/checkout-flow.',
    home: 'Rivetdeck start screen with the Workspaces sidebar and a session composer showing the Workspace Write sandbox mode and the current Git branch.',
    plugins: 'Rivetdeck Plugins page listing the official plugins and the three installed plugins: Git, Multi-root Workspace and Theme Studio.',
    themes: 'Rivetdeck Settings dialog showing the Theme Studio theme cards: Default, Claude, Codex, Claude Cream, Graphite, OLED, Nordic, Paper and Warm.',
    folders: 'The Workspace folders dialog in Rivetdeck listing one primary working directory and two secondary working directories.',
    foldersDialog: 'Workspace folders dialog: primary working directory web, secondary directories api and design-system, with reorder, reveal and remove actions.',
    nordicDark: 'Rivetdeck with the Nordic theme applied in dark mode.',
    claudeLight: 'Rivetdeck with the Claude theme applied in light mode.',
  },

  themePreview: {
    groupLabel: 'Theme',
    appearance: 'Preview appearance',
    modes: { auto: 'Follow site', light: 'Light', dark: 'Dark' },
    caption: 'Rendered from the palette values in Theme Studio 0.1.3. Illustrative layout, not a screenshot.',
    descriptions: {
      default: 'The official Light / Dark / System appearance. Theme Studio adds no overlay.',
      claude: 'Warm ivory and clay.',
      codex: 'Neutral chrome with a clear blue accent.',
      'claude-cream': 'Editorial warm ivory with amber.',
      graphite: 'Low saturation, mid contrast, for long sessions.',
      oled: 'Near-black backgrounds, high-legibility text.',
      nordic: 'Cool blue-gray with a cyan-blue accent.',
      paper: 'Warm paper-like surfaces for reading and writing.',
      warm: 'Warm neutrals that reduce blue light.',
    },
    mock: {
      newSession: 'New Session',
      plugins: 'Plugins',
      workspaces: 'Workspaces',
      title: 'Into the Unknown',
      placeholder: 'Describe what you want to build…',
      sandbox: 'Workspace Write',
    },
  },

  home: {
    meta: {
      title: 'Rivetdeck — a native desktop app for DeepSeek Harness',
      description:
        'Rivetdeck packages the DeepSeek Harness agent runtime as a desktop app for macOS, Windows and Linux, with Git and Theme Studio preinstalled. Unofficial, open source, MIT.',
    },
    brandHome: 'Rivetdeck home',
    nav: { features: 'Features', plugins: 'Plugins', download: 'Download', github: 'GitHub' },
    cta: 'Download',
    footer: {
      rivetdeck: { title: 'Rivetdeck', features: 'Features', plugins: 'Plugins', download: 'Download', release: 'Release {tag}' },
      plugins: { title: 'Plugins', git: 'Git', themeStudio: 'Theme Studio', multiRoot: 'Multi-root Workspace' },
      source: { title: 'Source', repo: 'Rivetdeck on GitHub', license: 'MIT license', issues: 'Report an issue' },
      upstream: { title: 'Upstream', harness: 'DeepSeek Harness', brand: 'Brand guidelines' },
      note: 'Rivetdeck is an unofficial, third-party desktop distribution built on DeepSeek Harness. It is not made, endorsed or supported by DeepSeek. “DeepSeek Harness” is a trademark of DeepSeek and is used here only to describe compatibility.',
    },
    hero: {
      badge: '{tag} · pre-release',
      title: 'DeepSeek Harness, as a desktop app.',
      lead: 'Rivetdeck wraps the DeepSeek Harness runtime in a native window for macOS, Windows and Linux. Pick a workspace, start a session, review changes with Git, and theme it, all without leaving the app.',
      github: 'View on GitHub',
      meta: 'Developer preview · MIT licensed · Unofficial',
      caption: 'Captured from the Rivetdeck desktop build: Workspaces sidebar, session composer and the preinstalled Git panel.',
      downloadGeneric: 'Download',
      downloadFor: 'Download for {platform}',
      via: { store: 'via Microsoft Store', github: 'from GitHub Releases' },
      otherVersions: 'Other platforms and versions',
    },
    features: {
      eyebrow: 'Features',
      title: 'The harness you know, with the desktop parts handled.',
      lead: 'Rivetdeck does not replace the agent runtime. It packages it, supervises it, and adds the native surface around it.',
      caption: 'Start screen: workspace picker, session composer, sandbox mode and Git branch.',
      items: [
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
      ],
    },
    plugins: {
      eyebrow: 'Plugin ecosystem',
      title: 'Plugins are first-class, not bolted on.',
      lead: 'Two portable DSH plugins ship inside Rivetdeck. Others install separately and run on the same plugin system.',
      preinstalled: 'Preinstalled',
      sourceOnGithub: 'Source on GitHub',
      gitSummary: 'Local Git status, diffs, staging, commits and branch controls in the right sidebar.',
      themeStudioSummary: 'Eight builtin palettes under Settings → General → Themes, alongside the official Light, Dark and System appearance.',
      tryThemes: {
        title: 'Try the themes',
        lead: 'Pick a palette to see how the app chrome changes. Values come straight from Theme Studio.',
        captionNordic: 'Real capture: Nordic, dark.',
        captionClaude: 'Real capture: Claude, light.',
      },
      multiRoot: {
        badge: 'Optional · installed separately',
        body: 'Give an agent write access to a primary root and additional folders at once. The native read, write, edit and bash tools stay the same; the sandbox scope gets wider.',
        cta: 'Explore Multi-root Workspace',
      },
    },
    download: {
      eyebrow: 'Download',
      title: 'Get Rivetdeck for your system.',
      lead: 'Version <v>{version}</v>, published {date}. This is a pre-release. On Windows the Microsoft Store comes first; every other link is a file attached to the GitHub release.',
      recommended: 'Recommended for your system',
      detected: 'Detected: {platform}',
      mobileNotice: 'Rivetdeck is a desktop app. Choose your computer’s system below.',
      otherVersions: 'Other platforms and versions',
      otherVersionsLead: 'Every installer attached to the release, for all platforms.',
      platforms: {
        macos: { name: 'macOS', note: 'Apple Silicon and Intel' },
        windows: { name: 'Windows', note: 'Microsoft Store, or x64 and ARM64 installers' },
        linux: { name: 'Linux', note: 'AppImage and DEB, x64 and ARM64' },
      },
      channels: { store: 'Microsoft Store', github: 'GitHub Releases' },
      store: {
        action: 'Get it from Microsoft Store',
        kind: 'Microsoft Store',
        note: 'x64 and ARM64. Installs and updates through the Store.',
        badge: 'Store first',
        githubHeading: 'Or download directly from GitHub Releases',
      },
      arch: { appleSilicon: 'Apple Silicon', intel: 'Intel', x64: 'x64', arm64: 'ARM64' },
      formats: { dmg: 'DMG', zip: 'ZIP', exe: 'installer', appimage: 'AppImage', deb: 'DEB' },
      action: { download: 'Download {kind}', other: 'Other downloads' },
      macHint: 'Starts with Apple Silicon. On an Intel Mac, use the <a>Intel build</a>.',
      macHintIntel: 'Detected an Intel Mac. The Apple Silicon build is under other downloads.',
      verify: 'Verify downloads with <sums>{file}</sums>. Release notes and the Store (.appx) packages are on the <release>release page</release>. After installing, finish provider setup in the Harness UI before you start an agent session.',
      source: {
        title: 'Or run from source',
        body: 'Needs Node.js ^22.19.0 or ≥ 24 and pnpm. Builds the Harness runtime, then starts Electron.',
      },
    },
    openSource: {
      eyebrow: 'Open source',
      title: 'Independent, MIT-licensed, built on DeepSeek Harness.',
      lead: 'Rivetdeck is a community desktop distribution. It follows upstream development and maintains only the desktop packaging.',
      facts: [
        {
          title: 'Unofficial',
          body: 'Not affiliated with DeepSeek. The project follows the DeepSeek Harness brand guidelines: it describes compatibility and does not claim endorsement.',
        },
        { title: 'MIT license', body: 'Source, issues and releases are public. Third-party dependency notices ship with the repository.' },
        {
          title: 'Developer preview',
          body: 'Upstream now ships a first-party Desktop app, so this Electron distribution may move to archived maintenance. Its unique part is Electron integration (ctx.desktop) for portable plugins.',
        },
      ],
      repo: 'Rivetdeck on GitHub',
      upstream: 'Upstream DeepSeek Harness ↗',
    },
  },

  multiRoot: {
    meta: {
      title: 'Multi-root Workspace — one agent session, several writable folders',
      description:
        'A DSH plugin that widens the workspace sandbox from one root to a primary root plus additional roots, so the agent can read, edit and run commands across several repositories. Native tools, kernel-level enforcement, fail-closed.',
      keywords: ['DeepSeek Harness', 'DSH plugin', 'multi-root workspace', 'monorepo', 'coding agent', 'sandbox'],
    },
    brandHome: 'Multi-root Workspace home',
    pluginTag: 'DSH plugin',
    nav: { features: 'Features', security: 'Security', install: 'Install', compatibility: 'Compatibility', github: 'GitHub', npm: 'npm' },
    cta: 'Install',
    footer: {
      plugin: { title: 'Plugin', features: 'Features', security: 'Security', install: 'Install', compatibility: 'Compatibility' },
      docs: { title: 'Docs', readme: 'README', architecture: 'Architecture', contract: 'Compatibility contract (ADR-0009)', changelog: 'Changelog' },
      source: { title: 'Source', repo: 'GitHub repository', npm: 'npm package', issues: 'Report an issue' },
      ecosystem: { title: 'Ecosystem', harness: 'DeepSeek Harness', rivetdeck: 'Rivetdeck desktop app' },
      note: 'Multi-root Workspace is an independent, MIT-licensed plugin for DSH (DeepSeek Harness). It is not made, endorsed or supported by DeepSeek. “DeepSeek Harness” is a trademark of DeepSeek and is used here only to describe compatibility.',
    },
    hero: {
      changelog: ' changelog',
      titleLine1: 'One Workspace.',
      titleLine2: 'Multiple Roots.',
      lead: 'Let a DSH agent read, edit and run commands across several repositories in a single session. The plugin widens the workspace sandbox from one root to a primary root plus N additional roots, and changes nothing else about how the agent works.',
      install: 'Install the plugin',
      architecture: 'Read the architecture ↗',
      bullets: ['Native read, write, edit and bash tools', 'Kernel and in-process enforcement', 'Absent when you add no roots'],
    },
    topology: {
      title: 'Multi-root Workspace topology',
      desc: 'An agent session uses one scope. The scope is enforced by an in-process file fence and a kernel sandbox. Three roots are granted: the primary root web, and additional roots api and design-system. The directory Documents is not in scope and is not granted write access.',
      descMobile:
        'An agent session uses one scope enforced by an in-process fence and a kernel sandbox. The primary root web and the additional roots api and design-system are granted. The directory Documents is not granted write access.',
      session: 'Agent session',
      sessionSub: 'cwd = primary root',
      scope: 'Workspace scope',
      scopeSub: 'one authorization source',
      fence: 'In-process fence',
      fenceSub: 'file tools · writes and edits',
      fenceSubMobile: 'file tools',
      kernel: 'Kernel sandbox',
      kernelSub: 'bash and terminal',
      kernelSubMobile: 'bash · terminal',
      primary: 'primary · session origin',
      primaryMobile: 'primary',
      additional: 'additional root',
      additionalMobile: 'additional',
      noWrite: 'no write access',
      caption: 'Example topology with illustrative paths. Write access is decided by one scope; a directory outside it is not granted.',
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Real projects are several repositories. A session only had one.',
      lead: 'DSH treats the session origin as the only writable root. Work that spans a service, its client and a design system meant juggling sessions.',
      without: {
        label: 'Without the plugin',
        title: 'One session, one writable root',
        session: 'session {n}',
        points: [
          'A change that spans repositories needs one session per repository.',
          'You carry context between sessions by hand.',
          'The agent cannot edit the API contract and its client in one turn.',
        ],
      },
      with: {
        label: 'With Multi-root Workspace',
        title: 'One session, a primary root plus N more',
        session: 'session 1',
        points: [
          'The agent reads, edits and runs commands across every registered root.',
          'Each root keeps its own Git history and its own instruction files.',
          'The session working directory does not change; only the writable scope widens.',
        ],
      },
    },
    features: {
      eyebrow: 'Features',
      title: 'Wider scope. Same agent.',
      lead: 'The plugin answers one question differently: which directories belong to this workspace. Everything built on that answer keeps working.',
      roots: {
        kicker: 'Multiple roots',
        title: 'A primary root plus as many additional roots as you register',
        body: 'The primary root is the session origin and cannot be removed. Additional roots are canonicalized, checked against the primary root and each other, and kept in an ordered list. Each one can be aliased, reordered, copied or revealed in your file manager.',
        points: [
          'Overlapping or nested roots are rejected at registration',
          'A root that disappears or is swapped for a symlink stays listed but is not granted',
          'With no additional root, behavior matches an uninstalled harness',
        ],
        caption: 'Workspace folders dialog in Rivetdeck (plugin v0.1.5, DSH 0.2.0-rc.2).',
      },
      tools: {
        kicker: 'Native tools',
        title: 'No new tools to learn',
        body: 'The agent keeps using read, write, edit and bash. The plugin adds no workspace_* tools. It replaces the two sandbox provider rows with subclasses that consult one shared scope, so file tools, bash and the terminal all see the same roots.',
        points: [
          'bash and the PTY keep the primary root as their default working directory',
          'The additional-root topology reaches the model as part of the sandbox policy context, so it needs no introspection tool',
          'Sandbox modes still apply: read-only grants no additional root',
        ],
        unchanged: 'Unchanged for the agent',
        notAdded: 'Not added',
        widened: 'Widened',
        question: 'which directories belong to this workspace?',
      },
      management: {
        kicker: 'Workspace management',
        title: 'A command and a panel, one registry',
        body: 'Manage roots from a session with /workspace-folders, or from the Folders dialog at the sidebar foot of the Web GUI. Both go through the same validated registry, persisted per primary root, and both show the true state of every root.',
        points: [
          'Panel authority comes from the live session, never from a client-supplied path',
          'Only one process per store may grant roots; a contending process fails closed',
          'The panel is bilingual and follows the interface language',
        ],
        codeTitle: 'session',
        commands: [
          '# list the primary root and the additional roots',
          '# register, name, remove or reveal a root',
        ],
      },
      crossRepo: {
        kicker: 'Cross-repo workflow',
        title: 'Change an API and its client in one turn',
        body: 'The plugin’s journey test drives a real agent turn across two Git repositories in both the web and headless compositions, using a scripted model endpoint, so it needs no credentials.',
        steps: [
          { title: 'Register', body: 'Add the other repositories to the session’s workspace.' },
          { title: 'Ask once', body: 'Describe a change that touches the service and its client.' },
          { title: 'Edit across roots', body: 'The agent edits files and runs commands in every granted root.' },
          { title: 'Review per repo', body: 'Each repository keeps its own Git state, so changes stay reviewable.' },
        ],
      },
      instructions: {
        kicker: 'Workspace instructions',
        title: 'Each root’s own AGENTS.md reaches the model',
        body: 'Upstream discovery walks upward from the session directory, so it can never reach an additional root. The plugin adds exactly that missing path, with strict limits.',
        figure: 'Example: which instruction files reach the model',
        notes: { primary: 'primary · upstream discovery', additional: 'additional · injected by plugin' },
        exampleRoots: 'Example roots.',
        limitsTitle: 'Accurate limits',
        limits: [
          'Covers the top level of each additional root, plus subdirectories the session has successfully read, written or edited.',
          'Delivered as a user-context message, never as system authority.',
          'One shared byte budget across all additional roots (64 KiB by default).',
          'Removing or redirecting a root sends an explicit revocation, because the earlier text is still in the conversation.',
          'Delivery state lives in process memory, so after a resume an instruction may be told again.',
          'Nested discovery for the primary root stays with upstream.',
        ],
      },
    },
    security: {
      eyebrow: 'Security architecture',
      title: 'Widen the grant. Keep the mechanism.',
      lead: 'Additional roots are granted by the same mechanisms the harness already uses, not by prompts and not by switching to full access.',
      controls: [
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
      ],
      limits: {
        title: 'What this does not claim',
        points: [
          'It is not a new security boundary. It extends the harness sandbox and inherits that sandbox’s guarantees and gaps.',
          'Enforcement covers writes. Read access follows the upstream sandbox.',
          'On Windows, the released version fences file tools only; kernel-level grants for bash are on the development branch.',
          'Upstream DSH is pre-stable. The plugin depends on internals, which is why support is an exact list of tested releases.',
        ],
        architecture: 'Read the Architecture ↗',
        dialect: 'How kernel grants widen ↗',
      },
      diagram: {
        title: 'Multi-root Workspace enforcement architecture',
        desc: 'Agent file tools reach an in-process fence and agent bash and terminal reach a kernel sandbox. Both ask one workspace scope. The scope is fed by a registry that validates and persists roots, and grants a root only while its canonical path equals the recorded path. A compatibility gate at startup refuses unsupported DSH releases, and an unrecognized sandbox profile fails closed.',
        fileTools: 'File tools',
        shellTools: 'Shell tools',
        fence: 'In-process fence',
        fenceLines: ['ctx.fs · writes and edits', 'denies paths outside the scope'],
        kernel: 'Kernel sandbox',
        kernelLines: ['ctx.sandbox · Seatbelt, bwrap,', 'Landlock · unrecognized → refuse'],
        scope: 'Workspace scope',
        scopeLines: ['ctx.multiRootScope', 'grant iff realpath ==', 'recordedPath'],
        registry: 'Registry',
        registryLines: ['validated', 'per primary root', 'one authority'],
        gate: 'Startup compatibility gate',
        gateLine: 'Exact DSH release allowlist. If the release is not listed, the fence, sandbox, registry and instruction rows do not start.',
        caption: 'Enforcement path of the released plugin (v0.1.5). The numbered controls below list what each part guarantees and what it does not.',
      },
    },
    install: {
      eyebrow: 'Getting started',
      title: 'Two commands, then add a folder.',
      lead: 'The plugin installs through the DSH plugin manager. It is published on npm and works with the web and desktop profiles.',
      step1: { title: 'Install the package', body: 'Run this with a supported DSH runtime. Replace the profile for Electron desktop.' },
      tabs: {
        label: 'DSH profile',
        web: { label: 'Web profile', note: 'Run DSH in the browser or headless server.' },
        desktop: { label: 'Desktop profile', note: 'Electron desktop; the install method is identical.' },
      },
      step2: {
        title: 'Approve the one-time build step',
        body: 'The first install stops with <code>ERR_PNPM_IGNORED_BUILDS</code>. The plugin carries one native dependency, <code>koffi</code>, and pnpm 10 and later does not run dependency scripts unless you allow them. Set it to <code>true</code> in that profile’s <code>pnpm-workspace.yaml</code>, then run the install again. This lets that script run on your machine, outside the agent’s sandbox.',
      },
      step3: {
        title: 'Add a folder',
        body: 'The Folders action appears at the sidebar foot. In a session you can also use the command.',
        note: 'The agent now has the same write rights in that directory as in the session’s own workspace.',
      },
      other: {
        title: 'Other sources and notes',
        tarball: 'Also installable from a tarball, a local path, or <code>github:cherrchen/dsh-plugin-multi-root-workspace</code> (pin a tag). See the <readme>README</readme>.',
        source: 'Running DSH from a source checkout? Use <code>pnpm dsh</code> instead of <code>dsh</code>.',
        rivetdeck: 'The plugin is not bundled with Rivetdeck. It installs separately and appears in the app’s Installed plugins.',
      },
    },
    compat: {
      eyebrow: 'Compatibility',
      title: 'An exact list, not a range.',
      lead: 'The plugin replaces sandbox providers whose internals carry no semver promise, so it supports exact DSH releases that CI has run. The table shows the released plugin (v{version}) and, separately, what only the development branch accepts.',
      footnote: 'Status is declared per release and never inferred from version order. A green CI run on an unlisted release is evidence, not support. Read <contract>the compatibility contract</contract> for the rules.',
      region: 'DSH release support matrix',
      caption: 'Supported DSH releases for plugin version {version} and the development branch',
      columns: { release: 'DSH release', status: 'Status', since: 'Added in', notes: 'Notes' },
      platforms: 'Platforms',
      otherRelease: 'Any other release',
      sinceDev: 'development branch',
      status: { verified: 'Verified', partial: 'Partial', unreleased: 'Development only', unsupported: 'Unsupported' },
      notes: {
        '0.1.5-rc.2': 'Baseline of the compatibility contract.',
        '0.1.6-alpha.1': 'Sandbox confinement is asynchronous from this release.',
        '0.1.6-alpha.2': 'Same shapes as 0.1.6-alpha.1; panel session lookup fixed.',
        '0.1.7-alpha.1': 'Needs adapters: session format 4, in-process plugin packages, bash execute().result().',
        '0.1.7-alpha.2': 'Same shapes as 0.1.7-alpha.1.',
        '0.1.7-rc.1': 'Install enforces an exact peerDependencies match from this release.',
        '0.1.7-rc.2': 'Same shapes as 0.1.7-rc.1.',
        '0.2.0-rc.1': 'DSH 0.2 release candidate.',
        '0.2.0-rc.2': 'The runtime inside Rivetdeck 0.2.0-beta.2.',
        '0.2.1-alpha.1': 'Dynamic working directories; not in the published package.',
        '0.2.1-alpha.2': 'Development pin; not in the published package.',
        other: 'The gated rows do not start; the harness behaves as if the plugin were not installed.',
      },
      platformNotes: {
        macos: 'Seatbelt profile plus in-process fence',
        linux: 'bwrap or Landlock plus in-process fence',
        windows: 'Released: in-process fence for file tools only; bash cannot write additional roots. A root-set ACL runner exists on the development branch.',
      },
    },
    finalCta: {
      title: 'Give your agent the whole workspace.',
      lead: 'One command to install. No new tools to learn. Remove the roots and it behaves like it was never there.',
      install: 'Install the plugin',
      github: 'View on GitHub',
    },
  },
}

/** Recursively widens literal strings so other locales only have to match the structure. */
type Widen<T> = T extends string ? string : T extends readonly (infer U)[] ? Widen<U>[] : T extends object ? { [K in keyof T]: Widen<T[K]> } : T

export type Dictionary = Widen<typeof en>

export default en satisfies Dictionary
