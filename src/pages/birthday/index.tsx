import Birthday from "@/components/birthday/Birthday";
import React, { memo } from "react";

const BirthdayList = memo(() => {
  return (
    <div>
      <Birthday />
    </div>
  );
});

export default BirthdayList;
