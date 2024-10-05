import React, { useState, useEffect } from "react";

function WeatherResults({ data, unit, onToggleFavorite, favoriteCities }) {
  const { current, forecast } = data;
  const isFavorite = favoriteCities.includes(current.name);

  // State for managing the current temperature, min, and max temperatures
  const [currentUnit, setCurrentUnit] = useState(unit);
  const [currentTemp, setCurrentTemp] = useState(current.main.temp);
  const [forecastTemps, setForecastTemps] = useState(forecast.map(day => ({
    min: day.main.temp_min,
    max: day.main.temp_max,
  })));

  // Function to convert temperature between Fahrenheit and Celsius
  const convertTemperature = (temp, toUnit) => {
    if (toUnit === "F") {
      return (temp * 9) / 5 + 32; // Celsius to Fahrenheit
    } else {
      return (temp - 32) * 5 / 9; // Fahrenheit to Celsius
    }
  };

  // Handle toggling the temperature unit and converting all temperatures
  const handleUnitToggle = () => {
    const newUnit = currentUnit === "F" ? "C" : "F";
    
    // Convert current temperature
    const newCurrentTemp = convertTemperature(currentTemp, newUnit);
    
    // Convert forecast min and max temperatures
    const newForecastTemps = forecastTemps.map(temp => ({
      min: convertTemperature(temp.min, newUnit),
      max: convertTemperature(temp.max, newUnit),
    }));

    // Update the state with new unit and temperatures
    setCurrentUnit(newUnit);
    setCurrentTemp(newCurrentTemp);
    setForecastTemps(newForecastTemps);
  };

  return (
    <>
      {isFavorite && <p className="col">(Favorite City)</p>}
      <div className="row current-location">
        <div className="col current-city" id="current-city">
          <div className="search-city">
            <span className="city">
              {current.name}, {current.sys.country}
            </span>
            <span className="current-weather">
              <img
                src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                alt="weather condition"
                width="50px"
              />
            </span>
          </div>
          {/* Temperature display with clickable unit toggle */}
          <span id="unit-toggle" onClick={handleUnitToggle} data-toggle="tooltip" data-placement="right" title="Convert to F/C" style={{ cursor: "pointer" }}>
          <span className="temp"> {currentTemp.toFixed(1)} </span>
          <span className="units">
            
              {currentUnit === "F" ? "°F" : "°C"}
            </span>
          </span>
        </div>

        <div className="col-4 current-location-details">
          <div className="col-12">
            Description:{" "}
            <span className="description" id="description">
              {current.weather[0].description}
            </span>
          </div>
          <div className="col-12">
            Humidity: <span className="humidity">{current.main.humidity}%</span>
          </div>
          <div className="col-12">
            Cloudiness: <span className="cloudiness">{current.clouds.all}%</span>
          </div>
          <div className="col-12">
            Wind: <span className="wind-speed">{current.wind.speed} m/sec</span>
          </div>
        </div>
      </div>

      <center>
        <button
          className="save-favorite-btn"
          onClick={() => onToggleFavorite(current.name)}
        >
          {isFavorite ? "Remove from Favorite" : "Save as Favorite"}
        </button>
      </center>

      <div className="container text-center five-days-forecast">
        <div className="row">
          {forecast.map((day, index) => (
            <div key={index} className="col">
              <div className="row">
                <div className="col-12">
                  {new Date(day.dt_txt).toLocaleDateString()}
                </div>
                <div className="col-12 weather-icon">
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt="condition"
                    width="50px"
                  />
                </div>
                <div className="col-12">
                  <span className="max-temp">
                    {forecastTemps[index].max.toFixed(1)}
                    {currentUnit === "F" ? <span> °F </span> : <span> °C </span>}
                    /
                  </span>
                  <span className="min-temp">
                    {forecastTemps[index].min.toFixed(1)}
                    {currentUnit === "F" ? <span> °F </span> : <span> °C </span>}
                  </span>
                  <p>{day.weather[0].description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WeatherResults;
