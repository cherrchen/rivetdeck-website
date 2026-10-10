// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { InstallTabs } from '@/components/multi-root/install-tabs'
import { ThemePreview } from '@/components/home/theme-preview'
import { CopyButton } from '@/components/ui/copy-button'
import { getDictionary } from '@/lib/i18n/dictionaries'

const dict = getDictionary('en')
const copy = dict.common.copy

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
  it('switches the profile used by the install command', () => {
    render(<InstallTabs t={dict.multiRoot.install.tabs} copy={copy} />)
    const web = screen.getByRole('tabpanel', { name: 'Web profile' })
    expect(web.textContent).toContain('--profile web add @dsh-electron/dsh-plugin-multi-root-workspace')
    fireEvent.click(screen.getByRole('tab', { name: 'Desktop profile' }))
    const desktop = screen.getByRole('tabpanel', { name: 'Desktop profile' })
    expect(desktop.textContent).toContain('--profile desktop add @dsh-electron/dsh-plugin-multi-root-workspace')
    expect(screen.getByRole('tab', { name: 'Desktop profile' }).getAttribute('aria-selected')).toBe('true')
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
