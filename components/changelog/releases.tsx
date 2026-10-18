import type { ReactNode } from 'react'
import { Code, Rich } from '@/components/ui/rich'
import { compareUrl, releaseUrl, blobUrl, tagOf, type ChangelogKind, type ChangelogRelease, type DocLinks } from '@/lib/changelog'
import type { Locale } from '@/lib/i18n/config'
import { formatDate } from '@/lib/i18n/format'

/** Localized labels the changelog page must supply. */
export interface ChangelogCopy {
  /** Badge on the newest entry. */
  latest: string
  /** Accessible name of the version-range compare link. */
  compare: string
  /** Label of the release link on the oldest entry (there is nothing older to compare with). */
  releaseNotes: string
  /** Keep-a-Changelog section names. */
  kinds: Record<string, string>
}

const kindStyle: Record<ChangelogKind, string> = {
  added: 'text-ok border-ok/40',
  changed: 'text-accent border-accent/40',
  fixed: 'text-warn border-warn/40',
  removed: 'text-bad border-bad/40',
  deprecated: 'text-warn border-warn/40',
  security: 'text-bad border-bad/40',
  upgrade: 'text-bad border-bad/40',
}

/**
 * The version list of a changelog page. Each entry anchors on `#v<version>`;
 * the version links to its GitHub Release, and a compare link points at the
 * diff against the previous version (the oldest entry links to the release).
 */
export function ChangelogReleases({
  releases,
  repo,
  docs = {},
  locale,
  newTab,
  t,
}: {
  releases: readonly ChangelogRelease[]
  repo: string
  docs?: DocLinks
  locale: Locale
  newTab: string
  t: ChangelogCopy
}) {
  return (
    <div>
      {releases.map((release, index) => {
        const previous = releases[index + 1]
        const releaseTag = tagOf(release)
        const link = previous ? compareUrl(repo, tagOf(previous), releaseTag) : releaseUrl(repo, releaseTag)
        const linkLabel = previous ? `${tagOf(previous)}…${releaseTag}` : t.releaseNotes
        const tagRenderers: Record<string, (children: string) => ReactNode> = {
          code: (c) => <Code>{c}</Code>,
          // Bold wraps inner markup in the source ("**fixed `koffi`**"); re-run the same tag set inside.
          b: (c) => (
            <span className="font-medium text-fg">
              <Rich text={c} tags={tagRenderers} />
            </span>
          ),
        }
        for (const [tag, target] of Object.entries(docs)) {
          const path = typeof target === 'string' ? target : target[locale]
          tagRenderers[tag] = (c) => (
            <a className="text-fg underline underline-offset-2 hover:text-accent" href={blobUrl(repo, releaseTag, path)} target="_blank" rel="noopener noreferrer">
              {c}
              <span className="sr-only">{newTab}</span>
            </a>
          )
        }
        return (
          <article key={release.version} id={`v${release.version}`} className="scroll-mt-24 border-t border-border py-10 first:border-t-0 first:pt-2 sm:py-12">
            <div className="grid gap-7 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-16">
              <div className="self-start lg:sticky lg:top-24">
                <h2 className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-lg font-medium tracking-[-0.01em]">
                  <a href={releaseUrl(repo, releaseTag)} target="_blank" rel="noopener noreferrer" className="hover:underline hover:underline-offset-4">
                    {releaseTag}
                    <span className="sr-only">{newTab}</span>
                  </a>
                  {index === 0 ? <span className="rounded-md bg-accent-soft px-1.5 py-0.5 font-sans text-[11px] font-medium text-accent">{t.latest}</span> : null}
                </h2>
                <p className="mt-1.5 text-[13px] text-fg-subtle">
                  <time dateTime={release.date}>{formatDate(release.date, locale)}</time>
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-fg-subtle transition-colors hover:text-fg"
                >
                  {linkLabel}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">
                    {t.compare}
                    {newTab}
                  </span>
                </a>
              </div>
              <div className="min-w-0">
                {release.lead ? (
                  <p className="text-[15px] leading-7 text-fg-muted">
                    <Rich text={release.lead} tags={tagRenderers} />
                  </p>
                ) : null}
                {(release.sections ?? []).map((section, sectionIndex) => {
                  const kind = section.kind
                  const label = section.title ?? (kind ? (t.kinds[kind] ?? kind) : '')
                  const style = kind && kind in kindStyle ? kindStyle[kind as ChangelogKind] : 'text-fg-muted border-border-strong'
                  return (
                    <section key={sectionIndex} className={release.lead || sectionIndex > 0 ? 'mt-7' : ''} aria-label={label}>
                      <h3>
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${style}`}>{label}</span>
                      </h3>
                      <ul className="mt-3.5 space-y-2.5">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-2.5 text-[15px] leading-7 text-fg-muted">
                            <span aria-hidden="true" className="mt-[13px] h-1 w-1 shrink-0 rounded-full bg-fg-subtle/50" />
                            <span className="min-w-0 text-pretty">
                              <Rich text={item} tags={tagRenderers} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )
                })}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
