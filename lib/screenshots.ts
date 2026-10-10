/**
 * Native Rivetdeck screenshots, captured from the local Electron build by
 * `scripts/capture/capture-electron.mjs` (see public/screenshots/README.md).
 * Each entry exists as `<name>-light.png` and `<name>-dark.png`. Alt text is
 * localized and lives in the dictionaries under `shots`.
 */

export interface ScreenshotSpec {
  name: string
  width: number
  height: number
}

export const SHOTS = {
  gitDiff: {
    name: 'git-diff',
    width: 2880,
    height: 1800,
  },
  home: {
    name: 'rivetdeck-home',
    width: 2880,
    height: 1800,
  },
  plugins: {
    name: 'plugins',
    width: 2880,
    height: 2360,
  },
  themes: {
    name: 'themes-settings',
    width: 2880,
    height: 1800,
  },
  folders: {
    name: 'multiroot-folders',
    width: 2880,
    height: 1800,
  },
  foldersDialog: {
    name: 'multiroot-dialog',
    width: 1200,
    height: 864,
  },
} as const satisfies Record<string, ScreenshotSpec>
