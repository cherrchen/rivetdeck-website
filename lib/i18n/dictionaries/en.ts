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
    keywords: ['DeepSeek Harness', 'DeepSeek Harness desktop', 'Rivetdeck', 'coding agent', 'AI agent', 'open source'],
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
      badge: '{tag} is a pre-release',
      releaseNotes: 'Release notes',
      title: 'DeepSeek Harness, as a desktop app',
      lead: 'Rivetdeck wraps the DeepSeek Harness runtime in a native window for macOS, Windows and Linux. Pick a workspace, start a session, review changes with Git, and theme it, all without leaving the app.',
      github: 'View on GitHub',
      meta: ['Developer preview', 'MIT licensed', 'Unofficial distribution'],
      caption: 'Captured from the Rivetdeck desktop build: Workspaces sidebar, session composer and the preinstalled Git panel.',
      downloadGeneric: 'Download',
      downloadFor: 'Download for {platform}',
      via: { store: 'via Microsoft Store', github: 'from GitHub Releases' },
      otherVersions: 'Other platforms and versions',
    },
    features: {
      title: 'The same Harness, in its own window',
      lead: '<b>Rivetdeck does not replace the agent runtime.</b> It packages it, supervises it, and adds the native surface around it.',
      listLabel: 'What the desktop build adds',
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
        {
          title: 'Verified session checkpoints',
          body: 'A clean exit saves verified session checkpoints. If startup finds changed or unreadable session logs, a confirmation dialog lets you restore the last verified copy while keeping replaced data in quarantine.',
        },
        {
          title: 'Selective Windows uninstall cleanup',
          body: 'The NSIS uninstaller removes verified rebuildable toolchains and caches while keeping preferences, credentials, browser storage and Harness homes by default. Microsoft Store cleanup parity is not yet verified.',
        },
      ],
    },
    plugins: {
      title: 'Git and Theme Studio, preinstalled',
      lead: 'Two portable DSH plugins ship inside Rivetdeck. Others install separately and run on the same plugin system.',
      preinstalled: 'Preinstalled',
      sourceOnGithub: 'Source on GitHub',
      pluginPage: 'Plugin page',
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
      title: 'Download Rivetdeck',
      lead: 'Version <v>{version}</v>, published {date}. This is a pre-release.',
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
      action: { download: 'Download {kind}', other: 'Other downloads', version: '{platform} ({arch})' },
      macHint: 'Starts with Apple Silicon. On an Intel Mac, use the <a>Intel build</a>.',
      macHintIntel: 'Detected an Intel Mac. The Apple Silicon build is under other downloads.',
      verify: 'Verify downloads with <sums>{file}</sums>. Release notes and the Store (.appx) packages are on the <release>release page</release>. After installing, finish provider setup in the Harness UI before you start an agent session.',
      source: {
        title: 'Or run from source',
        body: 'Needs Node.js ^22.19.0 or ≥ 24 and pnpm. Builds the Harness runtime, then starts Electron.',
      },
    },
    openSource: {
      title: 'Open source, maintained independently',
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
      upstream: 'Upstream DeepSeek Harness',
    },
    changelog: {
      meta: {
        title: 'Rivetdeck changelog — every release',
        description:
          'Every published Rivetdeck release, newest first. Release notes live on GitHub Releases.',
      keywords: ['Rivetdeck changelog', 'release notes', 'DeepSeek Harness desktop', 'releases'],
      },
      nav: { home: 'Overview' },
      title: 'Changelog',
      lead: 'Every published Rivetdeck release, newest first.',
      note: 'Release notes live on GitHub Releases; early versions shipped as DeepSeek Harness Desktop and carry electron-dsh-* tags.',
      metaLine: '{count} releases · latest {version}',
      latest: 'Latest',
      compare: 'Compare with the previous release on GitHub',
      releaseNotes: 'Release notes',
      releases: [
        { version: '0.2.1-beta.1', date: '2026-10-23' },
        { version: '0.2.0-beta.5', date: '2026-10-21' },
        { version: '0.2.0-beta.4', date: '2026-10-17' },
        { version: '0.2.0-beta.3', date: '2026-10-14' },
        { version: '0.2.0-beta.2', date: '2026-10-09' },
        { version: '0.2.0-beta.1', date: '2026-10-05' },
        { version: '0.1.7-beta.2', date: '2026-09-30' },
        { version: '0.1.7-beta.1', date: '2026-09-28' },
        { version: '0.1.5-beta.3', date: '2026-09-24' },
        { version: '0.1.5-beta.2', date: '2026-09-14' },
        { version: '0.1.5-beta.1', date: '2026-09-14' },
        { version: '0.1.2-rc.1', date: '2026-09-11' },
        { version: '0.1.2-beta.5', date: '2026-09-07' },
        { version: '0.1.2-beta.4', date: '2026-09-06' },
        { version: '0.1.2-beta.3', date: '2026-09-05' },
        { version: '0.1.2-beta.2', date: '2026-09-04' },
        { version: '0.1.2-beta.1', date: '2026-09-03' },
        { version: '0.1.1-rc.2', date: '2026-08-28' },
        { version: '0.1.1-beta.11', date: '2026-08-26' },
        { version: '0.1.1-beta.10', date: '2026-08-25' },
        { version: '0.1.1-beta.9', date: '2026-08-24' },
        { version: '0.1.1-beta.8', date: '2026-08-24' },
        { version: '0.1.1-beta.7', date: '2026-08-23' },
        { version: '0.1.1-beta.6', date: '2026-08-23' },
        { version: '0.1.1-beta.5', date: '2026-08-23' },
        { version: '0.1.1-beta.4', date: '2026-08-22' },
        { version: '0.1.1-beta.3', date: '2026-08-22' },
        { version: '0.1.1-beta.2', date: '2026-08-21' },
        { version: '0.1.1-beta.1', date: '2026-08-21' },
        { version: '0.1.0-beta.5', date: '2026-08-21' },
        { version: '0.1.0-beta.4', date: '2026-08-21' },
        { version: '0.1.0-beta.3', date: '2026-08-21' },
        { version: '0.1.0-rc.8', date: '2026-08-20' },
        { version: '0.1.0-beta.2', date: '2026-08-20' },
        { version: '0.1.0-beta.1', date: '2026-08-20' },
        { version: '0.1.0-rc.7', date: '2026-08-17', tag: 'electron-dsh-v0.1.0-rc.7' },
        { version: '0.1.0-rc.6', date: '2026-08-17', tag: 'electron-dsh-v0.1.0-rc.6' },
        { version: '0.1.0-rc.5', date: '2026-08-17', tag: 'electron-dsh-v0.1.0-rc.5' },
      ],
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
    nav: { features: 'Features', security: 'Security', install: 'Install', compatibility: 'Compatibility', changelog: 'Changelog', github: 'GitHub', npm: 'npm' },
    cta: 'Install',
    footer: {
      plugin: { title: 'Plugin', features: 'Features', security: 'Security', install: 'Install', compatibility: 'Compatibility' },
      docs: { title: 'Docs', readme: 'README', architecture: 'Architecture', changelog: 'Changelog' },
      source: { title: 'Source', repo: 'GitHub repository', npm: 'npm package', issues: 'Report an issue' },
      plugins: { title: 'DSH plugins', git: 'Git', themeStudio: 'Theme Studio', multiRoot: 'Multi-root Workspace' },
      ecosystem: { title: 'Ecosystem', harness: 'DeepSeek Harness', rivetdeck: 'Rivetdeck desktop app' },
      note: 'Multi-root Workspace is an independent, MIT-licensed plugin for DSH (DeepSeek Harness). It is not made, endorsed or supported by DeepSeek.\n“DeepSeek Harness” is a trademark of DeepSeek and is used here only to describe compatibility.',
    },
    hero: {
      changelog: ' changelog',
      titleLine1: 'One Workspace.',
      titleLine2: 'Multiple Roots.',
      lead: 'Let a DSH agent read, edit and run commands across several repositories in a single session. The plugin widens the workspace sandbox from one root to a primary root plus N additional roots, keeps the native agent tools, and offers optional Auto Review with multi-root context (off by default).',
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
        body: 'The primary root is the session origin and cannot be removed. Additional roots are canonicalized, checked against the primary root and each other, and kept in an ordered list. Each one carries an access level — inherit, read-only or read-write — and can be aliased, reordered, copied or revealed in your file manager.',
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
          'Language servers treat each additional root as a separate workspace',
          'Optional Auto Review is off by default; enable the /auto-review row in Plugin Manager on DSH 0.2.1-rc.2 to give the reviewer root topology, access levels and live instructions',
          'The additional-root topology reaches the model as part of the sandbox policy context, so it needs no introspection tool',
          'Sandbox modes still apply to inherited roots: read-only grants none of them',
          'On DSH 0.2.1 the session can move its working directory — grants and the registry stay keyed to the session origin',
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
          'The dialog also browses an additional root’s files — expandable directories and text previews',
          'The Files tab switches to any additional root — a native tree fork keeps rows identical',
          'The panel is bilingual and follows the interface language',
        ],
        codeTitle: 'session',
        commands: [
          '# list the primary root and the additional roots',
          '# register, name, set access or reveal a root',
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
          title: 'One scope, three enforcers',
          body: 'The in-process fence, the kernel sandbox and the process fence that covers full access all consume the same scope. A parity matrix test compares the fence’s write decisions with the paths each kernel profile grants.',
        },
        {
          title: 'Fail closed',
          body: 'If the upstream sandbox profile cannot be recognized, the plugin refuses to run the command instead of quietly granting only the primary root. An unsupported DSH release stops the gated rows from starting.',
        },
        {
          title: 'Modes are inherited, access is per root',
          body: 'Each root is inherit, read-only or read-write. Inherited grants follow the session mode — read-only grants nothing; a fixed read-write root stays writable anyway. Under full access, where upstream bypasses the sandbox, a process fence keeps the denied roots denied.',
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
          'On Windows a root-set ACL runner confines bash with a restricted token; it inherits upstream’s partial enforcement and the confined shell is pwsh.',
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
        gateLine: 'Exact DSH release allowlist. If the release is not listed, the fence, sandbox, registry, instruction, LSP and file-browsing rows do not start.',
        caption: 'Enforcement path of the released plugin (v0.1.7). The numbered controls below list what each part guarantees and what it does not.',
      },
    },
    install: {
      eyebrow: 'Getting started',
      title: 'Two commands, then add a folder.',
      lead: 'The plugin installs through the DSH plugin manager. It is published on npm and works with the web and desktop profiles.',
      step1: { title: 'Install the package', body: 'Run this with a supported DSH runtime. Replace the profile for Electron desktop.' },
      tabs: {
        label: 'Install source',
        npm: { label: 'npm', note: 'Recommended. Pre-built artifacts; the first add needs one allowBuilds answer.' },
        tarball: { label: 'tarball', note: 'Pre-built offline package. You can also download the same tgz from the GitHub Release.' },
        github: { label: 'GitHub', note: 'Pulls source and builds it through prepare. Needs two allowBuilds answers; pin a tag.' },
        local: { label: 'local', note: 'Links a local checkout for development. Without a TTY, export CI=true first.' },
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
        tarball: 'Commands above use the web profile. For Electron desktop, replace <code>--profile web</code> with <code>--profile desktop</code>. GitHub installs need two <code>allowBuilds</code> answers. See the <readme>README</readme>.',
        source: 'Running DSH from a source checkout? Use <code>pnpm dsh</code> instead of <code>dsh</code>.',
        rivetdeck: 'The plugin is not bundled with Rivetdeck. It installs separately and appears in the app’s Installed plugins.',
      },
    },
    compat: {
      eyebrow: 'Compatibility',
      title: 'An exact list, not a range.',
      lead: 'The plugin replaces sandbox providers whose internals carry no semver promise, so it supports exact DSH releases that CI has run — each row lists the releases a published plugin version accepts; the current package is v{version}.',
      footnote: 'Status is declared per release and never inferred from version order. A green CI run on an unlisted release is evidence, not support. Read <contract>the compatibility contract</contract> for the rules. Optional Auto Review is supported only on DSH 0.2.1-rc.2 and ships disabled.',
      region: 'DSH release support matrix',
      caption: 'DSH releases supported by each published plugin version',
      columns: { version: 'Plugin version', supported: 'Supported DSH releases' },
      latest: 'latest',
      rangeNote: 'declared peer range',
      platforms: 'Platforms',
      status: { verified: 'Verified', partial: 'Partial', unreleased: 'Development only', unsupported: 'Unsupported' },
      platformNotes: {
        macos: 'Seatbelt profile plus in-process fence',
        linux: 'bwrap or Landlock plus in-process fence',
        windows: 'Root-set ACL runner (restricted token) plus in-process fence; the confined shell is pwsh',
      },
    },
    finalCta: {
      title: 'Give your agent the whole workspace.',
      lead: 'One command to install. No new tools to learn. Remove the roots and it behaves like it was never there.',
      install: 'Install the plugin',
      github: 'View on GitHub',
    },
    changelog: {
      meta: {
        title: 'Multi-root Workspace changelog — every release of the plugin for DSH',
        description:
          'Release history of the Multi-root Workspace plugin for DeepSeek Harness: every published version with its features, changes and fixes, newest first.',
      keywords: ['Multi-root Workspace changelog', 'DSH plugin releases', 'release notes', 'monorepo'],
      },
      nav: { plugin: 'Overview' },
      title: 'Changelog',
      lead: 'Every published version of the Multi-root Workspace plugin, newest first.',
      metaLine: '{count} releases · latest {version}',
      latest: 'Latest',
      compare: 'Compare with the previous version on GitHub',
      releaseNotes: 'Release notes',
      kinds: {
        added: 'Added',
        changed: 'Changed',
        fixed: 'Fixed',
        removed: 'Removed',
        deprecated: 'Deprecated',
        security: 'Security',
        upgrade: 'Upgrade notes',
      },
      releases: [
        { version: '0.1.9', date: '2026-10-20', sections: [
            { kind: 'added', items: [
                "<b>Optional Auto Review (off by default)</b>: the main package gains an <code>./auto-review</code> subpath export and a <code>multi-root-auto-review</code> patch row — a fork of upstream's experimental \"auto review\" that feeds the reviewer the additional roots' context: the current workspace topology, each root's effective access level, and live instruction files. The row ships <code>disabled: true</code>; while off it mounts neither the reviewer nor the review context and does not register the Auto preset. The ordinary support matrix is unchanged — only DSH <code>0.2.1-rc.2</code> can enable it, and enabling it on any other release fails loudly rather than silently degrading. To turn it on, open the <code>@dsh-electron/dsh-plugin-multi-root-workspace/auto-review</code> row in the Plugin Manager row list (profiles without hot reload ask for a restart), or set <code>disabled: false</code> in the profile's <code>cordis.patch.yml</code>; the context and the reviewer share this single switch.",
                "<b>Takes over the official reviewer while on</b>: the same switch mounts the multi-root review context and the fork reviewer, and stops the official <code>@deepseek-ai/dsh-experimental-auto-review</code> row in the same group at run time — the official bundle may sit before or after this package, the takeover only touches runtime state and never writes back the official row's persisted configuration; when the official bundle was never selected, the row runs standalone (it registers its own Auto preset). Disabling restores the official row per its original configuration on the next reload/restart and never re-selects Auto on its own; unloading any live Auto owner keeps the official Auto → Full access semantics. A profile that ever installed the old standalone companion package from a local tarball/link must remove its bundle selection and dependency before enabling this row (a leftover companion alongside the built-in entry is refused explicitly). Usage notes live in <autoReviewReadme>src/auto-review/README.en.md</autoReviewReadme> (<adr0021>ADR-0021</adr0021>, <adr0022>ADR-0022</adr0022>)."
              ] }
          ] },
        { version: '0.1.8', date: '2026-10-18', sections: [
            { kind: 'fixed', items: [
                '<b>Permission settings page unavailable on DSH 0.2.0</b>: when installed via <code>link:</code>, the plugin resolved optional packages it never loads — packages consumed only as mounted host services (<code>dsh-lsp</code> / <code>dsh-lsp-stdio</code> / <code>dsh-working-directory</code>, among others) — to the checkout’s own devDependencies, so a uniformly-versioned host was misjudged as <code>mixed</code>; and because the two replacement provider rows injected the compatibility gate while upstream <code>fs-sandbox</code> / <code>sandbox</code> were already disabled unconditionally, a refused gate removed <code>ctx.fs</code> / <code>ctx.sandbox</code>, taking down <code>ctx.shell</code> and <code>permissionPresets</code> with it (<code>permissionPresets/catalog</code> reported <code>service-unavailable</code>). Optional packages are now classified by who loads the resolved copy and through which anchor — runtime-loaded, host-service, or runner-anchored — so host-service copies inside the plugin root no longer testify, and the Windows ACL package is inspected from the <code>dsh-sandbox-local</code> anchor; the two provider rows no longer inject the gate and degrade to upstream-equivalent behavior on a refused installation, while every widened-authority row stays gated (see <adr0009>ADR-0009 amendment</adr0009>).'
              ] }
          ] },
        { version: '0.1.7', date: '2026-10-17', sections: [
            { kind: 'added', items: [
                '<b>Browse additional roots inside the Files tab</b>: a root switcher sits in the file-tree header (a menu entry disguised as the path label, listing the primary root plus every additional root and its state); picking an additional root hands the tree area to a byte-for-byte fork of the upstream Files tree — row height, icons, indent, and the empty state match natively item by item, the native reload is replaced by an identical icon button at the header’s original spot, and switching back to the primary root restores everything. The native open-in-app button is replaced by a fork that retargets to the selected root (<adr0015>ADR-0015</adr0015>, <adr0016>ADR-0016</adr0016>). Panel rows carry an access badge, every path copies through the same <code>PathCopy</code> control in one tap, read-only → read-write promotion goes through a confirmation layer, and the add-row access picker is an anchored dropdown.',
                '<b>Per-root access levels are now three-state</b>: <code>add [--inherit|--read-only|--read-write]</code> (or the panel’s add-row selector). <code>inherit</code> follows the session mode — it is the default for new registrations, and writable records stored by older plugin versions migrate to <code>inherit</code>; <code>read-only</code> stays readable, browsable, and part of LSP and instruction delivery but grants no write authority in any mode, including <code>danger-full-access</code>; a fixed <code>read-write</code> stays writable even in a globally read-only session. <code>/workspace-folders access <ref> inherit|read-only|read-write</code> and the panel switch access per root (widening requires the root to be available and never re-authorizes its path). The persistence layout stays downgrade-safe: an older plugin reads a read-only record as invalid rather than upgrading it to writable (<adr0013>ADR-0013</adr0013>, <adr0017>ADR-0017</adr0017>).',
                '<b>Full-access now enforces deny boundaries too</b>: the shell / pwsh executors, <code>run_code</code> (PTC), and agent PTYs all bypass <code>confine</code> in <code>danger-full-access</code>, so a process fence puts them under a restricted kernel profile (macOS Seatbelt, Linux bwrap — a host where upstream selected Landlock uses bubblewrap the same way, and refuses the combination at launch when bwrap is unusable); explicit read-only roots and tool-capped members stay denied in that mode, and the fs fence reads the same deny set (<adr0017>ADR-0017</adr0017>).',
                '<b>A restricted Full-access also protects <code>$DSH_HOME</code></b>: whenever any deny boundary exists (a read-only root, a tool-capped member, or an unavailable registry authority), the home directory joins the deny set — the durable store, the registry lease, and user profiles live there; with zero additional roots and a healthy authority Full-access stays byte-identical to upstream (<adr0017>ADR-0017</adr0017>).',
                '<b>Your panel terminals are never confined</b>: the process fence only prefixes spawns whose env carries <code>DSH_PTY_SESSION_ID</code> (stamped by the terminal-bash backend for agent PTYs); a terminal you open from the panel is user behavior and passes through in every mode (<adr0017>ADR-0017</adr0017>).',
                '<b>Selective read-only under Windows Full-access</b>: an opt-in, administrator-installed per-user privileged broker ships with the package — the installer grants a fixed set of LSA rights (<code>SeServiceLogonRight</code>, <code>SeCreateTokenPrivilege</code>, <code>SeAssignPrimaryTokenPrivilege</code>, <code>SeTcbPrivilege</code>, <code>SeDebugPrivilege</code>, <code>SeImpersonatePrivilege</code>) to the dedicated virtual service account <code>NT SERVICE\\DshMultiRootBroker-<install hash></code> only and never elevates the host user; the broker builds a normal deny-only group token for the restricted child, which the runner reads back and verifies before letting it run. Without the broker the combination refuses to launch; Windows enforcement still honestly reports its partial boundary (<adr0020>ADR-0020</adr0020>).',
                '<b>Per-tool write caps</b>: configuring <code>toolAccess: { <tool>: \'read-only\' }</code> on the <code>multi-root-scope</code> row makes that tool permanently unable to write any additional root (the primary root is unaffected); enforcement rides the real <code>tools/execute</code> dispatch context, and invalid configuration fails closed (<adr0013>ADR-0013</adr0013>).',
                '<b>Additional-root limit</b>: each primary root stores at most 16 additional-root records by default (<code>maxAdditionalRoots</code>, up to 64); new additions past the limit are refused while over-limit history keeps granting. The list prints <code>N of LIMIT</code> honestly (<adr0014>ADR-0014</adr0014>).',
                '<b>Provider-conflict detection</b>: when another plugin also replaces <code>ctx.fs</code> / <code>ctx.sandbox</code>, the multi-root rows fail loudly and grant nothing instead of depending on load order (<adr0014>ADR-0014</adr0014>).',
                '<b>Exact support for DSH <code>0.2.1-alpha.3</code>, <code>0.2.1-alpha.4</code>, <code>0.2.1-alpha.5</code>, <code>0.2.1-rc.1</code>, and <code>0.2.1-rc.2</code></b>. Since <code>alpha.3</code>, upstream <code>dsh-storage-domain</code> pins <code>zod</code> at <code>4.4.3</code>, and the two resolved zod copies’ types are mutually incompatible, so the domain schemas are now built by the zod the storage domain itself resolves. Since <code>alpha.4</code>, upstream version requirements prefer <code>engines.dsh</code>; this plugin still keeps <code>peerDependencies</code> as its single version contract. The dev pin moves to <code>0.2.1-rc.2</code> (cordis <code>4.0.5</code>; <code>alpha.3</code>–<code>alpha.5</code> use cordis <code>4.0.5-alpha.2</code>).'
              ] },
            { kind: 'changed', items: [
                '<b>Model-facing topology rewritten</b>: the prompt states authority truthfully per mode and platform — writable and read-only roots listed separately, cd/worktree switches do not change grants, grant changes constrain only later operations and new processes, capped tools are named, and Windows adds the restricted-token partial-enforcement caveat plus the note that reads are not confined by it (<adr0013>ADR-0013</adr0013>).'
              ] },
            { kind: 'fixed', items: [
                '<b>An unavailable registry authority no longer reads as "no restrictions"</b>: a process that read an empty root table (contended, storage failure, invalid configuration) used to let Full-access write anywhere; <code>danger-full-access</code> and <code>workspace-write</code> now grant writes only to the primary root (the shared platform temp areas are no longer writable), explicit deny boundaries still win, and the real scope returns once the lease is taken over (<adr0017>ADR-0017</adr0017>).',
                '<b>Renaming an ancestor can no longer lift a read-only boundary</b>: renaming a denied root’s parent used to move the tree outside its path-based restriction. Seatbelt now also denies writes to each ancestor directory itself (<code>(literal …)</code>), and bwrap self-binds ancestors into mountpoints so rename fails with EBUSY. Windows pins the root and its ancestors with directory handles that disallow delete sharing until the restricted Job’s descendants have drained, preventing a shell rename followed by a host file-tool bypass. These mechanisms constrain ancestor renames or metadata operations (<adr0017>ADR-0017</adr0017>, <adr0020>ADR-0020</adr0020>).',
                '<b>Negative authorization survives reordering, disappearance, and conflicts</b>: overlapping stored registrations both lose membership grants while retaining their trusted deny boundaries. New registrations also check the reserved boundaries of missing or redirected roots. Globally read-only sessions apply denies after adding fixed read-write roots; backends that cannot express subtree subtraction refuse to launch.',
                '<b>Windows checks every deny root for hardlinks before ACL changes</b>: any multi-link file or uninspectable node refuses startup before any ACL write, avoiding changes to shared objects in the pnpm store or other link locations. The host maintenance command <code>/workspace-folders isolate-profiles [--apply]</code> inspects by default; explicit apply only sets profile imports to copy. Existing dependencies still require the reported reinstall steps, and historical ACLs are not repaired (<adr0020>ADR-0020</adr0020>).',
                '<b>A deny root that vanished on Linux fails closed instead of opening up</b>: the root’s bwrap mount is mandatory again — when the directory disappears after registration or after the profile is built, namespace setup fails and the command never runs, instead of the path becoming recreatable under a writable parent mount (<adr0017>ADR-0017</adr0017>).',
                '<b>Re-registering roots preserves their access</b>: the command and panel omit access unless explicitly chosen, so reviving a read-only registration cannot silently upgrade it; the panel keeps re-registration available for existing unavailable entries at the root limit.',
                '<b>The panel accepts older hosts’ root lists</b>: responses without <code>limit</code> / <code>count</code> remain usable, while explicitly malformed values are still rejected.',
                '<b>Invalid toolAccess is reflected in the topology prompt</b>: the model sees that all additional-root writes are refused instead of being told read-write registrations are writable; a <code>null</code> root-limit configuration also fails closed.',
                '<b>Confined shell commands work again for installed copies on Windows (DSH 0.1.7-alpha.1+)</b>: with the published v0.1.6 installed from npm/tarball, the standalone Windows runner died before its first line with <code>ERR_MODULE_NOT_FOUND</code> — its static module graph imported upstream packages that cannot be resolved from the plugin’s install directory, so every confined command in a session with additional roots failed on the affected releases. The runner’s static graph is now <code>node:</code> builtins only, and it loads the upstream ACL package by self-reference from the upstream runner’s own location.',
                '<b>Network and device roots are rejected on Windows</b>: UNC (<code>\\\\server\\share</code>), <code>\\\\?\\</code>, <code>\\\\.\\</code>, and mapped network drives were previously accepted as ordinary additional roots; they are now rejected lexically as <code>unsupported-path</code> before any filesystem access, stored records are marked <code>invalid</code>, and the confined-execution side fails closed (<code>SandboxUnavailableError</code> / exit 127) rather than silently running unconfined (<adr0011>ADR-0011 amendment</adr0011>).',
                '<b>The Windows runner re-verifies roots before spawn</b>: after the ACL grant and before the child starts, every root must still exist and resolve to the same canonical directory, and <code>--temp</code> must be an existing directory; anything else exits 127 without launching an unconfined process.',
                '<b>"Reveal in file manager" no longer reports failure on Windows</b>: <code>explorer.exe</code> returns 1 on success, so exit codes 0 and 1 are both accepted on win32.',
                '<b>Panel file endpoints reject backslash paths</b>: on POSIX, <code>..\\..\\x</code> previously resolved inside the selected root; backslashes are now rejected lexically.',
                '<b>The Windows broker accepts UAC-filtered callers and diagnoses packaged children</b>: restricted commands launched by a non-elevated UAC administrator were previously refused for not being an "unrestricted identity"; only callers carrying restricting SIDs or an AppContainer are refused now, and a Store/MSIX child (such as <code>pwsh.exe</code> under the WindowsApps alias) gets a diagnostic pointing at the MSI/ZIP build before launch. After upgrading, reinstall the broker once with <code>install.ps1</code> for this to take effect (<adr0020>ADR-0020 amendment</adr0020>).',
                '<b>Panel file-tree calls are abortable</b>: in-flight <code>files</code> / <code>readFile</code> calls are cancelled on unmount, path, or session change, so stale responses no longer render as errors.'
              ] },
            { kind: 'changed', items: [
                '<b>Confined Windows shell behavior, documented</b>: the confined shell is pwsh (Git Bash/MSYS cannot start under the restricted token, identically to the upstream runner); under the plugin runner a confined child receives Ctrl+C and the runner mirrors its exit code, while an upstream-confined child inherits the runner’s ignore-Ctrl+C flag and cannot receive it — both are established behavior (<adr0011>ADR-0011 amendment</adr0011>).',
                'Install note added: if the first install was interrupted by the <code>koffi</code> build approval, a successful follow-up install may still leave the plugin absent from <code>dsh.profile.bundles</code>; one <code>remove</code> + <code>add</code> activates it (<tbInstallApproval>troubleshooting</tbInstallApproval>).'
              ] }
          ] },
        { version: '0.1.6', date: '2026-10-11', sections: [
            { kind: 'added', items: [
                'Exact-version support for DSH <code>0.2.1-alpha.1</code> and <code>0.2.1-alpha.2</code>. Session origin is separated from the dynamic working directory, so changing cwd does not change registry ownership or authorized roots. Adds Worktree management, additional-root LSP routing, Windows kernel-enforced multi-root access, and additional-root file browsing and preview in Workspace Folders.',
                'Additional-root instructions are restored and re-delivered after cwd changes when still applicable.'
              ] },
            { kind: 'changed', items: [
                'Additional-root file trees and LSP routing are isolated per root; Worktree operations do not mutate root-registry authorization.'
              ] }
          ] },
        { version: '0.1.5', date: '2026-09-30', sections: [
            { kind: 'added', items: [
                'Exact-version support for DSH <code>0.2.0-rc.1</code> and <code>0.2.0-rc.2</code>, while retaining every previously supported release. CI verifies every release in the compatibility contract across the enabled operating systems.'
              ] }
          ] },
        { version: '0.1.4', date: '2026-09-25', lead: 'With the exact allowlist contract from <code>v0.1.3</code> unchanged, the supported upstream runtimes grow to <code>0.1.7-rc.2</code>; the reasoning is still <adr0009>ADR-0009</adr0009>.', sections: [
            { kind: 'added', items: [
                '<b>Support for the upstream runtime <code>0.1.7-rc.2</code></b>. Relative to <code>0.1.7-rc.1</code>, <code>confine</code>, instruction rendering, session format 4, the tool-failure bit, panel icons, the current-session catalog, in-process boot, and bash execution keep their shapes, so the adapter layer has no new branch. cordis stays at <code>~4.0.4</code>. The install-time peer gate added in <code>rc.1</code> still requires this exact release in <code>peerDependencies</code>. The development pin remains <code>0.1.5-rc.2</code>.'
              ] }
          ] },
        { version: '0.1.3', date: '2026-09-24', lead: 'With the exact allowlist contract from <code>v0.1.2</code> unchanged, the supported upstream runtimes grow to <code>0.1.7-alpha.2</code> and <code>0.1.7-rc.1</code>; the reasoning is still <adr0009>ADR-0009</adr0009>.', sections: [
            { kind: 'added', items: [
                '<b>Support for the upstream runtimes <code>0.1.7-alpha.2</code> and <code>0.1.7-rc.1</code></b>. Relative to <code>0.1.7-alpha.1</code>, <code>confine</code>, instruction rendering, session format 4, the tool-failure bit, panel icons, the current-session catalog, in-process boot, and bash execution keep their shapes, so the adapter layer has no new branch. From <code>0.1.7-rc.1</code>, <code>dsh plugin add</code> refuses a plugin whose <code>peerDependencies</code> do not satisfy the running runtime, which is why both releases have to be on the exact allowlist. The development pin remains <code>0.1.5-rc.2</code>.'
              ] }
          ] },
        { version: '0.1.2', date: '2026-09-22', lead: 'With the exact allowlist contract from <code>v0.1.1</code> unchanged, the supported upstream runtimes grow to <code>0.1.6-alpha.2</code> and <code>0.1.7-alpha.1</code>; the reasoning is still <adr0009>ADR-0009</adr0009>.', sections: [
            { kind: 'added', items: [
                '<b>Support for the upstream runtime <code>0.1.6-alpha.2</code></b>, alongside <code>0.1.5-rc.2</code> and <code>0.1.6-alpha.1</code>. <code>confine</code> stays asynchronous and the instruction renderer keeps the <code>0.1.6-alpha.1</code> name; the client current-session id now comes from the catalog row’s <code>retainedBy.mainView</code> (see Fixed). The development pin remains <code>0.1.5-rc.2</code>.',
                '<b>Support for the upstream runtime <code>0.1.7-alpha.1</code></b>. <code>confine</code> and the instruction renderer keep their previous shapes, but this release needs adapters: session format 4 rejects <code>kind: \'plugin\'</code>, so additional-root instructions use this plugin’s own source kind <code>multi-root-workspace</code> (format 3 and earlier still use <code>plugin</code>); the tool-failure bit moved from the content block onto the message; panel icons moved from pixel names to the Regular weight; in-process boot uses <code>createRuntimeResolution</code> plus <code>PluginPackages</code>; bash execution moved from <code>shell.run</code> to <code>shell.execute().result()</code>. This release’s <code>dsh</code> depends on cordis <code>^4.0.3</code>, and a probe must pin cordis to that version — two copies of <code>@deepseek-ai/dsh-tools</code> make the tool scheduler’s Symbol miss, and tool calls die on the first step. The development pin remains <code>0.1.5-rc.2</code>.'
              ] },
            { kind: 'fixed', items: [
                '<b>An open session on <code>0.1.6-alpha.2</code> was shown as "No active session"</b> in the Workspace Folders panel. That release dropped <code>current</code> from the Session list snapshot; the session on screen is the catalog row whose <code>retainedBy.mainView</code> is positive, because the main view retains it with source <code>mainView</code>. <code>src/compat/client-session.ts</code> probes both shapes structurally. A populated catalog with nobody retained still shows the empty state and never falls back to <code>ids[0]</code>.'
              ] }
          ] },
        { version: '0.1.1', date: '2026-09-16', lead: 'The <b>hardening batch (H1–H4)</b> after <code>v0.1.0</code>: no new user-facing features, but four boundary gaps closed — cross-process authority, panel authority, upstream compatibility, and additional-root instructions. The reasoning lives in <adr0007>ADR-0007</adr0007>, <adr0008>ADR-0008</adr0008>, <adr0009>ADR-0009</adr0009>, and <adr0010>ADR-0010</adr0010>.', sections: [
            { kind: 'upgrade', title: 'Upgrade Notes (Breaking Changes)', items: [
                '<b>The first <code>dsh plugin add</code> fails once, from every install source</b>: this release introduces the native dependency <code>koffi</code> (the FFI wrapper behind Registry Authority on Windows), and pnpm ≥10 runs no dependency build script by default, so the first <code>add</code> exits with <code>[ERR_PNPM_IGNORED_BUILDS]</code> and the plugin never reaches <code>dsh.profile.bundles</code>. <code>dsh</code> leaves the pending decision in that profile’s <code>pnpm-workspace.yaml</code> (<code>koffi: set this to true or false</code>); set it to <code>true</code> and run <code>add</code> again. The npm and tarball sources had no such step in <code>v0.1.0</code>. See <tbInstallApproval>Troubleshooting: the install stops at build approval</tbInstallApproval>.',
                '<b>The supported upstream runtimes narrow to the exact list <code>0.1.5-rc.2</code>, <code>0.1.6-alpha.1</code></b> (they used to be the range <code>>=0.1.2-alpha.4 <0.2.0</code>). When the host release is neither of those, or several <code>@deepseek-ai/dsh-*</code> packages are mixed across versions, the <code>fs</code> / <code>sandbox</code> / <code>registry</code> / <code>instructions</code> rows <b>do not start</b>: the composition degrades to "this plugin is not installed" and prints an explanation at startup. The reason is that this plugin replaces the fence itself and works by recognizing argv shapes measured on specific upstream releases, so a semver range is a promise about versions nobody verified (<adr0009>ADR-0009</adr0009>). The diagnosis steps are in <tbUnsupported>Troubleshooting: a DSH release outside the support matrix</tbUnsupported>. <b>If you are still on the <code>0.1.2-rc.1</code> runtime that <code>v0.1.0</code> was measured against (for example a runtime bundled with an installed desktop app), upgrade that runtime first — otherwise this release has no effect.</b>',
                '<b>The panel no longer accepts a client-named root</b>: every panel endpoint requires <code>sessionId</code>, and the primary root comes only from the host-side <code>session.header.cwd</code>. The client <code>primaryRoot</code> field and the <code>sandboxPolicy</code> fallback are gone. When the browser has no active session, the panel shows "No active session" and does not call the host at all (<adr0008>ADR-0008</adr0008>).'
              ] },
            { kind: 'added', items: [
                '<b>Cross-process Registry Authority (H1)</b>: at most one DSH process may hold the root registry per <code>$DSH_HOME</code> (POSIX <code>flock</code> / Windows named semaphore, released by the kernel when the process exits or crashes). A contending process fails closed — it publishes an empty scope and registry mutations report <code>registry-contended</code>; once the holder exits, <code>/workspace-folders list</code> or a panel refresh takes over through <code>refresh()</code> (<adr0007>ADR-0007</adr0007>).',
                '<b>An additional root’s own instruction files now reach the model (H4)</b>: the root’s <b>top-level</b> <code>AGENTS.md</code> / <code>CLAUDE.md</code> are injected before the first step of a session; instruction files in the subdirectories the session has <b>successfully</b> touched with <code>read</code> / <code>write</code> / <code>edit</code> (including every ancestor directory of a touched file, up to the additional root) are injected incrementally as those directories come up for examination; a changed file is re-sent on its own, and a file or root that disappears is <b>explicitly withdrawn</b>. All additional roots share a 64 KiB budget, and delivery is a <code>user</code>-role <code>{ kind: \'plugin\', form: \'instructions\' }</code> message (never <code>systemPrompt</code>). Upstream discovery walks upward from the session cwd and can never reach an additional root — that is why this exists (<adr0010>ADR-0010</adr0010>).',
                '<b>Support for a second upstream runtime, <code>0.1.6-alpha.1</code></b>, alongside the <code>0.1.5-rc.2</code> baseline; both have run the full matrix (the sync/async shape of <code>confine</code>, the renamed instruction renderer, and the two LLM wire protocols are absorbed by the adapter layer and the smoke scripts).',
                '<b><code>pnpm compat:check</code></b>: a consistency gate over the allowlist / <code>peerDependencies</code> / development pin / installed tree, run as the first CI step.',
                '<b>The <code>multi-root-compat</code> startup gate row</b>: the version verdict became a precondition for the other security-relevant rows instead of a log line.',
                '<b>A weekly upgrade lane</b> (<code>upgrade.yml</code>): it re-points the pin at the newest upstream pre-release and runs the full matrix, with read-only permissions, no commits, and no automatic widening of the allowlist.',
                'Two troubleshooting entries: <tbUnsupported>a DSH release outside the support matrix</tbUnsupported> and <tbRegistryOwner>the registry owned by another process</tbRegistryOwner>.'
              ] },
            { kind: 'changed', items: [
                'Version differences are concentrated in the <code>src/compat/</code> adapter layer and decided by <b>structural probes</b> (is the return value thenable? which export name exists?) rather than by comparing version strings; business code contains no version checks at all.',
                'The two optional peers (<code>@deepseek-ai/dsh-llm</code>, <code>@deepseek-ai/dsh-agent-instructions</code>) are now <b>loaded on demand</b>: the barrel’s load-time dependency set equals the required-package set, so a minimal composition that never builds a message cannot fail while loading.',
                '<code>pnpm verify:all</code> deliberately <b>excludes</b> <code>compat:check</code> (the upgrade lane must run the full matrix on a candidate that is not on the allowlist yet); the main CI lane runs it separately, first.',
                'New <code>./compat</code> and <code>./instructions</code> subpath exports.',
                'Installation and release: the <code>prepare</code> script is now self-contained (git installs build on the spot through pnpm, after the user authorizes <code>allowBuilds</code>); the README documents all four installation sources (npm / tarball / local path / GitHub); npm publishing moved to <b>trusted publishing (OIDC)</b>, so the repository stores no npm credential at all.'
              ] },
            { kind: 'fixed', items: [
                '<b>Authority teardown order</b>: the old code released the kernel lease *before* closing the domain, so a successor process could acquire the lease and open a snapshot missing this process’s last write. The whole teardown now runs inside the store-wide authority transition queue as "drain in-flight mutations → close the domain → release the lease", and sets <code>disposed</code> to refuse later acquisitions (<code>tests/registry-lease.spec.ts</code>).',
                '<b>Instruction delivery state is committed from the actual artifact</b>: a renderer that omits or truncates a file no longer records a full digest; a message that fails to build or is cancelled is no longer treated as delivered; a spent budget still runs withdrawals, so cross-root withdrawals and deferred touches are no longer skipped.',
                '<b>Instruction files in intermediate directories</b> of an additional root could never reach the model (only the touched file’s parent directory was examined); every ancestor directory is now examined.',
                '<b><code>DSH_MULTI_ROOT_COMPAT=warn</code> tightened</b>: it relaxes <code>unsupported</code> only (a consistent tree the allowlist does not name yet — exactly what the upgrade lane probes). <code>mixed</code> / <code>incomplete</code> are rejected in both modes.',
                '<b>"Package absent" is separated from "installed but failed to evaluate"</b>: the latter is no longer cached as an absence, so the process cannot silently stop delivering additional-root instructions.',
                '<b>Windows lock naming is normalized by physical path</b>: two processes reaching one store through a path alias (junction / symlink) used to hash different names and could both become the authority.',
                '<b>Session event pairing is scoped per session</b>: the same <code>tool/call</code> id in two sessions no longer overwrites the other session’s pending call.',
                '<b>Shell input handling in the upgrade workflow</b>: the manual version and the candidate version travel through step <code>env</code> and are validated as a single line instead of being interpolated into <code>run</code>.',
                '<b>A local pack no longer carries earlier builds</b>: <code>lib/</code> is stripped of the previous build’s JavaScript before <code>bundle</code> runs (tsdown’s shared chunks are content-hashed, so an old name never disappears on its own). The tarball <code>pnpm pack</code> produces now contains exactly one build’s artifacts instead of shipping historical chunks as dead code (<code>files</code> publishes every <code>lib/*.js</code>).'
              ] }
          ] },
        { version: '0.1.0', date: '2026-09-13', lead: 'The first release: the three MVP milestones (M1–M3).', sections: [
            { kind: 'added', items: [
                '<b>Plugin skeleton and composition (M1)</b>: a bundle patch replaces the upstream <code>fs-sandbox</code> and <code>sandbox</code> provider rows and inserts the plugin’s rows (<code>bash-sandbox</code> stays upstream — all bash and PTY confinement goes through <code>ctx.sandbox</code>). With no additional root configured, behavior is item-for-item identical to an uninstalled harness; the three structural risks (composition, disable/insert ordering, duplicate provides) are pinned by differential tests.',
                '<b>Multi-root capability (M2)</b>: <code>ctx.multiRootScope</code> (the single grant source), <code>MultiRootFileSystem</code> (the in-process containment fence, subclassing upstream’s <code>LocalFileSystem</code>, which has no fence of its own), and <code>MultiRootSandboxProvider</code> (cloning the upstream grant spelling onto Seatbelt / bwrap / Landlock profiles for the additional roots). The fs side and bash/PTY share one scope; security does not degrade.',
                '<b>A model-visible topology snapshot</b>: emitted through <code>systemPrompt.context</code> only under <code>workspace-write</code> with a non-empty root set (same workspace, cwd unchanged); empty-root and read-only output stays byte-identical.',
                '<b>The root registry (M3)</b>: persisted in the <code>multi_root_workspace</code> storage domain keyed by the canonical primary root, validated on every write and every read; each record carries a <code>recordedPath</code>, and <b>re-resolving a path is not re-authorizing it</b> — a directory replaced by a symlink pointing elsewhere is marked <code>redirected</code> and stops being granted.',
                '<b>The <code>/workspace-folders</code> command</b>: <code>list</code> / <code>add <path></code> (with no argument it opens the system directory picker) / <code>alias</code> / <code>remove</code> / <code>reveal</code>, all usable in headless compositions too.',
                '<b>The Workspace Folders browser panel</b>: a sidebar-foot action plus a self-drawn dialog talking to the host over the plugin’s own Connection RPC channel; bilingual copy following the UI language, with every color taken from the host’s <code>var(--dsw-*)</code> design tokens.',
                '<b>A cross-repository journey e2e</b> (<code>pnpm smoke:journey</code>): it drives a real agent turn in both the <code>web</code> and <code>headless</code> compositions across two Git repositories (primary root <code>repo-a</code>, additional root <code>repo-b</code>) and asserts that writes outside the roots are refused. No model credentials are needed (the model endpoint is scripted).',
                '<b>Installation sources</b>: npm registry / tarball / local path / GitHub; a tag-triggered <code>release.yml</code> runs verify → npm publish (with provenance) → GitHub Release.',
                '<b>Platform scope</b>: full kernel-level multi-root on macOS (Seatbelt) and Linux (bwrap / Landlock); Windows covers the <code>fs</code> write path, while multi-root for confined bash/PTY is out of scope for this phase (a one-time explicit warning is printed when the scope is non-empty).'
              ] },
            { kind: 'fixed', items: [
                'All eight findings of the pre-release external review (three of them release-blocking) are fixed, each with a regression test: a registered directory replaced by a symlink transplanting its authority (which introduced <code>recordedPath</code> — <b>re-resolving a path is not re-authorizing it</b>), concurrent registry mutations losing a write or reviving a revoked grant (per-primary-root mutations are serialized), a refresh not re-checking directories, a typed path being overwritten by the directory picker, the <code>reveal</code> response contract and failure code, duplicate ids not validated, the primary root missing from nesting validation, and CI testing before building.'
              ] }
          ] }
      ],
    },

  },

  git: {
    meta: {
      title: 'Git for DSH — status, diffs and commits in the right sidebar',
      description:
        'A portable DSH plugin that puts local Git status, staged and working-tree diffs, a lane graph and branch controls into the right sidebar. Git runs through ctx.subprocess with separate argv values — never a shell.',
      keywords: ['DeepSeek Harness', 'DSH plugin', 'git', 'sidebar', 'diff', 'commit graph', 'coding agent'],
    },
    brandHome: 'Git plugin home',
    nav: { features: 'Features', design: 'Design', install: 'Install', compatibility: 'Compatibility', changelog: 'Changelog', github: 'GitHub', npm: 'npm' },
    cta: 'Install',
    footer: {
      plugin: { title: 'Plugin', features: 'Features', design: 'Design', install: 'Install', compatibility: 'Compatibility' },
      docs: { title: 'Docs', readme: 'README', architecture: 'Architecture', changelog: 'Changelog' },
      source: { title: 'Source', repo: 'GitHub repository', npm: 'npm package', issues: 'Report an issue' },
      plugins: { title: 'DSH plugins', git: 'Git', themeStudio: 'Theme Studio', multiRoot: 'Multi-root Workspace' },
      ecosystem: { title: 'Ecosystem', rivetdeck: 'Rivetdeck desktop app', harness: 'DeepSeek Harness' },
      note: 'Git is an independent, MIT-licensed plugin for DSH (DeepSeek Harness). It is not made, endorsed or supported by DeepSeek.\n“DeepSeek Harness” is a trademark of DeepSeek and is used here only to describe compatibility.',
    },
    hero: {
      changelog: ' changelog',
      titleLine1: 'The repository,',
      titleLine2: 'inside the session.',
      lead: 'One portable plugin gives a DSH host a real Git surface: status, diffs, history and branch controls in the right sidebar. The same package runs on a web profile and in Rivetdeck, where it is preinstalled.',
      install: 'Install the plugin',
      readme: 'Read the README ↗',
      bullets: ['Changes, Graph and Worktrees tabs in the right sidebar', 'Git through ctx.subprocess — never a shell', 'No model tools, no prompt content'],
      shotCaption: 'The Changes tab in Rivetdeck: two modified files and one untracked file on feat/checkout-flow.',
    },
    features: {
      eyebrow: 'Features',
      title: 'The whole review loop, without leaving the window.',
      lead: 'Changes, Graph and Worktrees join the upstream right sidebar as pages through its standard registration — and every file comparison opens as a dsh-resource diff.',
      changes: {
        kicker: 'Changes',
        title: 'Status, staging and the commit in one tab',
        body: 'Porcelain v2 status in staged, unstaged and untracked sections, each row badged with its letter. A plus or minus toggles the index; undo discards behind a second confirmation that names the path.',
        points: [
          'Split commit button: Commit, Amend, Commit & Push, Commit & Sync',
          'Auto-growing commit message field with a Generate control',
          'Refresh and reveal-in-folder actions live inside the Git frame',
        ],
        caption: 'Staged, unstaged and untracked sections; the branch sits beside refresh.',
      },
      diff: {
        kicker: 'Diffs',
        title: 'One file, one side, one addressable tab',
        body: 'Every comparison is a dsh-resource://git/diff address, so the staged and working-tree diffs of one file open side by side. Asking for an address that already exists reveals its tab and refreshes it on a revision counter.',
        points: [
          'Rendering is the official DSH DiffBlock — copying, folding and line wrapping included where the host offers them',
          'Binary, metadata-only, empty and truncated files are distinguished, not flattened',
          'The address is the tab identity, so diffs restore with the layout',
        ],
        addressesTitle: 'Two addresses for one file',
        addressStaged: 'staged comparison',
        addressWorktree: 'working-tree comparison',
      },
      graph: {
        kicker: 'Graph',
        title: 'A lane graph that pages itself',
        body: 'History renders as a canvas-drawn lane graph in one continuous coordinate space, so rails and merge edges never break at row boundaries. A scroll sentinel appends older commits instead of materializing everything.',
        points: [
          'Auto, All and First-parent scopes beside refresh',
          'Kind-colored HEAD, branch, remote and tag chips on each line',
          'A hover card carries the full subject, hash, author and date',
        ],
        mock: [
          { lane: 'merge', subject: 'Merge pull request #19: support the 0.2.1 release candidates', refs: 'HEAD → main', meta: 'cherrchen · 2h ago' },
          { lane: 'commit', subject: 'feat(compat): support DSH 0.2.1-alpha.5, 0.2.1-rc.1 and 0.2.1-rc.2', refs: 'v0.2.7', meta: 'cherrchen · 5h ago' },
          { lane: 'commit', subject: 'feat: worktree management tab with upstream delegation and local fallback', refs: 'origin/main', meta: 'cherrchen · 1d ago' },
          { lane: 'commit', subject: 'feat(client): staged diff opens beside the worktree one', refs: 'v0.2.5', meta: 'cherrchen · 1d ago' },
        ],
      },
      worktrees: {
        kicker: 'Worktrees',
        title: 'Every checkout, in one list',
        body: 'A dedicated Worktrees page lists each checkout of the current repository — wherever it was created — marks the one this session uses, and opens a creation dialog with an optional branch name and start point.',
        points: [
          '“Use in this session” enters a linked checkout through the host directory service',
          'Creation delegates to the upstream worktrees runtime when mounted, or a local git worktree add when enabled in settings',
          'The tab appears only while the host reports a creation mode; delete and prune stay with Git',
        ],
        listTitle: 'Checkouts of this repository',
        mock: { current: 'current', useInSession: 'Use in this session' },
      },
      composer: {
        kicker: 'Composer',
        title: 'Branch and change count, before you type',
        body: 'A branch selector and a changed-files indicator sit to the left of the input and open the Changes tab. Creating a branch shares one modal, and after git init with no commits the menu explains that the first commit must exist.',
        points: [
          'The selector follows the session’s effective directory when the host projects one',
          'A linked checkout shows a worktree label; “Use in this session” enters it through the host directory service',
          'Each session keeps its own repository state — two sessions never share a snapshot',
        ],
        mock: { branch: 'feat/checkout-flow', changes: '3 changed', placeholder: 'Describe what you want to build…' },
      },
      generation: {
        kicker: 'Commit messages',
        title: 'Suggested, never committed',
        body: 'When the host exposes an LLM runtime, Generate sends the staged diff — capped by commitMessage.maxDiffBytes — to the session model or a provider/model pair pinned in plugin configuration. The streamed draft lands in the editable input.',
        points: [
          'Generation never stages, commits or pushes anything',
          'The system prompt defaults to a Conventional Commits instruction and is editable',
          'With no resolvable model the control reports unavailable instead of guessing',
        ],
        configTitle: 'pnpm-workspace.yaml · composition config',
      },
    },
    design: {
      eyebrow: 'Design boundaries',
      title: 'Git runs as Git. Nothing is reinvented.',
      lead: 'The plugin shells out to the Git on the machine and keeps every risky edge explicit — including the ones it refuses to build.',
      controls: [
        {
          title: 'Never a shell',
          body: 'ctx.subprocess starts Git with an executable plus separate argv values. Every caller-supplied path, branch and message stays one argv — no interpolation, no quoting surprises.',
        },
        {
          title: 'Destructive means two clicks',
          body: 'Discard restores one staged, unstaged or untracked change through explicit index, worktree and clean steps — and always behind a second confirmation that names the path.',
        },
        {
          title: 'Credentials stay with Git',
          body: 'Push and sync invoke git push and git pull --rebase as argv. A missing origin or rejected auth surfaces Git’s own error; the plugin has no credential UI to misplace trust in.',
        },
        {
          title: 'Desktop is optional',
          body: "A child ctx.inject(['desktop']) fiber adds reveal-in-folder and open-path where the provider exists. Repository, status, diff, stage, commit and branch operations work without it.",
        },
        {
          title: 'Bounded output',
          body: 'One command’s stream is capped at 8 MiB by default; past the cap the collector keeps the tail. It is validated configuration, not a hidden constant.',
        },
        {
          title: 'Nothing reaches the model',
          body: 'The plugin registers no model tools, prompt sections or request context. Commit-message generation is a separate host LLM request that leaves session tokens untouched.',
        },
      ],
    },
    install: {
      eyebrow: 'Getting started',
      title: 'Two commands on a web profile.',
      lead: 'The plugin installs through the DSH plugin manager from four sources — and in Rivetdeck it is already preinstalled, so there is nothing to do.',
      step1: { title: 'Install the package', body: 'Run this with a supported DSH runtime. Replace the profile for Electron desktop.' },
      tabs: {
        label: 'Install source',
        npm: { label: 'npm', note: 'Recommended. Pre-built artifact; no package code runs at install time.' },
        tarball: { label: 'tarball', note: 'Pre-built offline package; the same tgz is attached to the GitHub Release.' },
        github: { label: 'GitHub', note: 'Fetches sources and builds via prepare. allowBuilds must name the git+ key pnpm prints — the bare package name does not match it.' },
        local: { label: 'local', note: 'Links a local checkout for development. pnpm build produces lib/, which the install reads.' },
      },
      step2: {
        title: 'Approve the GitHub build step',
        body: 'Only a <code>github:</code> install builds on your machine — the package’s own <code>prepare</code>. pnpm 10+ refuses with <code>ERR_PNPM_GIT_DEP_PREPARE_NOT_ALLOWED</code> until the key it prints is allowed in that profile’s <code>pnpm-workspace.yaml</code>; pin a tag so a later push cannot change what runs.',
      },
      step3: {
        title: 'Open a session in a repository',
        body: 'The branch chip and the changed-files indicator appear in the composer once the session’s directory is a repository.',
        note: 'Every supported release ships the right sidebar this plugin registers into — no extra host plugin is needed.',
      },
      other: {
        title: 'Notes',
        preinstalled: 'Rivetdeck preinstalls Git; the bundled version can lag the npm release. Install into the profile to run a newer one.',
        desktop: 'Commands above use the web profile. For Electron desktop, replace <code>--profile web</code> with <code>--profile desktop</code>.',
        source: 'Running DSH from a source checkout? Use <code>pnpm dsh</code> instead of <code>dsh</code>.',
      },
    },
    compat: {
      eyebrow: 'Compatibility',
      title: 'An exact list, not a range.',
      lead: 'The client registers into sidebar and settings slots whose shapes change between pre-stable releases, so support is the exact list CI has run — each row lists the releases a published plugin version accepts; the current package is v{version}.',
      footnote: 'Status is declared per release and never inferred from version order. From DSH 0.1.7-rc.1 the plugin manager enforces these exact peer ranges at install time. Per-release adaptation notes live in <contract>the compatibility reference</contract>.',
      region: 'DSH release support matrix',
      caption: 'DSH releases supported by each published plugin version',
      columns: { version: 'Plugin version', supported: 'Supported DSH releases' },
      latest: 'latest',
      rangeNote: 'declared peer range',
      platforms: 'Platforms',
      status: { verified: 'Verified', partial: 'Partial', unreleased: 'Development only', unsupported: 'Unsupported' },
      platformNotes: {
        macos: 'Same portable build on web and desktop; reveal actions use the desktop provider when present',
        linux: 'Same portable build; no platform-specific code paths',
        windows: 'Same portable build; Git errors from push and sync surface verbatim',
      },
    },
    finalCta: {
      title: 'Review the change where it happens.',
      lead: 'One command on a supported host — and in Rivetdeck it is already there. Uninstall and the window is exactly upstream again.',
      install: 'Install the plugin',
      github: 'View on GitHub',
    },
    changelog: {
      meta: {
        title: 'Git changelog — every release of the Git plugin for DSH',
        description:
          'Release history of the Git plugin for DeepSeek Harness: every published version with its features, changes and fixes, newest first.',
      keywords: ['Git plugin changelog', 'DSH plugin releases', 'release notes', 'DeepSeek Harness'],
      },
      nav: { plugin: 'Overview' },
      title: 'Changelog',
      lead: 'Every published version of the Git plugin, newest first.',
      metaLine: '{count} releases · latest {version}',
      latest: 'Latest',
      compare: 'Compare with the previous version on GitHub',
      releaseNotes: 'Release notes',
      kinds: {
        added: 'Added',
        changed: 'Changed',
        fixed: 'Fixed',
        removed: 'Removed',
        deprecated: 'Deprecated',
        security: 'Security',
        upgrade: 'Upgrade notes',
      },
      releases: [
        { version: '0.2.7', date: '2026-10-17', sections: [
            { kind: 'changed', items: [
                'The exact DSH support list now covers <code>0.2.1-rc.2</code>, extending the verified range to every published release from <code>0.1.5-rc.2</code> through <code>0.2.1-rc.2</code>. The manifest also declares <code>engines.dsh</code> with the same exact-version set — the field hosts since <code>0.2.1-alpha.4</code> evaluate alone for admission when present — and <code>pnpm compat:check</code> keeps it in lockstep with the peer ranges.'
              ] }
          ] },
        { version: '0.2.6', date: '2026-10-15', sections: [
            { kind: 'added', items: [
                'A dedicated <b>Git Worktrees</b> sidebar page (<code>git.worktrees</code>) lists every checkout of the current repository — regardless of how it was created — marks the current one, and offers <b>Use in this session</b> plus a creation dialog (optional branch name and start point). The tab registers only while the Host reports a creation mode via the new <code>worktree-capability</code> RPC.',
                '<code>create-worktree</code> RPC and <code>GitService.createWorktree</code>: when the host mounts the upstream experimental <code>worktrees</code> service, creation delegates to <code>ctx.worktrees.create(agent, ...)</code> and the new checkout is entered automatically; otherwise the <code>git-worktrees</code> <code>enabled</code> setting turns on a local <code>git worktree add -b</code> implementation whose pool defaults to <code>.agents/worktrees</code> and is configurable via <code>worktrees.directory</code>. A fresh in-repository pool gains a self-ignoring <code>.gitignore</code> when the host <code>fs</code> service is mounted. Deleting and pruning stay outside this package.',
                'A <code>git-worktrees</code> settings section edits <code>enabled</code> and <code>directory</code> on both supported settings surfaces; saving re-polls the capability so the Worktrees tab appears or disappears without a restart.'
              ] },
            { kind: 'changed', items: [
                'The plugin configuration cards now render entirely with <code>@deepseek-ai/dsh-client-ui-primitives</code> controls: the generation model is one dropdown listing the session model above provider-grouped catalog entries, and the Worktrees enablement uses the native capsule switch.',
                'On the plugin bundle page both settings sections now compose into a single full-width settings form with one save — the host’s <code>SettingsForm</code> where it is exported (DSH ≥0.1.7) and an identical frame on earlier releases — dropping staged edits when the page unmounts. The legacy namespace cards keep their own controls.',
                'The exact DSH support list now covers every published release from <code>0.1.5-rc.2</code> through <code>0.2.1-alpha.3</code>: <code>0.1.5-rc.3</code> and <code>0.2.1-alpha.1</code> were verified and added earlier, closing the remaining gaps in the range.',
                '<code>scripts/upgrade-dsh.mjs</code> and <code>pnpm compat:check</code> accept exact-version host runtime pins, matching releases that declare Cordis and schemastery without a caret or tilde (as <code>0.1.5-rc.3</code> does).'
              ] },
            { kind: 'fixed', items: [
                'The shared configuration page waits for each section’s save before fencing the next write, including when the page closes during saving. Transport failures retain editable drafts for retry, and disabling local worktrees explicitly overrides a composition default of <code>true</code>.',
                'A worktree creation’s directory projection no longer cancels its own successful RPC reply; controller disposal still cancels in-flight creation.',
                'Same-directory sidebar mounts no longer cancel a shared refresh or clear the commit draft. Cancelled executable discovery no longer poisons later Git requests or other sessions; successful refreshes also update session capabilities. Changes and Graph display repository-loading failures.',
                'Upstream worktree creation requires a live session, including submissions from an already-open dialog. The configured local checkout-pool hint appears only in local mode.'
              ] }
          ] },
        { version: '0.2.5', date: '2026-10-11', sections: [
            { kind: 'added', items: [
                'Worktree controls list linked checkouts for the active session’s repository. When the host exposes its working-directory service and the session has a live agent, <b>Use in this session</b> switches that session to the selected checkout.'
              ] },
            { kind: 'changed', items: [
                'Git repository state follows each session’s effective working directory, including host-projected directory changes; older hosts continue using the session’s original directory.',
                'Git 0.2.5 supports DeepSeek Harness <code>0.2.1-alpha.2</code>, including effective session working directories and linked-worktree switching; <code>0.2.1-alpha.1</code> remains unsupported.'
              ] },
            { kind: 'fixed', items: [
                '<code>git worktree list --porcelain -z</code> paths keep the whitespace Git reported, so <b>Use in this session</b> opens that checkout.',
                '<b>Use in this session</b> stays hidden when that session has no live agent, even if the host directory service is installed.',
                'Overlapping worktree entries run one at a time, and the action stays disabled until the current directory change finishes.'
              ] }
          ] },
        { version: '0.2.4', date: '2026-09-30', lead: 'Compatibility release extending the exact DSH support list to <code>0.2.0-rc.2</code>, with the development pin moved to that release.', sections: [
            { kind: 'changed', items: [
                'Git file comparisons now use the official DSH <code>DiffBlock</code> instead of the plugin-owned line renderer and styles. The plugin retains Git fetching and sidebar addresses, supports the existing DSH matrix, and distinguishes binary, metadata-only, empty, incomplete, and end-of-file newline changes. Copying and folding are provided by DSH; newer hosts also provide line wrapping.',
                'The exact DSH compatibility matrix now includes <code>0.2.0-rc.1</code> and <code>0.2.0-rc.2</code>. Development dependencies and the committed lockfile pin <code>0.2.0-rc.2</code> (Cordis <code>4.0.4</code>, schemastery <code>3.18.4</code>). Existing structure probes in <code>src/compat/</code> still cover settings, schema, and icons. Lane-only packages that this pin publishes (<code>dsh-util-code-language</code>, <code>dsh-client-shortcuts</code>) are development dependencies only; they stay out of the peer OR.'
              ] },
            { kind: 'fixed', items: [
                'Frozen main CI can install the <code>0.2.0-rc.2</code> development pin before pnpm’s 24-hour release-age window: <code>minimumReleaseAgeExclude</code> lists only that pin’s exact lockfile packages. pnpm 11.7 ignores later same-name <code>name@version</code> rows, so older pin entries are not kept beside it. Unlisted prereleases stay out of that list.'
              ] }
          ] },
        { version: '0.2.3', date: '2026-09-25', lead: 'Compatibility release extending the exact DSH support list to <code>0.1.7-rc.2</code>, with upgrade-lane conditional devDependencies for rc.2-only packages.', sections: [
            { kind: 'changed', items: [
                'The exact DSH compatibility matrix now includes <code>0.1.7-rc.2</code>. Development dependencies stay pinned to <code>0.1.5-rc.2</code>. Existing structure probes in <code>src/compat/</code> still cover settings, schema, and icons.',
                'The upgrade script adds <code>@deepseek-ai/dsh-util-code-language</code> and <code>@deepseek-ai/dsh-client-shortcuts</code> as development dependencies only when that exact release publishes them. They stay out of the peer OR range so older hosts keep loading.'
              ] }
          ] },
        { version: '0.2.2', date: '2026-09-24', lead: 'Compatibility release: one exact DSH support list through <code>0.1.7-rc.1</code>, structure-probing adapters in <code>src/compat/</code>, and peer OR ranges generated from that list so older hosts keep loading while newer releases are supported.', sections: [
            { kind: 'changed', items: [
                'The exact DSH compatibility matrix now covers <code>0.1.5-rc.2</code>, <code>0.1.6-alpha.1</code>, <code>0.1.6-alpha.2</code>, <code>0.1.7-alpha.1</code>, <code>0.1.7-alpha.2</code>, and <code>0.1.7-rc.1</code>, with development dependencies still pinned to <code>0.1.5-rc.2</code>.',
                '<code>@deepseek-ai/dsh-*</code> peer dependencies now use the generated exact OR ranges from that list instead of a single <code>>=0.1.5-rc.2 <0.2.0</code> band.',
                'Cross-release adapters in <code>src/compat/</code> probe structure instead of branching on version strings: commit-message settings bridge <code>settingsScope</code> and <code>configForms</code>; icons map legacy fixed-size exports to 0.1.7 weighted glyphs; schema helpers call <code>.volatile()</code> only when the host schemastery copy provides it and snapshot volatile references through <code>readVolatile</code>.',
                '<code>.pnpmfile.cjs</code> rewrites transitive <code>@deepseek-ai/dsh-*</code> dependencies to the active pin so lockfiles cannot drift to newer prereleases under caret peers.',
                '<code>.github/workflows/upgrade.yml</code> regression matrix is generated from the support list; the upgrade script pins Cordis and schemastery to each release’s caret or tilde floor (including <code>~4.0.4</code> / <code>~3.18.4</code> on <code>0.1.7-alpha.2</code> and <code>0.1.7-rc.1</code>).',
                'Client workspace lookup and plugin settings registration span the alpha.2 Session-list and Plugins-tab API changes.'
              ] },
            { kind: 'fixed', items: [
                'Declare <code>simple-icons</code>, <code>zustand</code>, and <code>immer</code> as peer dependencies where upstream DSH bundles import them without runtime dependency declarations (<code>dsh-client-ui-primitives</code>, <code>dsh-client-store</code>).'
              ] }
          ] },
        { version: '0.2.1', date: '2026-09-14', lead: 'Documentation and reliability release: the changelog and contribution guide arrive, the <readmeInstallation>installation</readmeInstallation> section documents all four install sources, and window-focus churn no longer stacks repository refreshes.', sections: [
            { kind: 'added', items: [
                '<code>CONTRIBUTING.md</code> (with the Chinese side <code>CONTRIBUTING.zh.md</code>) describing setup, the quality gates, and the documentation duty.',
                '<code>CHANGELOG.md</code> (with the Chinese side <code>CHANGELOG.zh.md</code>).'
              ] },
            { kind: 'changed', items: [
                'The <readmeInstallation>installation section</readmeInstallation> documents all four install sources — npm registry, tarball, local path, GitHub/git — instead of one npm command plus a local-development snippet.',
                'A <code>prepare</code> script (<code>pnpm run build</code>) makes a GitHub/git install build <code>lib/</code> from <code>src/</code> on the installing machine.',
                '<code>pnpm docs:check</code> also enforces the root bilingual pairs now: <code>README</code>, <code>CONTRIBUTING</code>, and <code>CHANGELOG</code> each need their <code>.zh.md</code> side and their <code>*.i18n.yaml</code> consistency record.'
              ] },
            { kind: 'fixed', items: [
                'Window-focus churn no longer stacks repository refreshes: <code>GitClientController.refresh()</code> shares one in-flight round trip per workspace, so repeated focus events cost a single <code>discover</code>/<code>status</code> pair instead of overlapping rounds that superseded each other’s results and left <code>repository</code> unset. When a request lands after that round has already read the repository — focus returning after an external edit — the burst adds one trailing read, and merged callers await it, so a fresh edit is never answered by the older snapshot; that trailing read runs even when the shared round failed with a transient discovery or status error. The burst is bounded at two round trips, so the controller’s own Host traffic cannot re-arm it forever. Background: <tbWindowsFlood>the Windows desktop terminal-window flood</tbWindowsFlood>.'
              ] }
          ] },
        { version: '0.2.0', date: '2026-09-14', lead: 'First public release: <code>@dsh-electron/dsh-plugin-git@0.2.0</code> is on npm with build provenance, and its GitHub Release carries the same tarball.', sections: [
            { kind: 'added', items: [
                'Live tab titles for the Changes and Graph tabs.',
                '<code>pnpm version:major</code> / <code>version:minor</code> / <code>version:patch</code> shortcuts beside <code>version:set</code>.',
                'A spec that fails when a client CSS-module class is not present in the built stylesheet.'
              ] },
            { kind: 'changed', items: [
                '<b>Breaking for the Client half: the Git surfaces moved from the third-party Details Host to the upstream right sidebar.</b> The package now targets DeepSeek Harness ≥ v0.1.5-rc.2, registers <code>git.changes</code> and <code>git.graph</code> as page tab types and <code>git.diff</code> as a <code>dsh-resource://git/diff/**</code> resource type, and navigates through <code>ctx.sidebarRight</code>.',
                'Every <code>@deepseek-ai/dsh-*</code> peer range moved to <code>>=0.1.5-rc.2 <0.2.0</code>.',
                'Diff results are panel-local instead of being written into a shared controller slot.',
                'Panel header actions reuse the shared <code>GitIconButton</code>.'
              ] },
            { kind: 'fixed', items: [
                'The loopback <code>/git</code> RPC channel mounts only once <code>webServer</code> exists and reads the connection service from the root context, so it no longer registers against an unresolved <code>connection</code>.',
                'A failed refresh in the Changes or Diff panel renders its error next to the panel fetch error instead of dropping it.',
                '<code>npm publish</code> receives the packed tarball as <code>./dist/<name>.tgz</code>: the bare <code>dist/<name>.tgz</code> form is parsed by npm as a GitHub <code>owner/repo</code> shorthand and fails.'
              ] },
            { kind: 'removed', items: [
                'The <code>@dsh-electron/dsh-client-ui-details-host</code> dependency and its pinned fixture tarballs.'
              ] }
          ] },
        { version: '0.1.0', date: '2026-09-13', lead: 'First tagged version: one portable Host service, one Client bundle, and an optional Desktop enhancement.', sections: [
            { kind: 'added', items: [
                '<code>ctx.git</code> Host service. It requires <code>ctx.subprocess</code> and starts Git with an executable plus separate argv values, never a shell: repository discovery, Git version, current branch and HEAD, porcelain v2 status (staged / unstaged / untracked, NUL-separated paths), local branches, working-tree and staged diffs, stage/unstage, commit, amend, push to <code>origin</code>, rebase-then-push sync, branch creation, and branch switching.',
                'Destructive discard of one staged, unstaged, or untracked change through explicit index, worktree, and clean steps, always behind a second confirmation in the Client.',
                'Paged commit history (<code>git log</code>, one fixed-field line per commit) so the Graph surface appends older commits through a load-more control.',
                'Commit-message generation: the staged diff (capped by <code>commitMessage.maxDiffBytes</code>) goes to the host LLM runtime — the session model, or a <code>provider</code>/<code>model</code> route pinned in Plugin configuration — and the streamed suggestion is written into the editable message field. It never stages, commits, or pushes.',
                'Client surfaces on the third-party Details Host (required at that time): <b>Changes</b> (branch, commit message with Generate, split Commit button, staged/unstaged/untracked sections), <b>Diff</b> (one file per tab), and <b>Graph</b> (canvas lane graph with Auto / All / First-parent scopes, at most three visible lanes, incremental paging).',
                'Composer controls — branch selector and changed-files indicator — that open the Git surface, plus a shared create-branch modal that handles an unborn HEAD.',
                'Loopback <code>/git</code> RPC channel for DSH Web hosts, and a <code>cordis.patch.yml</code> bundle layer so one <code>dsh plugin add</code> mounts the plugin into a profile.',
                'Optional <code>ctx.inject([\'desktop\'], ...)</code> child fiber using <code>shell.showItemInFolder</code>, <code>shell.openPath</code>, and <code>notification.show</code>.',
                'Documentation library under <code>docs/</code>, the <code>pnpm docs:check</code> machine check, the <code>version:set</code> script, a tag-triggered release workflow, the bilingual README pair, and its <code>README.i18n.yaml</code> hash record.'
              ] }
          ] }
      ],
    },

  },

  themeStudio: {
    meta: {
      title: 'Theme Studio — eight palettes for DSH',
      description:
        'A portable DSH plugin that adds a Themes row to Settings → General: eight built-in palettes and imported .dsh-theme.json themes with hover preview, click to apply, and a Default that restores the official appearance. Token overlays only — mode and fonts stay with the host.',
      keywords: ['DeepSeek Harness', 'DSH plugin', 'themes', 'dark mode', 'appearance', 'color palette'],
    },
    brandHome: 'Theme Studio home',
    nav: { features: 'Features', palettes: 'Palettes', install: 'Install', compatibility: 'Compatibility', changelog: 'Changelog', github: 'GitHub', npm: 'npm' },
    cta: 'Install',
    footer: {
      plugin: { title: 'Plugin', features: 'Features', palettes: 'Palettes', install: 'Install', compatibility: 'Compatibility' },
      docs: { title: 'Docs', readme: 'README', tokens: 'Token reference', changelog: 'Changelog' },
      source: { title: 'Source', repo: 'GitHub repository', npm: 'npm package', issues: 'Report an issue' },
      plugins: { title: 'DSH plugins', git: 'Git', themeStudio: 'Theme Studio', multiRoot: 'Multi-root Workspace' },
      ecosystem: { title: 'Ecosystem', rivetdeck: 'Rivetdeck desktop app', harness: 'DeepSeek Harness' },
      note: 'Theme Studio is an independent, MIT-licensed plugin for DSH (DeepSeek Harness). It is not made, endorsed or supported by DeepSeek.\n“DeepSeek Harness” is a trademark of DeepSeek and is used here only to describe compatibility.',
    },
    hero: {
      changelog: ' changelog',
      titleLine1: 'Eight palettes.',
      titleLine2: 'One click away.',
      lead: 'DSH ships light, dark and follow-system. Theme Studio adds a Themes row to Settings → General with eight built-in palettes and your imported themes — hover to preview, click to apply, Default to give every color back.',
      install: 'Install the plugin',
      readme: 'Read the README ↗',
      bullets: ['Every theme ships light and dark values', 'Preview is transient; nothing persists until you click', 'Preinstalled in Rivetdeck'],
      shotCaption: 'The Themes row and its eight cards in Settings → General.',
    },
    features: {
      row: {
        kicker: 'The Themes row',
        title: 'Between Appearance and Font size',
        body: 'The row lands in Settings → General styled like the official Language row: a dropdown selector carrying the applied theme’s four-color mosaic and name.',
        points: [
          'The menu lists Default, the eight built-ins and your imported themes, each with its swatch',
          'Import accepts a .dsh-theme.json file; Manage exports and removes your copies',
          '“Create your own theme…” pre-fills the bundled creator skill where the host supports it',
          'The row and its menu follow the interface language',
          'With no theme chosen, the settings page is item-for-item identical to an uninstalled harness',
        ],
        mock: { above: 'Appearance', label: 'Themes', value: 'Nordic', below: 'Font size' },
      },
      preview: {
        kicker: 'Preview, then apply',
        title: 'Hover is temporary. Click is persisted.',
        body: 'Hovering a menu item applies its colors temporarily; closing the menu — pointer leave, outside click, Esc or toggling the selector — restores the previous state. Only a click or Enter asks the Host to save, and the choice survives restarts and new sessions.',
        points: [
          'Preview never writes: hovering mutates no setting',
          'Default clears every overlay and saves activeThemeId=null',
          'When the Host refuses to save, the row reports it and restores the last accepted choice',
        ],
        menuTitle: 'Theme menu states',
        menuPreview: 'hover — previewing',
        menuApplied: 'applied & saved',
        menuDefault: 'clears every overlay',
      },
      palettes: {
        kicker: 'Eight built-in palettes',
        title: 'Every theme ships both modes',
        body: 'Claude, Codex, Claude Cream, Graphite, OLED, Nordic, Paper and Warm — each carries light and dark token values that follow the official Appearance resolution. Try them here; the values come straight from the plugin’s presets.',
        note: 'The four-color mosaic in the selector always shows the light sample — it is a palette swatch, not a mode indicator.',
      },
      boundaries: {
        kicker: 'Boundaries',
        title: 'The official Appearance stays in charge',
        body: 'Theme Studio is deliberately narrow: it widens the palette, not the settings model.',
        items: [
          {
            title: 'Mode stays upstream',
            body: 'Light, dark and follow-system remain the official Appearance’s job; every palette ships both variants so mode resolution is unchanged.',
          },
          {
            title: 'Fonts stay upstream',
            body: 'Font family and size are official settings — previewing, applying, cancelling and Default never rewrite them.',
          },
          {
            title: 'Tokens only',
            body: 'The plugin emits overrideTokens; the accepted snapshot and the DOM rendering belong to ctx.theme.',
          },
          {
            title: 'Portable by construction',
            body: 'Declared platform:web — no Electron imports, no Node client capabilities, no Desktop provider, no model tools or prompt content.',
          },
        ],
      },
    },
    limits: {
      title: 'What this does not claim',
      points: [
        'Import and export speak the dsh-theme.json v1 format; a visual theme editor stays a roadmap item.',
        'The contrast check is a diagnostic, not a gate — some palettes fall below threshold and are neither repaired nor blocked.',
        'Preview is hover-driven: keyboard focus does not preview; press Enter to apply.',
        'The read-only catalog ctx.themeStudio.catalog exists only on the Client — no dynamic registration and no Host RPC.',
      ],
    },
    install: {
      eyebrow: 'Getting started',
      title: 'Two commands, then pick a color.',
      lead: 'The plugin installs through the DSH plugin manager from four sources — and in Rivetdeck it is already preinstalled, so there is nothing to do.',
      step1: { title: 'Install the package', body: 'Run this with a supported DSH runtime. Replace the profile for Electron desktop.' },
      tabs: {
        label: 'Install source',
        npm: { label: 'npm', note: 'Recommended. Pre-built artifact; no package code runs at install time.' },
        tarball: { label: 'tarball', note: 'Pre-built offline package; the release asset is named plugin.tgz.' },
        github: { label: 'GitHub', note: 'Builds from source on install through prepare; allowBuilds must name this package — pin a tag.' },
        local: { label: 'local', note: 'Links a local checkout for development; no allowBuilds needed.' },
      },
      step2: {
        title: 'Approve the GitHub build step',
        body: 'Only a <code>github:</code> install builds on your machine — the package’s own <code>prepare</code>. When pnpm stops with <code>ERR_PNPM_IGNORED_BUILDS</code>, add the package itself to that profile’s <code>pnpm-workspace.yaml</code>, then run the add again; pin a tag so a later push cannot change what runs.',
      },
      step3: {
        title: 'Open Settings → General',
        body: 'The Themes row sits between the official Appearance and Font size rows.',
        note: 'Click the selector, hover to preview, click to apply — or pick Default to give every overlay back.',
      },
      other: {
        title: 'Notes',
        preinstalled: 'Rivetdeck preinstalls Theme Studio; the bundled version can lag the npm release. Install into the profile to run a newer one.',
        desktop: 'Commands above use the web profile. For Electron desktop, replace <code>--profile web</code> with <code>--profile desktop</code>.',
        source: 'Running DSH from a source checkout? Use <code>pnpm dsh</code> instead of <code>dsh</code>.',
      },
    },
    compat: {
      eyebrow: 'Compatibility',
      title: 'An exact list, not a range.',
      lead: 'Settings services and menu icons change shape across pre-stable releases, so the allowlist in the plugin is the only support claim — each row lists the releases a published plugin version accepts; the current package is v{version}.',
      footnote: 'The plugin does not gate itself at runtime. Peer admission at install time may refuse some mismatches. Evidence and adaptation seams live in <contract>the compatibility matrix</contract>.',
      region: 'DSH release support matrix',
      caption: 'DSH releases supported by each published plugin version',
      columns: { version: 'Plugin version', supported: 'Supported DSH releases' },
      latest: 'latest',
      rangeNote: 'declared peer range',
      status: { verified: 'Verified', partial: 'Partial', unreleased: 'Development only', unsupported: 'Unsupported' },
    },
    finalCta: {
      title: 'Give the window your palette.',
      lead: 'One command to install — and in Rivetdeck it is already there. Pick Default and every overlay is gone.',
      install: 'Install the plugin',
      github: 'View on GitHub',
    },
    changelog: {
      meta: {
        title: 'Theme Studio changelog — every release of the plugin for DSH',
        description:
          'Release history of the Theme Studio plugin for DeepSeek Harness: every published version with its features, changes and fixes, newest first.',
      keywords: ['Theme Studio changelog', 'DSH plugin releases', 'release notes', 'DeepSeek Harness themes'],
      },
      nav: { plugin: 'Overview' },
      title: 'Changelog',
      lead: 'Every published version of the Theme Studio plugin, newest first.',
      metaLine: '{count} releases · latest {version}',
      latest: 'Latest',
      compare: 'Compare with the previous version on GitHub',
      releaseNotes: 'Release notes',
      kinds: {
        added: 'Added',
        changed: 'Changed',
        fixed: 'Fixed',
        removed: 'Removed',
        deprecated: 'Deprecated',
        security: 'Security',
        upgrade: 'Upgrade notes',
      },
      releases: [
        { version: '0.1.5', date: '2026-10-17', sections: [
            { kind: 'added', items: [
                'Public <code>dsh-theme.json</code> v1 theme file format with a packaged JSON Schema (<code>schemas/dsh-theme.schema.json</code>): <code>palette</code> requires all 13 fields per scheme, optional sparse <code>overrides</code> layer over derived tokens; color values are limited to the contrast resolver’s supported subset and an omitted <code>version</code> defaults to 1.',
                'Import and manage actions in the Themes menu: imports persist through a confirmation dialog and preview automatically, duplicate ids let the user choose overwrite or an automatically generated id; the manage dialog exports and removes imported themes, and builtin themes export as re-importable <code>user.*</code> files.',
                'The public <code>ctx.themeStudio.catalog</code> is now a builtin + imported composite (ADR-0009): <code>list()</code>/<code>get()</code>/<code>validate()</code> cover imported themes and <code>list()</code> returns a frozen snapshot at call time.',
                'Support DSH 0.2.1-alpha.3.',
                'Support DSH 0.2.1-alpha.4, 0.2.1-alpha.5, 0.2.1-rc.1, and 0.2.1-rc.2.',
                'Theme Creator (ADR-0010): the <code>dsh-theme-creator</code> skill is driven by the <code>creatorAgentMode</code> setting (<code>off</code>/<code>gesture</code>/<code>catalog</code>, default <code>gesture</code> — answers only the <code>/dsh-theme-creator</code> user gesture and stays out of the model catalog); the skill guides the model through writing a <code>dsh-theme.json</code> in the workspace and self-checking it with the bundled validator, and the result still requires the user’s import confirmation.',
                '"Create your own theme…" in the Themes menu: on versions offering the two-argument <code>startSession</code> it opens a Cordis session with <code>/dsh-theme-creator </code> prefilled (never auto-sent); earlier versions degrade to a manual-gesture hint. <code>creatorAgentMode</code> is switchable on the Plugins management page (Plugins → Theme Studio); hosts without that page keep the stored or default mode.',
                'A <code>lib/validate-theme.js</code> command-line validator ships with the package: <code>node lib/validate-theme.js <file></code> prints a structured JSON format and contrast report (exit 0 pass / 1 failed / 2 usage).'
              ] },
            { kind: 'changed', items: [
                'The <code>theme-studio</code> settings namespace gains an <code>importedThemes</code> field persisting imported theme source files; the Host schema stays loose while the Client parses strictly, so unreadable entries are skipped without breaking the rest of the settings.',
                'The <code>theme-studio</code> settings namespace gains a <code>creatorAgentMode</code> field controlling Theme Creator visibility; snapshots missing the field normalize to the <code>gesture</code> default.'
              ] },
            { kind: 'fixed', items: [
                'Rejected imports, replacements and removals report a save failure and preserve the accepted theme list on older settings transports; imports and removals are disabled until settings are ready.',
                'Replacement imports preview the new colors after acceptance; automatic duplicate-id renames stay within the 64-character limit.',
                'In the Themes menu, moving the pointer off a theme row or hovering "Import theme…"/"Manage themes…" restores the applied theme instead of keeping the last hovered preview; selecting either action by keyboard cancels the preview too.',
                'Import edits merge onto the accepted raw array so entries the parser skipped survive appends, replacements, and removals instead of being silently deleted.',
                'Import confirmation rechecks the id against the catalog and in-flight writes; a stale confirm returns to the duplicate dialog, and a late <code>append</code> collision falls back to a keep-both rename instead of persisting a duplicate id.',
                'Overlong imported theme names ellipsize in the selector pill and the manage dialog (with the full name as a tooltip) instead of stretching the settings row.',
                'A theme file that fails to read (for example, an I/O error mid-read) now shows the import error dialog instead of an unhandled Promise rejection.',
                'The import confirmation and manage dialogs now show a theme file’s <code>description</code> field, matching the file-format reference; long descriptions ellipsize with the full text as a tooltip.',
                'Theme-menu hover preview is now tracked per whole row: resting the pointer on a row’s padding or the icon/text gap no longer restores the applied theme; moving onto separators, group labels, footer actions, or outside the menu still does.',
                'A theme file’s <code>$schema</code> field is now restricted to strings per the published JSON Schema; non-string values (such as deeply nested objects) previously passed validation and were persisted, then overflowed the deep-freeze recursion with a RangeError — and the same stored entry failed catalog loading again on every restart.',
                'A theme file’s <code>version: null</code> is no longer treated as omitted; it is rejected as <code>unsupported-version</code>, matching the published JSON Schema.',
                'Theme-file validation no longer recursively stringifies rejected values: a deeply nested array as <code>id</code>, <code>name</code>, <code>version</code>, or an override color is now rejected with the matching error code instead of throwing a RangeError.',
                'While an imported theme is active and another theme is being previewed, an <code>importedThemes</code> change no longer lets the reinstalled active layer cover the preview: the surviving preview is restacked on top with refreshed tokens, so the screen matches the preview state.'
              ] }
          ] },
        { version: '0.1.4', date: '2026-10-11', sections: [
            { kind: 'added', items: [
                'Support DSH 0.2.1-alpha.1 and 0.2.1-alpha.2. Official text, code, and terminal font families and sizes stay independent: preview, apply, cancel, Default, and light/dark/system changes do not rewrite them.',
                'When the Host rejects a theme save, the settings row reports the failure and restores the last accepted choice. Rapid applies are written in order, so an older success cannot land after a newer choice and replace it. A disposed plugin does not reapply a late result.',
                'Stage 2 automated contrast validation: per-pair light/dark reports, alpha and sRGB mix resolution, a report command with strict exit mode, and README documentation of actual coverage and known builtin failures.',
                'Stage 3 public Client <code>ctx.themeStudio.catalog</code> for readonly theme discovery and contrast reports, with Cordis service teardown and reload support.'
              ] },
            { kind: 'changed', items: [
                'The Client bundle shares the upstream Client runtime’s <code>@deepseek-ai/dsh-client-store</code> instead of bundling a second instance. Isolated candidate probes and multi-version regression gates now feed the release workflow.',
                'Completed requirements, architecture, ADRs, implementation records, development workflows, full API/token references, and troubleshooting from current code and all historical commits. Root documentation now uses canonical Chinese README.md and English README.en.md; README.zh.md preserves the former Chinese link.',
                'Added docs:check and wired it into CI/release verification, with matching README compatibility checks and publication language files.'
              ] }
          ] },
        { version: '0.1.3', date: '2026-09-30', sections: [
            { kind: 'added', items: [
                'Added three builtin overlays aligned with Claude Desktop, Codex Desktop, and Claude Cream.',
                'Builtin themes now cover semantic colors, component-referenced statics, and syntax-highlight tokens that previously stayed on the official palette, while preserving static white semantics used by tooltips and other components.',
                'Support DSH 0.2.0-rc.1 and 0.2.0-rc.2, including eight new semantic tokens and isolated verification of every supported release.'
              ] },
            { kind: 'changed', items: [
                'Unified development dependencies, overrides, and lockfile on the newest supported DSH 0.2.0-rc.2; official theme integration tests now load the actual installed published bundle.'
              ] }
          ] },
        { version: '0.1.2', date: '2026-09-27', sections: [
            { kind: 'changed', items: [
                'Removed Theme Studio’s custom Plugins-page card and detail contributions; the installed package is listed in the official plugin manager through its package-name loader entry. The General Themes settings row remains.'
              ] }
          ] },
        { version: '0.1.1', date: '2026-09-26', sections: [
            { kind: 'added', items: [
                'Support DSH 0.1.7-rc.1 and 0.1.7-rc.2, which enforce declared DSH peer ranges when a profile installs or boots a plugin.'
              ] },
            { kind: 'fixed', items: [
                'Persist the selected theme again on hosts that register settings namespaces through the legacy <code>register</code> API: the returned namespace scope is no longer handed back to Cordis, which rejected it as an invalid effect and silently rolled the registration back.'
              ] }
          ] },
        { version: '0.1.0', date: '2026-09-25', lead: 'First public release of the theme overlay plugin for DSH Web and Desktop.', sections: [
            { kind: 'added', items: [
                'Browse Graphite, OLED, Nordic, Paper, Warm, and Default in Settings → General → Themes, with transient preview, cancel, apply, and restore after restart.',
                'Overlay theme tokens through <code>ctx.theme.overrideTokens()</code> while leaving the official light, dark, and system appearance with the host.',
                'Persist the selected theme on the Host and adapt register/settingsScope and Config/configure/configForms across supported DSH releases; restart the Themes row after the settings service stops and is provided again.',
                'Publish standalone Host and Client bundles, TypeScript declarations, and <code>cordis.patch.yml</code>, with an explicit DSH compatibility list.'
              ] }
          ] }
      ],
    },

  },
}

/** Recursively widens literal strings so other locales only have to match the structure. */
type Widen<T> = T extends string ? string : T extends readonly (infer U)[] ? Widen<U>[] : T extends object ? { [K in keyof T]: Widen<T[K]> } : T

export type Dictionary = Widen<typeof en>

export default en satisfies Dictionary
