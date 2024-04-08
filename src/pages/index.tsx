import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Link
        href={{
          pathname: "/",
        }}
      >
        ddddddd
      </Link>
    </div>
  );
}
