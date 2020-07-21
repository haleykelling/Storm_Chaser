import React from 'react';
import './App.css';
import ZipCode from './Components/ZipCode'

const weatherUrl = 'http://localhost:3000/weather_conditions'

class App extends React.Component {
  
  state={
    weather: [],
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
      .then(console.log)
  } 
  
  render() {
    return (
    <div className="App">
      <h1>Welcome to Storm Chaser</h1>
      <ZipCode sendZipcode={this.sendZipcode}/>
    </div>
    )
  }
}

export default App;
