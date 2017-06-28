import React, { Component } from 'react';

import Grid from '../containers/Grid.js';
import Header from './Header';
import WindowSelector from '../containers/WindowSelector';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <WindowSelector />
        <Grid />
      </div>
    );
  }
}
