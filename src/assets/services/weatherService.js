import Swal from "sweetalert2";

const API_KEY = "73365466c768cb4a1d292f3514c47081";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherData = async (city, unit) => {
  try {
    const currentWeatherUrl = `${BASE_URL}/weather?q=${city}&units=${unit === "F" ? "imperial" : "metric"}&appid=${API_KEY}`;
    const forecastUrl = `${BASE_URL}/forecast?q=${city}&units=${unit === "F" ? "imperial" : "metric"}&appid=${API_KEY}`;

    const currentWeatherResponse = await fetch(currentWeatherUrl);
    
    // Check if the response status is 404 (city not found)
    if (currentWeatherResponse.status === 404) {
      Swal.fire({
        icon: "error",
        title: "City Not Found",
        text: `The city "${city}" could not be found. Please try again.`,
        confirmButtonText: "Okay",
        customClass: {
          popup: 'popup-alert',
        },
      });
      return null; // Return null if city is not found
    }

    const currentWeatherData = await currentWeatherResponse.json();

    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    const dailyForecast = forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 6);

    return {
      current: currentWeatherData,
      forecast: dailyForecast,
    };
  } catch (error) {
    // Handle other errors like network issues
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong while fetching the weather data. Please try again.",
      confirmButtonText: "Okay",
    });
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
