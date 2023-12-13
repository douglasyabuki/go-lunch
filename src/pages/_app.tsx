import Navbar from "@/components/navbar"
import { AuthProvider } from "@/contexts/AuthContext"
import { ThemeProvider } from "@/contexts/ThemeContext"
import Layout from "@/layout/Layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${ubuntu.variable} font-sans`}>
      <AuthProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </main>
  )
}
