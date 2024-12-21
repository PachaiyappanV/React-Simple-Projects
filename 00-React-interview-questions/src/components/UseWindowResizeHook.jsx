import { useEffect, useState } from "react";

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innnerHeight,
  });

  useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  return windowSize;
};

const UseWindowResizeHook = () => {
  const { width, height } = useWindowResize();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Window Dimensions</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <p className="text-lg font-medium">
          <span className="text-blue-600">Width:</span> {width}px
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-600">Height:</span> {height}px
        </p>
      </div>
    </div>
  );
};

export default UseWindowResizeHook;
