import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
import { cn } from '../lib/utils'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
}

export default function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id={id} className={cn('py-20 sm:py-24', className)}>
      <div ref={ref} className="reveal mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
