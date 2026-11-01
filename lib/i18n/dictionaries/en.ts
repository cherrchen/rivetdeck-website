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
    nav: { features: 'Features', plugins: 'Plugins', download: 'Download', changelog: 'Changelog', github: 'GitHub' },
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
      latest: 'Latest',
      compare: 'Compare with the previous release on GitHub',
      releaseNotes: 'Release notes',
      releases: [
        { version: '0.2.1-beta.3', date: '2026-10-31', lead: 'Bundles DeepSeek Harness <code>0.2.1-rc.5</code>.', sections: [
            { title: 'What changed', items: [
                'Updated to DeepSeek Harness <code>0.2.1-rc.5</code>, improving the display of thinking content in conversations. See the upstream rc.5 and rc.4 release notes.',
                'Bundled Git plugin <code>0.2.9</code>, Multi-root Workspace plugin <code>0.1.12</code>, and Theme Studio <code>0.1.7</code>.',
                'Conversation view tabs show a full-name tooltip when the label is expected to overflow.',
              ] }
          ] },
        { version: '0.2.1-beta.2', date: '2026-10-25', lead: 'Bundles DeepSeek Harness <code>0.2.1-rc.3</code>.', sections: [
            { title: 'What changed', items: [
                '<b>Bundled upstream DeepSeek Harness <code>0.2.1-rc.3</code></b>: new "More" menus in the left sidebar, conversation views, and right sidebar for browsing and creating plugins; a fix for New Session losing an unsent draft after switching sessions; and a DeepSeek API key adapter that now refreshes its model list the same way as account sign-in. See the upstream 0.2.1-rc.3 notes for the full list.',
                '<b>New preinstalled multi-root workspace plugin</b>: <code>@dsh-electron/dsh-plugin-multi-root-workspace</code> 0.1.10 ships as the third bundled ecosystem plugin.',
                '<b>Bundled ecosystem plugin updates</b>: the Git plugin moves to 0.2.8 and Theme Studio to 0.1.6, both declaring upstream <code>0.2.1-rc.3</code> peers.',
                '<b>Fixed Agent lifecycle issues on plugin reload</b>: file-upload now releases its Agent resolver when its owner reloads, and file-reference-local skips Agents whose scope is already unloading, avoiding dangling references.',
                'Third-party notices regenerated for the synchronized desktop dependencies.',
              ] }
          ] },
        { version: '0.2.1-beta.1', date: '2026-10-23', lead: 'Bundles DeepSeek Harness <code>0.2.1-rc.2</code>.', sections: [
            { title: 'What changed', items: [
                '<b>Bundled upstream DeepSeek Harness <code>0.2.1-rc.2</code></b>: picks up all upstream changes since <code>0.2.0-rc.2</code>. Highlights: support for the DeepSeek-V4.1-Flash-1017 model; DeepSeek Search and Fetch APIs that can be enabled in Web Search settings; custom plugin index sources plus dependency sync and hot reload on plugin enable/update; a standalone SSH helper runtime; automatic detection and default redaction of secrets in sent messages; per-surface font settings for body text, code, and terminals; faster session-list loading and search at scale; and more. See the upstream 0.2.1-rc.1 and 0.2.1-rc.2 notes for the full list.',
                '<b>Fixed a packaged-app boot crash</b>: the pnpm dependency collector used by the packaging lane skipped the subtree of repeated package occurrences, leaving <code>cordis-plugin-loader</code> and six other packages out of <code>Resources/app/node_modules</code>; packaged builds crashed at boot with <code>ERR_MODULE_NOT_FOUND</code>. The collector\'s dedupe traversal has been corrected.',
                '<b>Branding and link fixes</b>: the About homepage link now points at the GitHub Pages site, stale <code>deepseek-harness-electron</code> references were retargeted to Rivetdeck, and third-party notices were regenerated for the synchronized desktop dependencies.',
              ] }
          ] },
        { version: '0.2.0-beta.5', date: '2026-10-21', lead: 'Bundles DeepSeek Harness <code>0.2.0-rc.2</code>.', sections: [
            { title: 'What changed', items: [
                '<b>Session checkpoint and restore</b>: every clean exit captures a checkpoint of sessions and their configuration state — per-file SHA-256 digests, verified per session through the bundled Harness\'s real read path in a separate process, with sessions that fail validation carried forward from their last verified copy. When startup detects session-log drift or unreadable data (for example, written by a newer Harness), a localized confirmation dialog appears before the Host starts; confirming runs a journaled restore transaction — replaced live bytes are preserved in quarantine, interrupted restores converge automatically on the next launch, and restores confirmed while the Host is running are queued and executed after relaunch.',
                '<b>Tiered Windows uninstall cleanup</b>: the NSIS uninstaller now removes only verified rebuildable data (managed toolchains, cache directories, the updater cache) while preserving preferences, credentials, persisted browser storage, and Harness homes by default. Deletions outside the install directory run through a native helper that verifies attribution and expected inventories and never follows links; targets that fail verification or overlap a protected path are skipped whole and recorded in a residue log. New bilingual documentation describes uninstall cleanup behavior and manual removal on each platform. Store (MSIX) cleanup parity remains unverified.',
              ] }
          ] },
        { version: '0.2.0-beta.4', date: '2026-10-17', lead: 'Bundles DeepSeek Harness <code>0.2.0-rc.2</code>.', sections: [
            { title: 'What changed', items: [
                '<b>Bundled ecosystem plugin updates</b>: Git moves to <code>0.2.7</code>, adding VS Code-style graph rows, a commit hover card, scroll paging, and a worktree management tab; Theme Studio moves to <code>0.1.5</code>, adding the Theme Creator runtime skill with visibility modes, <code>dsh-theme.json</code> theme import/export, and a Language-row-style dropdown for the Themes row.',
              ] }
          ] },
        { version: '0.2.0-beta.3', date: '2026-10-14', lead: 'Bundles DeepSeek Harness <code>0.2.0-rc.2</code>.', sections: [
            { title: 'What changed', items: [
                '<b>Bundled plugin versioning</b>: source-built runtime plugins (Desktop Capabilities, Network Subprocess) now track the application version, set by the version script; preinstalled ecosystem plugins move to Git <code>0.2.5</code> and Theme Studio <code>0.1.4</code>.',
                '<b>Managed runtime installation fix</b>: managed runtimes are now verified at their final immutable path instead of before the rename, fixing install failures caused by Windows retaining locks on executed images; failed unselected generations are cleaned up.',
                '<b>Store submission confirmation</b>: the release script now waits for Partner Center commit processing and verifies both architecture packages are accepted before reporting success, no longer misreporting a draft state.',
              ] }
          ] },
        { version: '0.2.0-beta.2', date: '2026-10-09', lead: 'Bundles DeepSeek Harness <code>0.2.0-rc.2</code>.', sections: [
            { title: 'What changed', items: [
                '<b>Rivetdeck branding</b>: application names, native windows, menus, installers, and executables use Rivetdeck.',
                '<b>New About window</b>: displays the application icon, version, build number, and commit, with GitHub and homepage links. Homepage opening is fixed.',
                '<b>Localized Desktop copy</b>: native menus, About, and update messages support English and Chinese.',
                '<b>Microsoft Store support</b>: Windows x64 and ARM64 AppX packages are available. Microsoft Store manages updates for Store installations, with ownership shown in native menus.',
                '<b>Automatic Store releases</b>: after installation and startup qualification, the release workflow retains Store packages and submits them in version order, tracking certification and publication.',
              ] }
          ] },
        { version: '0.2.0-beta.1', date: '2026-10-05', lead: 'Bundles DeepSeek Harness <code>0.2.0-rc.2</code>.', sections: [
            { title: 'What changed', items: [
                '<b>Bundled Harness upgrade</b>: now includes upstream <code>0.2.0-rc.2</code>, with the upstream 0.2.0 preview features and fixes. A preview notice is shown on first use.',
                '<b>Core separated from optional toolchains</b>: the application Core no longer depends on managed Node.js/Python toolchains. Install, inspect, or remove Node.js and Python on demand from onboarding or Settings → Runtime; Core can still start when toolchains are unavailable or the machine is offline.',
                '<b>Unified network and runtime settings</b>: network connections and managed runtimes are managed from a unified Settings experience, with network diagnostics and runtime status/actions grouped together.',
                '<b>Desktop CLI launch safeguards</b>: CLI installation and launch verify the current application installation to avoid targeting another version; only <code>dsh</code> is exposed on PATH.',
                '<b>Cross-platform runtime validation and startup hardening</b>: packaged smoke checks verify the actual Node.js/Python executable versions on macOS, Windows, and Linux; Windows releases also require the installed Core to pass its startup check.',
              ] }
          ] },
        { version: '0.1.7-beta.2', date: '2026-09-30', lead: 'Bundles DeepSeek Harness <code>0.1.7-rc.2</code>.', sections: [
            { title: 'What changed', items: [
                '<b>Bundled Node.js and Python toolchains</b>: plugins and their child processes can use the packaged Node.js, Python, npm, npx, pip, and pip3 commands through shared shims. Windows Python/pip commands also route to the managed runtime, and <code>python -m pip</code> installs into the user package directory. Agent PATH entries and toolchain paths use the target platform\'s delimiter.',
                '<b>Independent plugin resolution for shared Desktop and Web/CLI profiles</b>: bundled ecosystem plugins are no longer linked into the shared Web profile\'s <code>node_modules</code>; the Electron Host resolves its bundled copies through a private profile projection. Desktop and CLI/Web can share persisted profile data without taking over each other\'s plugin resolution.',
                '<b>Profile changes reconcile runtime state</b>: after profile plugins are installed, replaced, or removed, the Host updates the applied plugin composition and reconciles Loader entries. Required Desktop components are not shown as user-installed ecosystem plugins, and bundled ecosystem plugins remain available when removed from the profile.',
                '<b>Updated bundled Git and Theme Studio plugins</b>, plus a Windows installer smoke check for the packaged Node.js and Python toolchains.',
              ] }
          ] },
        { version: '0.1.7-beta.1', date: '2026-09-28', lead: 'Bundles DeepSeek Harness <code>0.1.7-rc.2</code>.', sections: [
            { title: 'What changed', items: [
                '<b>Bundled Harness upgrade</b>: upstream moves from <code>0.1.5-rc.2</code> to <code>0.1.7-rc.2</code>. See the upstream release notes for its features and fixes.',
                '<b>Web profile manages plugins</b>: Git <code>0.2.3</code> and Theme Studio <code>0.1.2</code> are preinstalled ecosystem bundles in the Plugins page\'s Installed group. Users can enable or disable either one. Theme Studio is no longer a required Desktop runtime plugin.',
                '<b>Clearer Desktop Capabilities page</b>: the Official plugin page shows the package identity and contained desktop capabilities, with status read from the Host inventory and Client features.',
                '<b>More reliable upgrades and startup</b>: legacy Desktop plugin state migrates into the Web profile with disabled selections preserved; startup serializes ecosystem plugin writes and avoids duplicate mounts for the same plugin.',
                '<b>Desktop fixes</b>: macOS no longer reads Keychain proxy credentials merely because the app starts; terminal discovery can skip shell candidates that are not installed.',
                '<b>Documentation</b>: the README corrects Theme Studio\'s plugin classification and links the independently installed multi-root workspace plugin, which is not bundled with these installers.',
              ] }
          ] },
        { version: '0.1.5-beta.3', date: '2026-09-24', sections: [
            { title: 'What changed', items: [
                '<b>New Settings → Network page</b>: four modes — Default, Direct, System Proxy, and Manual Proxy. Default keeps the existing application network behavior; Direct connects explicitly and clears the proxy environment variables Desktop hands to child processes; System Proxy resolves through the operating-system policy (current-user WinHTTP on Windows, CFNetwork on macOS, GNOME/KDE 5/6) and executes only the first final route, including an explicit <code>DIRECT</code>; Manual Proxy takes a single HTTP, HTTPS, or SOCKS5 endpoint. Choosing a mode takes effect through <code>Save & Restart</code>.',
                '<b>All managed traffic goes through one loopback Gateway</b>: in Managed modes the harness and the child processes Desktop owns only see a local Gateway on <code>127.0.0.1</code>; a failing selected proxy never implicitly falls back to another proxy or to a direct connection, but reports the failure and offers retrying the same route, a one-time <code>Use Default This Time</code>, or opening network settings.',
                '<b>Credentials stay in encrypted storage and process memory</b>: Manual HTTP/HTTPS username and password are encrypted through Electron <code>safeStorage</code> (Linux <code>basic_text</code> counts as no secure storage available), the UI shows a fixed placeholder for a saved password and never echoes it, proxy credentials never enter environment variables, and child processes a model can influence only ever see the credential-free loopback address.',
                '<b>Connectivity tests and diagnostics</b>: proxy, Internet, GitHub, and LLM API reachability can be tested; the tests use the updater network path, which raises no failure prompt, do not change the selected route, and never call a model or spend tokens. Advanced shows the current mode, Gateway state, epoch, selected route, last failure, and System policy details, and allows editing the test URLs and reloading the system proxy configuration.',
                '<b>A Rust Network Runtime ships with the installers</b>: the Gateway, the operating-system proxy provider, PAC execution, and the connectors run in the packaged <code>resources/network-runtime/dsh-electron-network-runtime</code> (<code>.exe</code> on Windows); the release workflow builds that runtime before packaging, Desktop CI runs its tests on Windows, macOS, and Linux, and the Windows installer smoke check now requires that executable to be present.',
                '<b>Limits in this release</b>: no Manual bypass entries, SOCKS5 authentication, custom HTTPS proxy CA, client certificates, or integrated NTLM/Negotiate authentication; unsupported System backends fail closed, and when no Linux desktop is available use Manual or Direct instead.',
              ] }
          ] },
        { version: '0.1.5-beta.2', date: '2026-09-14', sections: [
            { title: 'What changed', items: [
                '<b>No more console windows on Windows</b>: no process on the desktop chain owns a console, and <code>electron.exe</code> is a GUI-subsystem image, so <code>ELECTRON_RUN_AS_NODE</code> does not change the PE subsystem and <code>windowsHide</code> / <code>CREATE_NO_WINDOW</code> had no effect on the Host; every console target the agent spawned (<code>pwsh</code>, <code>git</code>, …) therefore got its own visible console, which Windows 11 renders through Windows Terminal. The installer now ships a Node.js runtime (<code>resources/node/node.exe</code>), and the Host and its <code>dsh plugin</code> command children all run on it with <code>windowsHide: true</code>, so the job runner, the ACL runner, the restricted <code>pwsh</code>, and ordinary targets inherit one hidden console; inside the Host <code>process.execPath</code> is <code>node.exe</code>, which changes the Host image in Task Manager, and the installer grows by roughly 30–50 MB. <code>DSH_ELECTRON_NODE_BINARY</code> overrides the runtime and must name an existing executable, otherwise startup fails and lists every candidate path. Process topology and <code>pnpm start</code> are unchanged on other platforms.',
                '<b>The Windows and Linux top edge yields to the system buttons</b>: the right panel\'s file tab strip and the conversation header\'s right-hand controls sat under Windows\' native Window Controls Overlay. The columns right of the sidebar now hold the native-control row free, exactly as the macOS sidebar holds the traffic-light row: the center column takes the 40px row as <code>padding-top</code> and moves its header and conversation below it, the absolutely positioned right panel takes the row as its <code>top</code>, both columns paint a drag strip over the freed band, and the sidebar keeps the window\'s top edge. The fullscreen right panel keeps <code>inset: 0</code> and holds the row as its own <code>padding-top</code> (40px on Windows and Linux, 28px on macOS), so its pane strip and its exit-fullscreen and collapse controls no longer overlap the system buttons. The header-only <code>--dsh-windows-caption-inset</code> patch is gone.',
                '<b>Bundled Git plugin upgraded to <code>@dsh-electron/dsh-plugin-git@0.2.1</code></b>: the client no longer starts a refresh round per window focus event, merging overlapping repository refreshes — keyed by path and generation — into one Host round trip so every round\'s result lands. The focus churn from the Windows console windows used to trigger superseding rounds that never rendered the repository, leaving the Git panel blank; with the hidden-console fix above, Git works on Windows again.',
                '<b>Windows startup path covered by CI</b>: <code>desktop-ci</code> gains a <code>Windows Host startup</code> job that runs the supervised Host\'s startup spec on <code>windows-latest</code>, covering the device path and console attachment; that spec previously ran on Linux only.',
              ] }
          ] },
        { version: '0.1.5-beta.1', date: '2026-09-14', sections: [
            { title: 'What changed', items: [
                '<b>Bundled harness upgraded to upstream <code>0.1.5-rc.2</code></b> (from <code>0.1.2-rc.1</code>): the right Sidebar replaces the removed Details panel with multi-tab, split, and fullscreen panes plus Markdown / code / HTML / PDF / image preview; generic file uploads; feedback submission independent of the conversation; session data format V3, where upgraded sessions no longer read on older builds; new conversations default to <code>DeepSeek-V41-Flash</code>; MCP tool discovery rejects repeated pagination cursors. Earlier upstream work is summarized in the 0.1.5-rc.1 notes.',
                '<b>Plugin Manager restored</b>: the Installed tab mounts again on the upstream <code>settings.plugins.tab</code> slot, loaded as a required row by <code>host.patch.yml</code>; upstream\'s Plugins section still owns navigation, tab chrome, selection, and mount lifecycle.',
                '<b>Git moved to the right Sidebar</b>: the bundled <code>@dsh-electron/dsh-plugin-git@0.2.0</code> occupies <code>ctx.sidebarRight</code> and no longer depends on the Details slot; it installs as an exact-version production npm dependency, so this repository no longer mirrors its source.',
                '<b>Details Host removed</b>: upstream deleted the Client <code>details</code> slot, so the <code>ui-details-host</code> mirror and the <code>@dsh-electron/dsh-client-ui-details-host</code> dependency are gone; the old Details-based Git client is no longer shipped.',
                '<b>Plugin-mutation crash recovery</b>: install and mutation write a <code>packages-pending</code> marker and hold the web profile lock (owned by the Main PID, then the child PID, then Main again); the next launch reconciles read-only and repairs hot-plugin symlinks. A failed reconcile, lock timeout, or Host ready-line timeout no longer quits — Main opens a recovery window offering "disable every manageable plugin" or "reset Desktop management", neither of which deletes profile dependencies.',
                '<b>Install hardening</b>: startup and every <code>dsh plugin</code> spawn merge <code>strictDepBuilds</code> and a reviewed <code>allowBuilds</code> seed into <code>$DSH_HOME/profiles/web/pnpm-workspace.yaml</code>; an exit-0 command that changed no dependency now fails; startup sweeps symlinks for every hot plugin.',
                '<b>Manageable-kind gating</b>: a profile <code>runtime-plugin</code> hot-loads only after Desktop recorded installation intent (<code>profileManaged</code> / <code>desktopInstalled</code>), so importable CLI dependencies stay catalogued without entering Electron\'s private roster; removing a package with <code>desktopInstalled === false</code> warns that the CLI or another environment installed it.',
              ] }
          ] },
        { version: '0.1.2-rc.1', date: '2026-09-11', sections: [
            { title: 'What changed', items: [
                'First <b>RC</b> of the <code>0.1.2</code> series: promotes <code>0.1.2-beta.5</code> and later Desktop work onto <code>main</code>; still bundles upstream <code>0.1.2-rc.1</code>. (#90)',
                '<b>Audit recovery</b>: sync Details Host launcher entries and Git plugin Graph / discard / stale-output guards. (#89)',
                '<b>Desktop capabilities in this series</b> (versus <code>0.1.1-rc.2</code>): Remote gateway and one-time launch-token auth; conversation folding, font size, and token usage; Details Host multi-tab dock and workspace folder picking; Git Changes / Graph / commit-message generation; Theme Studio; Host Cookie hardening and plugin-mutation drain. See the beta notes for details.',
              ] }
          ] },
        { version: '0.1.2-beta.5', date: '2026-09-07', sections: [
            { title: 'What changed', items: [
                '<b>Details Host multi-tab dock polish</b>: the tab strip aligns to and pins against the header divider, tabs are bottom-aligned and lift on hover, and hover/active states share the launcher-card fill with a hover wash backed by an explicit theme token; the App Details Toggle header action adopts the shared interactive hover wash; native action hints are refined.',
                '<b>Workspace folder integration</b>: the Details Host "connect workspace folder" action is now wired through the Electron directory-picker plugin via <code>registerFolderOpener</code> for a real folder dialog; host state allows an <code>undefined</code> workspace path and keeps the typed session identity for workspace lookup.',
                '<b>Git Changes rebuilt around a commit-first sketch</b>: the Changes area is re-laid-out so the commit split and Changes list stay consistent, the commit-message field grows with content (one row when empty), and Git controls stay inside their frames.',
                '<b>Git toolbar decluttering</b>: Graph and Diff refresh move to the scope bar / top-right without the now-unused Reveal control, and Graph/Diff/Changes headers are aligned to the same top inset.',
                '<b>Commit-message generation settings</b>: the generation settings seam is registered under Plugin configuration, Git generation models can be loaded, and discard copy is unified.',
              ] }
          ] },
        { version: '0.1.2-beta.4', date: '2026-09-06', sections: [
            { title: 'What changed', items: [
                '<b>Host cookie security fix</b>: new <code>bindHarnessUrl()</code> keeps scheme-relative paths like <code>//host/path</code> from turning into a new authority, so the Main Host cookie never leaves loopback; Host fetches now use <code>redirect: \'manual\'</code> to keep redirects from leaking cookies.',
                '<b>Plugin mutation draining</b>: on quit/relaunch, <code>plugin-mutation.shutdown()</code> refuses later mutations and awaits the queue, so install/uninstall operations are no longer cut off mid-flight; the runtime startup-output scan gains a 256KB buffer cap and drops output after readiness.',
                '<b>WebSocket shim fix</b>: native WebSocket instances are now returned directly for non-Host URLs, restoring working <code>send</code>.',
                '<b>Git plugin fixes</b>: mutations are serialized and stale ones are ignored after workspace rebinding (removing races); <code>GIT_LITERAL_PATHSPECS=1</code> is set so magic pathspecs stay literal; porcelain v2 unmerged (<code>u</code>) record path parsing is fixed.',
                '<b>Details Host fix</b>: unloaded surfaces are now pruned across all retained sessions, not just the current one, so background sessions no longer keep stale surfaces.',
                '<b>Docs & tests</b>: bilingual audit notes added (8 defects fixed in this round); new/updated tests for harness-proxy, plugin-mutation, runtime, websocket-shim, Git controller/service/status, and Details Host lifecycle.',
              ] }
          ] },
        { version: '0.1.2-beta.3', date: '2026-09-05', sections: [
            { title: 'What changed', items: [
                '<b>Details Host evolves into a multi-tab dock (API v3)</b>: the single-surface details host becomes a multi-tab dock; the "App Details Toggle" ships inside the host as header chrome; launcher cards appear on an empty dock, with tabs retained on close and takeover state persisting.',
                '<b>Git plugin migrates to Details Host v3 surfaces</b>: the Git panel registers through v3 surfaces and launcher cards; header actions become icon-only, with a new canvas graph rail.',
                '<b>Git Graph (MVP)</b>: adds a visual commit history — an active-lane graph layout model, bezier-edge rendering, graph scopes in history queries, and a three-lane visible cap; the canvas now renders at design size, fixing the DPR-scaled backing store on high-DPI displays.',
                '<b>Commit message generator</b>: the Git plugin gains commit-message generation, documented in the pairing and user-experience sections of the plugin README.',
                '<b>Header alignment</b>: the app publishes a live-measured <code>--app-header-height</code> token (a <code>ResizeObserver</code> plus a <code>MutationObserver</code> following session-driven header mount/unmount); the Details tab bar shares the same height and divider treatment so the two bottom rules form one continuous line. Host chrome is localized through the locale seat, with a new <code>DetailsHeaderAction</code> primitive and a responsive tab strip.',
                '<b>Packaging and engineering fixes</b>: the builder, runtime validator, and packaging specs now derive the runtime plugin client bundle filename from each plugin\'s <code>./client</code> manifest exports (now <code>lib/client.cjs</code>); refresh details-host fixture integrity and lockfiles; exempt the canonical plugin subtree mirrors from oxlint; align test baselines with the v3 tabbed dock.',
              ] }
          ] },
        { version: '0.1.2-beta.2', date: '2026-09-04', sections: [
            { title: 'What changed', items: [
                '<b>Fix launch crash</b>: <code>v0.1.2-beta.1</code> crashed on open because <code>@dsh-electron/dsh-plugin-git</code> was listed in the ecosystem plugin inventory but missing from production <code>dependencies</code>; this release declares it so electron-builder ships the package.',
                '<b>Packaging guardrails</b>: add packaging and runtime-plugins tests to catch undeclared ecosystem plugin dependencies; extend <code>sync-version-dependencies</code> to keep the dependency list in sync.',
              ] }
          ] },
        { version: '0.1.2-beta.1', date: '2026-09-03', sections: [
            { title: 'What changed', items: [
                'Sync upstream Harness to <code>v0.1.2-rc.1</code>; adapt Desktop to the Remote gateway and one-time launch-token authentication (Main-side <code>HarnessProxy.authenticate()</code>, cookie forwarding, and <code>/api/remote.mux</code> event streaming). (#82)',
                '<b>Conversation UX</b>: fold process details and the System prompt by default; drag-resizable content width; token usage and elapsed time after each answer; full-history turn navigation and font sizing.',
                '<b>Models and plugins</b>: provider sign-in controls in Models settings; richer subagent model selection; plugins grouped by conversation/global scope with Preset switching.',
                '<b>Connection and performance</b>: connection status with disconnect retry; faster startup and conversation initialization; incremental streaming code-block highlighting; lower memory and rendering overhead for long conversations.',
                '<b>Images and tools</b>: show images immediately while compression and upload continue; improved compression and Trajectory image display; enable <code>web_fetch</code> by default with SSRF protection.',
                '<b>Other fixes</b>: persistent shell output, Windows directory-picker path truncation, queued/added image delivery, and <code>Tab</code> completion in the command menu; rename Code Mode to PTC mode while keeping existing conversation records readable.',
                'Fix the <code>desktop-promote</code> auto-release workflow.',
              ] }
          ] },
        { version: '0.1.1-rc.2', date: '2026-08-28', sections: [
            { title: 'What changed', items: [
                'First <b>RC</b> build of the <code>0.1.1</code> series; bundles upstream <code>0.1.1-rc.2</code> with the same Desktop features as <code>0.1.1-beta.11</code> (Theme Studio, plugin lifecycle, Details Host / Git, and related work).',
                'Fix the <code>sync-upstream</code> GitHub Actions workflow runtime error. (#79)',
              ] }
          ] },
        { version: '0.1.1-beta.11', date: '2026-08-26', sections: [
            { title: 'What changed', items: [
                'Mount <code>@dsh-electron/dsh-theme-studio</code> as a required Electron runtime plugin via <code>runtime/host.patch.yml</code> (subtree: <code>apps/electron/runtime/plugins/dsh-theme-studio</code>); add Settings → General → Themes (<code>id = themes</code>) while keeping Appearance; built-in themes stack <code>:active</code> / <code>:preview</code> via <code>ctx.theme.overrideTokens()</code>, and restoring Default only unloads the overlay. (#72)',
                'Restart fully after removing <code>profile-restart</code> packages instead of a Renderer soft-refresh that reloads deleted client scripts; mirror install UX for Bundle removal with a success dialog, pending-restart banner, and <b>Restart Now</b>. (#73)',
                'Sync Details Host so the details header adds top padding on Windows and keeps the close control and title below the Window Controls Overlay. (#74)',
                'Sync Git plugin: create-branch uses the shared conversation <code>Modal</code>; empty repositories (unborn HEAD) show a clear hint and disable create instead of raw Git object-name errors. (#75)',
                'Sync Theme Studio Theme Unit cards to Appearance-style compact boxes: small top-left swatch, name/current in the header, Preview/Apply bottom-right. (#76)',
              ] }
          ] },
        { version: '0.1.1-beta.10', date: '2026-08-25', sections: [
            { title: 'What changed', items: [
                'Add Registry, GitHub/Git, and Local install entry points in Installed Plugins; write to the web profile via bundled pnpm and unify runtime plugin, Bundle, and dependency recognition and lifecycle; support source switching, failed-residue detection, blocked-build attribution, and Bundle/runtime Host and client entry verification; prevent profile dependencies from shadowing Desktop-bundled packages. (#65)',
                'Separate plugin activation mode, package health, and pending Host restart state; provide Main-authoritative update checks, source refresh, reinstall/repair, and safe removal through the upstream dsh plugin backend; quiesce active runtime code before package mutation, classify recovery from disk changes, and cache-bust ESM reactivation; expose package lifecycle through Desktop IPC with update, package-menu, removal-confirmation, and restart-banner UI. (#66)',
                'Sync <code>@dsh-electron/dsh-client-ui-details-host</code> to v0.2 (surface instance / payload routing / descriptor lifecycle / header actions / per-session navigation, dedupe, back); sync <code>dsh-plugin-git</code> dogfood with payload open, <code>registerSurface</code>, Host header actions, and verified session restore / unload remount. (#68)',
                'Add <code>cordis.patch.yml</code> and <code>dsh.bundle</code> declarations to canonical plugin repos so <code>dsh plugin add</code> activates each plugin without manual <code>cordis.yml</code> edits; sync plugin subtrees and document bundled plugins in the desktop README. (#70)',
              ] }
          ] },
        { version: '0.1.1-beta.9', date: '2026-08-24', sections: [
            { title: 'What changed', items: [
                'Mount <code>@dsh-electron/dsh-client-ui-details-host</code> as required portable UI via <code>runtime/host.patch.yml</code> (subtree: <code>apps/electron/runtime/plugins/ui-details-host</code>); idle boot does not seize the third column; takeover happens only on <code>open(id)</code>.',
                'Sync Git plugin for Details Host migration: Git occupies <code>shell.details.surface</code> and opens via <code>ctx.shellDetails.open(\'git\')</code> instead of an overlay drawer; AppFrame details column, resize handle, and close button are owned by Details Host.',
                'Switch runtime plugin client builds to automatic JSX so Details Host no longer crashes on a missing <code>React</code> identifier.',
                'Declare <code>@dsh-electron/dsh-client-ui-details-host/client</code> in Git <code>dsh.client.external</code>; <code>verify-client-packages</code> counts Details Host runtime-plugin manifest in supplier verification so Git factory <code>require</code> does not hit an empty module table.',
                'Require Details Host before Git client materializes so dependency order is correct. (#62)',
              ] }
          ] },
        { version: '0.1.1-beta.8', date: '2026-08-24', sections: [
            { title: 'What changed', items: [
                'Suspend window drag regions while modals are open so the conversation header no longer steals pointer input from settings page chrome and close buttons. (#52)',
                'Establish the downstream DSH ecosystem plugin path: ship <code>@dsh-electron/dsh-plugin-git</code> as an independently publishable plugin with portable Git service, Connection RPC, source-control UI, and Electron custom-scheme protocol proxying; mount bundled ecosystem plugin artifacts via <code>runtime/host.patch.yml</code>. (#53)',
                'Rework Git plugin UX: move from sidebar modal to composer controls plus a right drawer (Changes / Diff / Commit), with branch selector and change count on the input bar left; hide the slot when the workspace has no Git repo. (#54)',
                'Add runtime plugin hot-plug via dynamic Cordis include: express the desired plugin roster in generated config, serialize enable/disable/reload through <code>PluginLifecycleController</code>, and keep Desktop-required adapters non-manageable. (#57)',
                'Add an Installed Plugins manager (Settings → Plugins → Installed) with lifecycle polling, error rollback, local search, and System Components diagnostics. (#60)',
                'Make nested pnpm subprocesses portable on Windows so CI Windows builds and Electron tests pass. (#61)',
              ] }
          ] },
        { version: '0.1.1-beta.7', date: '2026-08-23', sections: [
            { title: 'What changed', items: [
                'Restore DeepSeek Harness branding via bundled runtime plugin <code>@dsh-electron/dsh-electron-ui-brand</code>: unconditionally fill sidebar brand mark, name, and conversation hero brand mark so Desktop no longer shows the upstream <code>DSH Local Build</code> fallback; reuse <code>FishLogo</code> / <code>BrandWordmark</code> from <code>@deepseek-ai/dsh-client-ui-primitives</code> without modifying upstream <code>packages/</code> source or depending on <code>DSH_CLIENT_BUILD_PROFILE=official</code>. (#51)',
              ] }
          ] },
        { version: '0.1.1-beta.6', date: '2026-08-23', sections: [
            { title: 'What changed', items: [
                'Fix frameless window drag hit regions on Windows/Linux: default the sidebar top safe area to <code>0px</code>, keeping macOS-only spacing for traffic lights so sidebar content starts at the window top edge on Windows/Linux; mark full-viewport dialog containers, overlays, Dialog shells, and inner controls as <code>no-drag</code> so underlying window drag regions no longer swallow settings close-button and other interactive events. (#50)',
              ] }
          ] },
        { version: '0.1.1-beta.5', date: '2026-08-23', sections: [
            { title: 'What changed', items: [
                'Integrate frameless window drag regions into app chrome: remove the separate top drag strip so the sidebar and session background extend to the native window edge; embed drag targets in sidebar whitespace, empty-session top background, and non-interactive gaps in the active session header while excluding buttons, links, tabs, inputs, and full-viewport dialogs; preserve macOS traffic-light safe areas and Windows/Linux Window Controls Overlay system-button space. (#48)',
                'Publish downstream Electron packages under the <code>@dsh-electron</code> npm scope: rename the Electron app and runtime plugins (including <code>desktop-capabilities</code> and <code>ui-directory-picker</code>) to <code>@dsh-electron/dsh-electron*</code> while keeping upstream-synced <code>packages/</code> and <code>vendor/</code> packages on <code>@deepseek-ai</code>. (#49)',
              ] }
          ] },
        { version: '0.1.1-beta.4', date: '2026-08-22', sections: [
            { title: 'What changed', items: [
                'Build crisp tray icons from tracked SVG source: add <code>build:tray</code> to rasterize black/white/template PNGs at DPI tiers; macOS uses template icons with <code>addRepresentation</code>, and Windows/Linux bind logical DIP sizes on HiDPI displays for sharper menu-bar rendering. (#43)',
                'Integrate native window chrome with the Harness layout: remove the custom titlebar and <code>#root</code> top-padding model; configure platform-specific hidden title bar / Window Controls Overlay in Main; inject safe-area and drag/no-drag rules for sidebar, header, and hero via a <code>window-chrome</code> renderer adapter, fixing traffic-light spacing and drag-vs-click conflicts. (#44)',
              ] }
          ] },
        { version: '0.1.1-beta.3', date: '2026-08-22', sections: [
            { title: 'What changed', items: [
                'Complete the desktop feature-layer plugin architecture: add generic <code>runtime/plugins/</code> build and linking infrastructure, provide desktop capabilities through <code>ctx.desktop</code>, migrate the directory picker to a capability consumer, and fix dependent plugins stalling before the preload bridge is ready. (#40)',
                'Harden the desktop release and runtime lifecycle: validate release tags, compile every Electron TypeScript face, dispose Host WebSocket bridge resources, await complete Host shutdown, and align the updater interface. (#41)',
                'Add a bilingual desktop architecture guide covering the current implementation, target architecture, and downstream documentation ownership. (fd2412b)',
              ] }
          ] },
        { version: '0.1.1-beta.2', date: '2026-08-21', sections: [
            { title: 'What changed', items: [
                'Fix Electron Host bootstrap parsing: Host index now injects <code>globalThis["__DSH_BOOT__"]</code>, while the desktop scraper still expected <code>window.__DSH_BOOT__</code>, which broke <code>getBootstrap</code> on startup. Align the scraper, tests, and notes with the current Host render marker. (#39)',
              ] }
          ] },
      ],
    },

  },

  multiRoot: {
    meta: {
      title: 'Multi-root Workspace — one agent session, several writable folders',
      description:
        'A DSH plugin that widens the workspace sandbox from one root to a primary root plus additional roots, so the agent can read, edit and run commands across several repositories. Native tools, per-root Skills, kernel-level enforcement, fail-closed.',
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
      lead: 'Let a DSH agent read, edit and run commands across several repositories in a single session. The plugin widens the workspace sandbox from one root to a primary root plus N additional roots, keeps the native agent tools, surfaces each root’s own skills under a stable /alias-id:name namespace, and offers optional Auto Review with multi-root context (off by default).',
      install: 'Install the plugin',
      architecture: 'Read the architecture ↗',
      bullets: ['Native read, write, edit and bash tools', 'Per-root Skills as /alias-id:name', 'Kernel and in-process enforcement', 'Absent when you add no roots'],
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
        body: 'The primary root is the session origin and cannot be removed. Additional roots are canonicalized, checked against the primary root and each other, and kept in an ordered list. Each one carries an access level — inherit, read-only or read-write — a Skills toggle with an editable aliasId, and can be aliased, reordered, copied or revealed in your file manager.',
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
          'Skills found in a root’s .dsh/skills and .agents/skills reach the model as /alias-id:name through the native skill tool — read-only roots default off',
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
          'One owner holds the store authority — other Hosts share it over local IPC, and background recovery rejoins after contention or a disconnect',
          'The dialog also browses an additional root’s files — expandable directories and text previews',
          'An independent Skills toggle and the stable aliasId namespace are edited per root in the same dialog, under a global setting that defaults on',
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
          body: 'A store-wide kernel lease means only one process opens the store; other Hosts read and write through their own Registry facades over kernel-authenticated local IPC, and every mutation is ordered at the owner. A contending or disconnected Host publishes an empty scope until background recovery resynchronizes it. Panel requests are tied to a live session, not to a client-supplied path.',
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
        caption: 'Enforcement path of the released plugin (v0.1.13). The numbered controls below list what each part guarantees and what it does not.',
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
        { version: '0.1.13', date: '2026-10-31', sections: [
            { kind: 'added', items: [
                '<b>Background recovery for the shared Registry (on by default)</b>: when Hosts share a registry, retryable authority contention, disconnections, and storage-open failures are retried automatically with backoff and jitter. A follower is considered recovered only after it has resynchronized its tracked primary roots. Set <code>backgroundRecovery: false</code> on <code>multi-root-registry</code> to disable background retries; on-demand recovery remains available. Configuration errors and writes with an unknown state still require configuration correction or a restart. Recovery preserves deny boundaries, every new operation still requires admission, and mutations with an unknown result are never replayed automatically. Read-only diagnostics and deduplicated transition logs help diagnose failures (<adr0026>ADR-0026</adr0026>).'
              ] },
            { kind: 'fixed', items: [
                '<b>Files tab retains its selected root when opening a file</b>: when opening a file in an additional root unmounts and remounts the Files tab, its selected root, expanded directories, and scroll position are retained. A pending or failed list request no longer resets the selection to the primary root; closing the tab cleans up watches and tree resources.',
                '<b>Shared-authority recovery safety and consistency</b>: a retry cannot bypass a failed storage-to-lock binding check. Recovery synchronizes root projections and publishes consistent state in a batch; empty snapshots clear stale boundaries, and failed recovery rounds no longer generate repeated notifications. On Windows, the request timer stays active during the connection handshake so the process cannot exit prematurely.'
              ] }
          ] },
        { version: '0.1.12', date: '2026-10-30', sections: [
            { kind: 'added', items: [
                '<b>Multiple Hosts can use additional roots at the same time (on by default)</b>: the bundle now configures a shared storage authority (<code>sharedStorageRoot</code>) — previously only the Host holding the store lease could use additional roots, and a second Host sharing the same registry was fail-closed. Now a single owner opens the storage medium and manages persistence, while the other Hosts read and write through their own Registry facades over kernel-authenticated local IPC; every mutation and each new operation’s admission is ordered at the owner: operations that arrive after a revocation are refused immediately, ones admitted before it may finish, and a disconnect preserves the established deny boundary; when the owner exits or crashes a follower contends, takes over, and recovers under a new epoch, and a lost committed reply is never replayed. Copied exec argv and expired handles cannot stand in for a fresh admission, the synchronous confine/spawn entry points keep their return shape, and every consumer path (fs, sandbox, shell/PTC/agent PTY, LSP, Files/watch, instructions, Skills) goes through admission. Profiles without <code>sharedStorageRoot</code> keep the legacy contended-fail-closed behavior (<adr0024>ADR-0024</adr0024>, <adr0025>ADR-0025</adr0025>, <registryService>shared service architecture</registryService>).',
                '<b>Exact support for DSH <code>0.2.1-rc.5</code></b>: the delta from <code>0.2.1-rc.4</code> does not touch this plugin’s interfaces, so no new adapter branch is needed; the dev pin stays at <code>0.2.2-alpha.2</code> and the support matrix now covers 20 exact releases.'
              ] },
            { kind: 'changed', items: [
                '<b>Dependency security floors raised</b>: the plugin’s direct <code>zod</code> floor moves to <code>^4.6.7</code>; on the development side <code>vitest</code> moves to <code>^4.1.12</code>, and <code>@modelcontextprotocol/sdk</code> <code>^1.32.2</code> is declared explicitly to keep GenAI’s optional <code>mcpToTool</code> capability on a fixed release. The full development tree’s advisories drop from 1 critical / 17 high / 27 moderate to 5 high / 6 moderate; the remaining advisories in host trees are introduced by DSH’s own exact pins (e.g. zod <code>4.4.3</code>, Undici <code>8.11.2</code>) and are not resolved by this plugin release (<tbDependencySecurity>dependency security review</tbDependencySecurity>).'
              ] }
          ] },
        { version: '0.1.11', date: '2026-10-29', sections: [
            { kind: 'added', items: [
                '<b>Exact support for DSH <code>0.2.1-rc.4</code> and <code>0.2.2-alpha.2</code></b>: the <code>rc.4</code> probe was fully green with no adapter changes; <code>0.2.2-alpha.2</code> splits tool execution out of <code>dsh-tools</code> into executors and gives <code>AgentRegistry</code> a new <code>sessionProjections</code> injection — neither touches plugin source. Upstream’s new <code>SandboxExecutionPolicy.additionalWritableRoots</code> (a native third writable-root path unrelated to this fork) composes correctly with the widened provider, pinned by a new regression spec asserting both grants take effect. The dev pin moves to <code>0.2.2-alpha.2</code> (cordis <code>4.0.6-alpha.1</code>, Node ≥24.9). The client forks (files-tree, open-in-app) are re-synced to the <code>0.2.2-alpha.2</code> baseline — hover rules moved under <code>@media (hover: hover)</code> and open-in-app failure feedback became an app-wide <code>shell.overlay</code> outcome toast.',
                '<b>Upgrade lane and CI</b>: the CI verify matrix now routes by a known list — <code>0.1.*</code> / <code>0.2.0</code> / <code>0.2.1</code> run on Node <code>22.19.0</code>, everything else (including 0.2.2 and later) on <code>24.9.0</code>; the upgrade script additionally pins the target release’s own cordis ecosystem (plugin-loader/group/include, schemastery, cosmokit) when repointing, so an older tree cannot mix with the alpha-line packages the committed lockfile prefers.'
              ] },
            { kind: 'fixed', items: [
                '<b>Skills refresh feedback loop caused by repeated Registry-authority notifications (Issue #24)</b>: while a second DSH process contends for the registry lease (or the store fails to open), every additional-root Skills query retried the lease through <code>refresh()</code>; on failure <code>setRegistryAuthority(false)</code> notified listeners even though the state had not changed, invalidating the Skills cache and broadcasting <code>skills/change</code> — clients re-query on every event, closing an unbounded feedback loop: the contending Host burned about one CPU core while idle, grew memory, and eventually died of V8 OOM, and zero additional roots did not prevent it. Listeners are now notified only on a real <code>available</code>/<code>unavailable</code> transition; the lease retry, takeover after the holder exits, and the fail-closed "primary root only while authority is unavailable" semantics are unchanged (<tbRegistryOwner>troubleshooting</tbRegistryOwner>, <adr0023>ADR-0023 revision</adr0023>).'
              ] }
          ] },
        { version: '0.1.10', date: '2026-10-25', sections: [
            { kind: 'added', items: [
                "<b>Additional-root Skills</b>: skills are discovered in each additional folder's <code>.dsh/skills</code> and <code>.agents/skills</code>; names and descriptions are visible before the first model step and bodies load on invocation. The primary root uses <code>/skill-name</code>; additional roots always use the namespaced <code>/alias-id:skill-name</code> reference (completable from the Slash menu, invoked by the model through the native <code>skill</code> tool under an internal name). New <code>inherit</code> / <code>read-write</code> registrations enable Skills by default, <code>read-only</code> ones disable them; the Workspace Folders dialog provides an independent Skills toggle and <code>aliasId</code> editing, and the global <b>Enable additional-root Skills</b> switch under Settings → Plugins → Multi-root Workspace defaults to on — disabling it only stops new discovery and invocation while preserving each root's choice. On upgrade, legacy <code>inherit</code> / <code>read-write</code> registrations start with Skills enabled; migration preserves existing grants, but an older plugin writing the registry may strip <code>aliasId</code> and manual toggles — <b>lossless downgrade of Skills preferences is not guaranteed</b> (back up <code>$DSH_HOME/storages/multi_root_workspace.json</code> before downgrading). Enabling Skills on a read-only root grants no write access; disabling does not reclaim delivered bodies or stop started processes (<adr0023>ADR-0023</adr0023>).",
                '<b>Exact support for DSH <code>0.2.1-rc.3</code></b>. The upstream <code>rc.2</code>→<code>rc.3</code> delta is purely additive (new sidebar slots, navigation pins, and a DeepSeek <code>/models</code> listing), so no new adapter branch is needed; the dev pin moves to <code>0.2.1-rc.3</code> (cordis <code>4.0.5</code> unchanged).'
              ] },
            { kind: 'fixed', items: [
                '<b>Workspace Folders panel aligned with upstream UI</b>: the settings switch row layout, the Skills toggle folded into the icon actions, button backgrounds confined to hover, action appearance preserved during saves, and the folder policy and effective access combined into one label; the move up/down reorder buttons (the ordering interface is retained for a future drag interaction) and the permission introduction text at the top of the dialog are removed.',
                '<b>Namespaced skill reference rendering</b>: a sent <code>/alias-id:skill-name</code> reference renders as ordinary user text, without a dedicated button style, highlighting, or click-to-preview (same-day ADR-0023 revision); ordinary session activity/title updates no longer close an open skill body preview.'
              ] }
          ] },
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
        'A portable DSH plugin that puts local Git status, staged and working-tree diffs, a lane graph, branch controls and GitHub Remote workflows into the right sidebar. Git runs through ctx.subprocess with separate argv values — never a shell.',
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
      lead: 'One portable plugin gives a DSH host a real Git surface: status, diffs, history and branch controls in the right sidebar — plus GitHub Remote where the host offers the credentials seam. The same package runs on a web profile and in Rivetdeck, where it is preinstalled.',
      install: 'Install the plugin',
      readme: 'Read the README ↗',
      bullets: ['Changes, Graph, Worktrees and Remote tabs in the right sidebar', 'Git through ctx.subprocess — never a shell', 'No model tools, no prompt content'],
      shotCaption: 'The Changes tab in Rivetdeck: two modified files and one untracked file on feat/checkout-flow.',
    },
    features: {
      eyebrow: 'Features',
      title: 'The whole review loop, without leaving the window.',
      lead: 'Changes, Graph, Worktrees and Remote join the upstream right sidebar as pages through its standard registration — and every file comparison opens as a dsh-resource diff.',
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
      remote: {
        kicker: 'GitHub Remote',
        title: 'Pull requests and issues, beside the commit graph',
        body: 'Where the host provides the optional credentials seam, Remote adds GitHub to the same sidebar: browse PRs and issues, open each in its own detail tab, and follow a timeline of comments, commits and reviews.',
        points: [
          'Verified PR checkout and Issue branches; create, close and merge stay protected actions',
          'Lists and file comparisons page in progressively, with rate-limit recovery',
          'Platform sign-in is its own dialog — it never configures Git fetch/push authentication',
          'Without the seam the package stays local Git; Remote simply does not register',
        ],
        mock: { title: 'Pull requests', signedIn: 'signed in · GitHub CLI', open: 'Open', merged: 'Merged' },
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
          body: 'Push and sync invoke git push and git pull --rebase as argv. A missing origin or rejected auth surfaces Git’s own error. Remote’s platform sign-in lives in its own dialog and never configures Git authentication.',
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
        { version: '0.2.9', date: '2026-10-30', sections: [
            { kind: 'added', items: [
                'The plugin settings page gains a "Platform accounts" section for viewing and managing GitHub/GitLab sign-in.'
              ] },
            { kind: 'changed', items: [
                'Remote and local Git operation errors now surface as toasts: a short localized summary hides the raw code, which stays reachable only through the copy-details action; panels no longer render inline red error text and keep only a muted hint on first-load failures.',
                'The platform authentication dialog is redesigned as "{platform} account" with an identity card and described method cards; the removed-instance grant cleanup moves from the dialog\'s Advanced fold to the settings "Platform accounts" section.',
                'Extend DSH compatibility to <code>0.2.1-rc.4</code> and <code>0.2.2-alpha.2</code>, including the optional credentials seam; the plugin accepts their host Cordis/schemastery copies while retaining all earlier supported releases and the <code>0.2.0-rc.2</code> development pin.',
                'Extend DSH compatibility to <code>0.2.1-rc.5</code>, a manifest-only republish whose reasoning-body slot contract change stays outside this plugin\'s surface; the host runtime floors, Node lane and development pin are unchanged.',
                'Copy <code>oauth-apps.json</code> into isolated DSH matrix lanes so lane installs can run the standalone bundle build.',
                'Validate unlisted candidates in the isolated local matrix; resolve online lanes from clean dependency trees and check peers to prevent stale Cordis companion packages. Use Node 24.9 for the 0.2.2 alpha CI lane and repair the development lockfile\'s include peer resolution.',
                'Patch development-tree advisories through dev-dependency upgrades and scoped pnpm overrides: vitest <code>4.1.12</code>, katex <code>0.19.1</code>, jsdom\'s undici, css-tree\'s source-map-js, the development pin\'s undici and ajv\'s fast-uri. The one remaining advisory (<code>zod</code> via <code>dsh-llm</code>) is exact-pinned by the upstream host and outside this plugin\'s ownership.'
              ] },
            { kind: 'fixed', items: [
                'GitLab authentication generation changes now withdraw old rows, cursors and filter caches even if the new read or pagination fails.',
                'Local Git failures show one shared toast per controller, with copy matching the failed operation across the composer and sidebar panels.',
                'Platform accounts accepts the full configuration of sixteen self-hosted instances plus built-in GitLab.com and GitHub.',
                'GitHub scoped write reconciliation now waits for every refreshed detail page before allowing acknowledgement; failed or superseded continuations keep repeat writes locked.',
                'Platform account rediscovery refreshes visible GitLab capabilities after same-URL configuration changes and on settings reentry, without interrupting device login or triggering a polling loop.',
                'Copying error details now reports a failure when the clipboard API is unavailable or the writer throws synchronously.',
                'Blocked remote-write notices now report copy success or failure while keeping their reconciliation controls available.',
                'GitLab authenticated-account and author avatars now display, including Gravatar default avatars.'
              ] }
          ] },
        { version: '0.2.8', date: '2026-10-25', sections: [
            { kind: 'added', items: [
                'Portable <b>GitHub Remote</b> workflows in the right sidebar: PR/Issue browsing, independent detail tabs, PR comments and reviews, verified PR checkout, Issue branches, and protected PR creation from already-pushed branches, closing, and merging. Remote requires the complete optional Host credentials seam; older hosts retain local Git with Remote disabled. Platform login does not configure Git fetch/push authentication. External-platform acceptance remains tracked in the <remotePlan>remote integration plan</remotePlan>.',
                'A platform-authentication dialog showing the active credential source and account, with GitHub CLI and configured OAuth device-login choices, reconnect/disconnect flows, and isolated credential lifecycle handling. Credential references and Git credential helpers remain supported by the runtime.',
                'Isolated browser E2E coverage for authentication sources in Chinese and English, disconnect/reconnect, device login/cancellation, token redaction, and independent browser contexts.'
              ] },
            { kind: 'changed', items: [
                'Extend verified DSH support to <code>0.2.1-rc.3</code> in the canonical release list, <code>engines.dsh</code>, and exact peer ranges, including the optional credentials seam. Existing structural adapters remain compatible with navigation customization and model discovery; the development pin stays at <code>0.2.0-rc.2</code>.',
                'GitHub PR/Issue lists, comments, commits, reviews, and comparison files load progressively with cursor continuation, deduplication, cancellation, generation checks, and rate-limit recovery. <code>RemotePage.next</code> and the <code>cursor</code>/<code>pages</code> RPC fields replace the fixed pagination budget; file continuations verify <code>expectedBaseSha</code>/<code>expectedHeadSha</code> to retain a stable comparison snapshot.',
                "PR/Issue details use a chronological timeline with comments, commits, reviews, and read-only inline threads grouped under their reviews. File changes open GitHub's Files page. GitHub Markdown and supported HTML render through the Host's Markdown component, with native details disclosures and validated GitHub avatars.",
                'Remote surfaces use upstream primitives and resource tabs. Git guide entries are grouped together, graph/remote icons are clearer, local Git views retain cached data between visits, and remote loading progress stays visible and responsive.',
                'Document the upstream Session-log downgrade boundary when newer mandatory events are present.'
              ] },
            { kind: 'fixed', items: [
                'Stop detail-load and external-open failures from repeatedly retrying for the same target and revision.',
                'Recover temporary viewer-lookup failures and reject out-of-range numeric GitHub entity identifiers.',
                'Preserve legacy Host Markdown rendering and Client bundle compatibility.'
              ] }
          ] },
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
        'A portable DSH plugin that adds a Themes row to Settings → General: eight built-in palettes, imported .dsh-theme.json themes and a manual token editor with hover preview, click to apply, and a Default that restores the official appearance. Token overlays only — mode and fonts stay with the host.',
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
      lead: 'DSH ships light, dark and follow-system. Theme Studio adds a Themes row to Settings → General with eight built-in palettes and your own — imported, or built token by token in the editor — hover to preview, click to apply, Default to give every color back.',
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
          '“Create theme manually…” opens the token editor; “Create your own theme…” pre-fills the bundled creator skill where the host supports it',
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
      editor: {
        kicker: 'Manual creation',
        title: 'A token editor, not just a file format',
        body: 'Create theme manually… picks any builtin or imported palette as the base, asks for a name, ID, author and description, then opens a Settings-style editor over every editable token — light and dark values side by side. Expressions such as var() and color-mix() stay verbatim.',
        points: [
          'Categories and groups with global search and a modified-only filter',
          'A color popover covers RGB literals, expressions and a structured color-mix builder',
          'Per-token bilingual usage notes, restore-to-base and static light/dark preview cards',
          'Saving appends a new theme and previews it once the host accepts; a rejected save keeps the draft',
        ],
        mock: { search: 'Search tokens…', modifiedOnly: 'Modified only', light: 'Light', dark: 'Dark' },
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
        'Every theme file still speaks dsh-theme.json v1 — manual creation saves a new theme; builtin palettes are never edited in place.',
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
        { version: '0.1.7', date: '2026-10-30', sections: [
            { kind: 'added', items: [
                'Support DSH <code>0.2.1-rc.4</code> and <code>0.2.2-alpha.2</code>, moving the development baseline to <code>0.2.2-alpha.2</code>.',
                'Support DSH <code>0.2.1-rc.5</code>; the development baseline stays <code>0.2.2-alpha.2</code>.',
                'Seven new derived tokens recolor empty-state illustrations (<code>--dsw-alias-illustration-background/surface/backing/detail/inset/shadow</code>) and the done state (<code>--dsw-alias-state-done-primary</code>), covering semantic tokens added upstream in <code>0.2.2-alpha.2</code>; older releases safely ignore them as unreferenced overrides.'
              ] }
          ] },
        { version: '0.1.6', date: '2026-10-25', sections: [
            { kind: 'added', items: [
                '<b>Create theme manually…</b> in the Themes menu: choose a builtin or imported base, enter a name, ID, author and description, and edit every editable token\'s Light/Dark values. Expressions such as <code>var()</code> / <code>color-mix()</code> are preserved. Saving appends a new theme, previews it after Host acceptance, and supports export/reimport. The draft survives closing the dialog or a rejected save within the theme row\'s lifetime.',
                'A Settings-style navigation rail and content pane with categories/groups, global search, a modified-only filter, bilingual token usage notes, restore-to-base actions and static light/dark preview cards. Error navigation, contrast summaries and modification counts share the footer, with a responsive layout for narrow screens.',
                'A color editing popover with RGB / color-mix tabs, literal or expression input, a base palette and color picker, a structured mix builder, and base/current color comparison and restore. Compatibility adapters cover controls, icons and ref support missing on older hosts.',
                'Support DSH <code>0.2.1-rc.3</code> and move the development baseline to that release.'
              ] },
            { kind: 'changed', items: [
                'The four public <code>ThemePreview</code> fields now allow <code>string | null</code>: imported-theme samples resolve in the theme\'s own complete token graph, with unresolvable colors represented explicitly as null.'
              ] },
            { kind: 'fixed', items: [
                'Imported themes\' four-color Mosaic resolves against each theme\'s compiled token graph, including <code>var()</code> / <code>color-mix()</code>; samples that cannot resolve to an opaque color use a striped placeholder.',
                'Editor base swatches resolve against the base theme\'s complete token graph and no longer drift when a referenced draft token changes.'
              ] }
          ] },
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
