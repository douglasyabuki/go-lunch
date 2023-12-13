import Logo from "@/components/Logo"
import SignUpForm from "@/components/forms/SignUpForm"

export default function Authentication() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-gocn-grey-primary">
      <div className="relative flex h-[550px] w-[400px] flex-col divide-y-[1px] divide-grey-60 rounded-lg bg-gocn-grey-secondary px-8 py-4 shadow-md shadow-transparent-black">
        <div className="flex h-[80px] justify-center">
          <Logo />
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}
