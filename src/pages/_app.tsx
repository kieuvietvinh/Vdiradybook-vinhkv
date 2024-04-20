import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "@/styles/add.scss";
import Mainlayout from "@/Layout/mainlayout";
const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Mainlayout></Mainlayout>
      <Component {...pageProps} />
    </main>
  );
}
