import React from 'react';
import '../App.css';


export default function CurrentWeather({ weather, home, backToHome }){
    const stormy = () => {
        return weather.weather[0].main === "Thunderstorm" 
            ? <h3>Risky weather is coming your way!</h3>
            : <h3>The risks are low right now!</h3>
    }

    const handleClick = () => {
        backToHome()
    }
    
    if (!home) {
        return(
            <div className="weather-info">
                {stormy()}
                <h4 className="city" >{weather["name"]}</h4>
                <div className="details">
                    <div className="main-weather">
                        <p>{weather.weather[0].main}</p>
                        <img src={"https://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"} />
                    </div>
                    <p><strong>Description:</strong> {weather.weather[0].description}</p>
                    <p><strong>Current Temp:</strong> {weather.main.temp}<span>&#176;</span> F</p>
                    <p><strong>Feels Like</strong> {weather.main.feels_like}<span>&#176;</span> F</p>
                    <p><strong>High:</strong> {weather.main.temp_max}<span>&#176;</span> F</p>
                    <p><strong>Low:</strong> {weather.main.temp_min}<span>&#176;</span> F</p>
                    <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
                    <p><strong>Wind:</strong> {weather.wind.speed} MPH</p>
                </div>
                <button onClick={handleClick}>Home Page</button>
            </div>
        )
    } else {
        return null
    }
}