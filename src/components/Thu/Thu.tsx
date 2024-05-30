import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex border-b">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 1
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 2
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 3
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>
      <div className="p-4">
        {activeTab === 1 && <div>Content for Tab 1</div>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
}

export default Tabs;
