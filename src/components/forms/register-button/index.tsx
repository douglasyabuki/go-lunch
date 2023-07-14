import React, { useContext } from "react"
import Link from "next/link"

/*  Contexts  */
import { AuthContext } from "@/contexts/AuthContext"

export default function RegisterButton() {
  const { setIsSigningUp } = useContext(AuthContext)
  return (
    <div className="m-auto flex items-center justify-around rounded-b-xl font-semibold">
      <p>New here?</p>
      <Link
        onClick={() => setIsSigningUp(true)}
        href={"/sign-up"}
        className="transition-all duration-200 hover:text-not-so-white"
      >
        Register
      </Link>
    </div>
  )
}
