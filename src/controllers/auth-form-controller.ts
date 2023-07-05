export interface AuthFormState {
  user_password: string;
  user_email: string;
  message: string;
  passwordError: string;
  emailError: string;
  messageError: string;
  isSent: boolean;
}

export interface AuthFormAction {
  type:
  | "updatePassword"
  | "updateEmail"
  | "updateMessage"
  | "validate"
  | "updateIsSent";
  value?: string;
}

// const email = 'usuario@gocn.com.br';
// const regex = /^[a-zA-Z0-9._%+-]+@gocn\.com\.br$/;
// const isValid = regex.test(email);

export const AuthFormController = (
  state: AuthFormState,
  action: AuthFormAction
): AuthFormState => {
  switch (action.type) {
    case "updatePassword":
      return { ...state, user_password: action.value || "", passwordError: "" };
    case "updateEmail":
      return { ...state, user_email: action.value || "", emailError: "" };
    case "updateMessage":
      return { ...state, message: action.value || "", messageError: "" };
    case "validate":
      return {
        ...state,
        passwordError: state.user_password.length === 0 ? "Password is Required" : "",
        emailError: state.user_email.length === 0 ? "Email is Required" : "",
        messageError: state.message.length === 0 ? "Message is Required" : "",
      };
    case "updateIsSent":
      return { ...state, isSent: true };
    default:
      return state;
  }
};
