import React, { Component } from 'react';

import Grid from '../containers/Grid.js';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid />
      </div>
    );
  }
}
