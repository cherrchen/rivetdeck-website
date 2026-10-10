/**
 * Native Rivetdeck screenshots, captured from the local Electron build by
 * `scripts/capture/capture-electron.mjs` (see public/screenshots/README.md).
 * Each entry exists as `<name>-light.png` and `<name>-dark.png`.
 */

export interface ScreenshotSpec {
  name: string
  width: number
  height: number
  alt: string
}

export const SHOTS = {
  gitDiff: {
    name: 'git-diff',
    width: 2880,
    height: 1800,
    alt: 'Rivetdeck window with the Workspaces sidebar, a new session composer, and the Git Changes panel listing two modified files and one untracked file on branch feat/checkout-flow.',
  },
  home: {
    name: 'rivetdeck-home',
    width: 2880,
    height: 1800,
    alt: 'Rivetdeck start screen with the Workspaces sidebar and a session composer showing the Workspace Write sandbox mode and the current Git branch.',
  },
  plugins: {
    name: 'plugins',
    width: 2880,
    height: 2360,
    alt: 'Rivetdeck Plugins page listing the official plugins and the three installed plugins: Git, Multi-root Workspace and Theme Studio.',
  },
  themes: {
    name: 'themes-settings',
    width: 2880,
    height: 1800,
    alt: 'Rivetdeck Settings dialog showing the Theme Studio theme cards: Default, Claude, Codex, Claude Cream, Graphite, OLED, Nordic, Paper and Warm.',
  },
  folders: {
    name: 'multiroot-folders',
    width: 2880,
    height: 1800,
    alt: 'The Workspace folders dialog in Rivetdeck listing one primary working directory and two secondary working directories.',
  },
  foldersDialog: {
    name: 'multiroot-dialog',
    width: 1280,
    height: 944,
    alt: 'Workspace folders dialog: primary working directory web, secondary directories api and design-system, with reorder, reveal and remove actions.',
  },
} as const satisfies Record<string, ScreenshotSpec>
