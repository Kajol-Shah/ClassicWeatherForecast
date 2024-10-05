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
            <strong>Project Overview:</strong> This project involves building a responsive
            weather application that allows users to search for weather conditions in any city,
            view current weather details, and see a 5-day forecast. Users can also save favorite
            cities and switch between Fahrenheit (°F) and Celsius (°C) units for temperature.
          </p>
          <p>
            <strong>What Was Done:</strong>
            <ul>
              <li>Integrated OpenWeatherMap API for real-time weather data.</li>
              <li>Added the ability to switch between Fahrenheit and Celsius units.</li>
              <li>Implemented favorite cities functionality using local storage.</li>
              <li>Created a responsive and user-friendly interface using React components.</li>
              <li>Managed state using React hooks such as <code>useState</code> and <code>useEffect</code>.</li>
            </ul>
          </p>
          <p>
            <strong>Why It Was Done:</strong> The application was built to provide a practical tool
            for checking weather forecasts and to improve skills in React, API integration, and
            user experience design.
          </p>
          <p>
            <strong>How It Helped:</strong>
            <ul>
              <li>Improved understanding of React development and state management.</li>
              <li>Hands-on experience with consuming third-party APIs.</li>
              <li>Enhanced problem-solving skills through temperature conversion and UI state management.</li>
            </ul>
          </p>
        </div>
      )}
    </div>
  );
}

export default ProjectSummary;
