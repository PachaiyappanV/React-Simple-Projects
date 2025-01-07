import React, { useState, useEffect } from "react";

const AdvancedCountdownTimer = () => {
  const [inputHours, setInputHours] = useState(0); // User-defined hours
  const [inputMinutes, setInputMinutes] = useState(0); // User-defined minutes
  const [inputSeconds, setInputSeconds] = useState(0); // User-defined seconds
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && (hours > 0 || minutes > 0 || seconds > 0)) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((prev) => prev - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    } else if (hours === 0 && minutes === 0 && seconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer); // Cleanup
  }, [isRunning, hours, minutes, seconds]);

  const handleStart = () => {
    if (inputHours > 0 || inputMinutes > 0 || inputSeconds > 0) {
      setHours(inputHours);
      setMinutes(inputMinutes);
      setSeconds(inputSeconds);
      setIsRunning(true);
    }
  };

  const handlePause = () => setIsRunning(false);

  const handleResume = () => setIsRunning(true);

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleInputChange = (setter) => (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setter(value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Advanced Countdown Timer
      </h1>
      <div className="flex items-center gap-4 mb-6">
        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">Hours</span>
          <input
            type="number"
            value={inputHours}
            onChange={handleInputChange(setInputHours)}
            disabled={isRunning}
            className="w-16 p-2 border border-gray-300 rounded-md text-center"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">Minutes</span>
          <input
            type="number"
            value={inputMinutes}
            onChange={handleInputChange(setInputMinutes)}
            disabled={isRunning}
            className="w-16 p-2 border border-gray-300 rounded-md text-center"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">Seconds</span>
          <input
            type="number"
            value={inputSeconds}
            onChange={handleInputChange(setInputSeconds)}
            disabled={isRunning}
            className="w-16 p-2 border border-gray-300 rounded-md text-center"
          />
        </label>
      </div>
      <h2 className="text-4xl font-mono text-gray-800 mb-6">
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </h2>
      <div className="flex gap-4">
        {!isRunning && hours === 0 && minutes === 0 && seconds === 0 && (
          <button
            onClick={handleStart}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600"
          >
            Start
          </button>
        )}
        {isRunning && (
          <button
            onClick={handlePause}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow hover:bg-yellow-600"
          >
            Pause
          </button>
        )}
        {!isRunning && (hours > 0 || minutes > 0 || seconds > 0) && (
          <button
            onClick={handleResume}
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600"
          >
            Resume
          </button>
        )}
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AdvancedCountdownTimer;
