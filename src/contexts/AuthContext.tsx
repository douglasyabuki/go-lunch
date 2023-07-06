import Authentication from "@/pages/authentication";
import SignUp from "@/pages/sign-up";
import React, { SetStateAction, createContext, useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  avatar_url: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextInterface {
  user: User;
  isAuthenticated: boolean;
  isSigningUp: boolean;
  setIsSigningUp: React.Dispatch<SetStateAction<boolean>>;
  //   signIn: (data: SignInData) => Promise<void>;
}

interface AuthProviderInterface {
  children?: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextInterface);

export function AuthProvider({ children }: AuthProviderInterface) {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    avatar_url: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isSigningUp, setIsSigningUp }}>
      {isAuthenticated ? children : isSigningUp ? <SignUp /> : <Authentication />}
    </AuthContext.Provider>
  );
}
