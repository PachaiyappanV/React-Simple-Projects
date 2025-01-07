import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(Date.now());
  console.log("hello");

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-300 mb-4">
          Digital Clock
        </h1>
        <div>
          <h1 className="text-6xl font-mono tracking-wide text-white">
            {new Date(time).toLocaleTimeString("en-US")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
