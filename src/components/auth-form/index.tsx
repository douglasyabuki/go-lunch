import React, { useReducer, useEffect } from "react";

/*
    IMPORTS
*/

/*  Components  */
import AuthFormInput from "./auth-form-input";
import AuthFormSubmitButton from "./auth-form-submit-button";

/*  Interfaces  */
import {
  AuthFormState,
  AuthFormAction,
} from "@/interfaces/FormControlInterface";

interface AuthFormProps {
  animate: boolean;
}

function reducer(state: AuthFormState, action: AuthFormAction): AuthFormState {
  switch (action.type) {
    case "updateName":
      return { ...state, user_name: action.value || "", nameError: "" };
    case "updateEmail":
      return { ...state, user_email: action.value || "", emailError: "" };
    case "updateMessage":
      return { ...state, message: action.value || "", messageError: "" };
    case "validate":
      return {
        ...state,
        nameError: state.user_name.length === 0 ? "Name is Required" : "",
        emailError: state.user_email.length === 0 ? "Email is Required" : "",
        messageError: state.message.length === 0 ? "Message is Required" : "",
      };
    case "updateIsSent":
      return { ...state, isSent: true };
    default:
      return state;
  }
}

export default function AuthForm({ animate }: AuthFormProps) {
  const [state, dispatch] = useReducer(reducer, {
    user_name: "",
    user_email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: "",
    isSent: false,
  });

  useEffect(() => {
    dispatch({ type: 'validate' });
  }, [state.user_name, state.user_email, state.message]);

  const validateLogin = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div
      className={`w-96 h-96 ${
        !animate ? `-translate-x-[5000px]` : `translate-x-0`
      } bg-background-div1 rounded-xl transform-gpu transition-transform duration-300 ease-out p-12 shadow-lg shadow-transparent-black`}
    >
      <form onSubmit={validateLogin} className="">
        <AuthFormInput
          value={state.user_email}
          type="email"
          name="user_email"
          label="E-mail"
          onChange={(e) =>
            dispatch({ type: "updateEmail", value: e.target.value })
          }
        ></AuthFormInput>
        <AuthFormInput
          value={state.user_name}
          type="text"
          name="user_name"
          label="Full name"
          onChange={(e) =>
            dispatch({ type: "updateName", value: e.target.value })
          }
        ></AuthFormInput>
        <div className="relative h-auto">
          <AuthFormSubmitButton
            disabled={
              state.nameError === '' && state.emailError === '' && state.messageError === ''
                ? false
                : true
            }
          ></AuthFormSubmitButton>
        </div>
      </form>
    </div>
  );
}
