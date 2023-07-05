import React, { useContext } from "react";
import Link from "next/link";

/*  Contexts  */
import { AuthContext } from "@/contexts/AuthContext";


export default function RegisterButton() {
  const { setIsSigningUp } = useContext(AuthContext);
  return (
    <div className="justify-around m-auto flex font-semibold mb-4 w-[220px] xs:h-[50px] xs:w-[250px] md:w-[300px]">
      <p>New here?</p>
      <Link
        onClick={() => setIsSigningUp(true)}
        href={"/sign-up"}
        className="hover:text-not-so-white transition-all duration-200"
      >
        Register
      </Link>
    </div>
  );
}
