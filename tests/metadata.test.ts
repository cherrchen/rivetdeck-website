import { describe, expect, it } from 'vitest'
import { metadata as home } from '@/app/page'
import { metadata as multiRoot } from '@/app/plugins/multi-root-workspace/page'
import robots from '@/app/robots'
import sitemap from '@/app/sitemap'

describe('page metadata', () => {
  it('gives each page its own title, description and canonical path', () => {
    expect(home.title).not.toEqual(multiRoot.title)
    expect(home.description).not.toEqual(multiRoot.description)
    expect(home.alternates?.canonical).toBe('/')
    expect(multiRoot.alternates?.canonical).toBe('/plugins/multi-root-workspace')
  })

  it('does not present the plugin page as part of Rivetdeck', () => {
    expect(String(multiRoot.title)).not.toMatch(/rivetdeck/i)
    expect(String(multiRoot.description)).not.toMatch(/rivetdeck/i)
  })

  it('declares Open Graph and Twitter cards on both pages', () => {
    for (const m of [home, multiRoot]) {
      expect(m.openGraph?.title).toBe(m.title)
      expect(m.twitter).toMatchObject({ card: 'summary_large_image' })
    }
  })

  it('lists both routes in the sitemap and links it from robots', () => {
    const urls = sitemap().map((e) => new URL(e.url).pathname)
    expect(urls).toEqual(['/', '/plugins/multi-root-workspace'])
    expect(String(robots().sitemap)).toMatch(/\/sitemap\.xml$/)
  })
})
