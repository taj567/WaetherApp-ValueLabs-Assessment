import React, { memo, useCallback } from "react";
import "../Weather.css";
import { strings } from "../global/constants";

const InputForm = ({ city, setCity, fetchWeather }) => {
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      fetchWeather(city);
    },
    [city, fetchWeather]
  );

  return (
    <form autoComplete="on" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
        list="browserSuggestion"
        className="search-input"
      />
      {/* for showing suggestion */}
      <datalist id="browserSuggestion">
        <option value="Bangalore" />
        <option value="Hyderabad" />
        <option value="London" />
      </datalist>
      <button className="get-weather-submit-button" type="submit">
        {strings.getWeather}
      </button>
    </form>
  );
};

export default memo(InputForm);
