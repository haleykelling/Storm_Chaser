import React from 'react';
import './App.css';
import ZipCode from './Components/ZipCode';
import CurrentWeather from './Components/CurrentWeather';
import Welcome from './Components/Welcome';

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
          weather: result, 
          home: false
        })
      })
  } 

  backToHome = () => {
    this.setState({
      home: true
    })
  }
  
  render() {
    return (
    <div className="App">
        <Welcome home={this.state.home} />
        <ZipCode sendZipcode={this.sendZipcode} home={this.state.home}/>
        <CurrentWeather 
          weather={this.state.weather} 
          home={this.state.home}
          backToHome={this.backToHome}
        />
    </div>
    )
  }
}

export default App;
