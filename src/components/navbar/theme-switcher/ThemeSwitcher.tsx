import React, { useContext } from "react"

/*
    IMPORTS
*/

/*  Contexts    */
import { ThemeContext } from "@/contexts/ThemeContext"

/*  Icons   */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

export default function ThemeSwitcher() {
  const { darkMode, handleThemeSwitch } = useContext(ThemeContext)
  let currentContent = darkMode === true ? "Dark mode" : "Light mode"
  let currentIcon = darkMode === true ? faMoon : faSun

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
