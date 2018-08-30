import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import WeatherDisplay from '../weatherdisplay'

class WeatherApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      data: [],
      name: '',
      temp_min: '',
      temp_max: '',
      temp: '',
      description: '',
      icon: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount(){
    const url = "https://api.openweathermap.org/data/2.5/weather?zip=11201,us&appid=709847967f5e54b97308c1b2cae4dee5&units=imperial"

    axios({
          method:'post',
          dataType: 'json',
          url: url,
          headers: {
            'Content-Type': 'application/json',
          },
        })
     .then(response => {
        const data = response.data;
        this.setState({
          data: data,
          name: data.name,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
         });
      })
    .catch((error)=>{
       console.log(error);
    });
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    const url = "https://api.openweathermap.org/data/2.5/weather?zip=" + this.state.zip + ",us&appid=709847967f5e54b97308c1b2cae4dee5&units=imperial"

    axios({
          method:'post',
          dataType: 'json',
          url: url,
          headers: {
            'Content-Type': 'application/json',
          },
        })
     .then(response => {
        const data = response.data;
        this.setState({
          data: data,
          name: data.name,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
         });
      })
    .catch((error)=>{
       console.log(error);
    });

  }

  render(){
    const iconUrl = "http://openweathermap.org/img/w/" + this.state.icon + ".png";
    const iconAlt = this.state.icon
    const temp_min = Math.round(this.state.temp_min)
    const temp_max = Math.round(this.state.temp_max)
    const temp = Math.round(this.state.temp)

    return(
      <WeatherWrap>
        <WeatherDisplay
          cityName = {this.state.name}
          temp = {temp}
          description = {this.state.description}
          temp_max = {temp_max}
          temp_min = {temp_min}
          iconUrl = {iconUrl}
          iconAlt = {iconAlt}
         />
         <hr/>
         <FormWrap>
          <form onSubmit={this.onSubmit}>
            <label>Zip Code:</label>
            <input type="text" name="zip" onChange={this.handleChange} required/>
            <button type="submit">Update</button>
          </form>
         </FormWrap>
      </WeatherWrap>
    )
  }
}

export default WeatherApi;

const WeatherWrap = styled.div`
  text-align: center;
`;

const FormWrap = styled.div`
  width: 100%;
  max-width: 284px;
  margin: auto;
  margin-top: 40px;
  label {
    display: block;
    text-align: left;
    font-size: .8em;
    margin-left: 2px;
  }
  input, button {
    height: 30px;
    border-radius: 4%;
    border: solid 2px #808080;
  }
  button {
    width: 130px;
    margin: 10px;
    font-size: 12px;
  }
`;
