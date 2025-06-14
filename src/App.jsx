import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (res.ok) {
        setWeather(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Failed to fetch weather data.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-3xl text-white font-bold mb-5">Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};
//Test git commit
export default App;
