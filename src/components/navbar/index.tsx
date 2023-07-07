import React, { useContext } from "react";

/*
  IMPORTS
*/

/*  Components  */
import Logo from "../logo";
import ThemeSwitcher from "./theme-switcher/ThemeSwitcher";

/*  Contexts  */
import { AuthContext } from "@/contexts/AuthContext";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function Navbar() {
  const { isAuthenticated } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

  let currentStyle = darkMode === true ? "bg-gradient-to-b from-background-black to-transparent" :  "bg-background-div1"

  return (
    <>
      {isAuthenticated ? (
        <header className={`${currentStyle} group container items-center fixed top-0 z-50 flex h-11 w-screen min-w-full justify-between  px-8 py-1 text-center text-not-so-white duration-500 hover:bg-background-black sm:px-14 md:h-16 md:px-16 md:py-2 lg:px-20 xl:px-32 shadow-lg shadow-translucid-black backdrop-blur-md`}>
          <Logo></Logo>
          <ThemeSwitcher></ThemeSwitcher>
        </header>
      ) : (
        <></>
      )}
    </>
  );
}
