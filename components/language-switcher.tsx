'use client'

import { withBasePath } from '@/lib/site'
import { fmt } from '@/lib/i18n/format'
import { LOCALE_COOKIE, localeConfig, localePath, locales, type Locale } from '@/lib/i18n/config'

/**
 * Link to the same page in the other locale. Following it records the choice in
 * a cookie, so the redirect that follows the browser language does not undo it.
 * With more than two locales this becomes a list; the links are plain anchors,
 * so it works without scripting except for remembering the choice.
 */
export function LanguageSwitcher({ locale, path, labelTemplate }: { locale: Locale; path: string; labelTemplate: string }) {
  return (
    <>
      {locales
        .filter((target) => target !== locale)
        .map((target) => (
          <a
            key={target}
            href={withBasePath(localePath(target, path))}
            hrefLang={localeConfig[target].hreflang}
            lang={localeConfig[target].htmlLang}
            aria-label={fmt(labelTemplate, { language: localeConfig[target].label })}
            onClick={() => {
              document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`
            }}
            className="inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-[13px] text-fg-muted transition-colors hover:bg-bg-muted hover:text-fg"
          >
            {localeConfig[target].short}
          </a>
        ))}
    </>
  )
}
