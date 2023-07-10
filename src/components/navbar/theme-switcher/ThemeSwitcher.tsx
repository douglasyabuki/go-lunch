import React, { useContext } from "react";

/*
    IMPORTS
*/

/*  Contexts    */
import { ThemeContext } from "@/contexts/ThemeContext";

/*  Icons   */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeSwitcher() {
  const { darkMode, handleThemeSwitch } = useContext(ThemeContext);
  let currentContent = darkMode === true ? "Dark mode" : "Light mode";
  let currentIcon = darkMode === true ? faMoon : faSun;

  return (
    <div
      className="flex text-md xs:text-lg md:text-xl text-not-so-white align-middle h-16 items-center justify-center hover:scale-105 transition-transform duration"
      role={"button"}
      onClick={handleThemeSwitch}
    >
      <FontAwesomeIcon icon={currentIcon} className={"mr-2"}></FontAwesomeIcon>
      <h2>{currentContent}</h2>
    </div>
  );
}
