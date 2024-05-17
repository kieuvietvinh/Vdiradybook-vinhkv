import React, { useState } from "react";

const Birthday = () => {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2024);

  const handleNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  return (
    <div>
      <button onClick={handlePreviousMonth}>Previous Month</button>
      <span>{`Tháng ${month}, ${year}`}</span>
      <button onClick={handleNextMonth}>Next Month</button>
    </div>
  );
};

export default Birthday;
