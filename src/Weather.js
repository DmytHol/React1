/**
 * Weather component that displays current weather information based on location search.
 *
 * @component
 * @returns {JSX.Element} Weather component
 */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'S600H6T2h9jhhACCP1ydC782TudShGiG';
  const [locationKey, setLocationKey] = useState('27601');
  const [query, setQuery] = useState('Raleigh, NC');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (locationKey) {
      const fetchWeatherData = async () => {
        try {
          const response = await axios.get(
            `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`
          );
          setWeatherData(response.data[0]);
        } catch (error) {
          console.log('Error fetching weather data:', error);
        }
      };

      fetchWeatherData();
    }
  }, [locationKey]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${query}`
      );
      if (response.data.length > 0) {
        setLocationKey(response.data[0].Key);
        setCity(response.data[0].LocalizedName);
      }
    } catch (error) {
      console.log('Error searching location:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day}, ${month} ${date}, ${year}`
  }

  return (
    <div className="weather-container">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="weather-button" onClick={handleSearch}>Search</button>
      </div>
      {weatherData ? (
        <div className="weather-content">
          <h2 className="weather-heading">Current Weather in {city}</h2>
          <p className="date">{dateBuilder(new Date())}</p>
          <p className="weather-temperature">Temperature: {Math.round((weatherData.Temperature.Metric.Value * 9) / 5) + 32}&deg;F</p>
          <p className="weather-info">Weather: {weatherData.WeatherText}</p>
          <p className="weather-info">Humidity: {weatherData.RelativeHumidity}%</p>
          <p className="weather-info">Wind Speed: {weatherData.Wind.Speed.Metric.Value} km/h</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;