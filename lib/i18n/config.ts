/**
 * Locale registry. Adding a language takes three edits: append it to `locales`,
 * describe it in `localeConfig`, and add a dictionary to `./dictionaries`
 * (the `Dictionary` type makes a missing or extra key a compile error).
 */

export const locales = ['en', 'zh'] as const
export type Locale = (typeof locales)[number]

/** Served without a path prefix; also the fallback when nothing else matches. */
export const defaultLocale: Locale = 'en'

/** Cookie that remembers an explicit language choice. */
export const LOCALE_COOKIE = 'NEXT_LOCALE'

export interface LocaleConfig {
  /** Name in the language itself, for the switcher. */
  label: string
  /** Compact label for tight headers. */
  short: string
  /** `lang` attribute of the document. */
  htmlLang: string
  /** `hreflang` value used in alternates. */
  hreflang: string
  /** Open Graph locale. */
  ogLocale: string
  dir: 'ltr' | 'rtl'
}

export const localeConfig: Record<Locale, LocaleConfig> = {
  en: { label: 'English', short: 'EN', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr' },
  zh: { label: '简体中文', short: '中文', htmlLang: 'zh-CN', hreflang: 'zh-CN', ogLocale: 'zh_CN', dir: 'ltr' },
}

export function isLocale(value: string | undefined | null): value is Locale {
  return value !== undefined && value !== null && (locales as readonly string[]).includes(value)
}

/** Public path of `path` (which starts with `/`) in `locale`; the default locale has no prefix. */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}
