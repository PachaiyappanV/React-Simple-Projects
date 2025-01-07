import React, { useState } from "react";
import axios from "axios";

const Wa = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_KEY;

  const fetchWeather = async () => {
    if (!city) return;
    try {
      setError(null);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setWeather(null);
      setError("City not found or an error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-extrabold text-white mb-8 drop-shadow-lg">
        Weather App
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="w-full md:w-auto px-5 py-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
        />
        <button
          onClick={fetchWeather}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition"
        >
          Get Weather
        </button>
      </div>

      {error && <p className="text-red-500 text-lg font-semibold">{error}</p>}

      {weather && (
        <div className="bg-white p-10 rounded-lg shadow-2xl text-center w-full md:w-96 transform transition hover:scale-105">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-md">
            {weather.name}, {weather.sys.country}
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <p className="text-lg">
              Temperature:{" "}
              <span className="font-bold text-blue-600">
                {weather.main.temp}°C
              </span>
            </p>
            <p className="text-lg">
              Feels Like:{" "}
              <span className="font-bold text-blue-600">
                {weather.main.feels_like}°C
              </span>
            </p>
          </div>
          <p className="text-lg mb-3">
            Weather:{" "}
            <span className="font-bold capitalize text-purple-600">
              {weather.weather[0].description}
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-100 p-4 rounded shadow-sm">
              <p className="text-md font-medium">Humidity</p>
              <p className="text-lg font-bold text-blue-600">
                {weather.main.humidity}%
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded shadow-sm">
              <p className="text-md font-medium">Wind Speed</p>
              <p className="text-lg font-bold text-blue-600">
                {weather.wind.speed} m/s
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded shadow-sm">
              <p className="text-md font-medium">Pressure</p>
              <p className="text-lg font-bold text-blue-600">
                {weather.main.pressure} hPa
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded shadow-sm">
              <p className="text-md font-medium">Visibility</p>
              <p className="text-lg font-bold text-blue-600">
                {weather.visibility / 1000} km
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Updated at: {new Date(weather.dt * 1000).toLocaleTimeString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Wa;
