// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { InstallTabs } from '@/components/plugin/install-tabs'
import { ThemePreview } from '@/components/home/theme-preview'
import { CopyButton } from '@/components/ui/copy-button'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { COMPAT_PLUGIN_VERSION } from '@/lib/multi-root-compat'
import { MULTI_ROOT_PACKAGE } from '@/lib/site'

const dict = getDictionary('en')
const copy = dict.common.copy
const multiRootSpec = { package: MULTI_ROOT_PACKAGE, version: COMPAT_PLUGIN_VERSION, repo: 'cherrchen/dsh-plugin-multi-root-workspace' } as const

afterEach(cleanup)

describe('CopyButton', () => {
  it('writes the text to the clipboard and announces success', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true })
    render(<CopyButton text="dsh plugin add x" labels={copy} />)
    fireEvent.click(screen.getByRole('button', { name: 'Copy command' }))
    await waitFor(() => expect(screen.getByRole('status').textContent).toBe('Copied to clipboard'))
    expect(writeText).toHaveBeenCalledWith('dsh plugin add x')
  })

  it('reports failure when neither clipboard path works', async () => {
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: vi.fn().mockRejectedValue(new Error('denied')) }, configurable: true })
    document.execCommand = vi.fn().mockReturnValue(false)
    render(<CopyButton text="x" labels={copy} />)
    fireEvent.click(screen.getByRole('button', { name: 'Copy command' }))
    await waitFor(() => expect(screen.getByRole('status').textContent).toMatch(/Copy failed/))
  })
})

describe('InstallTabs', () => {
  it('shows the four README install sources and switches the command block', () => {
    render(<InstallTabs spec={multiRootSpec} t={dict.multiRoot.install.tabs} copy={copy} />)
    expect(screen.getByRole('tabpanel', { name: 'npm' }).textContent).toContain(
      '--profile web add @dsh-electron/dsh-plugin-multi-root-workspace',
    )
    fireEvent.click(screen.getByRole('tab', { name: 'tarball' }))
    expect(screen.getByRole('tabpanel', { name: 'tarball' }).textContent).toContain('pnpm pack @dsh-electron/dsh-plugin-multi-root-workspace')
    expect(screen.getByRole('tabpanel', { name: 'tarball' }).textContent).toContain('dsh-electron-dsh-plugin-multi-root-workspace-0.1.6.tgz')
    fireEvent.click(screen.getByRole('tab', { name: 'GitHub' }))
    expect(screen.getByRole('tabpanel', { name: 'GitHub' }).textContent).toContain(
      'github:cherrchen/dsh-plugin-multi-root-workspace#v0.1.6',
    )
    fireEvent.click(screen.getByRole('tab', { name: 'local' }))
    expect(screen.getByRole('tabpanel', { name: 'local' }).textContent).toContain('git clone https://github.com/cherrchen/dsh-plugin-multi-root-workspace.git')
    expect(screen.getByRole('tabpanel', { name: 'local' }).textContent).toContain('pnpm build')
    expect(screen.getByRole('tab', { name: 'local' }).getAttribute('aria-selected')).toBe('true')
  })
})

describe('ThemePreview', () => {
  it('selects a palette and describes it', () => {
    render(<ThemePreview t={dict.themePreview} />)
    expect(screen.getByRole('button', { name: 'Nordic' }).getAttribute('aria-pressed')).toBe('true')
    fireEvent.click(screen.getByRole('button', { name: 'Paper' }))
    expect(screen.getByRole('button', { name: 'Paper' }).getAttribute('aria-pressed')).toBe('true')
    expect(screen.getByText(/Warm paper-like surfaces/)).toBeTruthy()
  })

  it('offers follow-site, light and dark preview appearance', () => {
    render(<ThemePreview t={dict.themePreview} />)
    fireEvent.click(screen.getByLabelText('Dark'))
    expect((screen.getByLabelText('Dark') as HTMLInputElement).checked).toBe(true)
  })
})
