import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useLanguage } from '../hooks/useLanguage'
import { heroStack, profile } from '../content/shared'
import Chip from './Chip'

export default function HeroSection() {
  const { lang, t } = useLanguage()
  const h = t.hero

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div aria-hidden className="hero-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {h.available}
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            <span className="text-gradient">{h.headline}</span>
          </h1>
          <p className="mt-3 font-mono text-sm text-accent">{h.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{h.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition hover:opacity-90"
            >
              {h.ctaProjects} <ArrowRight size={16} />
            </a>
            <a
              href={profile.cv[lang]}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium transition hover:bg-surface-2"
            >
              <Download size={16} /> {h.ctaCv}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-muted transition hover:text-fg"
            >
              {h.ctaContact}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {h.location}
            </span>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-fg">
              <Mail size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-fg">
              <FaLinkedinIn size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-fg">
              <FaGithub size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {heroStack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>

        <div className="mx-auto md:mx-0">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/40 to-transparent blur-2xl" />
            <img
              src="/me.png"
              alt={profile.fullName}
              width={288}
              height={288}
              className="relative h-56 w-56 rounded-3xl border border-border object-cover shadow-xl sm:h-72 sm:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
