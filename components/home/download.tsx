'use client'

import { ButtonLink } from '@/components/ui/button'
import { GitHubIcon } from '@/components/ui/icons'
import { Rich } from '@/components/ui/rich'
import type { Dictionary } from '@/lib/i18n/dictionaries'
import { fmt } from '@/lib/i18n/format'
import { DOWNLOADS, formatSize, PLATFORM_ORDER, RELEASE, recommend, type DownloadOption, type PlatformId } from '@/lib/releases'
import { useEnvironment } from './use-environment'

type T = Dictionary['home']['download']

/** "Apple Silicon · DMG", "x64 · installer", or the Store listing's name. */
function optionLabel(option: DownloadOption, t: T): string {
  if (option.channel === 'store') return t.store.kind
  const arch =
    option.platform === 'macos'
      ? option.arch === 'arm64'
        ? t.arch.appleSilicon
        : t.arch.intel
      : option.arch === 'arm64'
        ? t.arch.arm64
        : t.arch.x64
  return `${arch} · ${t.formats[option.format as keyof T['formats']]}`
}

function fileName(option: DownloadOption): string {
  return option.file ? option.file.replace(`Rivetdeck-${RELEASE.version}-`, '') : 'apps.microsoft.com'
}

/** One download as a full-width row; the first row of a group is drawn as the primary action. */
function OptionRow({ option, t, primary = false, newTab }: { option: DownloadOption; t: T; primary?: boolean; newTab: string }) {
  const subtle = primary ? 'opacity-70' : 'text-fg-subtle'
  const isStore = option.channel === 'store'
  return (
    <a
      href={option.href}
      {...(isStore ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`flex items-center justify-between gap-3 rounded-md border px-3 py-2.5 text-sm transition-colors ${
        primary ? 'border-fg bg-inverse-bg text-inverse-fg hover:opacity-90' : 'border-border hover:bg-bg-muted'
      }`}
    >
      <span>
        <span className="block font-medium">{isStore ? t.store.action : optionLabel(option, t)}</span>
        <span className={`block font-mono text-xs ${subtle}`}>{isStore ? t.store.note : fileName(option)}</span>
      </span>
      {option.bytes ? <span className={`shrink-0 font-mono text-xs ${subtle}`}>{formatSize(option.bytes)}</span> : null}
      {isStore ? <span className="sr-only">{newTab}</span> : null}
    </a>
  )
}

/** All platforms side by side, each with its own options. Used when the system is unknown and inside "other versions". */
function AllPlatforms({ t, newTab }: { t: T; newTab: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {PLATFORM_ORDER.map((id) => (
        <article key={id} className="flex flex-col rounded-xl border border-border bg-bg p-5">
          <h3 className="text-lg font-semibold tracking-[-0.02em]">{t.platforms[id].name}</h3>
          <p className="mt-1 text-sm text-fg-subtle">{t.platforms[id].note}</p>
          <ul className="mt-5 flex flex-1 flex-col gap-2">
            {DOWNLOADS[id].map((option, i) => (
              <li key={option.file ?? option.channel}>
                <OptionRow option={option} t={t} primary={i === 0} newTab={newTab} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

function Recommended({ platform, arch, t, newTab }: { platform: PlatformId; arch: ReturnType<typeof useEnvironment>['arch']; t: T; newTab: string }) {
  const choice = recommend(platform, arch)
  const isStore = choice.primary.channel === 'store'
  const intelNote = platform === 'macos' ? (arch === 'x64' ? t.macHintIntel : arch === null ? t.macHint : null) : null
  const intel = DOWNLOADS.macos.find((o) => o.format === 'dmg' && o.arch === 'x64')

  return (
    <div className="rounded-xl border border-border-strong bg-bg p-5 sm:p-8">
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-accent">
        <span>{t.recommended}</span>
        <span aria-hidden="true">·</span>
        <span className="text-fg-muted">{fmt(t.detected, { platform: t.platforms[platform].name })}</span>
      </div>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">Rivetdeck · {t.platforms[platform].name}</h3>
      <p className="mt-1 text-sm text-fg-subtle">{t.platforms[platform].note}</p>

      <div className="mt-6 max-w-xl">
        <OptionRow option={choice.primary} t={t} primary newTab={newTab} />
        {intelNote ? (
          <p className="mt-3 text-sm leading-6 text-fg-subtle">
            {arch === null && intel ? (
              <Rich text={intelNote} tags={{ a: (c) => <a className="text-fg underline underline-offset-2" href={intel.href}>{c}</a> }} />
            ) : (
              intelNote
            )}
          </p>
        ) : null}
      </div>

      {choice.others.length > 0 ? (
        <div className="mt-7 max-w-xl">
          <h4 className="text-sm font-medium">{isStore ? t.store.githubHeading : t.action.other}</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {choice.others.map((option) => (
              <li key={option.file ?? option.channel}>
                <OptionRow option={option} t={t} newTab={newTab} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

/**
 * Download area. Before the browser is inspected (server render, no scripting,
 * phones) it lists every platform. With a recognized desktop system it leads
 * with that system's best option and keeps everything else under "other versions".
 */
export function DownloadPanel({ t, newTab }: { t: T; newTab: string }) {
  const env = useEnvironment()

  if (!env.platform) {
    return (
      <>
        {env.checked ? <p className="mb-4 text-sm text-fg-subtle">{t.mobileNotice}</p> : null}
        <AllPlatforms t={t} newTab={newTab} />
      </>
    )
  }

  return (
    <>
      <Recommended platform={env.platform} arch={env.arch} t={t} newTab={newTab} />
      <details className="group mt-6 rounded-xl border border-border bg-bg">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
          <span>
            {t.otherVersions}
            <span className="ml-2 font-normal text-fg-subtle">{t.otherVersionsLead}</span>
          </span>
          <span aria-hidden="true" className="text-fg-subtle transition-transform group-open:rotate-90">
            ›
          </span>
        </summary>
        <div className="border-t border-border p-5">
          <AllPlatforms t={t} newTab={newTab} />
        </div>
      </details>
    </>
  )
}

/** Primary hero actions: a download button for the detected system, otherwise a jump to the download section. */
export function HeroActions({ t, hero, repo, newTab }: { t: T; hero: Dictionary['home']['hero']; repo: string; newTab: string }) {
  const env = useEnvironment()
  const choice = env.platform ? recommend(env.platform, env.arch) : null

  return (
    <>
      <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-3">
        {choice && env.platform ? (
          <ButtonLink href={choice.primary.href} external={choice.primary.channel === 'store'} newTab={newTab}>
            {fmt(hero.downloadFor, { platform: t.platforms[env.platform].name })}
          </ButtonLink>
        ) : (
          <ButtonLink href="#download" newTab={newTab}>
            {hero.downloadGeneric}
          </ButtonLink>
        )}
        <ButtonLink href={repo} variant="secondary" newTab={newTab}>
          <GitHubIcon /> {hero.github}
        </ButtonLink>
      </div>
      {choice ? (
        <p className="mt-4 text-sm text-fg-subtle">
          {choice.primary.channel === 'store' ? hero.via.store : hero.via.github} ·{' '}
          <a href="#download" className="text-fg underline underline-offset-2">
            {hero.otherVersions}
          </a>
        </p>
      ) : null}
    </>
  )
}
