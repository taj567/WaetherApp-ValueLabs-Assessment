import InputForm from "./components/Form";
import ErrorDisplay from "./components/Error";
import WeatherDisplay from "./components/WeatherDisplay";
import "./Weather.css";
import { useWeatherContext } from "./context/WeatherContext";
import { strings } from "./global/constants";
import { useMemo } from "react";

function WeatherApp() {
  const { weatherData, loading, error, fetchWeather, city, setCity } =
    useWeatherContext();

  const imageURL = useMemo(() => {
    const temparature = weatherData?.main?.temp; // Get temperature
    if (temparature < 10) {
      return require("./Assets/cold.jpg");
    } else if (temparature >= 10 && temparature < 20) {
      return require("./Assets/cool.webp");
    } else if (temparature >= 20 && temparature < 30) {
      return require("./Assets/warm.webp");
    } else if (temparature >= 30) {
      return require("./Assets/hot.jpg");
    } else {
      return require("./Assets/weather.webp");
    }
  }, [weatherData]);

  return (
    <div
      className="app-container"
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <img
        style={{ width: "100%", height: "100%", objectFit: "fit" }}
        src={imageURL}
        alt="Weather condition"
      />
      <div className="weather-container">
        <h1>{strings.weatherApp}</h1>
        <InputForm {...{ setCity, city, fetchWeather }} />
        {loading ? <p className="weather-loader">{strings.loading}</p> : null}
        {error ? <ErrorDisplay message={error} /> : null}
        {weatherData && !loading ? (
          <WeatherDisplay weather={weatherData} />
        ) : null}
      </div>
    </div>
  );
}


export default WeatherApp;
