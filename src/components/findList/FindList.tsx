import React, { useState } from "react";
import FindRelatives from "../FindRelatives/FindRelatives";
import Thurify from "../Thurify/Thurify";
import Cemetery from "../Cemetery/Cemetery";
import { useRouter } from "next/router";
import TmportantEvent from "../ImportantEvent/TmportantEvent";

const FindList = () => {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-5xl ">
      <FindRelatives />
      <Thurify />
      {router.query.id === `664570` && <Cemetery />}
      {(router.query.id === `664574` || !router.query.id) && <TmportantEvent />}
    </div>
  );
};

export default FindList;
