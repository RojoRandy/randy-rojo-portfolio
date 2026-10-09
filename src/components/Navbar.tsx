import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { cn } from '../lib/utils'
import ThemeToggle from './ThemeToggle'

const links = ['about', 'experience', 'projects', 'skills', 'education', 'contact'] as const

export default function Navbar() {
  const { lang, t, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled || open
          ? 'border-b border-border bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        {t.ui.skip}
      </a>
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-accent">&lt;</span>Randy Rojo<span className="text-accent"> /&gt;</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="text-sm text-muted transition hover:text-fg">
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.ui.toggleLanguage}
            className="inline-flex h-9 items-center rounded-lg border border-border bg-surface px-3 font-mono text-xs text-muted transition hover:text-fg"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-border bg-bg px-5 py-3 md:hidden">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-muted hover:text-fg"
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
