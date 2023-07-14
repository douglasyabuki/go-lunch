import Logo from "@/components/Logo"
import SignUpForm from "@/components/forms/SignUpForm"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Authentication() {
  const [animate, setAnimate] = useState(false)

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
          !animate ? "backdrop:blur-none" : "backdrop-blur-[3px]"
        } duration-400 transition-all delay-200 ease-out`}
      >
        <div
          className={`${
            !animate ? "scale-0" : "scale-100"
          } -translate-y-12 transform-gpu transition-all delay-500 duration-300 ease-out`}
        >
          <Logo />
        </div>
        <SignUpForm animate={animate}></SignUpForm>
      </div>
    </div>
  )
}
