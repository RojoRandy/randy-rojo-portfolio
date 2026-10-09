import { useLanguage } from '../hooks/useLanguage'
import Section from './Section'

export default function AboutSection() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <Section id="about" eyebrow={a.eyebrow} title={a.title}>
      <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 leading-relaxed text-muted">
          {a.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="grid grid-cols-2 gap-3">
          {a.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
              <dt className="text-2xl font-semibold tracking-tight text-accent">{s.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
