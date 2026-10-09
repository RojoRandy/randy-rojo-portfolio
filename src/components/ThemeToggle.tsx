import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../hooks/useLanguage'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const { t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.ui.toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition hover:text-fg"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
