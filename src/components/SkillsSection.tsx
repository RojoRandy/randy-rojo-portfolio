import { useLanguage } from '../hooks/useLanguage'
import { skillGroups } from '../content/shared'
import Chip from './Chip'
import Section from './Section'

export default function SkillsSection() {
  const { t } = useLanguage()
  const s = t.skills

  return (
    <Section id="skills" eyebrow={s.eyebrow} title={s.title}>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.id} className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold">{s.groups[g.id]}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
        <div className="rounded-xl border border-border bg-surface p-5 md:col-span-2">
          <h3 className="text-sm font-semibold">{s.softTitle}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {s.soft.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
