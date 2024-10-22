import React, { memo } from "react";
import "../Weather.css";

function ErrorDisplay({ message }) {
  return <div className="error-message">{message}</div>;
}

export default memo(ErrorDisplay);
