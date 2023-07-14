import { useState, useEffect, createContext } from "react"

interface ThemeContextInterface {
  darkMode: boolean
  handleThemeSwitch: () => void
}

interface ThemeProviderInterface {
  children: React.ReactNode
}

export const ThemeContext = createContext({} as ThemeContextInterface)

export function ThemeProvider({ children }: ThemeProviderInterface) {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  // Add/Remove dark class whenever the theme is changed
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Switches theme based on current state and click
  const handleThemeSwitch = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  )
}
