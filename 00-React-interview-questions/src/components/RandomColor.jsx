import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("");

  const randomColorUtil = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHexColor = () => {
    const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexArray[randomColorUtil(hexArray.length)];
    }
    setColor(hexColor);
  };

  const handleRGBColor = () => {
    const r = randomColorUtil(256);
    const g = randomColorUtil(256);
    const b = randomColorUtil(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  const handleRandomColor = () => {
    if (Math.floor(Math.random() * 2)) {
      handleHexColor();
    } else {
      handleRGBColor();
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-center mt-14 text-gray-800 tracking-wide">
        🎨 Random Color Generator
      </h1>
      <div className="grid md:grid-cols-2 h-screen border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg">
        {/* Controls Section */}
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-gray-700 flex items-center justify-center bg-gray-100">
          <div className="flex flex-col gap-10 p-6">
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <button
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
                onClick={handleHexColor}
              >
                HEX Color
              </button>
              <button
                className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all duration-300"
                onClick={handleRGBColor}
              >
                RGB Color
              </button>
              <button
                className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300"
                onClick={handleRandomColor}
              >
                Random Color
              </button>
            </div>
            <h2
              className={`text-center text-3xl font-semibold ${
                color ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {color || "Click a button to generate a color"}
            </h2>
          </div>
        </div>

        {/* Color Display Section */}
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: color || "#f9f9f9",
          }}
        >
          <h2
            className="text-2xl font-bold text-white bg-black bg-opacity-50 px-6 py-2 rounded-lg shadow-md"
            style={{
              display: color ? "block" : "none",
            }}
          >
            {color}
          </h2>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
