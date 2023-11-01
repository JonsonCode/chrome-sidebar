import React, { useState } from "react";
import Chatgpt from "./Chatgpt"; // 引入 Chatgpt 组件

const tabs = [
  { id: 1, label: "Tab 1" },
  { id: 2, label: "Tab 2" },
  { id: 3, label: "Tab 3" },
  // Add more tabs if needed
];

const RightTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-5/6 bg-white p-8">
        {/* Content for the active tab */}
        {activeTab === 1 && <Chatgpt />} {/* 使用 Chatgpt 组件 */}
        {activeTab === 2 && <div>Content for Tab 2</div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
        {/* Add more content for additional tabs if needed */}
      </div>
      <div className="w-1/6 bg-gray-200 rounded-l-lg">
        <ul className="p-4">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`mb-2 p-2 cursor-pointer ${
                activeTab === tab.id ? "bg-blue-200 rounded-r-lg" : "hover:bg-blue-100"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightTabs;
