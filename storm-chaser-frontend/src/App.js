import React from 'react';
import './App.css';
import ZipCode from './Components/ZipCode'

const weatherUrl = 'http://localhost:3000/weather_conditions'

class App extends React.Component {
  
  state={
    weather: {},
    home: true
  }

  sendZipcode = (zipcode) => {
    fetch(weatherUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({zipcode: zipcode})
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          home: false,
          weather: result
        })
      })
  } 
  
  render() {
    return (
    <div className="App">
      {this.state.home 
      ? <h1>Welcome to Storm Chaser</h1>
        <ZipCode sendZipcode={this.sendZipcode}/>
      : <h2>Storm Chaser</h2>
        <CurrentWeather weather={this.state.weather}/>
      }
    </div>
    )
  }
}

export default App;
