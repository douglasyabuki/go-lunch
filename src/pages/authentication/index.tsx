import { useEffect, useState } from "react";

/*
  IMPORTS
*/

/*  Components  */
import AuthForm from "@/components/forms/auth-form";
import Logo from "@/components/logo";

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
        <div
          className={`${
            !animate ? `scale-0` : `scale-100`
          } -translate-y-12 transform-gpu transition-all delay-500 duration-300 ease-out`}
        >
          <Logo />
        </div>
        <AuthForm animate={animate}></AuthForm>
      </div>
    </div>
  );
}
