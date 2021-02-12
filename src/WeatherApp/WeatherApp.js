import React, { useState } from 'react';
import './WeatherApp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const api = {
    key: "d4a0a48d0dd594bba0d58e619093a6c5",
    base: "https://api.openweathermap.org/data/2.5/"
}

function WeatherApp() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const weatherIcon = { 'Snow': 'snowflake', 'Clouds': 'cloud', 'Fog': 'smog', 'Mist': 'smog', 'Clear': 'sun', 'Rain': 'cloud-showers-heavy', 'Haze': 'smog', 'Drizzle': 'cloud-rain' }

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'WeatherApp warm' : 'WeatherApp') : 'WeatherApp'}>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="weather-box">
                            <div className="weather-icon">
                                <FontAwesomeIcon icon={weatherIcon[weather.weather[0].main]} size="4x" />
                            </div>
                            <div className="temp">
                                {Math.round(weather.main.temp)}°c
                            </div>
                            <div className="weather-text">{weather.weather[0].main}</div>
                        </div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                    </div>
                ) : ('')}
            </main>
        </div>
    );
}

export default WeatherApp;