import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { experienceMeta } from '../content/shared'
import Chip from './Chip'
import Section from './Section'

export default function ExperienceSection() {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <Section id="experience" eyebrow={e.eyebrow} title={e.title}>
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
        {e.roles.map((role) => {
          const meta = experienceMeta[role.id]
          return (
            <li key={role.id} className="relative">
              <span
                aria-hidden
                className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[39px]"
              />
              <article className="rounded-xl border border-border bg-surface p-5 transition hover:border-accent/50 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">{role.title}</h3>
                  <span className="font-mono text-xs text-muted">{role.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {role.company} · {role.location}
                </p>
                {role.client && (
                  <p className="mt-1 text-sm">
                    <span className="text-muted">{e.client}: </span>
                    {meta?.clientUrl ? (
                      <a
                        href={meta.clientUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-0.5 text-accent hover:underline"
                      >
                        {role.client} <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      role.client
                    )}
                  </p>
                )}
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {meta?.stack.map((s) => <Chip key={s}>{s}</Chip>)}
                </div>
              </article>
            </li>
          )
        })}
      </ol>

      <h3 className="mt-14 text-sm font-medium uppercase tracking-widest text-muted">{e.earlierTitle}</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {e.earlier.map((r) => (
          <article key={r.company} className="rounded-xl border border-border bg-surface p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="font-semibold">{r.company}</h4>
              <span className="font-mono text-xs text-muted">{r.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {r.title} · {r.location}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{r.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
