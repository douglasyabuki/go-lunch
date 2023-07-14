import { useEffect, useState } from "react"

/*
  IMPORTS
*/

/*  Components  */
import SignUpForm from "@/components/forms/sign-up-form"
import Logo from "@/components/logo"

/*  Next Components */
import Image from "next/image"

export default function Authentication() {
  const [animate, setAnimate] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true)
    }, 1000)
  }, [])

  return (
    <div className="group relative min-h-screen">
      <Image src="/background.jpg" alt="Picture from Lydie on Unsplash" fill={true} />
      <div
        className={`z-100 absolute flex min-h-full w-screen flex-col items-center justify-center ${
          !animate ? `backdrop:blur-none` : `backdrop-blur-[3px]`
        } duration-400 transition-all delay-200 ease-out`}
      >
        <div
          className={`${
            !animate ? `scale-0` : `scale-100`
          } -translate-y-12 transform-gpu transition-all delay-500 duration-300 ease-out`}
        >
          <Logo />
        </div>
        <SignUpForm animate={animate}></SignUpForm>
      </div>
    </div>
  )
}
