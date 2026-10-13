import { afterEach, describe, expect, it, vi } from 'vitest'
import { generateMetadata } from '@/app/[lang]/page'
import robots from '@/app/robots'
import sitemap from '@/app/sitemap'
import { siteUrl, withBasePath } from '@/lib/site'

afterEach(() => vi.unstubAllEnvs())

describe('GitHub Pages paths', () => {
  it('includes the repository prefix in assets, canonical URLs and crawler routes', async () => {
    vi.stubEnv('GITHUB_PAGES', 'true')
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '/rivetdeck-website')
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://cherrchen.github.io')
    expect(withBasePath('/screenshots/app-theme-nordic-dark.png')).toBe('/rivetdeck-website/screenshots/app-theme-nordic-dark.png')
    const metadata = await generateMetadata({ params: Promise.resolve({ lang: 'zh' }) } as never)
    expect(metadata.openGraph).toMatchObject({ images: ['/rivetdeck-website/social/rivetdeck.png'] })
    expect(metadata.alternates?.canonical).toBe('/rivetdeck-website/zh')
    expect(metadata.alternates?.languages).toEqual({
      'x-default': '/rivetdeck-website/', en: '/rivetdeck-website/', 'zh-CN': '/rivetdeck-website/zh',
    })
    expect(sitemap().map(({ url }) => url)).toEqual([
      'https://cherrchen.github.io/rivetdeck-website/',
      'https://cherrchen.github.io/rivetdeck-website/zh',
      'https://cherrchen.github.io/rivetdeck-website/plugins/git',
      'https://cherrchen.github.io/rivetdeck-website/zh/plugins/git',
      'https://cherrchen.github.io/rivetdeck-website/plugins/theme-studio',
      'https://cherrchen.github.io/rivetdeck-website/zh/plugins/theme-studio',
      'https://cherrchen.github.io/rivetdeck-website/plugins/multi-root-workspace',
      'https://cherrchen.github.io/rivetdeck-website/zh/plugins/multi-root-workspace',
    ])
    expect(robots().sitemap).toBe('https://cherrchen.github.io/rivetdeck-website/sitemap.xml')
  })

  it('supports a custom domain at the root without a repository prefix', () => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '')
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://example.com')
    expect(withBasePath('/screenshots/app-theme-nordic-dark.png')).toBe('/screenshots/app-theme-nordic-dark.png')
    expect(siteUrl('/zh')).toBe('https://example.com/zh')
  })
})
