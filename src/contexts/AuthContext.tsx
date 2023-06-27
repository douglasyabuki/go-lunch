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
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextInterface);

export function AuthProvider({ children }: AuthProviderInterface) {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    avatar_url: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);

  //     const isAuthenticated = !!user;

  //     useEffect(() => {
  //       const { 'nextauth.token': token } = parseCookies()

  //       if (token) {
  //         recoverUserInformation().then(response => {
  //           setUser(response.user)
  //         })
  //       }
  //     }, [])

  //     async function signIn({ email, password }: SignInData) {
  //       const { token, user } = await signInRequest({
  //         email,
  //         password,
  //       })

  //       setCookie(undefined, 'nextauth.token', token, {
  //         maxAge: 60 * 60 * 1, // 1 hour
  //       })

  //       api.defaults.headers['Authorization'] = `Bearer ${token}`;

  //       setUser(user)

  //       Router.push('/dashboard');
  //     }

  return (
    <AuthContext.Provider value={{ user }}>
      {/* <AuthContext.Provider value={{ user, isAuthenticated, signIn }}> */}
      {children}
    </AuthContext.Provider>
  );
}
