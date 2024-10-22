import React, { memo } from "react";
import "../Weather.css";

function WeatherDisplay({ weather }) {
  return (
    <div className="weather-description">
      <h2>
        {weather?.name ?? ""}, {weather?.sys?.country ?? ""}
      </h2>
      <p>Temperature: {weather?.main?.temp ?? 0}°C</p>
      <p>Humidity: {weather?.main?.humidity ?? 0}%</p>
      <p>Condition: {weather?.weather?.[0]?.description ?? ""}</p>
    </div>
  );
}

export default memo(WeatherDisplay);
