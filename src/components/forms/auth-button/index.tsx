import React, { useContext } from "react"
import Link from "next/link"

/*  Contexts  */
import { AuthContext } from "@/contexts/AuthContext"

export default function AuthButton() {
  const { setIsSigningUp } = useContext(AuthContext)
  return (
    <div className="m-auto flex items-center justify-around rounded-b-xl font-semibold">
      <p>Already has an account?</p>
      <Link
        onClick={() => setIsSigningUp(false)}
        href={"/authentication"}
        className="transition-all duration-200 hover:text-not-so-white"
      >
        Go to Auth
      </Link>
    </div>
  )
}
