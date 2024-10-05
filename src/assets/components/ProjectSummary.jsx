import React, { useState } from "react";


function ProjectSummary() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="project-summary-container">
      <h2 onClick={toggleAccordion} className="accordion-header">
        Project Summary: Weather Application {isOpen ? "-" : "+"}
      </h2>
      {isOpen && (
        <div className="accordion-content">
          <p>
            <strong>Project Overview:</strong> This project involved building a responsive
            weather application that allows users to search for weather conditions in any city, 
            view current weather details, and see a 5-day forecast. The application also provides the 
            option to save favorite cities and switch between Fahrenheit (°F) and Celsius (°C) units 
            for temperature. Additionally, users can toggle between their favorite cities and get the 
            weather data for each of them.
          </p>
          <p>
            <strong>What Was Done:</strong>
            <ul>
              <li>
                <strong>Weather Data Fetching:</strong> Integrated the OpenWeatherMap API to retrieve 
                real-time weather data for the searched city. Implemented functionality to fetch both 
                current weather data and a 5-day forecast.
              </li>
              <li>
                <strong>Temperature Unit Conversion:</strong> Enabled users to switch between Fahrenheit 
                (°F) and Celsius (°C) when displaying temperatures. Added a toggle mechanism in the UI to 
                update temperature units dynamically.
              </li>
              <li>
                <strong>Favorite Cities Feature:</strong> Developed the ability to mark cities as favorites 
                and save them in local storage. Built a dropdown to select and display weather data for any 
                saved favorite city automatically upon page load.
              </li>
              <li>
                <strong>UI/UX Improvements:</strong> Created an intuitive, user-friendly interface using 
                React components. Included a loading spinner to indicate when data is being fetched. 
                Ensured seamless updates to weather data when switching between favorite cities and temperature units.
              </li>
              <li>
                <strong>State Management:</strong> Managed application state using React hooks (e.g., <code>useState</code>, 
                <code>useEffect</code>) to handle weather data, loading states, favorite cities, and temperature units.
              </li>
            </ul>
          </p>
          <p>
            <strong>Why It Was Done:</strong> 
            <ul>
              <li>
                <strong>Practical Utility:</strong> This project was built to provide an accessible and reliable way 
                for users to check weather forecasts anytime and anywhere, saving time and effort.
              </li>
              <li>
                <strong>Improving React Skills:</strong> It was also an opportunity to sharpen skills in using React 
                for building dynamic, interactive user interfaces and to practice working with APIs and asynchronous data fetching.
              </li>
              <li>
                <strong>Learning Goals:</strong> The main objective was to improve knowledge in state management, API integration, 
                and user experience design in React.
              </li>
            </ul>
          </p>
          <p>
            <strong>How It Helped:</strong>
            <ul>
              <li><strong>Improved Understanding of React:</strong> This project reinforced best practices in React development, 
              including component structuring, prop management, and handling asynchronous operations efficiently.</li>
              <li><strong>Real-World API Integration:</strong> Interfacing with the OpenWeatherMap API provided hands-on 
              experience in consuming third-party APIs, managing data flow, and processing API responses in a user-friendly format.</li>
              <li><strong>Enhanced User Experience:</strong> Allowing users to save favorite cities and switch between temperature 
              units contributed to a more personalized and practical user experience.</li>
              <li><strong>Strengthened Problem-Solving Skills:</strong> Addressing challenges like unit conversion and managing UI 
              state while keeping the application responsive helped improve problem-solving and troubleshooting skills.</li>
            </ul>
          </p>
          <p>
            In summary, this project provided both functional utility and an excellent learning opportunity, deepening my understanding 
            of React and modern front-end development.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProjectSummary;
