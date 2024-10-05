import React, { useState } from "react";

function WeatherInput({ onFetchWeather }) {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("F");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchWeather({ city, unit }); // Pass city and unit to the parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="form-control"
          placeholder="Enter City"
        />
      </div>
      <div className="radiobtn form-group">
        <label>Temperature Unit:</label>
        <div>
          <input
            className="form-check-input"
            type="radio"
            value="F"
            checked={unit === "F"}
            onChange={() => setUnit("F")}
          />
          F
          <input
            className="form-check-input"
            type="radio"
            value="C"
            checked={unit === "C"}
            onChange={() => setUnit("C")}
          />
          C
        </div>
      </div>
      <button type="submit" className="btnenter">
        Search
      </button>
    </form>
  );
}

export default WeatherInput;
