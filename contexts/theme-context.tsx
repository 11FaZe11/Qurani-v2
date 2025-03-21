"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Theme, getThemeById, themes } from "@/lib/themes"

type ThemeContextType = {
  currentTheme: Theme
  setTheme: (themeId: string) => void
  themes: Theme[]
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: themes[0],
  setTheme: () => {},
  themes: themes,
})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0])

  useEffect(() => {
    // Load theme from localStorage on client side
    const savedThemeId = localStorage.getItem("quran-player-theme")
    if (savedThemeId) {
      setCurrentTheme(getThemeById(savedThemeId))
    }
  }, [])

  const setTheme = (themeId: string) => {
    const theme = getThemeById(themeId)
    setCurrentTheme(theme)
    localStorage.setItem("quran-player-theme", theme.id)
  }

  return <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>{children}</ThemeContext.Provider>
}

