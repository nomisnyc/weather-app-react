import React, { Component } from 'react';
import styled from 'styled-components';

import WeatherApi from '../components/weatherapi';


class Root extends Component {
  render() {
    return(
      <RootWrap>
        <WeatherApi />
      </RootWrap>
    );
  }
}

export default Root;


const RootWrap = styled.div`
  padding: 1em;
`;
