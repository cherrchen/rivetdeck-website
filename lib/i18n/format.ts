import type { Locale } from './config'
import { localeConfig } from './config'

/** Replaces `{name}` placeholders; an unknown placeholder is left visible so a typo shows up in review. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match))
}

/** Splits `text` into plain strings and `<tag>inner</tag>` segments (no nesting, no attributes). */
export function parseRich(text: string): { tag: string | null; text: string }[] {
  const out: { tag: string | null; text: string }[] = []
  const pattern = /<(\w+)>([\s\S]*?)<\/\1>/g
  let last = 0
  for (const match of text.matchAll(pattern)) {
    if (match.index > last) out.push({ tag: null, text: text.slice(last, match.index) })
    out.push({ tag: match[1] ?? null, text: match[2] ?? '' })
    last = match.index + match[0].length
  }
  if (last < text.length) out.push({ tag: null, text: text.slice(last) })
  return out
}

/** Tags used by a rich string, in order. Locales must use the same set. */
export function richTags(text: string): string[] {
  return parseRich(text).flatMap((part) => (part.tag ? [part.tag] : []))
}

/** Formats an ISO date (`2026-10-09`) for `locale` without shifting it across time zones. */
export function formatDate(iso: string, locale: Locale): string {
  const [year, month, day] = iso.split('-').map(Number)
  const date = new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1, day ?? 1))
  return new Intl.DateTimeFormat(localeConfig[locale].htmlLang, { dateStyle: 'long', timeZone: 'UTC' }).format(date)
}
