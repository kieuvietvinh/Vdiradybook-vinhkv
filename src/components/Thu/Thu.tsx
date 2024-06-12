import React from "react";

const Equation = () => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-medium mb-4">Phương trình Bậc Hai</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="::marker:text-gray-500 mr-2">.</span>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded flex-1"
            placeholder="Nhập giá trị a"
          />
        </li>
        <li className="flex items-center">
          <span className="::marker:text-gray-500 mr-2">b =</span>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded flex-1"
            placeholder="Nhập giá trị b"
          />
        </li>
        <li className="flex items-center">
          <span className="::marker:text-gray-500 mr-2">c =</span>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded flex-1"
            placeholder="Nhập giá trị c"
          />
        </li>
      </ul>
    </div>
  );
};

export default Equation;
