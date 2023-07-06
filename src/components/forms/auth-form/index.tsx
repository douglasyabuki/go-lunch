import React, { useReducer, useEffect } from "react";

/*
    IMPORTS
*/

/*  Components  */
import AuthFormInput from "../form-input";
import AuthFormSubmitButton from "../form-submit-button";

/*  Form Control    */
import { AuthFormController } from "@/controllers/auth-form-controller";
import RegisterButton from "../register-button";

interface AuthFormProps {
  animate: boolean;
}

export default function AuthForm({ animate }: AuthFormProps) {
  const [state, dispatch] = useReducer(AuthFormController, {
    user_password: "",
    user_email: "",
    emailError: "",
    passwordError: "",
    isSent: false,
  });

  useEffect(() => {
    dispatch({ type: "validate" });
  }, [state.user_password, state.user_email]);

  const validateLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={`w-96 min-h-[450px] pt-12 flex-col ${
        !animate ? `-translate-x-[5000px]` : `translate-x-0`
      } bg-background-div1 rounded-xl transform-gpu transition-transform duration-300 ease-out shadow-lg shadow-transparent-black`}
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
          value={state.user_password}
          type="text"
          name="password"
          label="Password"
          onChange={(e) =>
            dispatch({ type: "updatePassword", value: e.target.value })
          }
        ></AuthFormInput>
        <div className="relative h-auto mt-12">
          <AuthFormSubmitButton
            disabled={
              state.passwordError === "" &&
              state.emailError === "" 
                ? false
                : true
            }
          ></AuthFormSubmitButton>
        </div>
      </form>
      <div className="bg-background-div2 absolute w-full bottom-4 py-4 align-middle">
      <RegisterButton></RegisterButton>
      </div>
    </div>
  );
}
