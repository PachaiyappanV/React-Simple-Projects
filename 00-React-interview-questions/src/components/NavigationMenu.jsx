import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { menuItems } from "../constants"; // Importing the menu data

// Component for rendering a single menu item
const MenuItem = ({ item }) => {
  // State to track which menu items are expanded
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  // Toggles the visibility of child menu items for the given label
  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren, // Preserve the existing state
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel], // Toggle the visibility of the current label
    });
  }

  return (
    <li className="mb-2 mt-2">
      {/* Wrapper for the menu item label and toggle button */}
      <div
        className={`flex items-center justify-between p-3 rounded-md shadow-sm transition-colors ${
          displayCurrentChildren[item.label]
            ? "bg-gray-200 text-gray-900"
            : "bg-gray-100 text-gray-800"
        } hover:bg-gray-300`}
      >
        {/* Menu item label */}
        <p className="text-md font-medium flex items-center gap-2">
          {/* Replace SomeIcon with an appropriate icon if needed */}
          {/* <SomeIcon className="text-gray-600" /> */}
          {item.label}
        </p>

        {/* Toggle button to expand/collapse child items */}
        {item.children && item.children.length ? (
          <span
            onClick={() => handleToggleChildren(item.label)}
            className="cursor-pointer text-gray-600 hover:text-gray-800"
            aria-expanded={displayCurrentChildren[item.label]} // Accessibility attribute
            role="button" // Role for accessibility
          >
            {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}{" "}
            {/* Icon changes based on state */}
          </span>
        ) : null}
      </div>

      {/* Render child menu items if they exist and are expanded */}
      {item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList items={item.children} />
      ) : null}
    </li>
  );
};

// Component for rendering a list of menu items
const MenuList = ({ items }) => {
  return (
    <ul
      className={`list-none pl-4 border-l-2 border-gray-300 transition-all duration-300`}
    >
      {/* Map through the list of items and render MenuItem components */}
      {items &&
        items.length > 0 &&
        items.map((item) => <MenuItem key={item.label} item={item} />)}
    </ul>
  );
};

// Main component for the navigation menu
const NavigationMenu = () => {
  return (
    <div className="max-w-2xl mx-auto mt-12 p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
      {/* Header for the navigation menu */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        Navigation Menu
      </h1>

      {/* Render the top-level menu list */}
      <MenuList items={menuItems} />
    </div>
  );
};

export default NavigationMenu;
