import { AuthContext } from "@/contexts/AuthContext"
import Link from "next/link"
import { useContext } from "react"

export default function AuthButton() {
  const { setIsSigningUp } = useContext(AuthContext)

  return (
    <div className="m-auto flex w-full items-center justify-between rounded-b-xl font-semibold">
      <p>Already has an account?</p>
      <Link
        className="transition-all duration-200 hover:text-gocn-green-primary"
        href={"/authentication"}
        onClick={() => setIsSigningUp(false)}
      >
        Go to Auth
      </Link>
    </div>
  )
}
