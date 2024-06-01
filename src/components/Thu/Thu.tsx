import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: "Tab 1", content: "Content for Tab 1" },
    { id: 2, title: "Tab 2", content: "Content for Tab 2" },
    { id: 3, title: "Tab 3", content: "Content for Tab 3" },
  ];

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-800"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map(
          (tab) => activeTab === tab.id && <div key={tab.id}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
