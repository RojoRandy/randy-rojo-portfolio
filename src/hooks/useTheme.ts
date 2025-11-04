import { useEffect, useState } from "react";

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(()=>{
    const storedTheme = localStorage.getItem("theme")

    if(storedTheme === "light") {
      setLightMode()
    } else {
      setDarkMode()
    }
  },[])

  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true)
  }

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setIsDarkMode(false)
  }

  const toggleTheme = () => {
    if (isDarkMode) {
      setDarkMode()
    } else {
      setLightMode()
    }
  }

  return {
    isDarkMode,
    toggleTheme,
    setDarkMode,
    setLightMode
  }
}