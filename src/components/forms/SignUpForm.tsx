import { SignUpFormController } from "@/controllers/sign-up-form-controller"
import { useEffect, useReducer } from "react"
import AuthButton from "./AuthButton"
import FormSubmitButton from "./AuthFormSubmitButton"
import FormInput from "./FormInput"

interface SignUpFormProps {
  animate: boolean
}

export default function SignUpForm({ animate }: SignUpFormProps) {
  const [state, dispatch] = useReducer(SignUpFormController, {
    password: "",
    confirm_password: "",
    user_email: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    isSent: false,
  })

  useEffect(() => {
    dispatch({ type: "validate" })
  }, [state.password, state.user_email, state.confirm_password])

  return (
    <div
      className={`min-h-[450px] w-96 flex-col pt-12 ${
        !animate ? "-translate-x-[5000px]" : "translate-x-0"
      } transform-gpu rounded-xl bg-background-div1 shadow-lg shadow-transparent-black transition-transform duration-300 ease-out`}
    >
      <form onSubmit={e => e.preventDefault()}>
        <FormInput
          value={state.user_email}
          type="email"
          name="user_email"
          label="E-mail"
          onChange={e => dispatch({ type: "updateEmail", value: e.target.value })}
        />

        <FormInput
          value={state.password}
          type="text"
          name="password"
          label="Password"
          onChange={e => dispatch({ type: "updatePassword", value: e.target.value })}
        />

        <FormInput
          value={state.confirm_password}
          type="text"
          name="confirm_password"
          label="Confirm Password"
          onChange={e => dispatch({ type: "updateConfirmPassword", value: e.target.value })}
        />

        <div className="relative h-auto">
          <FormSubmitButton
            disabled={!state.passwordError && !state.emailError && !!state.confirmPasswordError}
          />
        </div>
      </form>
      <div className="absolute bottom-4 w-full bg-background-div2 py-4 align-middle">
        <AuthButton></AuthButton>
      </div>
    </div>
  )
}
