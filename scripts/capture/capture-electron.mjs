// Capture product screenshots from the native Rivetdeck Electron window.
//
// Prerequisites (see public/screenshots/README.md):
//   1. A local Rivetdeck build started with an isolated profile, for example
//        env -u ELECTRON_RUN_AS_NODE DSH_HOME=/tmp/rd-home \
//          electron apps/electron --user-data-dir=/tmp/rd-userdata --remote-debugging-port=9333
//   2. The Git and Theme Studio ecosystem plugins (preinstalled by Rivetdeck) and
//      @dsh-electron/dsh-plugin-multi-root-workspace installed into the same profile.
//   3. A demo workspace whose primary root is a Git repository with a few changes.
//
// Usage: node scripts/capture/capture-electron.mjs [port] [outDir]

import { mkdir } from 'node:fs/promises'
import { connect } from './cdp.mjs'

const port = Number(process.argv[2] ?? 9333)
const out = process.argv[3] ?? 'public/screenshots'
await mkdir(out, { recursive: true })

const c = await connect(port)
const attempt = async (text, selector, exact = true) => {
  try {
    await c.clickText(text, selector, exact)
    await c.sleep(700)
    return true
  } catch {
    return false
  }
}
const settle = (ms = 900) => c.sleep(ms)
const shot = async (name, opts) => {
  await c.parkMouse()
  await c.sleep(400)
  await c.screenshot(`${out}/${name}.png`, opts)
  console.log('captured', name)
}

/** Reload to a clean shell, dismiss first-run dialogs, and close the right sidebar. */
async function resetUi() {
  await c.reload()
  for (let i = 0; i < 5; i += 1) {
    await attempt('Skip for now')
    await attempt('Configure later')
    if (await c.isVisible('Collapse right sidebar')) await attempt('Collapse right sidebar')
    await settle(1500)
  }
  const dirty = await c.eval(`Boolean(document.querySelector('[role=dialog]'))`)
  if (dirty) throw new Error('UI did not reach the clean state')
}

async function setAppearance(mode) {
  await attempt('Settings', 'button')
  await settle()
  await c.clickText(mode === 'dark' ? 'Dark' : 'Light', 'button')
  await settle()
  await c.clickText('Close', 'button')
  await settle()
}

async function applyTheme(name) {
  await c.clickText('Settings', 'button')
  await settle()
  await c.clickText(`Apply ${name}`, 'button')
  await settle(1200)
  await c.clickText('Close', 'button')
  await settle()
}

async function capture(mode) {
  await resetUi()
  await setAppearance(mode)
  await resetUi()

  await shot(`rivetdeck-home-${mode}`)

  // Multi-root Workspace: the real Workspace folders dialog.
  await c.clickText('Folders', 'button')
  await settle(1200)
  await shot(`multiroot-folders-${mode}`)
  await c.screenshotElement(`${out}/multiroot-dialog-${mode}.png`, '[role=dialog]', { pad: 0, inset: 20 })
  console.log('captured multiroot-dialog', mode)
  await c.key('Escape')
  await settle()
  await attempt('Close', 'button')

  // Git: Changes + Diff tabs in the right sidebar.
  await c.clickText('3 changes', 'button')
  await settle(1500)
  await c.clickLeaf('config.ts')
  await settle(1500)
  await shot(`git-diff-${mode}`)
  if (await c.isVisible('Collapse right sidebar')) await attempt('Collapse right sidebar')
  await settle()

  // Theme Studio: the Themes section of Settings → General.
  await c.clickText('Settings', 'button')
  await settle()
  await c.eval(`(() => {
    const h = [...document.querySelectorAll('*')].find((n) => n.children.length === 0 && n.textContent.trim() === 'Themes')
    h?.scrollIntoView({ block: 'start' })
  })()`)
  await settle(900)
  await shot(`themes-settings-${mode}`)
  await c.clickText('Close', 'button')
  await settle()

  // Plugins page: Installed list.
  await c.clickText('Plugins', 'button')
  await settle(1500)
  await settle(600)
  await shot(`plugins-${mode}`, { height: 1180 })
  await attempt('New Session', 'button, [role=treeitem]')
}

await capture('light')
await capture('dark')

// Theme Studio overlay in the full app, one light and one dark palette.
await resetUi()
await setAppearance('dark')
await applyTheme('Nordic')
await resetUi()
await c.clickText('3 changes', 'button')
await settle(1500)
await shot('app-theme-nordic-dark')
await applyTheme('Default')

await resetUi()
await setAppearance('light')
await applyTheme('Claude')
await resetUi()
await c.clickText('3 changes', 'button')
await settle(1500)
await shot('app-theme-claude-light')
await applyTheme('Default')

c.close()
