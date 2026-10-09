import { useCallback, useState } from 'react'

const apply = (dark: boolean) => {
  document.documentElement.classList.toggle('dark', dark)
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {
    // storage unavailable
  }
}

export const useTheme = () => {
  // The initial class is set by the inline script in index.html (no flash).
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )

  const toggleTheme = useCallback(() => {
    const next = !document.documentElement.classList.contains('dark')
    apply(next)
    setIsDark(next)
  }, [])

  return { isDark, toggleTheme }
}
