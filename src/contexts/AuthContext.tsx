import Authentication from "@/pages/authentication";
import { createContext, useEffect, useState } from "react";

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
  //   isAuthenticated: boolean;
  user: User;
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
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);

  return (
    <AuthContext.Provider value={{ user }}>
      {isAuthenticated ? children : <Authentication/>}
    </AuthContext.Provider>
  );
}
