import SlideRight from "@/components/SlideRight/SlideRight";
import Header from "@/components/header/Header";
import SlidebarLfet from "@/components/slidebarLfet/SlidebarLfet";
import { Props } from "next/dist/client/script";
import React from "react";

const Mainlayout = ({ children }: any) => {
  return (
    <>
      <div>
        <Header />
        <SlidebarLfet />
        <main className="mx-auto max-w-5xl pt-2">{children}</main>
        <SlideRight />
      </div>
    </>
  );
};

export default Mainlayout;
