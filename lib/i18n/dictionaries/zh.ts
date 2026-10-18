import type { Dictionary } from './en'

/** 简体中文文案。结构由英文字典约束；产品名、命令、包名和路径不翻译。 */
const zh: Dictionary = {
  common: {
    skipToContent: '跳到正文',
    opensInNewTab: '（在新标签页打开）',
    themeToggle: '切换浅色与深色主题',
    menuOpen: '打开菜单',
    menuClose: '关闭菜单',
    mobileNav: '移动端导航',
    primaryNav: '主导航',
    switchLanguage: '切换语言为{language}',
    copy: {
      label: '复制命令',
      copy: '复制',
      copied: '已复制',
      failed: '请手动复制',
      announceCopied: '已复制到剪贴板',
      announceFailed: '复制失败，请手动选中文本复制',
    },
    notFound: {
      title: '页面不存在',
      body: '这个页面不存在，或者已经移动。',
      home: '返回首页',
    },
  },

  shots: {
    gitDiff: 'Rivetdeck 窗口：左侧是工作区侧边栏和新会话输入框，右侧 Git 变更面板列出 feat/checkout-flow 分支上的两个已修改文件和一个未跟踪文件。',
    home: 'Rivetdeck 起始页：左侧是工作区侧边栏，会话输入框显示 Workspace Write 沙箱模式和当前 Git 分支。',
    plugins: 'Rivetdeck 插件页：列出官方插件，以及已安装的三个插件 Git、Multi-root Workspace 和 Theme Studio。',
    themes: 'Rivetdeck 设置对话框中的 Theme Studio 主题卡片：Default、Claude、Codex、Claude Cream、Graphite、OLED、Nordic、Paper 和 Warm。',
    folders: 'Rivetdeck 中的工作区文件夹对话框，列出一个主工作目录和两个次要工作目录。',
    foldersDialog: '工作区文件夹对话框：主工作目录 web，次要目录 api 和 design-system，带有排序、在文件管理器中显示和移除操作。',
    nordicDark: '深色模式下应用了 Nordic 主题的 Rivetdeck。',
    claudeLight: '浅色模式下应用了 Claude 主题的 Rivetdeck。',
  },

  themePreview: {
    groupLabel: '主题',
    appearance: '预览外观',
    modes: { auto: '跟随网站', light: '浅色', dark: '深色' },
    caption: '使用 Theme Studio 0.1.3 的配色值渲染。这是示意布局，不是截图。',
    descriptions: {
      default: '官方的浅色 / 深色 / 跟随系统外观，Theme Studio 不叠加任何覆盖。',
      claude: '温暖的象牙白与陶土色。',
      codex: '中性的界面底色，搭配清晰的蓝色强调色。',
      'claude-cream': '偏编辑风格的暖象牙白，搭配琥珀色。',
      graphite: '低饱和、中等对比，适合长时间使用。',
      oled: '接近纯黑的背景和高可读性文字。',
      nordic: '冷调蓝灰，搭配青蓝色强调色。',
      paper: '温暖的纸张质感，适合阅读与写作。',
      warm: '暖色中性调，减少蓝光。',
    },
    mock: {
      newSession: '新会话',
      plugins: '插件',
      workspaces: '工作区',
      title: 'Into the Unknown',
      placeholder: '描述你想构建的内容…',
      sandbox: 'Workspace Write',
    },
  },

  home: {
    meta: {
      title: 'Rivetdeck — DeepSeek Harness 的原生桌面应用',
      description:
        'Rivetdeck 把 DeepSeek Harness 智能体运行时打包成适用于 macOS、Windows 和 Linux 的桌面应用，预装 Git 与 Theme Studio。非官方、开源、MIT 许可。',
    },
    brandHome: 'Rivetdeck 首页',
    nav: { features: '功能', plugins: '插件', download: '下载', github: 'GitHub' },
    cta: '下载',
    footer: {
      rivetdeck: { title: 'Rivetdeck', features: '功能', plugins: '插件', download: '下载', release: '版本 {tag}' },
      plugins: { title: '插件', git: 'Git', themeStudio: 'Theme Studio', multiRoot: 'Multi-root Workspace' },
      source: { title: '源码', repo: 'GitHub 上的 Rivetdeck', license: 'MIT 许可证', issues: '反馈问题' },
      upstream: { title: '上游', harness: 'DeepSeek Harness', brand: '品牌指南' },
      note: 'Rivetdeck 是基于 DeepSeek Harness 的非官方第三方桌面发行版，并非 DeepSeek 制作、认可或提供支持。“DeepSeek Harness” 是 DeepSeek 的商标，此处仅用于说明兼容性。',
    },
    hero: {
      badge: '{tag} 为预发布版',
      releaseNotes: '发布说明',
      title: 'DeepSeek Harness，做成桌面应用',
      lead: 'Rivetdeck 把 DeepSeek Harness 运行时装进适用于 macOS、Windows 和 Linux 的原生窗口。选择工作区、开始会话、用 Git 审阅改动、给界面换主题，全部不必离开应用。',
      github: '在 GitHub 上查看',
      meta: ['开发者预览', 'MIT 许可', '非官方发行版'],
      caption: '截取自 Rivetdeck 桌面版：工作区侧边栏、会话输入框和预装的 Git 面板。',
      downloadGeneric: '下载',
      downloadFor: '下载 {platform} 版',
      via: { store: '通过 Microsoft Store', github: '来自 GitHub Releases' },
      otherVersions: '其他平台和版本',
    },
    features: {
      title: '还是那个 Harness，有了自己的窗口',
      lead: '<b>Rivetdeck 不替换智能体运行时。</b>它负责打包、守护运行时，并在外面补上原生桌面体验。',
      listLabel: '桌面版增加了什么',
      caption: '起始页：工作区选择、会话输入框、沙箱模式和 Git 分支。',
      items: [
        {
          title: '真正的系统窗口',
          body: 'Electron 在随机的 127.0.0.1 端口启动 DeepSeek Harness，并在原生窗口中显示它的 Web 应用，提供 macOS、Windows 和 Linux 安装包。',
        },
        {
          title: '锁定的渲染进程',
          body: '渲染进程不集成 Node.js，启用上下文隔离和 Chromium 沙箱，并在系统浏览器中打开 HTTP 和 HTTPS 链接。',
        },
        {
          title: '以工作区为先的会话',
          body: '在应用里选择工作区文件夹。输入框显示沙箱模式和当前 Git 分支；否则智能体的 shell 命令从你的主目录开始。',
        },
        {
          title: '与上游相同的运行时',
          body: 'Rivetdeck 保留上游的 Web 应用、智能体运行时、profile 和工作区流程。模型服务商仍在你熟悉的 Harness 界面里配置。',
        },
      ],
    },
    plugins: {
      title: '预装 Git 与 Theme Studio',
      lead: 'Rivetdeck 内置两个可移植的 DSH 插件，其他插件单独安装，运行在同一套插件系统上。',
      preinstalled: '已预装',
      sourceOnGithub: '在 GitHub 查看源码',
      pluginPage: '插件页面',
      gitSummary: '在右侧边栏中查看本地 Git 状态、差异，并完成暂存、提交和分支操作。',
      themeStudioSummary: '在“设置 → 通用 → 主题”下提供八套内置配色，并与官方的浅色、深色和跟随系统外观并存。',
      tryThemes: {
        title: '试一试主题',
        lead: '选一套配色，看看应用界面如何变化。数值直接来自 Theme Studio。',
        captionNordic: '真实截图：Nordic，深色。',
        captionClaude: '真实截图：Claude，浅色。',
      },
      multiRoot: {
        badge: '可选 · 单独安装',
        body: '让智能体同时拥有主目录和多个附加文件夹的写入权限。原生的 read、write、edit 和 bash 工具保持不变，只是沙箱范围变宽。',
        cta: '了解 Multi-root Workspace',
      },
    },
    download: {
      title: '下载 Rivetdeck',
      lead: '版本 <v>{version}</v>，发布于 {date}。这是预发布版本。',
      recommended: '为你的系统推荐',
      detected: '已识别：{platform}',
      mobileNotice: 'Rivetdeck 是桌面应用。请在下方选择你电脑的系统。',
      otherVersions: '其他平台和版本',
      otherVersionsLead: '该版本附带的全部安装包，涵盖所有平台。',
      platforms: {
        macos: { name: 'macOS', note: 'Apple 芯片和 Intel' },
        windows: { name: 'Windows', note: 'Microsoft Store，或 x64 与 ARM64 安装程序' },
        linux: { name: 'Linux', note: 'AppImage 和 DEB，x64 与 ARM64' },
      },
      channels: { store: 'Microsoft Store', github: 'GitHub Releases' },
      store: {
        action: '从 Microsoft Store 获取',
        kind: 'Microsoft Store',
        note: '支持 x64 和 ARM64，通过商店安装并自动更新。',
        badge: '商店优先',
        githubHeading: '或直接从 GitHub Releases 下载',
      },
      arch: { appleSilicon: 'Apple 芯片', intel: 'Intel 芯片', x64: 'x64', arm64: 'arm64' },
      formats: { dmg: 'DMG', zip: 'ZIP', exe: '安装程序', appimage: 'AppImage', deb: 'DEB' },
      action: { download: '下载 {kind}', other: '其他下载', version: '{platform} 版（{arch}）' },
      macHint: '默认提供 Apple 芯片版本。如果你用的是 Intel Mac，请使用 <a>Intel 版本</a>。',
      macHintIntel: '检测到 Intel Mac。Apple 芯片版本在“其他下载”中。',
      verify: '可用 <sums>{file}</sums> 校验下载文件。发布说明和商店（.appx）安装包在<release>发布页</release>。安装后，请先在 Harness 界面完成模型服务商设置，再开始智能体会话。',
      source: {
        title: '或从源码运行',
        body: '需要 Node.js ^22.19.0 或 ≥ 24，以及 pnpm。先构建 Harness 运行时，再启动 Electron。',
      },
    },
    openSource: {
      title: '开源，独立维护',
      lead: 'Rivetdeck 是社区维护的桌面发行版。它跟随上游开发，只维护桌面端的打包部分。',
      facts: [
        {
          title: '非官方',
          body: '与 DeepSeek 无隶属关系。项目遵循 DeepSeek Harness 的品牌指南：只描述兼容性，不暗示获得官方认可。',
        },
        { title: 'MIT 许可证', body: '源码、问题反馈和发布版本全部公开，第三方依赖声明随仓库一同提供。' },
        {
          title: '开发者预览',
          body: '上游现已提供官方桌面应用，因此这个 Electron 发行版可能转入归档维护。它独有的部分是面向可移植插件的 Electron 集成（ctx.desktop）。',
        },
      ],
      repo: 'GitHub 上的 Rivetdeck',
      upstream: '上游 DeepSeek Harness',
    },
    changelog: {
      meta: {
        title: 'Rivetdeck 更新日志 — 全部版本',
        description:
          'Rivetdeck 的每个已发布版本，按时间倒序排列；发布说明在 GitHub Releases 上。',
      },
      nav: { home: '概览' },
      title: '更新日志',
      lead: 'Rivetdeck 的每个已发布版本，按时间倒序排列。',
      note: '发布说明见 GitHub Releases；早期版本以 DeepSeek Harness Desktop 名义发布，使用 electron-dsh-* 标签。',
      metaLine: '{count} 个已发布版本 · 最新 {version}',
      latest: '最新',
      compare: '在 GitHub 上与上一版本对比',
      releaseNotes: '发布说明',
      releases: [
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
      title: 'Multi-root Workspace — 一个智能体会话，多个可写文件夹',
      description:
        '一个 DSH 插件，把工作区沙箱从单个根目录扩展为主根目录加若干附加根目录，让智能体在一次会话里跨多个仓库读取、编辑和运行命令。原生工具、内核级强制、失败即拒绝。',
      keywords: ['DeepSeek Harness', 'DSH 插件', '多根工作区', 'monorepo', '编程智能体', '沙箱'],
    },
    brandHome: 'Multi-root Workspace 首页',
    nav: { features: '功能', security: '安全', install: '安装', compatibility: '兼容性', changelog: '更新日志', github: 'GitHub', npm: 'npm' },
    cta: '安装',
    footer: {
      plugin: { title: '插件', features: '功能', security: '安全', install: '安装', compatibility: '兼容性' },
      docs: { title: '文档', readme: 'README', architecture: '架构', changelog: '更新日志' },
      source: { title: '源码', repo: 'GitHub 仓库', npm: 'npm 包', issues: '反馈问题' },
      plugins: { title: 'DSH 插件', git: 'Git', themeStudio: 'Theme Studio', multiRoot: 'Multi-root Workspace' },
      ecosystem: { title: '生态', harness: 'DeepSeek Harness', rivetdeck: 'Rivetdeck 桌面应用' },
      note: 'Multi-root Workspace 是面向 DSH（DeepSeek Harness）的独立 MIT 许可插件，并非 DeepSeek 制作、认可或提供支持。\n“DeepSeek Harness” 是 DeepSeek 的商标，此处仅用于说明兼容性。',
    },
    hero: {
      changelog: ' 更新日志',
      titleLine1: '一个工作区。',
      titleLine2: '多个根目录。',
      lead: '让 DSH 智能体在一次会话里跨多个仓库读取、编辑并运行命令。插件把工作区沙箱从单个根目录扩展为主根目录加 N 个附加根目录，智能体的其他工作方式保持不变。',
      install: '安装插件',
      architecture: '阅读架构文档 ↗',
      bullets: ['原生的 read、write、edit 和 bash 工具', '内核与进程内双重强制', '不添加根目录时等同于未安装'],
    },
    topology: {
      title: 'Multi-root Workspace 拓扑',
      desc: '智能体会话使用同一个范围（scope）。该范围由进程内文件围栏和内核沙箱共同强制。三个根目录被授权：主根目录 web，以及附加根目录 api 和 design-system。目录 Documents 不在范围内，没有写入权限。',
      descMobile:
        '智能体会话使用同一个范围，由进程内围栏和内核沙箱共同强制。主根目录 web 与附加根目录 api、design-system 被授权。目录 Documents 没有写入权限。',
      session: '智能体会话',
      sessionSub: 'cwd = 主根目录',
      scope: '工作区范围',
      scopeSub: '唯一的授权来源',
      fence: '进程内围栏',
      fenceSub: '文件工具 · 写入与编辑',
      fenceSubMobile: '文件工具',
      kernel: '内核沙箱',
      kernelSub: 'bash 与终端',
      kernelSubMobile: 'bash · 终端',
      primary: '主根目录 · 会话起点',
      primaryMobile: '主根目录',
      additional: '附加根目录',
      additionalMobile: '附加',
      noWrite: '无写入权限',
      caption: '示例拓扑，路径仅作演示。写入权限由唯一的范围决定，范围之外的目录不会被授权。',
    },
    problem: {
      eyebrow: '问题',
      title: '真实项目由多个仓库组成，一次会话却只能有一个。',
      lead: 'DSH 把会话起点视为唯一可写的根目录。当工作横跨某个服务、它的客户端和一套设计系统时，就得在多个会话之间来回切换。',
      without: {
        label: '没有插件时',
        title: '一个会话，一个可写根目录',
        session: '会话 {n}',
        points: ['跨仓库的改动需要为每个仓库各开一个会话。', '上下文只能靠你在会话之间手动搬运。', '智能体无法在一轮对话里同时修改 API 契约和它的客户端。'],
      },
      with: {
        label: '使用 Multi-root Workspace',
        title: '一个会话，主根目录加 N 个附加目录',
        session: '会话 1',
        points: [
          '智能体可在每个已登记的根目录中读取、编辑并运行命令。',
          '每个根目录保留各自的 Git 历史和指令文件。',
          '会话的工作目录不变，变宽的只是可写范围。',
        ],
      },
    },
    features: {
      eyebrow: '功能',
      title: '范围更宽，智能体不变。',
      lead: '插件只改变一个问题的答案：哪些目录属于这个工作区。所有建立在这个答案之上的能力照常工作。',
      roots: {
        kicker: '多个根目录',
        title: '一个主根目录，加上你登记的任意多个附加根目录',
        body: '主根目录是会话起点，不能被移除。附加根目录会被规范化，并与主根目录及彼此校验，保存为有序列表。每个根目录都有自己的访问级别——inherit、read-only 或 read-write——并可设置别名、调整顺序、复制路径，或在文件管理器中显示。',
        points: ['登记时会拒绝相互重叠或嵌套的根目录', '消失或被符号链接替换的根目录仍会列出，但不会被授权', '没有附加根目录时，行为与未安装插件的 Harness 一致'],
        caption: 'Rivetdeck 中的工作区文件夹对话框（插件 v0.1.5，DSH 0.2.0-rc.2）。',
      },
      tools: {
        kicker: '原生工具',
        title: '不需要学习新工具',
        body: '智能体继续使用 read、write、edit 和 bash，插件不添加任何 workspace_* 工具。它用子类替换两个沙箱提供者，让它们查询同一个共享范围，因此文件工具、bash 和终端看到的是同一组根目录。',
        points: [
          'bash 和 PTY 仍以主根目录作为默认工作目录',
          '语言服务器把每个附加根目录视为独立的工作区',
          '附加根目录的拓扑作为沙箱策略上下文的一部分传给模型，不需要额外的查询工具',
          '沙箱模式对继承的根目录依然生效：只读模式不授予它们',
          '在 DSH 0.2.1 上会话可以移动工作目录——授权和登记表仍以会话起点为键',
        ],
        unchanged: '对智能体保持不变',
        notAdded: '未添加',
        widened: '被扩展的部分',
        question: '哪些目录属于这个工作区？',
      },
      management: {
        kicker: '工作区管理',
        title: '一条命令，一个面板，同一份登记表',
        body: '可以在会话里用 /workspace-folders 管理根目录，也可以在 Web 界面侧边栏底部的“文件夹”对话框里管理。两者都经过同一份经过校验的登记表，按主根目录持久化，并如实显示每个根目录的真实状态。',
        points: [
          '面板的权限来自当前会话，绝不接受客户端提供的路径',
          '每个存储同一时刻只允许一个进程授予根目录，争用的进程会拒绝（fail closed）',
          '对话框还可以浏览附加根目录的文件——可展开的目录树和文本预览',
          '“文件”页可以切到任意附加根目录——分叉的原生目录树逐项保持一致',
          '面板支持中英双语，并跟随界面语言',
        ],
        codeTitle: '会话',
        commands: ['# 列出主根目录和附加根目录', '# 登记、命名、设置访问级别或在文件管理器中显示根目录'],
      },
      crossRepo: {
        kicker: '跨仓库工作流',
        title: '一轮对话，同时修改 API 和它的客户端',
        body: '插件的 journey 测试会在 web 和 headless 两种组合下，驱动一次真实的智能体对话，跨两个 Git 仓库工作。测试使用脚本化的模型端点，所以不需要任何凭据。',
        steps: [
          { title: '登记', body: '把其他仓库加入会话的工作区。' },
          { title: '一次提问', body: '描述一个同时涉及服务端和客户端的改动。' },
          { title: '跨根目录编辑', body: '智能体在每个被授权的根目录里编辑文件并运行命令。' },
          { title: '按仓库审阅', body: '每个仓库保留自己的 Git 状态，改动依然便于审阅。' },
        ],
      },
      instructions: {
        kicker: '工作区指令',
        title: '每个根目录自己的 AGENTS.md 都会传给模型',
        body: '上游的发现逻辑从会话目录向上查找，因此永远到不了附加根目录。插件补上的正是这条缺失的路径，并附带严格的限制。',
        figure: '示例：哪些指令文件会传给模型',
        notes: { primary: '主根目录 · 上游发现', additional: '附加根目录 · 由插件注入' },
        exampleRoots: '示例根目录。',
        limitsTitle: '准确的限制',
        limits: [
          '覆盖每个附加根目录的顶层，以及会话已成功读取、写入或编辑过的子目录。',
          '以用户上下文消息的形式传递，绝不作为系统权限。',
          '所有附加根目录共享同一份字节预算（默认 64 KiB）。',
          '移除或重定向根目录时会发送明确的撤销通知，因为之前的文本仍在对话里。',
          '投递状态保存在进程内存中，因此恢复会话后，同一条指令可能被再次告知。',
          '主根目录的嵌套发现仍由上游负责。',
        ],
      },
    },
    security: {
      eyebrow: '安全架构',
      title: '放宽授权，保留机制。',
      lead: '附加根目录通过 Harness 本来就在用的机制授权，而不是靠提示词，也不是切换到完全访问。',
      controls: [
        {
          title: '重新解析路径不等于重新授权',
          body: '登记时会记录被授权的规范目录。只有路径仍然解析到该目录时，范围才会授权；目录或符号链接被替换后会被标记为 redirected，不再授权。',
        },
        {
          title: '一个范围，三个执行者',
          body: '进程内围栏、内核沙箱与覆盖完全访问的进程围栏使用同一个范围。一项一致性矩阵测试会把围栏的写入判定与各内核配置文件实际授权的路径逐一对比。',
        },
        {
          title: '失败即拒绝（Fail closed）',
          body: '如果无法识别上游的沙箱配置，插件会拒绝执行命令，而不是悄悄只授权主根目录。不受支持的 DSH 版本会让受门禁约束的组件根本不启动。',
        },
        {
          title: '模式继承，权限按根声明',
          body: '每个根目录是 inherit、read-only 或 read-write：inherit 跟随会话模式，只读会话不授予任何继承的根目录，固定的 read-write 在任何模式下仍可写。完全访问下上游绕过沙箱，此时进程围栏仍让被拒的根目录保持拒绝。',
        },
        {
          title: '每个存储只有一个授权者',
          body: '存储范围的内核租约保证同一时刻只有一个进程授予根目录。争用的进程会发布空范围并拒绝变更。面板请求绑定到存活的会话，而不是客户端提供的路径。',
        },
        {
          title: '指令是上下文，不是权限',
          body: '来自附加根目录的指令文件以用户角色的上下文送达，并像其他对模型可见的输入一样记录在会话日志里。',
        },
      ],
      limits: {
        title: '不做的保证',
        points: [
          '它不是新的安全边界。它扩展的是 Harness 沙箱，并继承该沙箱的保证与缺口。',
          '强制范围覆盖写入。读取权限遵循上游沙箱。',
          '在 Windows 上，按根目录集合授予 ACL 的运行器以受限令牌约束 bash；它继承上游的部分强制语义，且受限 shell 为 pwsh。',
          '上游 DSH 尚未稳定。插件依赖其内部实现，所以支持范围是一份经过测试的确切版本清单。',
        ],
        architecture: '阅读架构文档 ↗',
        dialect: '内核授权如何扩展 ↗',
      },
      diagram: {
        title: 'Multi-root Workspace 强制架构',
        desc: '智能体的文件工具经过进程内围栏，bash 和终端经过内核沙箱，两者都向同一个工作区范围查询。范围由负责校验和持久化根目录的登记表提供，且只在根目录的规范路径等于记录路径时才授权。启动时的兼容性门禁会拒绝不受支持的 DSH 版本，无法识别的沙箱配置则失败即拒绝。',
        fileTools: '文件工具',
        shellTools: 'Shell 工具',
        fence: '进程内围栏',
        fenceLines: ['ctx.fs · 写入与编辑', '拒绝范围之外的路径'],
        kernel: '内核沙箱',
        kernelLines: ['ctx.sandbox · Seatbelt、bwrap、', 'Landlock · 无法识别 → 拒绝'],
        scope: '工作区范围',
        scopeLines: ['ctx.multiRootScope', '仅当 realpath ==', 'recordedPath 时授权'],
        registry: '登记表',
        registryLines: ['经过校验', '按主根目录保存', '唯一授权者'],
        gate: '启动兼容性门禁',
        gateLine: '确切的 DSH 版本白名单。版本不在名单里时，围栏、沙箱、登记表、指令、LSP 和文件浏览相关组件都不会启动。',
        caption: '已发布插件（v0.1.7）的强制路径。下方编号的控制项列出了每个部分保证什么、不保证什么。',
      },
    },
    install: {
      eyebrow: '快速开始',
      title: '两条命令，然后添加文件夹。',
      lead: '插件通过 DSH 插件管理器安装。它已发布到 npm，适用于 web 和 desktop 两种 profile。',
      step1: { title: '安装插件包', body: '在受支持的 DSH 运行时中执行。Electron 桌面版请替换 profile。' },
      tabs: {
        label: '安装来源',
        npm: { label: 'npm', note: '推荐。安装预构建产物，首次 add 需要回答一次 allowBuilds。' },
        tarball: { label: 'tarball', note: '预构建离线包，适合内网。也可从 GitHub Release 下载同名 tgz。' },
        github: { label: 'GitHub', note: '拉取源码并由 prepare 现场构建。需要两次 allowBuilds，请锁定标签。' },
        local: { label: '本地源码', note: '链接本地 checkout，适合开发调试。无 TTY 时需要 export CI=true。' },
      },
      step2: {
        title: '批准一次性的构建步骤',
        body: '首次安装会以 <code>ERR_PNPM_IGNORED_BUILDS</code> 停止。插件带有一个原生依赖 <code>koffi</code>，而 pnpm 10 及以后默认不运行依赖脚本，除非你允许。请在该 profile 的 <code>pnpm-workspace.yaml</code> 中把它设为 <code>true</code>，然后重新安装。这会让该脚本在你的机器上、智能体沙箱之外运行。',
      },
      step3: {
        title: '添加文件夹',
        body: '“文件夹”入口出现在侧边栏底部。在会话里也可以使用命令。',
        note: '智能体现在在该目录中拥有与会话自身工作区相同的写入权限。',
      },
      other: {
        title: '其他来源与说明',
        tarball: '以上命令以 web profile 为例。Electron 桌面版把 <code>--profile web</code> 换成 <code>--profile desktop</code>。从 GitHub 安装需要回答两次 <code>allowBuilds</code>。详见 <readme>README</readme>。',
        source: '从源码检出运行 DSH？请用 <code>pnpm dsh</code> 代替 <code>dsh</code>。',
        rivetdeck: '该插件没有随 Rivetdeck 一同打包。它需要单独安装，并显示在应用的“已安装插件”中。',
      },
    },
    compat: {
      eyebrow: '兼容性',
      title: '一份确切的清单，而不是一个范围。',
      lead: '插件替换的沙箱提供者，其内部实现没有语义化版本承诺，所以只支持 CI 实际跑过的确切 DSH 版本——下表每一行都在已发布的 v{version} 包中。',
      footnote: '状态按版本逐项声明，绝不按版本号顺序推断。未列出的版本即使 CI 全绿，也只是证据，而不是支持。规则请阅读<contract>兼容性约定</contract>。',
      region: 'DSH 版本支持矩阵',
      caption: '插件版本 {version} 支持的 DSH 版本',
      columns: { release: 'DSH 版本', status: '状态', since: '加入于', notes: '说明' },
      platforms: '平台',
      otherRelease: '其他任何版本',
      sinceDev: '开发分支',
      status: { verified: '已验证', partial: '部分支持', unreleased: '仅限开发', unsupported: '不支持' },
      notes: {
        '0.1.5-rc.2': '兼容性约定的基线版本。',
        '0.1.6-alpha.1': '从该版本起沙箱限制（confine）变为异步。',
        '0.1.6-alpha.2': '接口形态与 0.1.6-alpha.1 相同；修复了面板的会话查找。',
        '0.1.7-alpha.1': '需要适配：会话格式 4、进程内插件包、bash 的 execute().result()。',
        '0.1.7-alpha.2': '接口形态与 0.1.7-alpha.1 相同。',
        '0.1.7-rc.1': '从该版本起，安装时强制要求 peerDependencies 精确匹配。',
        '0.1.7-rc.2': '接口形态与 0.1.7-rc.1 相同。',
        '0.2.0-rc.1': 'DSH 0.2 候选版本。',
        '0.2.0-rc.2': 'Rivetdeck 0.2.0-beta.3 内置的运行时。',
        '0.2.1-alpha.1': '动态工作目录；登记表仍以会话起点为键。',
        '0.2.1-alpha.2': '对本插件而言接口形态与 alpha.1 相同。',
        '0.2.1-alpha.3': 'storage-domain 将 zod 钉在 4.4.3——域 schema 改由 storage-domain 自身解析的 zod 构建。',
        '0.2.1-alpha.4': '存在 engines.dsh 时版本准入优先读取它；本插件继续使用 peerDependencies。',
        '0.2.1-alpha.5': '对本插件而言接口形态与 alpha.4 相同。',
        '0.2.1-rc.1': '运行时下限回到正式版 Cordis 4.0.5 与 schemastery 3.18.5。',
        '0.2.1-rc.2': '插件的开发 pin。',
        other: '受门禁约束的组件不会启动；Harness 的表现就像没有安装该插件一样。',
      },
      platformNotes: {
        macos: 'Seatbelt 配置文件加进程内围栏',
        linux: 'bwrap 或 Landlock 加进程内围栏',
        windows: '按根目录集合授予 ACL 的运行器（受限令牌）加进程内围栏；受限 shell 为 pwsh',
      },
    },
    finalCta: {
      title: '把整个工作区交给你的智能体。',
      lead: '一条命令安装，不需要学习新工具。移除根目录后，一切就像从未安装过一样。',
      install: '安装插件',
      github: '在 GitHub 上查看',
    },
    changelog: {
      meta: {
        title: 'Multi-root Workspace 更新日志 — 插件的全部版本',
        description:
          'DeepSeek Harness Multi-root Workspace 插件的发布历史：每个已发布版本的新功能、变更与修复，按时间倒序排列。',
      },
      nav: { plugin: '插件页' },
      title: '更新日志',
      lead: 'Multi-root Workspace 插件的每个已发布版本，按时间倒序排列。',
      metaLine: '{count} 个已发布版本 · 最新 {version}',
      latest: '最新',
      compare: '在 GitHub 上与上一版本对比',
      releaseNotes: '发布说明',
      kinds: {
        added: '新增',
        changed: '变更',
        fixed: '修复',
        removed: '移除',
        deprecated: '弃用',
        security: '安全',
        upgrade: '升级注意',
      },
      releases: [
        { version: '0.1.8', date: '2026-10-18', sections: [
            { kind: 'fixed', items: [
                '<b>DSH 0.2.0 上权限设置页不可用</b>：以 <code>link:</code> 方式安装时，插件把只作为宿主服务消费、自身从不加载的可选包（<code>dsh-lsp</code> / <code>dsh-lsp-stdio</code> / <code>dsh-working-directory</code> 等）解析到检出目录自己的 devDependencies，版本统一的宿主被误判为 <code>mixed</code>；同时两个 provider 替身行 inject 兼容门禁而上游 <code>fs-sandbox</code> / <code>sandbox</code> 已被无条件禁用，门禁一旦拒绝，<code>ctx.fs</code> / <code>ctx.sandbox</code> 消失并连带 <code>ctx.shell</code> 与 <code>permissionPresets</code> 瘫痪（<code>permissionPresets/catalog</code> 报 <code>service-unavailable</code>）。可选包现按"谁加载副本、经哪个锚点"分为运行时加载、宿主服务与 runner 锚定三类——插件根内的宿主服务副本不再作证，Windows ACL 包改从 <code>dsh-sandbox-local</code> 锚点取证；两个 provider 行不再 inject 门禁，在被拒安装上退化为上游等价行为，宽授权行的门禁不变（<adr0009>ADR-0009 修订</adr0009>）。'
              ] }
          ] },
        { version: '0.1.7', date: '2026-10-17', sections: [
            { kind: 'added', items: [
                '<b>Files 页签内浏览附加根</b>：文件树 header 新增根切换器（伪装成路径标签的菜单入口，列出主根与全部附加根及其状态）；选中附加根时由逐字节复刻的上游 Files 树接管树区——行高、图标、缩进、空态与原生逐项一致，原生 reload 由 header 原位同款图标钮顶替，切回主根即完整还原。原生 open-in-app 按钮由复刻件顶替并把目标换成选中根（<adr0015>ADR-0015</adr0015>、<adr0016>ADR-0016</adr0016>）。面板行带访问级别徽标，所有路径用同一 <code>PathCopy</code> 控件一点即复制；只读 → 读写升级经确认层；添加行的权限选择器为锚定下拉。',
                '<b>附加根访问级别升级为三态</b>：<code>add [--inherit|--read-only|--read-write]</code>（或面板添加行选择）。<code>inherit</code> 跟随会话模式——新登记的默认值，旧版插件登记的可写记录也迁移为 <code>inherit</code>；<code>read-only</code> 可读、可浏览、参与 LSP 与指令注入，但任何模式（包括 <code>danger-full-access</code>）都不授予写权限；<code>read-write</code> 固定在全局只读会话里仍可写。<code>/workspace-folders access <ref> inherit|read-only|read-write</code> 与面板按根切换（扩权要求该根此刻可用且不重新授权路径）。持久化布局向下兼容：旧版本插件把只读记录判为无效而非升级为可写（<adr0013>ADR-0013</adr0013>、<adr0017>ADR-0017</adr0017>）。',
                '<b>Full-access 也强制执行拒写边界</b>：shell / pwsh 执行器、<code>run_code</code>（PTC）与 agent PTY 在 <code>danger-full-access</code> 下绕过 <code>confine</code>，进程围栏为它们统一套用受限内核 profile（macOS Seatbelt、Linux bwrap——上游选定 Landlock 的主机同样改走 bubblewrap，bwrap 不可用时该组合在启动前拒绝），显式只读根与被工具封顶的根在该模式下依旧拒写；fs fence 读取同一份 deny 集（<adr0017>ADR-0017</adr0017>）。',
                '<b>受限 Full-access 保护 <code>$DSH_HOME</code></b>：只要存在任何拒写边界（只读根、工具封顶成员或注册表权限不可用），home 目录就进入 deny 集——存根存储、注册表 lease 与用户 profile 都在其中；零附加根且注册表健康时 Full-access 与上游逐字节一致（<adr0017>ADR-0017</adr0017>）。',
                '<b>面板用户终端不受约束</b>：进程围栏只对 env 带 <code>DSH_PTY_SESSION_ID</code> 的 spawn 生效（agent PTY 由 terminal-bash backend 盖章）；你在面板打开的终端属于用户行为，任何模式直通（<adr0017>ADR-0017</adr0017>）。',
                '<b>Windows 上 Full-access 的局部拒写</b>：随包提供需管理员安装的每用户特权 broker——安装器只向专用虚拟服务账户 <code>NT SERVICE\\DshMultiRootBroker-<安装哈希></code> 授予固定 LSA 权限（<code>SeServiceLogonRight</code>、<code>SeCreateTokenPrivilege</code>、<code>SeAssignPrimaryTokenPrivilege</code>、<code>SeTcbPrivilege</code>、<code>SeDebugPrivilege</code>、<code>SeImpersonatePrivilege</code>），不为宿主用户提权；broker 为受限子进程构造普通 deny-only 组 token，runner 读回验证后才放行。未安装 broker 时该组合拒绝启动；Windows 执行仍如实报告 partial 边界（<adr0020>ADR-0020</adr0020>）。',
                '<b>per-tool 写权限封顶</b>：<code>multi-root-scope</code> 行配置 <code>toolAccess: { <工具名>: \'read-only\' }</code> 后，该工具永远不能写任何附加根（主根不受影响）；封顶经 <code>tools/execute</code> 的真实 dispatch 上下文执行，非法配置 fail closed（<adr0013>ADR-0013</adr0013>）。',
                '<b>附加根数量上限</b>：每个主根默认最多登记 16 条附加根记录（<code>maxAdditionalRoots</code> 可调至 64）；超限的新增被拒绝，历史超限记录照常授予。列表如实显示 <code>N of LIMIT</code>（<adr0014>ADR-0014</adr0014>）。',
                '<b>Provider 冲突检测</b>：另一插件也替换 <code>ctx.fs</code> / <code>ctx.sandbox</code> 时，多根行响亮失败并拒绝一切授予，而不是依赖装载顺序（<adr0014>ADR-0014</adr0014>）。',
                '<b>精确支持 DSH <code>0.2.1-alpha.3</code>、<code>0.2.1-alpha.4</code>、<code>0.2.1-alpha.5</code>、<code>0.2.1-rc.1</code> 与 <code>0.2.1-rc.2</code></b>。上游 <code>alpha.3</code> 起 <code>dsh-storage-domain</code> 把 <code>zod</code> 固定为 <code>4.4.3</code>，两个 zod 副本的类型互不兼容，域 schema 改由存储域自身解析的 zod 构建；<code>alpha.4</code> 起上游版本需求优先读 <code>engines.dsh</code>，本插件仍以 <code>peerDependencies</code> 为唯一版本契约。开发 pin 提升到 <code>0.2.1-rc.2</code>（cordis <code>4.0.5</code>；<code>alpha.3</code>–<code>alpha.5</code> 的 cordis 为 <code>4.0.5-alpha.2</code>）。'
              ] },
            { kind: 'changed', items: [
                '<b>模型侧拓扑文案重写</b>：按当前模式与平台如实陈述授权——可写与只读根分组列出，声明 cwd/worktree 切换不改变授权、授权变化只约束后续操作与新进程；配置封顶工具时点名；Windows 附带 restricted-token partial-enforcement 与读不受其 confine 的说明（<adr0013>ADR-0013</adr0013>）。'
              ] },
            { kind: 'fixed', items: [
                '<b>注册表权限不可用不再读作「没有限制」</b>：读到空根表的进程（争用、存储故障、配置非法）曾在 Full-access 下放行一切写；现在 <code>danger-full-access</code> 与 <code>workspace-write</code> 都只授予主根写权限（共享平台临时区不再可写），显式拒写边界仍优先，接管 lease 后恢复（<adr0017>ADR-0017</adr0017>）。',
                '<b>改名祖先目录不能再解除只读边界</b>：此前把被拒根的父目录改名即可把整棵树搬出路径拒写边界；现在 Seatbelt 同时拒写被拒根的每个祖先目录本身（<code>(literal …)</code>），bwrap 把祖先自绑为挂接点使 rename 返回 EBUSY；Windows 用不共享删除的目录句柄钉住根及祖先，直到受限 Job 后代排空，防止 shell 搬走目录后经宿主文件工具绕过。祖先目录的元数据或改名操作会受相应机制限制（<adr0017>ADR-0017</adr0017>、<adr0020>ADR-0020</adr0020>）。',
                '<b>负授权不随排序、消失或冲突丢失</b>：存量重叠登记双方撤销成员授权，但可信记录的拒写边界仍保留；新增根也检查 missing / redirected 根的保留边界。全局只读会话追加固定读写根后统一应用 deny，无法表达子树减法的后端在启动前拒绝。',
                '<b>Windows 拒写前检查全部根的硬链接</b>：任一根存在多链接文件或不可检查节点时，在任何 ACL 写入前拒绝启动，避免改写 pnpm store 或其他链接的共享对象。新增宿主维护命令 <code>/workspace-folders isolate-profiles [--apply]</code>：默认只读检查，显式 apply 仅将 profile 导入配置设为 copy；存量依赖仍需按报告重装，不修复历史 ACL（<adr0020>ADR-0020</adr0020>）。',
                '<b>Linux 上消失的拒写根失败关闭而非放行</b>：deny 根的 bwrap 挂载恢复为强制项——目录在登记后或 profile 构造后被删除时命名空间搭建失败、命令不会执行，不再出现在可写父挂载下被重建写入的缺口（<adr0017>ADR-0017</adr0017>）。',
                '<b>附加根重新登记保留原权限</b>：命令与面板在未显式选择访问级别时不发送默认值，避免 revive 把只读登记静默升级；达到根上限时仍可从面板重新登记既有的不可用项。',
                '<b>面板兼容旧宿主的根列表</b>：旧响应缺少 <code>limit</code> / <code>count</code> 时仍可显示和操作，显式非法值仍拒绝。',
                '<b>非法 toolAccess 的拓扑文案与执行一致</b>：模型明确看到所有附加根写被拒，不再被告知 read-write 登记可写；根上限配置 <code>null</code> 同样 fail closed。',
                '<b>安装副本在 Windows（DSH 0.1.7-alpha.1+）上的受限命令恢复可用</b>：发布的 v0.1.6 从 npm/tarball 安装后，独立 Windows runner 在首行之前就死于 <code>ERR_MODULE_NOT_FOUND</code>——它的静态模块图 import 的上游包无法从插件安装目录解析，受影响版本上配置了附加根的会话里每条受限命令都会失败。runner 的静态图现在只含 <code>node:</code> 内置，上游 ACL 包改为从上游 runner 自身位置按包自引用加载。',
                '<b>Windows 上的网络与设备根被拒绝</b>：UNC（<code>\\\\server\\share</code>）、<code>\\\\?\\</code>、<code>\\\\.\\</code> 与映射网络盘此前会被当成普通附加根登记；现在在任何文件系统触碰之前以 <code>unsupported-path</code> 词法拒绝，存量记录标记为 <code>invalid</code>，受限执行侧 fail closed（<code>SandboxUnavailableError</code> / 退出 127），绝不静默放开（<adr0011>ADR-0011 修订</adr0011>）。',
                '<b>Windows runner 在 spawn 前重新验证根</b>：授权 ACL 之后、启动子进程之前重新确认每个根仍存在且是同一 canonical 目录，并要求 <code>--temp</code> 已存在；不满足即退出 127，不启动无约束进程。',
                '<b>Windows 上「在文件管理器中显示」不再误报失败</b>：<code>explorer.exe</code> 成功时也返回 1，win32 现在接受退出码 0/1。',
                '<b>面板文件端点拒绝反斜杠路径</b>：POSIX 上 <code>..\\..\\x</code> 此前会解析到所选根内部；现在词法拒绝。',
                '<b>Windows broker 放行 UAC 过滤调用方并诊断打包子进程</b>：非提权 UAC 管理员发起的受限命令此前被 broker 以「unrestricted 身份」拒绝；现在只拒绝携带 restricting SID 或 AppContainer 的调用方，Store/MSIX 版子进程（如 WindowsApps 别名的 <code>pwsh.exe</code>）在启动前给出指向 MSI/ZIP 版的诊断。升级后需用 <code>install.ps1</code> 重装一次 broker 才会生效（<adr0020>ADR-0020 修订</adr0020>）。',
                '<b>面板文件树调用可中止</b>：组件卸载、路径或会话变化时取消在飞的 <code>files</code> / <code>readFile</code> 调用，过期响应不再渲染为错误。'
              ] },
            { kind: 'changed', items: [
                '<b>Windows 受限 shell 行为说明</b>：受限 shell 是 pwsh（Git Bash/MSYS 在 restricted token 下无法启动，与上游 runner 一致）；在插件 runner 下 confined 子进程能收到 Ctrl+C 且 runner 镜像其退出码，而上游 runner 的子进程因继承 ignore-Ctrl+C 标志收不到（两者均为既成事实，见 <adr0011>ADR-0011 修订</adr0011>）。',
                '安装提示补充：被 <code>koffi</code> 构建授权打断的首次安装，在授权后若插件未进 <code>dsh.profile.bundles</code>，需一次 <code>remove</code> + <code>add</code> 完成激活（<tbInstallApproval>故障排查</tbInstallApproval>）。'
              ] }
          ] },
        { version: '0.1.6', date: '2026-10-11', sections: [
            { kind: 'added', items: [
                '精确支持 DSH <code>0.2.1-alpha.1</code> 与 <code>0.2.1-alpha.2</code>。动态 working directory 与 Session origin 分离：cwd 切换不改变注册表归属或授权根；新增 Worktree 管理、附加根 LSP 路由、Windows 内核级多根，以及 Workspace Folders 附加根文件浏览与预览。',
                '附加根说明文件的 cwd 切换恢复与补发行为，避免上游撤回后遗漏仍有效的说明。'
              ] },
            { kind: 'changed', items: [
                '附加根文件树与 LSP 按根隔离；Worktree 操作不改变根注册表授权。'
              ] }
          ] },
        { version: '0.1.5', date: '2026-09-30', sections: [
            { kind: 'added', items: [
                '精确支持 DSH <code>0.2.0-rc.1</code> 与 <code>0.2.0-rc.2</code>，保留此前全部支持版本。CI 会在所有启用的操作系统上验证兼容合同中的每个版本。'
              ] }
          ] },
        { version: '0.1.4', date: '2026-09-25', lead: '在 <code>v0.1.3</code> 的精确 allowlist 契约不变的前提下，把受支持的上游运行时扩展到 <code>0.1.7-rc.2</code>；设计取舍仍见 <adr0009>ADR-0009</adr0009>。', sections: [
            { kind: 'added', items: [
                '<b>支持上游运行时 <code>0.1.7-rc.2</code></b>。相对 <code>0.1.7-rc.1</code>，<code>confine</code>、指令渲染、session format 4、工具失败位、面板图标、当前会话目录、进程内启动和 bash 执行的形状都没变，适配层没有新分支。cordis 仍是 <code>~4.0.4</code>。<code>rc.1</code> 起的安装期 peer 门禁仍然要求这个精确版本出现在 <code>peerDependencies</code> 里。开发 pin 仍是 <code>0.1.5-rc.2</code>。'
              ] }
          ] },
        { version: '0.1.3', date: '2026-09-24', lead: '在 <code>v0.1.2</code> 的精确 allowlist 契约不变的前提下，把受支持的上游运行时扩展到 <code>0.1.7-alpha.2</code> 与 <code>0.1.7-rc.1</code>；设计取舍仍见 <adr0009>ADR-0009</adr0009>。', sections: [
            { kind: 'added', items: [
                '<b>支持上游运行时 <code>0.1.7-alpha.2</code> 与 <code>0.1.7-rc.1</code></b>。相对 <code>0.1.7-alpha.1</code>，<code>confine</code>、指令渲染、session format 4、工具失败位、面板图标、当前会话目录、进程内启动和 bash 执行的形状都没变，适配层没有新分支。<code>0.1.7-rc.1</code> 起，<code>dsh plugin add</code> 会按 <code>peerDependencies</code> 拒绝不满足当前运行时的插件，所以这两项必须出现在精确 allowlist 里。开发 pin 仍是 <code>0.1.5-rc.2</code>。'
              ] }
          ] },
        { version: '0.1.2', date: '2026-09-22', lead: '在 <code>v0.1.1</code> 的精确 allowlist 契约不变的前提下，把受支持的上游运行时扩展到 <code>0.1.6-alpha.2</code> 与 <code>0.1.7-alpha.1</code>；设计取舍仍见 <adr0009>ADR-0009</adr0009>。', sections: [
            { kind: 'added', items: [
                '<b>支持上游运行时 <code>0.1.6-alpha.2</code></b>，与 <code>0.1.5-rc.2</code>、<code>0.1.6-alpha.1</code> 一起进 allowlist。该版本的 <code>confine</code> 异步形状与 instruction renderer 名字与 <code>0.1.6-alpha.1</code> 相同；客户端当前会话改从目录行的 <code>retainedBy.mainView</code> 读取（见 Fixed）。开发 pin 仍是 <code>0.1.5-rc.2</code>。',
                '<b>支持上游运行时 <code>0.1.7-alpha.1</code></b>。<code>confine</code> 与 instruction renderer 的形状没变，但这一版有几处必须适配：session format 4 不再接受 <code>kind: \'plugin\'</code>，附加根指令改用本插件自己的 source kind <code>multi-root-workspace</code>（format 3 及更早仍是 <code>plugin</code>）；工具失败位从 content block 移到消息本身；面板图标从像素命名改为 Regular 线宽；进程内启动改为 <code>createRuntimeResolution</code> + <code>PluginPackages</code>；bash 执行从 <code>shell.run</code> 改为 <code>shell.execute().result()</code>。该版本的 <code>dsh</code> 依赖 cordis <code>^4.0.3</code>，探测时必须把 cordis 钉到这个版本，否则两份 <code>@deepseek-ai/dsh-tools</code> 会让工具调度用的 Symbol 对不上、工具调用在第一步失败。开发 pin 仍是 <code>0.1.5-rc.2</code>。'
              ] },
            { kind: 'fixed', items: [
                '<b><code>0.1.6-alpha.2</code> 上已打开的会话被面板显示成「当前没有活动会话」</b>：该版本从 Session 目录快照删除了 <code>current</code>，当前会话改由主视图 <code>retain(..., { source: \'mainView\' })</code> 持有，投影在目录行的 <code>retainedBy.mainView</code>。<code>src/compat/client-session.ts</code> 用结构探测同时认两种形状；目录有行但没有主视图时仍显示空态，不会把 <code>ids[0]</code> 当成当前会话。'
              ] }
          ] },
        { version: '0.1.1', date: '2026-09-16', lead: '<code>v0.1.0</code> 之后的<b>硬化批次（H1–H4）</b>：不新增面向使用者的"功能"，而是补齐跨进程、面板权威、上游兼容性与附加根指令四类边界。设计取舍见 <adr0007>ADR-0007</adr0007>、<adr0008>ADR-0008</adr0008>、<adr0009>ADR-0009</adr0009>、<adr0010>ADR-0010</adr0010>。', sections: [
            { kind: 'upgrade', title: '升级注意（不兼容变更）', items: [
                '<b>首次 <code>dsh plugin add</code> 会失败一次，四种安装来源皆然</b>：本版本新引入原生依赖 <code>koffi</code>（Windows 上 Registry Authority 的 FFI 封装），而 pnpm ≥10 默认不运行依赖的构建脚本，因此第一次 <code>add</code> 会以 <code>[ERR_PNPM_IGNORED_BUILDS]</code> 退出、插件不会进 <code>dsh.profile.bundles</code>。<code>dsh</code> 会把待决项留在该 profile 的 <code>pnpm-workspace.yaml</code> 里（<code>koffi: set this to true or false</code>），改成 <code>true</code> 再执行一次 <code>add</code> 即完成。<code>v0.1.0</code> 的 npm / tarball 来源没有这一步。详见<tbInstallApproval>故障排查：安装停在构建授权</tbInstallApproval>。',
                '<b>支持的上游运行时收窄为精确清单 <code>0.1.5-rc.2</code>、<code>0.1.6-alpha.1</code></b>（原先是 <code>>=0.1.2-alpha.4 <0.2.0</code> 范围）。宿主版本不在这两个之一，或若干 <code>@deepseek-ai/dsh-*</code> 包混装了不同版本时，<code>fs</code> / <code>sandbox</code> / <code>registry</code> / <code>instructions</code> 四行<b>不启动</b>，组合退化为"未装这个插件"并在启动时打印说明。理由是这个插件替换的是围栏本身、靠识别上游实测出的方言 argv 形状工作，而 npm 语义化范围等于对未验证版本做承诺（<adr0009>ADR-0009</adr0009>）。诊断步骤见<tbUnsupported>故障排查：DSH 版本不在支持矩阵上</tbUnsupported>。<b>若你仍在 <code>v0.1.0</code> 时代实测可用的 <code>0.1.2-rc.1</code> 运行时上（例如某些已安装的桌面端自带运行时），请先升级该运行时，否则本版本不会生效。</b>',
                '<b>面板不再接受客户端指名的根</b>：所有面板端点必填 <code>sessionId</code>，主根只来自 host 侧的 <code>session.header.cwd</code>；客户端 <code>primaryRoot</code> 字段与 <code>sandboxPolicy</code> 回退已删除。浏览器当前没有活动会话时，面板显示"当前没有活动会话"并且不向 host 发请求（<adr0008>ADR-0008</adr0008>）。'
              ] },
            { kind: 'added', items: [
                '<b>跨进程 Registry Authority（H1）</b>：同一 <code>$DSH_HOME</code> 上同时只允许一个 DSH 进程持有根登记表（POSIX <code>flock</code> / Windows named semaphore，进程退出或崩溃由内核释放锁）。争用方 fail-closed——发布空 scope、注册表写操作报 <code>registry-contended</code>；持锁者退出后，<code>/workspace-folders list</code> 或面板刷新即经 <code>refresh()</code> 接管（<adr0007>ADR-0007</adr0007>）。',
                '<b>附加根自身的指令文件进入模型上下文（H4）</b>：附加根<b>顶层</b>的 <code>AGENTS.md</code> / <code>CLAUDE.md</code> 在会话第一步之前注入；本会话<b>成功</b> <code>read</code> / <code>write</code> / <code>edit</code> 触碰过的子目录（含被触碰文件的每个祖先目录，直到该附加根）在其目录被考察到时增量补投；文件内容变化只重发该文件，文件或根消失时<b>显式撤回</b>。全部附加根共享 64 KiB 预算，以 <code>user</code> role 的 <code>{ kind: \'plugin\', form: \'instructions\' }</code> 消息投递（不是 <code>systemPrompt</code>）。上游的指令发现从会话 cwd 向上走，永远到不了附加根，这是本项存在的原因（<adr0010>ADR-0010</adr0010>）。',
                '<b>支持第二个上游运行时 <code>0.1.6-alpha.1</code></b>，与基线 <code>0.1.5-rc.2</code> 一起进 allowlist；两者都跑过完整矩阵（<code>confine</code> 的同步/异步形状差异、instruction renderer 改名、两种 LLM wire 协议均由适配层与 smoke 吸收）。',
                '<b><code>pnpm compat:check</code></b>：allowlist / <code>peerDependencies</code> / 开发 pin / 已安装树四者一致性门禁，是 CI 的第一步。',
                '<b><code>multi-root-compat</code> 启动门禁行</b>：版本判定变成其余安全相关行的前置条件，而不是一条日志。',
                '<b>按周升级车道</b>（<code>upgrade.yml</code>）：自动重指最新上游 pre-release 并跑完整矩阵，只读权限、不提交、不自动扩大 allowlist。',
                '两个故障排查条目：<tbUnsupported>DSH 版本不在支持矩阵上</tbUnsupported>、<tbRegistryOwner>根登记表被另一个进程持有</tbRegistryOwner>。'
              ] },
            { kind: 'changed', items: [
                '上游版本差异集中在 <code>src/compat/</code> 适配层，一律按<b>结构探测</b>（返回值是否 thenable、导出的是哪个名字）判断，不比较版本字符串；业务代码不再出现任何版本判断。',
                '两个可选 peer（<code>@deepseek-ai/dsh-llm</code>、<code>@deepseek-ai/dsh-agent-instructions</code>）改为<b>按需加载</b>：barrel 的加载期依赖集合等于必需包集合，一个从不需要构造消息的最小组合不会在加载时失败。',
                '<code>pnpm verify:all</code> 有意<b>不含</b> <code>compat:check</code>（升级车道要在一个还不在 allowlist 上的候选版本上跑完整矩阵）；CI 主车道单独把它排在最前。',
                '新增 <code>./compat</code> 与 <code>./instructions</code> 子路径导出。',
                '安装与发版：<code>prepare</code> 脚本改为自包含（git 安装由 pnpm 现场构建，用户需先授权 <code>allowBuilds</code>）；README 补齐 npm / tarball / 本地路径 / GitHub 四种安装来源；npm 发布改用 <b>trusted publishing（OIDC）</b>，仓库不再保存任何 npm 凭证。'
              ] },
            { kind: 'fixed', items: [
                '<b>注册表拆除顺序</b>：原先"先释放内核 lease 再关闭 domain"，继任进程可能拿到 lease 后打开一份缺了本进程最后一次写入的快照；现在整个拆除在 store-wide authority 转场队列内按"排空在飞 mutation → 关闭 domain → 释放 lease"执行，并置 <code>disposed</code> 拒绝后续 acquisition（<code>tests/registry-lease.spec.ts</code>）。',
                '<b>指令投递状态按实际产物提交</b>：renderer 省略或截断文件时不再记录完整 digest；消息构造失败或被取消不再把指令当成已送达；预算耗尽后仍检查撤回，跨根撤回与延迟触碰不再被跳过。',
                '<b>附加根中间目录的指令文件</b>此前永远到不了模型（只考察被触碰文件的父目录），现在其每个祖先目录都会被考察。',
                '<b><code>DSH_MULTI_ROOT_COMPAT=warn</code> 收紧</b>：只放宽 <code>unsupported</code>（版本一致、allowlist 未列名——升级车道要探测的正是这一种），<code>mixed</code> / <code>incomplete</code> 在两种模式下都拒绝。',
                '<b>"包不存在"与"已安装但求值失败"分离</b>：后者不再被当成缺失缓存，进程不会静默停止投递附加根指令。',
                '<b>Windows 锁命名按物理路径归一化</b>：经路径别名（junction / 符号链接）访问同一 store 的两个进程此前会各持一把锁，可同时成为 authority。',
                '<b>会话事件配对按会话分隔</b>：不同会话使用相同 <code>tool/call</code> id 时不再互相覆盖、把目录记到另一个会话。',
                '<b>升级工作流的 shell 输入处理</b>：手动版本与候选版本经 step <code>env</code> 传值并校验为单行，不再拼进 <code>run</code> 源码。',
                '<b>本地打包不再夹带历史构建产物</b>：<code>lib/</code> 在 <code>bundle</code> 之前先清掉上一轮的 JS 面（tsdown 的共享 chunk 按内容哈希命名，旧名字不会自己消失）。<code>pnpm pack</code> 出的 tarball 现在只含一轮构建的制品，不再把历史 chunk 当死代码发出去（<code>files</code> 里的 <code>lib/*.js</code> 会全部进包）。'
              ] }
          ] },
        { version: '0.1.0', date: '2026-09-13', lead: '首个发布版本：MVP 的三个里程碑（M1–M3）。', sections: [
            { kind: 'added', items: [
                '<b>插件骨架与组合方式（M1）</b>：以 bundle patch 替换上游 <code>fs-sandbox</code> 与 <code>sandbox</code> 两行 provider 并插入本插件的行（<code>bash-sandbox</code> 保持上游——bash 与 PTY 的 confinement 全部经 <code>ctx.sandbox</code>）。未配置附加根时行为与未装插件逐项一致；组合、disable/insert 时序与 provide 冲突三类结构性风险由差分测试钉住。',
                '<b>多根能力（M2）</b>：<code>ctx.multiRootScope</code>（唯一授权源）、<code>MultiRootFileSystem</code>（进程内 containment fence，子类自上游 <code>LocalFileSystem</code>，其自身没有 fence）、<code>MultiRootSandboxProvider</code>（在 Seatbelt / bwrap / Landlock 三种方言的 profile 上克隆上游 grant 拼法追加附加根）；fs 与 bash/PTY 共享同一条 scope，安全不降级。',
                '<b>模型可见的拓扑快照</b>：仅 <code>workspace-write</code> + 非空附加根时经 <code>systemPrompt.context</code> 输出（同 workspace、cwd 不变）；空根与只读模式逐字节不变。',
                '<b>根注册表（M3）</b>：以 canonical 主根为键持久化在 <code>multi_root_workspace</code> storage domain，写入与读取都做校验；每条记录带 <code>recordedPath</code>，<b>重新解析路径不等于重新授权</b>——目录被替换成指向别处的符号链接时该根标为 <code>redirected</code> 并暂不授予。',
                '<b><code>/workspace-folders</code> 命令</b>：<code>list</code> / <code>add <路径></code>（无参数时打开系统目录选择器）/ <code>alias</code> / <code>remove</code> / <code>reveal</code>，headless 下同样可用。',
                '<b>Workspace Folders 浏览器面板</b>：侧栏底部动作 + 自绘对话框，经插件自己的 Connection RPC 通道与 host 通信；文案中英双语跟随界面语言，配色全部使用 host 的 <code>var(--dsw-*)</code> 设计 token。',
                '<b>跨仓库旅程 e2e</b>（<code>pnpm smoke:journey</code>）：在 <code>web</code> 与 <code>headless</code> 两种组合下各驱动一轮真实 agent 回合，跨两个 Git 仓库（主根 <code>repo-a</code>、附加根 <code>repo-b</code>）并断言根外写入被拒。无需模型凭据（脚本化模型端点）。',
                '<b>安装形态</b>：npm 注册表 / tarball / 本地路径 / GitHub；tag 触发的 <code>release.yml</code> 完成 verify → npm publish（provenance）→ GitHub Release。',
                '<b>平台范围</b>：macOS（Seatbelt）与 Linux（bwrap / Landlock）的内核级多根全量；Windows 覆盖 <code>fs</code> 写路径，受限 bash/PTY 的多根不在本期（非空 scope 时输出一次显式告警）。'
              ] },
            { kind: 'fixed', items: [
                '发布前外部评审提出的 8 项发现（其中 3 项发布阻断）全部修复，每项各带一个回归测试：登记目录被替换为符号链接后授权转移（引入 <code>recordedPath</code>，<b>重新解析路径不等于重新授权</b>）、并发修改注册表丢写或复活已撤销的授权（每个主根的变更串行）、刷新不重新检查目录、手输路径被目录选择器覆盖、<code>reveal</code> 的应答契约与失败码、重复 id 未校验、主根未纳入嵌套校验、CI 先测后构建。'
              ] }
          ] }
      ],
    },

  },

  git: {
    meta: {
      title: 'Git for DSH — 右侧边栏里的状态、差异与提交',
      description:
        '一个可移植的 DSH 插件，把本地 Git 状态、暂存区与工作区差异、车道图和分支操作放进右侧边栏。Git 通过 ctx.subprocess 以独立 argv 参数启动，从不经过 shell。',
      keywords: ['DeepSeek Harness', 'DSH 插件', 'git', '侧边栏', 'diff', '提交历史', '编程智能体'],
    },
    brandHome: 'Git 插件首页',
    nav: { features: '功能', design: '设计', install: '安装', compatibility: '兼容性', changelog: '更新日志', github: 'GitHub', npm: 'npm' },
    cta: '安装',
    footer: {
      plugin: { title: '插件', features: '功能', design: '设计', install: '安装', compatibility: '兼容性' },
      docs: { title: '文档', readme: 'README', architecture: '架构', changelog: '更新日志' },
      source: { title: '源码', repo: 'GitHub 仓库', npm: 'npm 包', issues: '反馈问题' },
      plugins: { title: 'DSH 插件', git: 'Git', themeStudio: 'Theme Studio', multiRoot: 'Multi-root Workspace' },
      ecosystem: { title: '生态', rivetdeck: 'Rivetdeck 桌面应用', harness: 'DeepSeek Harness' },
      note: 'Git 是面向 DSH（DeepSeek Harness）的独立 MIT 许可插件，并非 DeepSeek 制作、认可或提供支持。\n“DeepSeek Harness” 是 DeepSeek 的商标，此处仅用于说明兼容性。',
    },
    hero: {
      changelog: ' 更新日志',
      titleLine1: '仓库，',
      titleLine2: '就在会话里。',
      lead: '一个可移植插件就能给 DSH 宿主带来完整的 Git 界面：右侧边栏中的状态、差异、历史和分支操作。同一个包可以运行在 web profile 和 Rivetdeck 中——后者已经预装。',
      install: '安装插件',
      readme: '阅读 README ↗',
      bullets: ['右侧边栏中的 Changes、Graph 与 Worktrees 标签页', 'Git 通过 ctx.subprocess 启动——从不经过 shell', '不注册任何模型工具，不注入提示词'],
      shotCaption: 'Rivetdeck 中的 Changes 标签页：feat/checkout-flow 分支上的两个已修改文件和一个未跟踪文件。',
    },
    features: {
      eyebrow: '功能',
      title: '完整的审阅闭环，不用离开窗口。',
      lead: 'Changes、Graph 与 Worktrees 以页面形式接入上游右侧边栏的标准注册，每个文件比较都是一个 dsh-resource 差异页。',
      changes: {
        kicker: 'Changes',
        title: '状态、暂存与提交，集中在一个标签页',
        body: 'porcelain v2 状态按已暂存、未暂存和未跟踪分区列出，每一行都带有字母徽标。加号或减号切换暂存区；撤销操作需要先经过一次指名路径的二次确认。',
        points: ['分段提交按钮：Commit、Amend、Commit & Push、Commit & Sync', '提交信息输入框自动生长，旁边是 Generate 生成按钮', '刷新和在文件管理器中显示等操作位于 Git 界面内部'],
        caption: '已暂存、未暂存与未跟踪分区；分支名显示在刷新按钮旁。',
      },
      diff: {
        kicker: '差异',
        title: '一个文件、一侧对比、一个可寻址的标签页',
        body: '每次比较都是一个 dsh-resource://git/diff 地址，因此同一个文件的暂存区差异与工作区差异可以并排打开。请求一个已存在的地址只会唤出对应标签页，并按 revision 计数器刷新。',
        points: [
          '渲染交给官方 DSH DiffBlock——复制、折叠和按行换行由宿主提供',
          '二进制、仅元数据、空文件和被截断的输出都有各自的区分，而不是一律抹平',
          '地址即标签身份，差异视图随布局一并恢复',
        ],
        addressesTitle: '同一个文件的两个地址',
        addressStaged: '暂存区对比',
        addressWorktree: '工作区对比',
      },
      graph: {
        kicker: 'Graph',
        title: '会自己翻页的车道图',
        body: '提交历史以 Canvas 绘制的车道图呈现，整条曲线在同一坐标系中连续延伸，轨道与合并边不会在行边界处断开。滚动哨兵按需追加更早的提交，而不是一次加载全部历史。',
        points: ['Auto、All 与 First-parent 三种范围，旁边是刷新按钮', '每行带有按类型着色的 HEAD、分支、远端与标签芯片', '悬停卡片给出完整标题、哈希、作者与日期'],
        mock: [
          { lane: 'merge', subject: 'Merge pull request #19: support the 0.2.1 release candidates', refs: 'HEAD → main', meta: 'cherrchen · 2 小时前' },
          { lane: 'commit', subject: 'feat(compat): support DSH 0.2.1-alpha.5, 0.2.1-rc.1 and 0.2.1-rc.2', refs: 'v0.2.7', meta: 'cherrchen · 5 小时前' },
          { lane: 'commit', subject: 'feat: worktree management tab with upstream delegation and local fallback', refs: 'origin/main', meta: 'cherrchen · 1 天前' },
          { lane: 'commit', subject: 'feat(client): staged diff opens beside the worktree one', refs: 'v0.2.5', meta: 'cherrchen · 1 天前' },
        ],
      },
      worktrees: {
        kicker: 'Worktrees',
        title: '所有检出，一屏列清',
        body: '独立的 Worktrees 页面列出当前仓库的全部检出——无论它们如何创建——标出本会话正在使用的一个，并能通过可选分支名与起点创建新的链接检出。',
        points: [
          '“Use in this session” 通过宿主目录服务进入链接检出',
          '宿主挂载上游 worktrees 运行时时创建交由上游执行，否则在设置中启用本地 git worktree add',
          '仅当宿主报告存在创建通道时该标签页才出现；删除与修剪仍交给 Git',
        ],
        listTitle: '此仓库的检出',
        mock: { current: '当前检出', useInSession: 'Use in this session' },
      },
      composer: {
        kicker: '输入框',
        title: '先看到分支和改动数，再开始输入',
        body: '分支选择器和变更文件指示器位于输入区左侧，点击即可打开 Changes 标签页。创建分支走同一个对话框；在 git init 尚无提交时，菜单会说明必须先有第一个提交。',
        points: [
          '宿主发布了工作目录投影时，选择器跟随该会话的有效目录',
          '链接检出会显示 worktree 标签；“Use in this session” 通过宿主目录服务进入该检出',
          '每个会话保有各自的仓库状态——两个会话绝不共享一份快照',
        ],
        mock: { branch: 'feat/checkout-flow', changes: '3 个改动', placeholder: '描述你想构建的内容…' },
      },
      generation: {
        kicker: '提交信息',
        title: '只给建议，从不替你提交',
        body: '当宿主暴露 LLM 运行时时，Generate 会把暂存区差异——上限为 commitMessage.maxDiffBytes——发给会话模型，或发给插件配置里固定的一组 provider/model。流式草稿落在可编辑的输入框里。',
        points: ['生成从不暂存、提交或推送任何内容', '系统提示词默认是 Conventional Commits 指令，可在插件配置中修改', '没有可解析的模型时，控件如实报告不可用，而不是猜测'],
        configTitle: 'pnpm-workspace.yaml · 组合配置',
      },
    },
    design: {
      eyebrow: '设计边界',
      title: 'Git 还是 Git，什么都没被重造。',
      lead: '插件把调用交给机器上的 Git，并把每一处有风险的边缘都写得明明白白——包括它拒绝去做的那几件事。',
      controls: [
        {
          title: '从不经过 shell',
          body: 'ctx.subprocess 以可执行文件加独立 argv 参数启动 Git。每个来自调用方的路径、分支和提交信息始终是一个 argv——没有插值，也没有引号陷阱。',
        },
        {
          title: '破坏性操作要点两次',
          body: '撤销通过明确的 index、worktree 和 clean 步骤恢复一个已暂存、未暂存或未跟踪的改动——并且始终先经过一次指名路径的二次确认。',
        },
        {
          title: '凭据留在 Git 一侧',
          body: 'push 和 sync 以 argv 形式调用 git push 与 git pull --rebase。缺少 origin 或鉴权被拒时呈现的是 Git 自己的错误；插件没有凭据界面可供误信。',
        },
        {
          title: '桌面增强是可选的',
          body: "子 fiber ctx.inject(['desktop']) 在提供者存在时增加“在文件夹中显示”和“打开路径”。仓库、状态、差异、暂存、提交和分支操作没有它照常工作。",
        },
        {
          title: '输出有上限',
          body: '单条命令的每路输出默认封顶 8 MiB；超过后收集器保留尾部。这是经过校验的配置项，而不是隐藏常量。',
        },
        {
          title: '不接触模型',
          body: '插件不注册任何模型工具、提示词段落或请求上下文。提交信息生成是独立的宿主 LLM 请求，不占用会话 token。',
        },
      ],
    },
    install: {
      eyebrow: '快速开始',
      title: 'web profile 上两条命令。',
      lead: '插件通过 DSH 插件管理器安装，共四种来源——在 Rivetdeck 中它已经预装，无需任何操作。',
      step1: { title: '安装插件包', body: '在受支持的 DSH 运行时中执行。Electron 桌面版请替换 profile。' },
      tabs: {
        label: '安装来源',
        npm: { label: 'npm', note: '推荐。安装预构建产物；安装时不会有包内代码在你的机器上运行。' },
        tarball: { label: 'tarball', note: '预构建离线包；同一个 tgz 也附带在 GitHub Release 上。' },
        github: { label: 'GitHub', note: '拉取源码并经 prepare 构建。allowBuilds 必须写 pnpm 打印出的 git+ 键——光写包名是匹配不上的。' },
        local: { label: '本地源码', note: '链接本地 checkout，适合开发；先 pnpm build 产出安装所需的 lib/。' },
      },
      step2: {
        title: '批准 GitHub 来源的构建步骤',
        body: '只有 <code>github:</code> 安装会在你的机器上构建——也就是包自己的 <code>prepare</code>。pnpm 10+ 会以 <code>ERR_PNPM_GIT_DEP_PREPARE_NOT_ALLOWED</code> 拒绝，直到把它打印出的键写进该 profile 的 <code>pnpm-workspace.yaml</code>；建议锁定标签，使之后的推送不会改变实际运行的内容。',
      },
      step3: {
        title: '在仓库里打开一个会话',
        body: '会话目录是仓库时，分支芯片和变更文件指示器就会出现在输入框里。',
        note: '所有受支持版本都自带该插件注册所需的右侧边栏——不需要额外的宿主插件。',
      },
      other: {
        title: '说明',
        preinstalled: 'Rivetdeck 预装了 Git；预装版本可能落后于 npm 最新版。如需新版，请安装到对应 profile。',
        desktop: '以上命令以 web profile 为例。Electron 桌面版把 <code>--profile web</code> 换成 <code>--profile desktop</code>。',
        source: '从源码检出运行 DSH？请用 <code>pnpm dsh</code> 代替 <code>dsh</code>。',
      },
    },
    compat: {
      eyebrow: '兼容性',
      title: '一份确切的清单，而不是一个范围。',
      lead: '客户端要注册进侧边栏和设置插槽，而这些插槽的形态在尚未稳定的版本之间会变，所以支持范围就是 CI 实际跑过的确切清单——下表每一行都在已发布的 v{version} 包中。',
      footnote: '状态按版本逐项声明，绝不按版本号顺序推断。从 DSH 0.1.7-rc.1 起，插件管理器会在安装时强制要求精确的 peer 版本。各版本的适配说明见<contract>兼容性参考</contract>。',
      region: 'DSH 版本支持矩阵',
      caption: '插件版本 {version} 支持的 DSH 版本',
      columns: { release: 'DSH 版本', status: '状态', since: '加入于', notes: '说明' },
      platforms: '平台',
      otherRelease: '其他任何版本',
      sinceDev: '开发分支',
      status: { verified: '已验证', partial: '部分支持', unreleased: '仅限开发', unsupported: '不支持' },
      notes: {
        '0.1.5-rc.2': '基线：最早提供本插件所需右侧边栏的版本。',
        '0.1.5-rc.3': '仅含 manifest 修订的重发版本；对本插件而言接口形态与 rc.2 相同。',
        '0.1.6-alpha.1': '插件配置位于“设置 → 插件 → 插件配置”。',
        '0.1.6-alpha.2': '配置移到组合包详情页；会话查找探测新的列表形态。',
        '0.1.7-alpha.1': 'configForms 取代 settingsScope；图标改为字重命名。',
        '0.1.7-alpha.2': '对本插件而言接口形态与 0.1.7-alpha.1 相同。',
        '0.1.7-rc.1': '从该版本起安装时强制要求精确的 peerDependencies。',
        '0.1.7-rc.2': '接口形态与 0.1.7-rc.1 相同。',
        '0.2.0-rc.1': 'DSH 0.2 候选版本。',
        '0.2.0-rc.2': '开发 pin；Rivetdeck 0.2.0-beta.3 内置的运行时。',
        '0.2.1-alpha.1': '对本插件而言只有上游新增项；该版本还没有工作目录投影。',
        '0.2.1-alpha.2': '有效会话工作目录与链接检出切换。',
        '0.2.1-alpha.3': '上游重设计了连接 Peer；对本插件而言接口形态不变。',
        '0.2.1-alpha.4': '存在 engines.dsh 时，安装准入优先读取该字段。',
        '0.2.1-alpha.5': '接口形态与 alpha.4 相同；仅侧边栏样式修复。',
        '0.2.1-rc.1': '运行时下限回到正式版 Cordis 与 schemastery；接口形态与 alpha.5 相同。',
        '0.2.1-rc.2': '接口形态与 rc.1 相同；0.2.1 系列验证至此补齐。',
        other: '未验证。在 0.1.7-rc.1 及以后的宿主上，安装时的 peer 范围会拒绝；更早的宿主或许能装上，但未经过测试。',
      },
      platformNotes: {
        macos: 'web 与桌面端共用同一份可移植构建；有桌面提供者时提供文件管理器操作',
        linux: '同一份可移植构建；无平台专属代码路径',
        windows: '同一份可移植构建；push 与 sync 的 Git 错误原样呈现',
      },
    },
    finalCta: {
      title: '在改动发生的地方审阅它。',
      lead: '受支持的宿主上一条命令即可——在 Rivetdeck 中则已就位。卸载后窗口与上游一模一样。',
      install: '安装插件',
      github: '在 GitHub 上查看',
    },
    changelog: {
      meta: {
        title: 'Git 更新日志 — Git 插件的全部版本',
        description:
          'DeepSeek Harness Git 插件的发布历史：每个已发布版本的新功能、变更与修复，按时间倒序排列。',
      },
      nav: { plugin: '插件页' },
      title: '更新日志',
      lead: 'Git 插件的每个已发布版本，按时间倒序排列。',
      metaLine: '{count} 个已发布版本 · 最新 {version}',
      latest: '最新',
      compare: '在 GitHub 上与上一版本对比',
      releaseNotes: '发布说明',
      kinds: {
        added: '新增',
        changed: '变更',
        fixed: '修复',
        removed: '移除',
        deprecated: '弃用',
        security: '安全',
        upgrade: '升级注意',
      },
      releases: [
        { version: '0.2.7', date: '2026-10-17', sections: [
            { kind: 'changed', items: [
                '精确 DSH 支持清单纳入 <code>0.2.1-rc.2</code>，验证范围覆盖 <code>0.1.5-rc.2</code> 至 <code>0.2.1-rc.2</code> 的全部已发布版本。manifest 同时新增 <code>engines.dsh</code> 声明，内容与精确版本集合一致——自 <code>0.2.1-alpha.4</code> 起宿主准入预检在该字段存在时只读它——<code>pnpm compat:check</code> 强制其与 peer 范围同步。'
              ] }
          ] },
        { version: '0.2.6', date: '2026-10-15', sections: [
            { kind: 'added', items: [
                '新的 <b>Git Worktrees</b> 侧栏页（<code>git.worktrees</code>）列出当前仓库的全部检出——不论其创建来源——并标记当前检出，提供 <b>在此会话中使用</b> 与创建对话框（可选分支名与起始提交）。仅当宿主通过新增的 <code>worktree-capability</code> RPC 报告创建模式时，该 tab 才注册。',
                '<code>create-worktree</code> RPC 与 <code>GitService.createWorktree</code>：宿主挂载上游实验性 <code>worktrees</code> 服务时创建委托 <code>ctx.worktrees.create(agent, ...)</code> 并自动进入新检出；否则 <code>git-worktrees</code> 的 <code>enabled</code> 设置开启本地 <code>git worktree add -b</code> 实现，检出池默认 <code>.agents/worktrees</code>，可经 <code>worktrees.directory</code> 修改。宿主挂载 <code>fs</code> 服务时，新建的仓内检出池会写入自我忽略的 <code>.gitignore</code>。删除与修剪仍不属于本包。',
                '新的 <code>git-worktrees</code> 设置节在两种受支持的设置面上编辑 <code>enabled</code> 与 <code>directory</code>；保存后重新轮询 capability，Worktrees tab 无需重启即可出现或消失。'
              ] },
            { kind: 'changed', items: [
                '插件配置卡全面改用 <code>@deepseek-ai/dsh-client-ui-primitives</code> 原生控件：生成模型合并为一个下拉框，会话模型置于按 provider 分组的目录条目之上；Worktrees 启用项使用原生胶囊开关。',
                '插件 bundle 页上的两个设置节现在合并为一个通宽设置表单、共用一个保存按钮——宿主导出 <code>SettingsForm</code> 时使用原生框架（DSH ≥0.1.7），更早版本使用样式一致的本地框架——离开页面时丢弃暂存修改。旧版命名空间卡片保留各自的控件。',
                '精确 DSH 支持清单现已覆盖 <code>0.1.5-rc.2</code> 至 <code>0.2.1-alpha.3</code> 的全部已发布版本：<code>0.1.5-rc.3</code> 与 <code>0.2.1-alpha.1</code> 此前经验证补入，区间内不再有缺口。',
                '<code>scripts/upgrade-dsh.mjs</code> 与 <code>pnpm compat:check</code> 接受不带 caret 或波浪号的精确宿主运行时 pin，与以精确版本声明 Cordis、schemastery 的发行版一致（<code>0.1.5-rc.3</code> 即如此）。'
              ] },
            { kind: 'fixed', items: [
                '共享配置页依次等待各设置节保存后再使用新 revision 写入下一节，保存中关闭页面仍会完成请求。传输失败后保留可编辑草稿供重试；关闭本地工作树会显式覆盖组合配置的 <code>true</code> 默认值。',
                '工作树创建发布的新目录投影不再取消自身的成功 RPC 回执；控制器卸载仍会取消在途创建。',
                '同目录侧栏挂载不再取消共享刷新或清空提交草稿。可执行文件首次查找被取消后不再污染后续 Git 请求或其他会话；成功刷新同时更新会话能力。Changes 与 Graph 会显示仓库加载失败原因。',
                '上游工作树创建要求当前会话有活 agent，已打开弹窗中的提交也受此约束；本地检出池目录提示仅在本地模式显示。'
              ] }
          ] },
        { version: '0.2.5', date: '2026-10-11', sections: [
            { kind: 'added', items: [
                '工作树控件会列出当前会话仓库的链接检出。宿主提供工作目录服务且会话有活 agent 时，<b>在此会话中使用</b> 会将该会话切换到所选检出。'
              ] },
            { kind: 'changed', items: [
                'Git 仓库状态跟随每个会话的有效工作目录，包括宿主投影的目录变更；旧宿主继续使用会话原始目录。',
                'Git 0.2.5 支持 DeepSeek Harness <code>0.2.1-alpha.2</code>，包括会话有效工作目录与链接工作树切换；<code>0.2.1-alpha.1</code> 仍不受支持。'
              ] },
            { kind: 'fixed', items: [
                '<code>git worktree list --porcelain -z</code> 的路径保留 Git 报告的空白，<b>在此会话中使用</b> 会进入该检出。',
                '会话没有活 agent 时不显示 <b>在此会话中使用</b>，即使宿主已经挂上目录服务。',
                '重叠的工作树进入请求按顺序执行，当前这次目录切换结束前进入按钮保持禁用。'
              ] }
          ] },
        { version: '0.2.4', date: '2026-09-30', lead: '兼容性版本：精确 DSH 支持清单扩展至 <code>0.2.0-rc.2</code>，开发 pin 同步切到该发行版。', sections: [
            { kind: 'changed', items: [
                'Git 文件比较改为复用官方 DSH <code>DiffBlock</code>，删除插件自写的逐行渲染器与样式。插件保留 Git 取数和侧栏地址，继续支持现有 DSH 矩阵，并区分二进制、仅元数据、空 patch、不完整输出及末尾换行变化。复制和折叠由 DSH 提供，新宿主还提供换行控件。',
                '精确 DSH 兼容矩阵加入 <code>0.2.0-rc.1</code> 与 <code>0.2.0-rc.2</code>。开发依赖与提交锁文件 pin 在 <code>0.2.0-rc.2</code>（Cordis <code>4.0.4</code>、schemastery <code>3.18.4</code>）。<code>src/compat/</code> 里已有的设置、schema 与图标结构探测继续覆盖这两个版本。该 pin 发布的车道专用包（<code>dsh-util-code-language</code>、<code>dsh-client-shortcuts</code>）只作为开发依赖，不进入 peer OR。'
              ] },
            { kind: 'fixed', items: [
                '主 CI 冻结安装可以在 pnpm 24 小时发布冷却到期前解析开发 pin <code>0.2.0-rc.2</code>：<code>minimumReleaseAgeExclude</code> 只保留该 pin 在锁文件中的精确包。pnpm 11.7 会忽略同一包名的后续 <code>name@version</code> 行，因此不再把旧 pin 条目留在旁边。未列入清单的 prerelease 不进该列表。'
              ] }
          ] },
        { version: '0.2.3', date: '2026-09-25', lead: '兼容性版本：精确 DSH 支持清单扩展至 <code>0.1.7-rc.2</code>，升级车道对仅 rc.2 发布的包使用条件 devDependencies。', sections: [
            { kind: 'changed', items: [
                '精确 DSH 兼容矩阵加入 <code>0.1.7-rc.2</code>。开发依赖仍 pin 在 <code>0.1.5-rc.2</code>。<code>src/compat/</code> 里已有的设置、schema 与图标结构探测继续覆盖该版本。',
                '升级脚本仅在目标精确版本发布了 <code>@deepseek-ai/dsh-util-code-language</code> 与 <code>@deepseek-ai/dsh-client-shortcuts</code> 时，才把它们写入该车道的开发依赖。它们不进入 peer OR，因此旧宿主仍可加载。'
              ] }
          ] },
        { version: '0.2.2', date: '2026-09-24', lead: '兼容性版本：精确 DSH 支持清单覆盖至 <code>0.1.7-rc.1</code>，<code>src/compat/</code> 按结构探测做跨版本适配，peer 改为由该清单生成的 OR 范围，使旧宿主继续加载、新发行版同时可支持。', sections: [
            { kind: 'changed', items: [
                '精确 DSH 兼容矩阵现支持 <code>0.1.5-rc.2</code>、<code>0.1.6-alpha.1</code>、<code>0.1.6-alpha.2</code>、<code>0.1.7-alpha.1</code>、<code>0.1.7-alpha.2</code> 与 <code>0.1.7-rc.1</code>，开发依赖仍 pin 在 <code>0.1.5-rc.2</code>。',
                '所有 <code>@deepseek-ai/dsh-*</code> peer 改为由该清单生成的精确 OR 范围，不再使用单一的 <code>>=0.1.5-rc.2 <0.2.0</code> 区间。',
                '<code>src/compat/</code> 内的跨版本适配按结构探测、不按版本号分支：提交信息设置在 <code>settingsScope</code> 与 <code>configForms</code> 间桥接；图标把旧固定尺寸导出映射到 0.1.7 权重 glyph；schema 仅在宿主 schemastery 副本提供 <code>.volatile()</code> 时标记字段，并通过 <code>readVolatile</code> 读取 volatile 引用快照。',
                '<code>.pnpmfile.cjs</code> 把传递链上的 <code>@deepseek-ai/dsh-*</code> 统一改写为当前 pin，避免 caret peer 把锁文件漂到更新的 prerelease。',
                '<code>.github/workflows/upgrade.yml</code> 的回归矩阵由支持清单动态生成；升级脚本把 Cordis 与 schemastery 钉到各发行版声明的 caret 或波浪号下限（含 <code>0.1.7-alpha.2</code> 与 <code>0.1.7-rc.1</code> 的 <code>~4.0.4</code> / <code>~3.18.4</code>）。',
                'Client 工作区读取和插件设置卡片注册已适配 alpha.2 的 Session 列表与 Plugins 标签页接口变化。'
              ] },
            { kind: 'fixed', items: [
                '在上游 DSH bundle 导入但未声明运行时依赖时，将 <code>simple-icons</code>、<code>zustand</code> 与 <code>immer</code> 声明为 peer（<code>dsh-client-ui-primitives</code>、<code>dsh-client-store</code>）。'
              ] }
          ] },
        { version: '0.2.1', date: '2026-09-14', lead: '文档与可靠性版本：新增变更日志与贡献指南，<readmeInstallation>安装</readmeInstallation>一节文档化全部四种安装来源，焦点抖动不再叠加仓库刷新。', sections: [
            { kind: 'added', items: [
                '<code>CONTRIBUTING.md</code>（中文副版 <code>CONTRIBUTING.zh.md</code>），说明环境搭建、质量门禁与文档义务。',
                '<code>CHANGELOG.md</code>（中文副版 <code>CHANGELOG.zh.md</code>）。'
              ] },
            { kind: 'changed', items: [
                '<readmeInstallation>安装</readmeInstallation>一节改为文档化四种安装来源 —— npm 注册表、tarball、本地路径、GitHub/git —— 取代原先的"一条 npm 命令 + 一段本地开发片段"。',
                '新增 <code>prepare</code> 脚本（<code>pnpm run build</code>），使 GitHub/git 安装会在安装方机器上从 <code>src/</code> 构建 <code>lib/</code>。',
                '<code>pnpm docs:check</code> 现在同时校验仓库根的三对双语文档：<code>README</code>、<code>CONTRIBUTING</code>、<code>CHANGELOG</code> 都必须有 <code>.zh.md</code> 副版与 <code>*.i18n.yaml</code> 一致性记录。'
              ] },
            { kind: 'fixed', items: [
                '焦点抖动不再叠加仓库刷新：<code>GitClientController.refresh()</code> 对同一工作区复用在途往返，反复的焦点事件只对应一对 <code>discover</code>/<code>status</code>，而不是互相判旧、让 <code>repository</code> 迟迟不落地的多轮重叠请求；请求若在该轮已读取仓库之后到达（外部编辑后的焦点回归），该 burst 会补读一轮，合并进来的调用方等到这轮补读落地（含共享轮次以瞬时错误收尾的情形——失败不得吞掉请求），每个 burst 最多两轮，避免控制器自身的 Host 流量自激。背景见 <tbWindowsFlood>Windows 桌面端终端窗口风暴</tbWindowsFlood>。'
              ] }
          ] },
        { version: '0.2.0', date: '2026-09-14', lead: '首次公开发布：<code>@dsh-electron/dsh-plugin-git@0.2.0</code> 已带构建 provenance 发布到 npm，其 GitHub Release 附同一个 tarball。', sections: [
            { kind: 'added', items: [
                'Changes 与 Graph 标签页的实时标题。',
                '<code>pnpm version:major</code> / <code>version:minor</code> / <code>version:patch</code> 快捷脚本，与 <code>version:set</code> 并列。',
                '新增规格：client 的 CSS module class 若未出现在构建产物样式表中即失败。'
              ] },
            { kind: 'changed', items: [
                '<b>对 Client 半部是破坏性变更：Git 各 surface 从第三方 Details Host 迁移到上游右侧边栏。</b> 本包此后面向 DeepSeek Harness ≥ v0.1.5-rc.2，把 <code>git.changes</code> 与 <code>git.graph</code> 注册为 page tab type、<code>git.diff</code> 注册为 <code>dsh-resource://git/diff/**</code> resource type，并统一经 <code>ctx.sidebarRight</code> 导航。',
                '所有 <code>@deepseek-ai/dsh-*</code> peer 范围改为 <code>>=0.1.5-rc.2 <0.2.0</code>。',
                'Diff 结果改为面板局部状态，不再写入共享的 controller slot。',
                '面板头部动作复用共享的 <code>GitIconButton</code>。'
              ] },
            { kind: 'fixed', items: [
                '回环 <code>/git</code> RPC 通道只在 <code>webServer</code> 出现后挂载，并从根上下文读取 connection service，不再在 <code>connection</code> 尚未解析时注册。',
                'Changes 或 Diff 面板刷新失败时，错误会与面板拉取错误一同展示，不再被丢弃。',
                '<code>npm publish</code> 收到的 tarball 参数改为 <code>./dist/<name>.tgz</code>：裸 <code>dist/<name>.tgz</code> 会被 npm 当作 GitHub <code>owner/repo</code> 简写解析并失败。'
              ] },
            { kind: 'removed', items: [
                '<code>@dsh-electron/dsh-client-ui-details-host</code> 依赖及其钉住的 fixture tarball。'
              ] }
          ] },
        { version: '0.1.0', date: '2026-09-13', lead: '首个 tag 版本：一项 portable Host service、一份 Client bundle 与一个 optional Desktop enhancement。', sections: [
            { kind: 'added', items: [
                '<code>ctx.git</code> Host service。它要求 <code>ctx.subprocess</code>，以 executable 加独立 argv values 启动 Git、绝不调用 shell：repository discovery、Git version、current branch 与 HEAD、porcelain v2 status（staged／unstaged／untracked，NUL 分隔路径）、local branches、working tree 与 staged diffs、stage／unstage、commit、amend、向 <code>origin</code> push、rebase-then-push sync、branch creation 与 branch switching。',
                '破坏性的 discard：通过明确的 index、working tree 与 clean 步骤还原一条 staged、unstaged 或 untracked 变更，且始终在 Client 端要求第二次确认。',
                '分页提交历史（<code>git log</code>，每条 commit 一行定长字段），Graph surface 通过 load-more 控件增量追加更早提交。',
                'Commit message 生成：staged diff（受 <code>commitMessage.maxDiffBytes</code> 上限约束）发送到宿主 LLM runtime —— 会话模型，或插件配置中固定的 <code>provider</code>/<code>model</code> 路由 —— 流式建议写入可编辑的 message 输入框。它绝不 stage、commit 或 push。',
                '基于第三方 Details Host（当时为必需依赖）的 Client surfaces：<b>Changes</b>（branch、带 Generate 的 commit message、分裂式 Commit 按钮、staged／unstaged／untracked 分区）、<b>Diff</b>（每标签页一个文件）、<b>Graph</b>（canvas lane graph，Auto／All／First parent 三种 scope，最多可见三条 lane，增量分页）。',
                '会话输入区的 composer 控件 —— branch selector 与 changed-files indicator —— 用于打开 Git surface，以及共享的 create-branch modal（处理 unborn HEAD）。',
                '面向 DSH Web host 的回环 <code>/git</code> RPC channel，以及 <code>cordis.patch.yml</code> bundle 层，使一次 <code>dsh plugin add</code> 即可把插件挂进 profile。',
                '可选的 <code>ctx.inject([\'desktop\'], ...)</code> child fiber，使用 <code>shell.showItemInFolder</code>、<code>shell.openPath</code> 与 <code>notification.show</code>。',
                '<code>docs/</code> 文档库、<code>pnpm docs:check</code> 机器校验、<code>version:set</code> 脚本、tag 触发的 release 工作流、双语 README 配对及其 <code>README.i18n.yaml</code> hash 记录。'
              ] }
          ] }
      ],
    },

  },

  themeStudio: {
    meta: {
      title: 'Theme Studio — 给 DSH 的八套配色',
      description:
        '一个可移植的 DSH 插件，在“设置 → 通用”里加入“主题”行：八套内置配色与导入的 .dsh-theme.json 主题，悬停预览、点击应用，Default 恢复官方外观。只产出 token 覆盖——模式与字体仍归宿主所有。',
      keywords: ['DeepSeek Harness', 'DSH 插件', '主题', '深色模式', '外观', '配色'],
    },
    brandHome: 'Theme Studio 首页',
    nav: { features: '功能', palettes: '配色', install: '安装', compatibility: '兼容性', changelog: '更新日志', github: 'GitHub', npm: 'npm' },
    cta: '安装',
    footer: {
      plugin: { title: '插件', features: '功能', palettes: '配色', install: '安装', compatibility: '兼容性' },
      docs: { title: '文档', readme: 'README', tokens: 'Token 参考', changelog: '更新日志' },
      source: { title: '源码', repo: 'GitHub 仓库', npm: 'npm 包', issues: '反馈问题' },
      plugins: { title: 'DSH 插件', git: 'Git', themeStudio: 'Theme Studio', multiRoot: 'Multi-root Workspace' },
      ecosystem: { title: '生态', rivetdeck: 'Rivetdeck 桌面应用', harness: 'DeepSeek Harness' },
      note: 'Theme Studio 是面向 DSH（DeepSeek Harness）的独立 MIT 许可插件，并非 DeepSeek 制作、认可或提供支持。\n“DeepSeek Harness” 是 DeepSeek 的商标，此处仅用于说明兼容性。',
    },
    hero: {
      changelog: ' 更新日志',
      titleLine1: '八套配色。',
      titleLine2: '一键换上。',
      lead: 'DSH 自带浅色、深色和跟随系统。Theme Studio 在“设置 → 通用”里加入“主题”行，提供八套内置配色，也接受你自己导入的主题——悬停即预览，点击才应用，选 Default 则把颜色全部还给官方。',
      install: '安装插件',
      readme: '阅读 README ↗',
      bullets: ['每套配色都带浅色与深色两份数值', '预览是临时的，点击之前不落盘', '已在 Rivetdeck 中预装'],
      shotCaption: '“设置 → 通用”里的“主题”行和它的八张卡片。',
    },
    features: {
      row: {
        kicker: '“主题”行',
        title: '在“外观”和“字号”之间',
        body: '这一行落在“设置 → 通用”中，样式对齐官方“语言”行：右侧的下拉选择器带着当前主题的四色马赛克和名称。',
        points: [
          '菜单列出 Default、八套内置配色和你导入的主题，各带色板',
          '“导入主题…”接受 .dsh-theme.json 文件；“管理主题…”导出或移除你的副本',
          '“创建自己的主题…”在宿主支持时预填随包的主题创作 skill',
          '行与菜单跟随界面语言，中英双语',
          '未选择任何主题时，设置页与未安装插件的 Harness 逐项一致',
        ],
        mock: { above: '外观', label: '主题', value: 'Nordic', below: '字号' },
      },
      preview: {
        kicker: '先预览，再应用',
        title: '悬停是临时的，点击才落盘。',
        body: '悬停在菜单项上会临时套用它的颜色；关闭菜单——指针移出、点击外部、按 Esc 或再次点按选择器——都会恢复原状。只有点击或回车才会请求宿主保存，选择可跨重启、跨会话保留。',
        points: ['预览不写盘：悬停不改动任何设置', 'Default 清除全部覆盖并保存 activeThemeId=null', '宿主拒绝保存时，该行会报告失败并恢复上一次被接受的选择'],
        menuTitle: '主题菜单的状态',
        menuPreview: '悬停 — 预览中',
        menuApplied: '已应用并保存',
        menuDefault: '清除全部覆盖',
      },
      palettes: {
        kicker: '八套内置配色',
        title: '每套配色都带两种模式',
        body: 'Claude、Codex、Claude Cream、Graphite、OLED、Nordic、Paper、Warm——每套都带浅色和深色的 token 数值，跟随官方“外观”的模式解析。在这里就能试；数值直接取自插件的 presets。',
        note: '选择器里的四色马赛克固定使用浅色样本——它是配色色板，不是模式指示器。',
      },
      boundaries: {
        kicker: '边界',
        title: '官方“外观”说了算',
        body: 'Theme Studio 刻意保持狭窄：它拓宽的是配色，不是设置模型。',
        items: [
          {
            title: '模式归上游',
            body: '浅色、深色、跟随系统仍是官方“外观”的职责；每套配色都带两种变体，模式解析不受影响。',
          },
          { title: '字体归上游', body: '字体和字号是官方设置——预览、应用、取消和 Default 都不会改写它们。' },
          { title: '只有 token', body: '插件只产出 overrideTokens；被接受的快照和 DOM 渲染都属于 ctx.theme。' },
          {
            title: '天生可移植',
            body: '声明 platform:web——不引入 Electron，不依赖 Node 客户端能力，不依赖桌面提供者，也不注册模型工具或提示词。',
          },
        ],
      },
    },
    limits: {
      title: '不做的保证',
      points: [
        '导入与导出使用 dsh-theme.json v1 格式；可视化的主题编辑器仍在路线图上。',
        '对比度检查是诊断而不是门禁——有些配色低于阈值，既不自动修复也不阻止预览或应用。',
        '预览由悬停驱动：键盘聚焦不触发预览，直接按回车即应用。',
        '只读目录 ctx.themeStudio.catalog 只存在于客户端——不支持动态注册，也没有 Host RPC。',
      ],
    },
    install: {
      eyebrow: '快速开始',
      title: '两条命令，然后挑个颜色。',
      lead: '插件通过 DSH 插件管理器安装，共四种来源——在 Rivetdeck 中它已经预装，无需任何操作。',
      step1: { title: '安装插件包', body: '在受支持的 DSH 运行时中执行。Electron 桌面版请替换 profile。' },
      tabs: {
        label: '安装来源',
        npm: { label: 'npm', note: '推荐。安装预构建产物；安装时不会有包内代码在你的机器上运行。' },
        tarball: { label: 'tarball', note: '预构建离线包；Release 资产名为 plugin.tgz。' },
        github: { label: 'GitHub', note: '安装时经 prepare 从源码构建；allowBuilds 必须写上这个包名——建议锁定标签。' },
        local: { label: '本地源码', note: '链接本地 checkout，适合开发；不需要 allowBuilds。' },
      },
      step2: {
        title: '批准 GitHub 来源的构建步骤',
        body: '只有 <code>github:</code> 安装会在你的机器上构建——也就是包自己的 <code>prepare</code>。pnpm 以 <code>ERR_PNPM_IGNORED_BUILDS</code> 停下时，把这个包名加入该 profile 的 <code>pnpm-workspace.yaml</code>，再跑一次 add；建议锁定标签，使之后的推送不会改变实际运行的内容。',
      },
      step3: {
        title: '打开“设置 → 通用”',
        body: '“主题”行就在官方“外观”和“字号”之间。',
        note: '点击选择器，悬停预览，点击应用——或选 Default 把所有覆盖还回去。',
      },
      other: {
        title: '说明',
        preinstalled: 'Rivetdeck 预装了 Theme Studio；预装版本可能落后于 npm 最新版。如需新版，请安装到对应 profile。',
        desktop: '以上命令以 web profile 为例。Electron 桌面版把 <code>--profile web</code> 换成 <code>--profile desktop</code>。',
        source: '从源码检出运行 DSH？请用 <code>pnpm dsh</code> 代替 <code>dsh</code>。',
      },
    },
    compat: {
      eyebrow: '兼容性',
      title: '一份确切的清单，而不是一个范围。',
      lead: '设置服务和菜单图标在尚未稳定的版本之间会变形，所以插件中的白名单就是唯一的支持声明——下表每一行都在已发布的 v{version} 包中。',
      footnote: '插件在运行时不会自我门禁：未列出的版本只是未验证，混合安装也仍能启动；安装时的 peer 准入可能拒绝部分不匹配。证据与适配接缝见<contract>兼容性矩阵</contract>。',
      region: 'DSH 版本支持矩阵',
      caption: '插件版本 {version} 支持的 DSH 版本',
      columns: { release: 'DSH 版本', status: '状态', since: '加入于', notes: '说明' },
      otherRelease: '其他任何版本',
      sinceDev: '开发分支',
      status: { verified: '已验证', partial: '部分支持', unreleased: '仅限开发', unsupported: '不支持' },
      notes: {
        '0.1.5-rc.2': '白名单的基线版本。',
        '0.1.5-rc.3': '仅含 manifest 修订的重发版本；设置接口形态与 rc.2 相同。',
        '0.1.6-alpha.1': '旧版设置 register 通道。',
        '0.1.6-alpha.2': '对本插件而言设置形态与 alpha.1 相同。',
        '0.1.7-alpha.1': 'Config / configure / configForms 取代 register / settingsScope。',
        '0.1.7-alpha.2': '接口形态与 alpha.1 相同。',
        '0.1.7-rc.1': '从该版本起安装时强制要求精确的 peerDependencies。',
        '0.1.7-rc.2': '接口形态与 rc.1 相同。',
        '0.2.0-rc.1': 'DSH 0.2 候选版本；新增八个语义 token 已审计。',
        '0.2.0-rc.2': '对本插件而言接口形态与 rc.1 相同。',
        '0.2.1-alpha.1': '字体与字号保持由宿主管理，与覆盖并存。',
        '0.2.1-alpha.2': '主题快照形态变化；字体角色仍归宿主所有。',
        '0.2.1-alpha.3': '运行时下限升至 Cordis 4.0.5-alpha.2；Web 端设置入口收进账号菜单。',
        '0.2.1-alpha.4': '存在 engines.dsh 时安装准入优先读取它；本插件继续使用 peerDependencies。',
        '0.2.1-alpha.5': '对本插件而言接口形态与 alpha.4 相同。',
        '0.2.1-rc.1': '运行时下限回到正式版 Cordis 4.0.5 与 schemastery 3.18.5。',
        '0.2.1-rc.2': '插件的开发 pin。',
        other: '未验证但不会被拒绝：插件在运行时没有门禁；安装时的 peer 范围仍可能拒绝。',
      },
    },
    finalCta: {
      title: '把这扇窗换成你的配色。',
      lead: '一条命令安装——在 Rivetdeck 中则已就位。选回 Default，一切覆盖即刻消失。',
      install: '安装插件',
      github: '在 GitHub 上查看',
    },
    changelog: {
      meta: {
        title: 'Theme Studio 更新日志 — 插件的全部版本',
        description:
          'DeepSeek Harness Theme Studio 插件的发布历史：每个已发布版本的新功能、变更与修复，按时间倒序排列。',
      },
      nav: { plugin: '插件页' },
      title: '更新日志',
      lead: 'Theme Studio 插件的每个已发布版本，按时间倒序排列。',
      metaLine: '{count} 个已发布版本 · 最新 {version}',
      latest: '最新',
      compare: '在 GitHub 上与上一版本对比',
      releaseNotes: '发布说明',
      kinds: {
        added: '新增',
        changed: '变更',
        fixed: '修复',
        removed: '移除',
        deprecated: '弃用',
        security: '安全',
        upgrade: '升级注意',
      },
      releases: [
        { version: '0.1.5', date: '2026-10-17', sections: [
            { kind: 'added', items: [
                '公开 <code>dsh-theme.json</code> v1 主题文件格式并随包发布 JSON Schema（<code>schemas/dsh-theme.schema.json</code>）：<code>palette</code> 明暗各 13 字段必填，可选稀疏 <code>overrides</code> 叠加在派生 token 之上；色值限对比度 resolver 支持的子集，<code>version</code> 可省略默认为 1。',
                'Themes 菜单新增导入/管理入口：导入经确认对话框写入设置并自动预览，重复 id 由用户选择覆盖或自动生成新 id；管理对话框支持导出与删除导入主题，内置主题也可导出为可回导的 <code>user.*</code> 文件。',
                '公共 <code>ctx.themeStudio.catalog</code> 升级为 builtin + imported 复合目录（ADR-0009）：<code>list()</code>/<code>get()</code>/<code>validate()</code> 覆盖导入主题，<code>list()</code> 在调用时返回冻结快照。',
                '支持 DSH 0.2.1-alpha.3。',
                '支持 DSH 0.2.1-alpha.4、0.2.1-alpha.5、0.2.1-rc.1 与 0.2.1-rc.2。',
                '新增 Theme Creator（ADR-0010）：<code>dsh-theme-creator</code> skill 由 <code>creatorAgentMode</code> 设置驱动（<code>off</code>/<code>gesture</code>/<code>catalog</code>，默认 <code>gesture</code>——只响应 <code>/dsh-theme-creator</code> 用户手势、不进模型目录）；skill 指导模型在工作区写出 <code>dsh-theme.json</code> 并经随包校验器自检，产物仍由用户经导入流程确认。',
                'Themes 菜单新增「创建自己的主题」：在支持两参 <code>startSession</code> 的版本上打开 Cordis 会话并预填 <code>/dsh-theme-creator </code>（不自动发送）；较早版本降级为手动手势提示。<code>creatorAgentMode</code> 在插件管理页（Plugins → Theme Studio）切换；无插件管理页的宿主保持已存储或默认档位。',
                '随包发布 <code>lib/validate-theme.js</code> 命令行校验器：<code>node lib/validate-theme.js <file></code> 输出结构化 JSON 格式与对比度报告（通过 0 / 未过 1 / 用法错误 2）。'
              ] },
            { kind: 'changed', items: [
                '<code>theme-studio</code> 设置命名空间新增 <code>importedThemes</code> 字段持久化导入主题源文件；Host schema 保持宽松、Client 严格解析，无法读取的条目被跳过而不影响其余设置。',
                '<code>theme-studio</code> 设置命名空间新增 <code>creatorAgentMode</code> 字段控制 Theme Creator 可见性；旧快照缺失该字段时按默认 <code>gesture</code> 处理。'
              ] },
            { kind: 'fixed', items: [
                '导入、覆盖或删除被旧 settings 通道拒绝时显示保存失败并保留已接受的主题列表；设置尚未就绪时禁止导入与删除。',
                '覆盖导入等待保存成功后预览新配色；重复 id 的自动重命名遵守 64 字符上限。',
                'Themes 菜单中指针离开主题项或悬停到「导入主题」「管理主题」时恢复已应用主题，不再残留最后悬停主题的预览；键盘选中这两个动作同样先取消预览。',
                '导入编辑以 accepted 原始数组为合并基准，无法解析的既有条目在追加、覆盖或删除后保留，不再被静默抹除。',
                '确认导入前重查 catalog 与在途写入的 id 占用；过期确认回到三选对话框，<code>append</code> 兜底走 keep-both 改名，不写入持久重复 id。',
                '超长的导入主题名在选择器按钮与管理对话框中以省略号截断并保留完整名提示，不再撑宽设置行。',
                '主题文件读取失败（如读取中途出错）现在显示导入错误对话框，不再产生未处理的 Promise rejection。',
                '导入确认与管理对话框现在显示主题文件的 <code>description</code> 字段，与文件格式文档一致；超长描述以省略号截断并保留完整文本提示。',
                '主题菜单的悬停预览改为按整行判定：指针在行内 padding 或图标与文字间隙时不再误恢复已应用主题；移到分隔线、组标签、footer 动作或菜单外仍恢复。',
                '主题文件的 <code>$schema</code> 字段按公开 JSON Schema 收紧为字符串；此前非字符串值（如深嵌套对象）可通过校验并持久化，其后的深冻结会因递归过深抛出 RangeError，且该持久化条目每次启动都使导入目录加载失败。',
                '主题文件的 <code>version: null</code> 不再被当作省略处理，按公开 JSON Schema 拒绝为 <code>unsupported-version</code>。',
                '主题文件校验不再对被拒绝的值做递归字符串化：把 <code>id</code>、<code>name</code>、<code>version</code> 或 override 色值写成深嵌套数组的文件现在按对应错误码拒绝，不再抛出 RangeError。',
                '激活导入主题且正在预览其他主题时，<code>importedThemes</code> 变更重装 active 层后不再盖住预览层：仍然有效的预览会重新装回顶层并刷新 token，屏幕与预览状态保持一致。'
              ] }
          ] },
        { version: '0.1.4', date: '2026-10-11', sections: [
            { kind: 'added', items: [
                '支持 DSH 0.2.1-alpha.1 与 0.2.1-alpha.2。官方正文字体、代码字体、终端字体及对应字号保持独立；主题预览、应用、取消、恢复默认和明暗切换不会改写这些偏好。',
                '主题保存被 Host 拒绝时，设置行提示失败并恢复上次已接受的选择。连续应用按顺序写入，较早的成功结果不能在较新选择之后落盘并把它盖掉；插件关闭后不再把过期结果装回界面。',
                'Stage 2 自动对比度校验：浅色/深色逐配对报告、透明色与 sRGB 混色解析、报告命令及严格退出码模式；README 记录实际校验范围与内置配色的已知失败。',
                'Stage 3 公开 Client <code>ctx.themeStudio.catalog</code>，提供只读主题发现与校验报告，并随 Cordis 插件生命周期释放与重供服务。'
              ] },
            { kind: 'changed', items: [
                'Client bundle 从宿主共享 <code>@deepseek-ai/dsh-client-store</code>，避免第二份 store 破坏客户端服务身份；提供隔离候选探测与多版本回归，发布复用完整验证。',
                '按当前代码与全部历史提交补齐需求、架构、ADR、实施计划、开发流程、完整 API/token 参考与故障排查；根文档统一为中文 README.md、英文 README.en.md，旧 README.zh.md 保留导航入口。',
                '新增 docs:check 文档结构检查并接入 CI/发布验证；同步 README 兼容检查与发布语言文件清单。'
              ] }
          ] },
        { version: '0.1.3', date: '2026-09-30', sections: [
            { kind: 'added', items: [
                '新增三套对标 Claude Desktop、Codex Desktop 与 Claude Cream 的内置 overlay。',
                '内置主题现在覆盖原先停在官方色板上的语义色、组件直接引用的 static，以及代码高亮 token；保留 tooltip 等使用的静态白色语义。',
                '支持 DSH 0.2.0-rc.1 与 0.2.0-rc.2，补齐新版八项语义 token，并在独立安装树重新验证全部支持版本。'
              ] },
            { kind: 'changed', items: [
                '开发依赖、overrides 与 lockfile 统一到最新受支持 DSH 0.2.0-rc.2；官方主题集成测试改为加载实际安装的发布 bundle。'
              ] }
          ] },
        { version: '0.1.2', date: '2026-09-27', sections: [
            { kind: 'changed', items: [
                '移除 Theme Studio 自定义的插件页卡片和详情贡献；安装包通过包名加载器记录显示在官方插件管理器中。保留“设置 → 通用 → 主题”行。'
              ] }
          ] },
        { version: '0.1.1', date: '2026-09-26', sections: [
            { kind: 'added', items: [
                '支持 DSH 0.1.7-rc.1 与 0.1.7-rc.2：这些版本会在 profile 安装或启动插件时校验插件声明的 DSH peer 范围。'
              ] },
            { kind: 'fixed', items: [
                '在使用旧版 <code>register</code> API 注册 settings 命名空间的宿主上恢复主题选择持久化：不再把该 API 返回的命名空间 scope 交还给 Cordis，否则 Cordis 会将其判为无效 effect 并静默回滚注册。'
              ] }
          ] },
        { version: '0.1.0', date: '2026-09-25', lead: '首次公开发布，提供可在 DSH Web 与 Desktop 中运行的主题覆盖插件。', sections: [
            { kind: 'added', items: [
                '在“设置 → 通用 → 主题”浏览 Graphite、OLED、Nordic、Paper、Warm 与默认卡，支持临时预览、取消、应用和重启后恢复。',
                '通过 <code>ctx.theme.overrideTokens()</code> 叠加主题 token；官方浅色、深色与跟随系统外观仍由宿主管理。',
                'Host 侧持久化当前主题选择，并兼容受支持 DSH 版本间的 register/settingsScope 与 Config/configure/configForms 差异；设置服务停止重供后可重新启动主题行。',
                '发布 standalone Host、Client bundle、TypeScript 声明和 <code>cordis.patch.yml</code>，并声明精确的 DSH 兼容版本。'
              ] }
          ] }
      ],
    },

  },
}

export default zh
