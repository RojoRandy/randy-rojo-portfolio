import { Download, Mail, Phone } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useLanguage } from '../hooks/useLanguage'
import { profile } from '../content/shared'
import { useReveal } from '../hooks/useReveal'

const secondary =
  'inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium transition hover:bg-surface-2'

export default function ContactSection() {
  const { lang, t } = useLanguage()
  const c = t.contact
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
          <div aria-hidden className="absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-accent/20 blur-3xl" />
          <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-accent">{c.eyebrow}</p>
          <h2 className="relative mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{c.title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">{c.text}</p>

          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition hover:opacity-90"
            >
              <Mail size={16} /> {c.email}
            </a>
            <a href={`tel:${profile.phone}`} className={secondary}>
              <Phone size={16} /> {profile.phoneDisplay}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={secondary}>
              <FaLinkedinIn size={16} /> {c.linkedin}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={secondary}>
              <FaGithub size={16} /> {c.github}
            </a>
            <a href={profile.cv[lang]} download className={secondary}>
              <Download size={16} /> {c.cv}
            </a>
          </div>
          <p className="relative mt-6 font-mono text-xs text-muted">{profile.email}</p>
        </div>
      </div>
    </section>
  )
}
