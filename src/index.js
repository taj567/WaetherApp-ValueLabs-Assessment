import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import WeatherApp from "./WeatherApp";
import WeatherContext from "./context/WeatherContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherContext>
      <WeatherApp />
    </WeatherContext>
  </React.StrictMode>
);

reportWebVitals();
