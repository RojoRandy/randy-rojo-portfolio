import { useEffect, useState } from "react";

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(()=>{
    const storedTheme = localStorage.getItem("theme")

    if(storedTheme === "dark") {
      setDarkMode()
    } else {
      setLightMode()
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
      setLightMode()
    } else {
      setDarkMode()
    }
  }

  return {
    isDarkMode,
    toggleTheme
  }
}