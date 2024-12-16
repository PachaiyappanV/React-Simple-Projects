import { useState } from "react";
import { tabs } from "../constants";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <h1 className="text-4xl font-extrabold mb-8 text-center mt-14 text-gray-900 tracking-wide">
        Tabs
      </h1>
      <div className="max-w-2xl mx-auto p-4">
        {/* Tabs Container */}
        <div
          role="tablist"
          className="flex space-x-4 border-b border-gray-300 mb-4"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id || index}
              role="tab"
              aria-selected={currentTab === index}
              onClick={() => setCurrentTab(index)}
              className={`px-4 py-2 text-sm font-medium ${
                currentTab === index
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          role="tabpanel"
          className="text-gray-700 text-base bg-gray-50 p-4 rounded-lg shadow"
        >
          <p>{tabs[currentTab].content}</p>
        </div>
      </div>
    </>
  );
};

export default Tabs;
