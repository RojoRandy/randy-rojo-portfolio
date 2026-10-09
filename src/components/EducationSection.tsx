import { GraduationCap } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import Section from './Section'

export default function EducationSection() {
  const { t } = useLanguage()
  const e = t.education

  return (
    <Section id="education" eyebrow={e.eyebrow} title={e.title}>
      <div className="grid gap-5 md:grid-cols-[2fr_3fr]">
        <div className="space-y-5">
          <article className="rounded-xl border border-border bg-surface p-5">
            <GraduationCap size={20} className="text-accent" />
            <h3 className="mt-3 font-semibold">{e.degree}</h3>
            <p className="mt-1 text-sm text-muted">{e.school}</p>
            <p className="mt-1 font-mono text-xs text-muted">{e.period}</p>
          </article>
          <article className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold">{e.languagesTitle}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {e.languages.map((l) => (
                <li key={l.name} className="flex justify-between gap-4">
                  <span>{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <article className="rounded-xl border border-border bg-surface p-5">
          <h3 className="text-sm font-semibold">{e.coursesTitle}</h3>
          <ul className="mt-3 divide-y divide-border text-sm">
            {e.courses.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-4 py-2.5">
                <span className="text-muted">{c.name}</span>
                <span className="shrink-0 font-mono text-xs text-accent">{c.hours}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}
