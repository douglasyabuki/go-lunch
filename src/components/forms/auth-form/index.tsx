import { AuthContext } from "@/contexts/AuthContext"
import { AuthFormController } from "@/controllers/auth-form-controller"
import React, { useContext, useEffect, useReducer } from "react"
import AuthFormInput from "../form-input"
import AuthFormSubmitButton from "../form-submit-button"
import RegisterButton from "../register-button"

interface AuthFormProps {
  animate: boolean
}

export default function AuthForm({ animate }: AuthFormProps) {
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
    <div
      className={`min-h-[450px] w-96 flex-col pt-12 ${
        !animate ? `-translate-x-[5000px]` : `translate-x-0`
      } transform-gpu rounded-xl bg-background-div1 shadow-lg shadow-transparent-black transition-transform duration-300 ease-out`}
    >
      <form onSubmit={validateLogin} className="">
        <AuthFormInput
          value={state.user_email}
          type="email"
          name="user_email"
          label="E-mail"
          onChange={e => dispatch({ type: "updateEmail", value: e.target.value })}
        ></AuthFormInput>
        <AuthFormInput
          value={state.user_password}
          type="password"
          name="password"
          label="Password"
          onChange={e => dispatch({ type: "updatePassword", value: e.target.value })}
        ></AuthFormInput>
        <div className="relative mt-12 h-auto">
          <AuthFormSubmitButton
            disabled={state.passwordError === "" && state.emailError === "" ? false : true}
          ></AuthFormSubmitButton>
        </div>
      </form>
      <div className="absolute bottom-4 w-full bg-background-div2 py-4 align-middle">
        <RegisterButton></RegisterButton>
      </div>
    </div>
  )
}
