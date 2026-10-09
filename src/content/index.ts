import { en, type Content } from './en'
import { es } from './es'

export type Lang = 'en' | 'es'

export const content: Record<Lang, Content> = { en, es }

export const detectLang = (): Lang => {
  try {
    const stored = localStorage.getItem('lang')
    if (stored === 'en' || stored === 'es') return stored
  } catch {
    // storage unavailable
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}
