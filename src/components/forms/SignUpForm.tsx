import { SignUpFormController } from "@/controllers/sign-up-form-controller"
import { useEffect, useReducer } from "react"
import AuthButton from "./AuthButton"
import FormSubmitButton from "./AuthFormSubmitButton"
import FormInput from "./FormInput"

export default function SignUpForm() {
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
    <div className="flex h-[300px] flex-col gap-4 py-8">
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
      <div className="bottom-4 flex w-full border-y-[1px] border-grey-60 py-4 align-middle">
        <AuthButton />
      </div>
    </div>
  )
}
