import { AuthContext } from "@/contexts/AuthContext"
import Link from "next/link"
import { useContext } from "react"

export default function RegisterButton() {
  const { setIsSigningUp } = useContext(AuthContext)
  return (
    <div className="m-auto flex items-center justify-around rounded-b-xl font-semibold">
      <p>New here?</p>

      <Link
        className="transition-all duration-200 hover:text-not-so-white"
        href={"/sign-up"}
        onClick={() => setIsSigningUp(true)}
      >
        Register
      </Link>
    </div>
  )
}
