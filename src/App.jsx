import React, { useState, useEffect } from "react";
import WeatherInput from "./assets/components/WeatherInput";
import WeatherResults from "./assets/components/WeatherResults";
import Spinner from "./assets/components/Spinner";
import { fetchWeatherData } from './assets/services/weatherService';
import ProjectSummary from "./assets/components/ProjectSummary";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [favoriteCities, setFavoriteCities] = useState(
    JSON.parse(localStorage.getItem("favoriteCities")) || []
  );
  const [selectedFavoriteCity, setSelectedFavoriteCity] = useState("");
  const [unit, setUnit] = useState("F"); 

  const handleWeatherFetch = (data) => {
    setLoading(true);
    fetchWeatherData(data.city, data.unit)
      .then((response) => {
        setWeatherData(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
        setLoading(false);
      });
  };

  const handleToggleFavorite = (city) => {
    const updatedFavorites = favoriteCities.includes(city)
      ? favoriteCities.filter((favCity) => favCity !== city) // Remove city if already in favorites
      : [...favoriteCities, city]; // Add city if not in favorites

    setFavoriteCities(updatedFavorites);
    localStorage.setItem("favoriteCities", JSON.stringify(updatedFavorites));
  };

  const handleFavoriteCitySelection = (city) => {
    setSelectedFavoriteCity(city);
    handleWeatherFetch({ city, unit }); // Use the current unit
  };

  useEffect(() => {
    if (favoriteCities.length > 0 && !weatherData) {
      handleWeatherFetch({ city: favoriteCities[0], unit });
    }
  }, [favoriteCities, weatherData, unit]); // Add unit to dependencies

  return (
    <>
    <div className="app-container">
      <div className="title">
        <span>
          <span className="span2">Weather</span> Anytime, Anywhere
        </span>
      </div>
      
      {/* Weather Input Section */}
      <div className="weather-input-section">
        <WeatherInput onFetchWeather={(data) => { 
            handleWeatherFetch(data); 
            setUnit(data.unit); // Set the unit when fetching
          }} 
        />
      </div>

      {/* Favorite City Selection Section */}
      {favoriteCities.length > 0 && (
        <div className="favorite-city-selector">
          <select
            value={selectedFavoriteCity}
            onChange={(e) => handleFavoriteCitySelection(e.target.value)}
          >
            <option value="">Select your Favorite City</option>
            {favoriteCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Weather Results Section */}
      {loading ? (
        <Spinner />
      ) : (
        weatherData && (
          <div className="weather-results-section">
            <WeatherResults
              data={weatherData}
              unit={unit} // Pass the unit prop to WeatherResults
              onToggleFavorite={handleToggleFavorite}
              favoriteCities={favoriteCities}
            />
          </div>
        )
      )}
      <div className="project-summary-section">
        <ProjectSummary />
      </div>
    </div>
    
  </>
  );
}

export default App;
