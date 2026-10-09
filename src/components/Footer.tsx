import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { profile } from '../content/shared'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.fullName}. {t.footer.rights}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition hover:text-fg">
          <ArrowUp size={14} /> {t.footer.top}
        </a>
      </div>
    </footer>
  )
}
