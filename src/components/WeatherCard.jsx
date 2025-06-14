const WeatherCard = ({ weather }) => {
    return (
      <div className="mt-10 text-center bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80 mx-auto">
        <h2 className="text-2xl font-semibold">
          {weather.name}, {weather.sys.country}
        </h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="mx-auto"
        />
        <p className="text-4xl font-bold">{weather.main.temp}°C</p>
        <p className="capitalize">{weather.weather[0].description}</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    );
  };
  
  export default WeatherCard;
  