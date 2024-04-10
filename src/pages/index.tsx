import Link from "next/link";
import { Inter } from "next/font/google";
import Home_page from "@/components/home-page/Home_page";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Home_page />
    </div>
  );
}
