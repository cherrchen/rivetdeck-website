'use client'

import { useEffect, useId, useRef, useState } from 'react'

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
function OptionRow({ option, t, primary = false, joined = false, newTab }: { option: DownloadOption; t: T; primary?: boolean; joined?: boolean; newTab: string }) {
  const subtle = primary ? 'opacity-70' : 'text-fg-subtle'
  const isStore = option.channel === 'store'
  return (
    <a
      href={option.href}
      {...(isStore ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`flex items-center justify-between gap-3 border px-3.5 py-2.5 text-sm transition-colors ${joined ? 'min-w-0 flex-1 rounded-l-lg' : 'rounded-lg'} ${
        primary ? 'border-inverse-bg bg-inverse-bg text-inverse-fg hover:bg-inverse-hover' : 'border-border hover:bg-bg-subtle'
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
    <div className="grid gap-3 md:grid-cols-3">
      {PLATFORM_ORDER.map((id) => (
        <article key={id} className="flex flex-col rounded-xl border border-border bg-surface p-6">
          <h3 className="text-lg font-medium tracking-[-0.02em]">{t.platforms[id].name}</h3>
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
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const control = useRef<HTMLDivElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const dismiss = (event: PointerEvent) => {
      if (!control.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', dismiss)
    return () => document.removeEventListener('pointerdown', dismiss)
  }, [open])

  return (
    <div className="max-w-xl">
      <div
        ref={control}
        className="relative"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            setOpen(false)
            toggle.current?.focus()
          }
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
        }}
      >
        <div className="flex">
          <OptionRow option={choice.primary} t={t} primary joined newTab={newTab} />
          <button
            ref={toggle}
            type="button"
            aria-label={t.action.other}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen(!open)}
            className="flex w-14 shrink-0 cursor-pointer items-center justify-center rounded-r-lg border border-inverse-bg border-l-inverse-fg/20 bg-inverse-bg text-inverse-fg transition-colors hover:bg-inverse-hover"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
        <div
          id={menuId}
          hidden={!open}
          role="region"
          aria-label={t.action.other}
          className="absolute top-full left-0 z-20 mt-2 max-h-96 w-full overflow-y-auto overscroll-contain rounded-xl border border-border bg-surface p-3 shadow-card"
        >
          {[platform, ...PLATFORM_ORDER.filter((id) => id !== platform)].map((id) => (
            <section key={id} className="border-border py-3 first:pt-0 last:pb-0 [&+section]:border-t">
              <h4 className="mb-2 px-1 text-sm font-medium">
                {t.platforms[id].name}
                {id === platform ? <span className="ml-2 font-normal text-fg-subtle">{isStore ? t.store.githubHeading : t.action.other}</span> : null}
              </h4>
              <ul className="space-y-2" onClick={(event) => {
                if ((event.target as HTMLElement).closest('a')) setOpen(false)
              }}>
                {(id === platform ? choice.others : DOWNLOADS[id]).map((option) => (
                  <li key={option.file ?? option.channel}>
                    <OptionRow option={option} t={t} newTab={newTab} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
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
  )
}

/**
 * Download area. Before the browser is inspected (server render, no scripting,
 * phones) it lists every platform. With a recognized desktop system it leads
 * with that system's best option and keeps alternatives in the download dropdown.
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

  return <Recommended platform={env.platform} arch={env.arch} t={t} newTab={newTab} />
}

/** Primary hero actions: a download button for the detected system, otherwise a jump to the download section. */
export function HeroActions({ t, hero, repo, newTab }: { t: T; hero: Dictionary['home']['hero']; repo: string; newTab: string }) {
  const env = useEnvironment()
  const choice = env.platform ? recommend(env.platform, env.arch) : null

  return (
    <>
      <div className="mt-9 flex flex-wrap items-center gap-3">
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
        <p className="mt-4 text-[13px] text-fg-subtle">
          {choice.primary.channel === 'store' ? hero.via.store : hero.via.github} ·{' '}
          <a href="#download" className="text-fg-muted underline underline-offset-4 hover:text-fg">
            {hero.otherVersions}
          </a>
        </p>
      ) : null}
    </>
  )
}
