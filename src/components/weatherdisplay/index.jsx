import React, { Component } from 'react';
import styled from 'styled-components';

const WeatherDisplay = ({ cityName, temp, description, temp_max, temp_min, iconUrl, iconAlt  }) =>
  <WeatherDisplayWrap>
    <Top>
      <CityName> {cityName} </CityName>
      <Icon> <img src={iconUrl} alt={iconAlt}/> </Icon>
      <Description> {description} </Description>
    </Top>
    <Middle> {temp}<em>&deg;</em></Middle>
    <Bottom>
      <span> {temp_max}<em>&deg;</em></span>
      <span> {temp_min}<em>&deg;</em></span>
    </Bottom>
  </WeatherDisplayWrap>;

export default WeatherDisplay;

const WeatherDisplayWrap = styled.div`
  margin-bottom: 50px;
`
const Icon = styled.div`
  display: inline-block;
  img {
    position: relative;
    top: 6px;

  }
  margin-left: 6px;
`;

const Top = styled.div`
  display: inline-block;
  height: 40px;
  text-transform: capitalize;
`;

const CityName = styled.div`
  display: inline-block;
  font-size: 2.7em;
  font-weight: 300;
`;

const Description = styled.div`
  display: block;
  text-transform: capitalize;
  margin-top: 4px;
  font-size: 1.4em;
`;

const Middle = styled.div`
  font-size: 4em;
  margin: 44px auto 20px;
  em {
    position: absolute;
  }
`
const Bottom = styled.div`
  font-size: 1.2em;
  span {
    margin: 10px 24px;
  }
  em {
    position: absolute;
  }
`
