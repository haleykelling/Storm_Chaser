import React from 'react';
import '../App.css';


export default class ZipCode extends React.Component {
    state={
        zipcode: ""
    }
    
    handleSubmit = (event) => {
        this.props.sendZipcode(this.state.zipcode)
    }

    handleChange = (event) => {
        this.setState({
            zipcode: event.target.value
        })
    }
    
    render() {
        return(
            <form class="enter-zipcode" onSubmit={this.handleSubmit}>
                <label>Enter your zipcode to see if a storm is coming your way!</label>
                <input type="text" placeholder="Zipcode" value={this.state.zipcode} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
    )}
}