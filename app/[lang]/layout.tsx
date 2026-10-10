import type { Metadata, Viewport } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { isLocale, localeConfig, locales } from '@/lib/i18n/config'
import { getSiteUrl } from '@/lib/site'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  applicationName: 'Rivetdeck',
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

/** Applies the stored or system theme before first paint to avoid a flash. */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const config = localeConfig[lang]
  const dict = getDictionary(lang)

  return (
    <html lang={config.htmlLang} dir={config.dir} className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh antialiased">
        <a href="#main" className="skip-link">
          {dict.common.skipToContent}
        </a>
        {children}
      </body>
    </html>
  )
}
