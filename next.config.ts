import type { NextConfig } from 'next'

const pages = process.env.GITHUB_PAGES === 'true'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const config: NextConfig = {
  basePath,
  ...(pages ? { output: 'export' as const, trailingSlash: true } : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ['127.0.0.1'],
  images: { formats: ['image/avif', 'image/webp'], unoptimized: pages },
}

export default config
