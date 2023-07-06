import React, { useContext } from "react";
import Link from "next/link";

/*  Contexts  */
import { AuthContext } from "@/contexts/AuthContext";


export default function AuthButton() {
  const { setIsSigningUp } = useContext(AuthContext);
  return (
    <div className="justify-around items-center m-auto flex font-semibold rounded-b-xl">
      <p>Already has an account?</p>
      <Link
        onClick={() => setIsSigningUp(false)}
        href={"/authentication"}
        className="hover:text-not-so-white transition-all duration-200"
      >
        Go to Auth
      </Link>
    </div>
  );
}
