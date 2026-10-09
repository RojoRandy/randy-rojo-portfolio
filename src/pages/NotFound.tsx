import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg px-5 text-center text-fg">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">{t.notFound.title}</h1>
      <p className="mt-3 max-w-md text-muted">{t.notFound.text}</p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition hover:opacity-90"
      >
        {t.notFound.back}
      </Link>
    </main>
  )
}
