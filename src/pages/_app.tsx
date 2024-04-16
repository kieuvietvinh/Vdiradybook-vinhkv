import { Roboto } from "next/font/google";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "@/styles/add.scss";
import Mainlayout from "@/Layout/mainlayout";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Mainlayout></Mainlayout>
      <Component {...pageProps} />
    </main>
  );
}
