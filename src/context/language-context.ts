import { createContext } from 'react'
import type { Content } from '../content/en'
import type { Lang } from '../content'

export interface LanguageContextValue {
  lang: Lang
  t: Content
  toggleLang: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
