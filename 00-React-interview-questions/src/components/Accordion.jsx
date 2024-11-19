import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { accordionData } from "../constants";

const Accordion = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="mx-auto mt-12 space-y-6 w-full max-w-4xl bg-gray-800 p-8 rounded-xl shadow-lg">
      {/* Multi-Selection Toggle Button */}
      <div className="flex justify-end mb-4">
        <button
          className={`px-6 py-3 rounded-lg font-semibold text-[16px] transition-all duration-300 ${
            isMultiSelect
              ? "bg-teal-500 text-white hover:bg-teal-600"
              : "bg-gray-600 text-white hover:bg-gray-700"
          }`}
          onClick={() => setIsMultiSelect((prev) => !prev)}
        >
          {isMultiSelect ? "Disable Multi-Selection" : "Enable Multi-Selection"}
        </button>
      </div>

      {/* Accordion Items */}
      {accordionData.map((item) => (
        <div
          key={item.id}
          className="group border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform  hover:shadow-xl"
        >
          {/* Accordion Header */}
          <button
            className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 text-left group-hover:from-cyan-600 group-hover:to-magenta-600 text-white transition-all duration-300 ease-in-out"
            onClick={() => {
              if (isMultiSelect) {
                setSelectedItems((prev) => {
                  if (prev.includes(item.id)) {
                    return prev.filter((id) => id !== item.id);
                  } else {
                    return [...prev, item.id];
                  }
                });
              } else {
                setSelectedItem(selectedItem === item.id ? null : item.id);
              }
            }}
          >
            <span className="text-xl font-semibold group-hover:text-black">
              {item.title}
            </span>
            {selectedItem === item.id || selectedItems.includes(item.id) ? (
              <FiChevronUp className="w-6 h-6 text-white group-hover:text-black " />
            ) : (
              <FiChevronDown className="w-6 h-6 text-white group-hover:text-black" />
            )}
          </button>

          {/* Accordion Content */}
          {isMultiSelect && selectedItems.includes(item.id) && (
            <div className="px-6 py-4 bg-gray-900 text-gray-300 text-lg">
              {item.content}
            </div>
          )}
          {!isMultiSelect && selectedItem === item.id && (
            <div className="px-6 py-4 bg-gray-900 text-gray-300 text-lg">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
