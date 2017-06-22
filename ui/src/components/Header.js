import React, { Component } from 'react';
import Particles from 'react-particles-js';

import { headerStyle } from '../config/header_config';
import { particle_config } from '../config/particle_config';

import '../style/App.css';

class Header extends Component {

  render() {
    return (
      <div style={headerStyle('dark-wine')}>
        <div className="App-title">
          rob herley
        </div>
        <Particles params={particle_config} height="50px"/>
      </div>
    );
  }
}

export default Header;
