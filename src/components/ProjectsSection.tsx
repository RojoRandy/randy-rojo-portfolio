import { useLanguage } from '../hooks/useLanguage'
import { projectMeta } from '../content/shared'
import Chip from './Chip'
import Section from './Section'

export default function ProjectsSection() {
  const { t } = useLanguage()
  const p = t.projects

  return (
    <Section id="projects" eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
      <div className="grid gap-5 md:grid-cols-2">
        {p.items.map((item) => (
          <article
            key={item.id}
            className="flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent/50"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{item.name}</h3>
                <p className="mt-1 text-sm text-muted">{item.tagline}</p>
              </div>
              <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent">
                {item.period}
              </span>
            </div>
            <p className="mt-4 text-xs text-muted">
              <span className="font-medium text-fg">{item.role}</span> · {item.context}
            </p>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {projectMeta[item.id]?.stack.map((s) => <Chip key={s}>{s}</Chip>)}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
