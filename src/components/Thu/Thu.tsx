import React, { useState } from "react";

const Thu = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId: any) => {
    setActiveButton(activeButton === buttonId ? null : buttonId);
  };

  const data = [
    { id: 1, content: "Nội dung của Button 1" },
    { id: 2, content: "Nội dung của Button 2" },
    { id: 3, content: "Nội dung của Button 3" },
  ];

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <button onClick={() => handleButtonClick(item.id)} className="btn">
            Button {item.id}
          </button>
          {activeButton === item.id && (
            <div className="bg-gray-200 p-4 mt-4">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Thu;
