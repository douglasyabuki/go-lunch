export interface SignUpFormState {
  password: string
  confirm_password: string
  user_email: string
  passwordError: string
  confirmPasswordError: string
  emailError: string
  isSent: boolean
}

export interface SignUpFormAction {
  type: "updatePassword" | "updateConfirmPassword" | "updateEmail" | "validate" | "updateIsSent"
  value?: string
}

export const SignUpFormController = (
  state: SignUpFormState,
  action: SignUpFormAction,
): SignUpFormState => {
  switch (action.type) {
    case "updatePassword":
      return { ...state, password: action.value || "", passwordError: "" }
    case "updateConfirmPassword":
      return {
        ...state,
        confirm_password: action.value || "",
        confirmPasswordError: "",
      }
    case "updateEmail":
      return { ...state, user_email: action.value || "", emailError: "" }
    case "validate":
      return {
        ...state,
        passwordError: state.password.length === 0 ? "Password is Required" : "",
        confirmPasswordError: state.confirm_password.length === 0 ? "Passwords do not match" : "",
        emailError: state.user_email.length === 0 ? "Email is Required" : "",
      }
    case "updateIsSent":
      return { ...state, isSent: true }
    default:
      return state
  }
}
