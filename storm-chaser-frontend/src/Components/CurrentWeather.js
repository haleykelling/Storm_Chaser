import React from 'react';

export default function CurrentWeather({ weather }){
    return(
        <div className="weather-info">
            {weather.stormy ? <h3>Risky weather is coming your way!</h3> : <h3>The risks are low right now</h3>}
            <h4>{weather.cityName}</h4>
        </div>
    )
}