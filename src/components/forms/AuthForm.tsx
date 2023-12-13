import { AuthContext } from "@/contexts/AuthContext"
import { AuthFormController } from "@/controllers/auth-form-controller"
import React, { useContext, useEffect, useReducer } from "react"
import AuthFormSubmitButton from "./AuthFormSubmitButton"
import AuthFormInput from "./FormInput"
import RegisterButton from "./RegisterButton"

export default function AuthForm() {
  const [state, dispatch] = useReducer(AuthFormController, {
    user_password: "",
    user_email: "",
    emailError: "",
    passwordError: "",
    isSent: false,
  })
  const { signIn } = useContext(AuthContext)

  useEffect(() => {
    dispatch({ type: "validate" })
  }, [state.user_password, state.user_email])

  const validateLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signIn()
  }

  return (
    <div className="flex h-[300px] flex-col gap-4 py-8">
      <form onSubmit={validateLogin} className="">
        <AuthFormInput
          value={state.user_email}
          type="email"
          name="user_email"
          label="E-mail"
          onChange={e => dispatch({ type: "updateEmail", value: e.target.value })}
        />

        <AuthFormInput
          value={state.user_password}
          type="password"
          name="password"
          label="Password"
          onChange={e => dispatch({ type: "updatePassword", value: e.target.value })}
        />

        <div className="relative mt-12 h-auto">
          <AuthFormSubmitButton disabled={!!state.passwordError || !!state.emailError} />
        </div>
      </form>
      <div className="bottom-4 flex w-full border-y-[1px] border-grey-60 py-4 align-middle">
        <RegisterButton />
      </div>
    </div>
  )
}
