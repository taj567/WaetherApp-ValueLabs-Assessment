import { createContext, memo, useContext, useState } from "react";
import { validationStrings } from "../global/constants";
import { REACT_APP_WEATHER_API_KEY, errorCodes } from "../server";

const weatherContext = createContext();

const WeatherContext = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");

  const fetchWeather = async (city) => {
    if (!city) {
      alert(validationStrings.enterValidCityName);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      const json = await response.json();
      if (json.cod === errorCodes[404]) {
        setError(json?.message ?? "");
        setWeatherData(undefined);
        setLoading(false);
        return;
      }
      setWeatherData(json);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(validationStrings.apiFailed);
    }
  };

  return (
    <weatherContext.Provider
      value={{
        weatherData,
        loading,
        error,
        fetchWeather,
        city,
        setCity,
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default memo(WeatherContext);

export function useWeatherContext() {
  const context = useContext(weatherContext);
  if (!context) {
    throw new Error(validationStrings.failedToUseContext);
  }
  return context;
}
