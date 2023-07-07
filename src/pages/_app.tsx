import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Ubuntu } from "next/font/google";

/*  COMPONENTS  */
import Navbar from "@/components/navbar";

/*  CONTEXTS  */
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";


const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${ubuntu.variable} font-sans`}>
      <AuthProvider>
        <ThemeProvider>
          <Navbar></Navbar>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </main>
  );
}
