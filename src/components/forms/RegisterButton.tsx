import { AuthContext } from "@/contexts/AuthContext"
import Link from "next/link"
import { useContext } from "react"

export default function RegisterButton() {
  const { setIsSigningUp } = useContext(AuthContext)
  return (
    <div className="m-auto flex w-full items-center justify-between rounded-b-xl px-12 font-semibold">
      <p>New here?</p>

      <Link
        className="transition-all duration-200 hover:text-gocn-green-primary"
        href={"/sign-up"}
        onClick={() => setIsSigningUp(true)}
      >
        Register
      </Link>
    </div>
  )
}
