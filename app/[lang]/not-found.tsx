import Link from 'next/link'
import { lang } from 'next/root-params'
import { Container } from '@/components/ui/container'
import { defaultLocale, isLocale, localePath } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

export default async function NotFound() {
  const current = await lang()
  const locale = isLocale(current) ? current : defaultLocale
  const t = getDictionary(locale).common.notFound
  return (
    <main id="main" className="grid min-h-dvh place-items-center">
      <Container className="py-24 text-center">
        <p className="font-mono text-sm text-fg-subtle">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">{t.title}</h1>
        <p className="mt-3 text-fg-muted">{t.body}</p>
        <Link href={localePath(locale, '/')} className="mt-8 inline-flex h-10 items-center rounded-md bg-inverse-bg px-4 text-sm font-medium text-inverse-fg hover:opacity-90">
          {t.home}
        </Link>
      </Container>
    </main>
  )
}
