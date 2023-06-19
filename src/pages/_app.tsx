import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${ubuntu.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
