export interface AuthFormState {
  user_password: string
  user_email: string
  passwordError: string
  emailError: string
  isSent: boolean
}

export interface AuthFormAction {
  type: "updatePassword" | "updateEmail" | "validate" | "updateIsSent"
  value?: string
}

export const AuthFormController = (state: AuthFormState, action: AuthFormAction): AuthFormState => {
  switch (action.type) {
    case "updatePassword":
      return { ...state, user_password: action.value || "", passwordError: "" }
    case "updateEmail":
      return { ...state, user_email: action.value || "", emailError: "" }
    case "validate":
      return {
        ...state,
        passwordError: state.user_password.length === 0 ? "Password is Required" : "",
        emailError: state.user_email.length === 0 ? "Email is Required" : "",
      }
    case "updateIsSent":
      return { ...state, isSent: true }
    default:
      return state
  }
}
