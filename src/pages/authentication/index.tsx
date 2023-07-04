import React, { useState, useEffect } from "react";

/*
  IMPORTS
*/

/*  Components  */
import Logo from "@/components/logo";
import AuthForm from "@/components/auth-form";

/*  Next Components */
import Image from "next/image";

export default function Authentication() {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen relative group">
      <Image
        src="/background.jpg"
        alt="Picture from Lydie on Unsplash"
        fill={true}
      />
      <div
        className={`z-100 absolute flex flex-col items-center justify-center w-screen min-h-full ${
          !animate ? `backdrop:blur-none` : `backdrop-blur-[3px]`
        } delay-200 transition-all duration-400 ease-out`}
      >
        <Logo />
        <AuthForm animate={animate}></AuthForm>
      </div>
    </div>
  );
}
