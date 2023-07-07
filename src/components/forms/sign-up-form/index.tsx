import React, { useReducer, useEffect } from "react";

/*
    IMPORTS
*/

/*  Components  */
import FormInput from "../form-input";
import FormSubmitButton from "../form-submit-button";

/*  Form Control    */
import { SignUpFormController } from "@/controllers/sign-up-form-controller";
import AuthButton from "../auth-button";

interface SignUpFormProps {
  animate: boolean;
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
  });

  useEffect(() => {
    dispatch({ type: "validate" });
  }, [state.password, state.user_email, state.confirm_password]);

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
        <FormInput
          value={state.user_email}
          type="email"
          name="user_email"
          label="E-mail"
          onChange={(e) =>
            dispatch({ type: "updateEmail", value: e.target.value })
          }
        ></FormInput>
        <FormInput
          value={state.password}
          type="text"
          name="password"
          label="Password"
          onChange={(e) =>
            dispatch({ type: "updatePassword", value: e.target.value })
          }
        ></FormInput>
        <FormInput
          value={state.confirm_password}
          type="text"
          name="confirm_password"
          label="Confirm Password"
          onChange={(e) =>
            dispatch({ type: "updateConfirmPassword", value: e.target.value })
          }
        ></FormInput>
        <div className="relative h-auto">
          <FormSubmitButton
            disabled={
              state.passwordError === "" &&
              state.emailError === "" &&
              state.confirmPasswordError === ""
                ? false
                : true
            }
          ></FormSubmitButton>
        </div>
      </form>
      <div className="bg-background-div2 absolute w-full bottom-4 py-4 align-middle">
        <AuthButton></AuthButton>
      </div>
    </div>
  );
}
