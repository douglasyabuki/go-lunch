import { ThemeContext } from "@/contexts/ThemeContext"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"

export default function ThemeSwitcher() {
  const { darkMode, handleThemeSwitch } = useContext(ThemeContext)
  const currentContent = darkMode === true ? "Dark mode" : "Light mode"
  const currentIcon = darkMode === true ? faMoon : faSun

  return (
    <div
      className="text-md duration flex h-16 items-center justify-center align-middle text-not-so-white transition-transform hover:scale-105 xs:text-lg md:text-xl"
      role={"button"}
      onClick={handleThemeSwitch}
    >
      <FontAwesomeIcon icon={currentIcon} className={"mr-2"}></FontAwesomeIcon>
      <h2>{currentContent}</h2>
    </div>
  )
}
