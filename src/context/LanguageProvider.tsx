import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, detectLang, type Lang } from '../content'
import { LanguageContext } from './language-context'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // storage unavailable
    }
  }, [lang])

  const toggleLang = useCallback(
    () => setLang((current) => (current === 'en' ? 'es' : 'en')),
    [],
  )

  const value = useMemo(
    () => ({ lang, t: content[lang], toggleLang }),
    [lang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
