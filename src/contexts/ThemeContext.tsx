import { useState, useEffect, createContext } from "react";

interface Theme {
  mode: "light" | "dark";
}

interface ThemeContextInterface {
  theme: Theme;
  handleThemeSwitch: () => void;
}

interface ThemeProviderInterface {
  children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextInterface);

export function ThemeProvider({ children }: ThemeProviderInterface) {
  const [theme, setTheme] = useState<Theme>({ mode: "light" });

  // Add/Remove dark class whenever the theme is changed
  useEffect(() => {
    if (theme.mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Switches theme based on current state and click
  const handleThemeSwitch = () => {
    setTheme((prevTheme) => ({
      mode: prevTheme.mode === "dark" ? "light" : "dark",
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
}
