import { useEffect } from "react";

const Popup = ({
  isOpen,
  onClose,
  title = "Popup Title",
  children,
  size = "medium",
}) => {
  // Close the popup when the Esc key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Handle click outside the popup
  const handleOverlayClick = (e) => {
    if (e.target.id === "popup-overlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Size classes for the popup
  const sizeClasses = {
    small: "w-1/4",
    medium: "w-1/2",
    large: "w-3/4",
  };

  return (
    <div
      id="popup-overlay"
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50  z-50"
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 scale-100 opacity-100 ${sizeClasses[size]}`}
      >
        {/* Popup Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Popup Content */}
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
