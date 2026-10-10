# Screenshot provenance

Every PNG in this directory is a capture of the native Rivetdeck Electron
application (the `deepseek-harness-electron` repository, MIT licensed), taken
from a local build rather than downloaded from the web.

| Item | Value |
| --- | --- |
| Application | Rivetdeck, local Electron build of `deepseek-harness-electron` |
| DSH runtime | 0.2.0-rc.2 |
| Preinstalled plugins | Git 0.2.4, Theme Studio 0.1.3 |
| Optional plugin | Multi-root Workspace 0.1.5 (installed for the `multiroot-*` captures) |
| Profile | A throwaway user-data directory, no account, no API key, no real projects |
| Content | Demo repositories created for the capture; no private paths or credentials |
| Method | `scripts/capture/capture-electron.mjs` drives the running app over the Chrome DevTools Protocol and saves the renderer output |

## Files

| File | Shows |
| --- | --- |
| `rivetdeck-home-{light,dark}.png` | Start screen with the Workspaces sidebar |
| `git-diff-{light,dark}.png` | Session window with the Git panel in the right sidebar |
| `plugins-{light,dark}.png` | Installed plugins view |
| `themes-settings-{light,dark}.png` | Settings → General → Themes |
| `multiroot-folders-{light,dark}.png` | Workspace Folders panel (Multi-root Workspace 0.1.5) |
| `multiroot-dialog-{light,dark}.png` | Add-folder dialog (Multi-root Workspace 0.1.5) |
| `app-theme-nordic-dark.png`, `app-theme-claude-light.png` | The whole app under two Theme Studio palettes |

## Limits

- These are renderer captures: they contain the application UI but not the
  operating-system window frame.
- The app UI shows the upstream DeepSeek Harness whale. The site's own logo is
  an original mark so that it does not imply endorsement.
- Re-capture when the application UI changes; update the version table above
  at the same time.
