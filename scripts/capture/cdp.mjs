// Minimal Chrome DevTools Protocol client for the native Rivetdeck Electron
// window. Start the app with `--remote-debugging-port=<port>`; this talks to the
// real BrowserWindow renderer, not to a browser tab. Uses Node's built-in
// WebSocket, so there is no automation dependency.

import { writeFile } from 'node:fs/promises'

/**
 * Connect to the first page target of an Electron app.
 * @param {number} port remote debugging port.
 */
export async function connect(port = 9333) {
  const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()
  const page = targets.find((t) => t.type === 'page')
  if (!page) throw new Error('no page target')
  const ws = new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true })
    ws.addEventListener('error', reject, { once: true })
  })
  let id = 0
  const pending = new Map()
  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data)
    const entry = pending.get(msg.id)
    if (!entry) return
    pending.delete(msg.id)
    if (msg.error) entry.reject(new Error(JSON.stringify(msg.error)))
    else entry.resolve(msg.result)
  })
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const n = ++id
      pending.set(n, { resolve, reject })
      ws.send(JSON.stringify({ id: n, method, params }))
    })

  const api = {
    send,
    close: () => ws.close(),
    sleep: (ms) => new Promise((r) => setTimeout(r, ms)),
    /** Evaluate an expression in the renderer and return its value. */
    async eval(expression) {
      const res = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })
      if (res.exceptionDetails) throw new Error(res.exceptionDetails.exception?.description ?? 'eval failed')
      return res.result.value
    },
    /** Click the first element whose accessible text matches. */
    async clickText(text, selector = 'button, [role=button], [role=menuitem], [role=tab], a', exact = false) {
      const ok = await api.eval(`(() => {
        const want = ${JSON.stringify(text)}
        const nodes = [...document.querySelectorAll(${JSON.stringify(selector)})]
        const el = nodes.find((n) => ((n.getAttribute('aria-label') || n.textContent || '').trim() === want))
          || (${exact} ? null : nodes.find((n) => ((n.getAttribute('aria-label') || n.textContent || '').trim().includes(want))))
        if (!el) return false
        el.scrollIntoView({ block: 'center' })
        const r = el.getBoundingClientRect()
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 }
      })()`)
      if (!ok) throw new Error(`no clickable element: ${text}`)
      await api.mouse(ok.x, ok.y)
    },
    /** Whether a button with this exact accessible name is rendered and visible. */
    async isVisible(label) {
      return api.eval(`[...document.querySelectorAll('button')].some((b) => {
        if ((b.getAttribute('aria-label') || b.textContent || '').trim() !== ${JSON.stringify(label)}) return false
        const r = b.getBoundingClientRect()
        return r.width > 0 && r.height > 0 && getComputedStyle(b).visibility !== 'hidden'
      })`)
    },
    /** Click the deepest element whose own text equals `text`. */
    async clickLeaf(text) {
      const pos = await api.eval(`(() => {
        const want = ${JSON.stringify(text)}
        const el = [...document.querySelectorAll('*')].find((n) => n.children.length === 0 && n.textContent.trim() === want)
        if (!el) return null
        el.scrollIntoView({ block: 'center' })
        const r = el.getBoundingClientRect()
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 }
      })()`)
      if (!pos) throw new Error(`no leaf element: ${text}`)
      await api.mouse(pos.x, pos.y)
    },
    /** Reload the renderer and wait for the app shell. */
    async reload() {
      await send('Page.reload')
      await api.sleep(7000)
    },
    /** Move the pointer to an empty area so hover tooltips are gone. */
    async parkMouse(x = 700, y = 140) {
      await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y })
    },
    /** Dispatch a real pointer click at viewport coordinates. */
    async mouse(x, y) {
      await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y })
      await send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 })
      await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 })
    },
    /** Insert text into the focused element. */
    async type(text) {
      await send('Input.insertText', { text })
    },
    async key(key, code = key) {
      await send('Input.dispatchKeyEvent', { type: 'keyDown', key, code })
      await send('Input.dispatchKeyEvent', { type: 'keyUp', key, code })
    },
    /** Capture one element (plus padding) at the current device scale factor. */
    async screenshotElement(path, selector, { pad = 24, scale = 2 } = {}) {
      const box = await api.eval(`(() => {
        const el = document.querySelector(${JSON.stringify(selector)})
        if (!el) return null
        const r = el.getBoundingClientRect()
        return { x: r.left, y: r.top, width: r.width, height: r.height }
      })()`)
      if (!box) throw new Error(`no element: ${selector}`)
      const clip = {
        x: Math.max(0, box.x - pad),
        y: Math.max(0, box.y - pad),
        width: box.width + pad * 2,
        height: box.height + pad * 2,
        scale: 1,
      }
      await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: scale, mobile: false })
      await api.sleep(300)
      const { data } = await send('Page.captureScreenshot', { format: 'png', clip })
      await writeFile(path, Buffer.from(data, 'base64'))
    },
    /** Capture the renderer at the given CSS size and device scale factor. */
    async screenshot(path, { width = 1440, height = 900, scale = 2 } = {}) {
      await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: scale, mobile: false })
      await api.sleep(500)
      const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false })
      await writeFile(path, Buffer.from(data, 'base64'))
    },
  }
  return api
}
