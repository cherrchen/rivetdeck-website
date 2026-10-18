import type { Metadata } from 'next'
import Link from 'next/link'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '404 — page not found',
  robots: { index: false, follow: false },
}

/**
 * Global 404. The root layout lives under `app/[lang]`, so this page renders its
 * own document and offers both languages since no locale is in scope.
 */
export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">
        <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="font-mono text-sm tracking-[0.2em] text-fg-subtle">404</p>
          <h1 className="text-2xl font-semibold tracking-[-0.02em] text-fg">Page not found · 页面不存在</h1>
          <p className="text-[15px] leading-relaxed text-fg-muted">
            The page you are looking for does not exist or may have moved.
            <br />
            你访问的页面不存在或已移动。
          </p>
          <Link href="/" className="mt-2 rounded-md bg-inverse-bg px-4 py-2 text-sm font-medium text-inverse-fg hover:bg-inverse-hover">
            Rivetdeck home · 返回首页
          </Link>
        </main>
      </body>
    </html>
  )
}
