import type { Locale } from '../config'
import en, { type Dictionary } from './en'
import zh from './zh'

export type { Dictionary }

const dictionaries: Record<Locale, Dictionary> = { en, zh }

/** Copy for `locale`. Dictionaries are plain objects, so this is safe in server and client code. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
