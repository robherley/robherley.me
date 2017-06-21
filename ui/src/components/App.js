import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Grid from '../containers/Grid.js'
import { particle_config } from '../config/particle_config'

import '../style/App.css';

class App extends Component {

  render() {
    return (
      <div className="App-header">
        <div className="App-title">
          rob herley
        </div>
        <Particles params={particle_config} height="75px"/>
        <Grid />
      </div>
    );
  }
}

export default App;
