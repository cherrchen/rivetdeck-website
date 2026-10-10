import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  return [
    { url: new URL('/', base).toString(), changeFrequency: 'weekly', priority: 1 },
    { url: new URL('/plugins/multi-root-workspace', base).toString(), changeFrequency: 'weekly', priority: 0.9 },
  ]
}
