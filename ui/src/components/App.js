import React, { Component } from 'react';

import Draggable from 'react-draggable';
import Grid from '../containers/Grid.js';
import Header from './Header';
import WindowSelector from '../containers/WindowSelector';
import TitleBar from './TitleBar';
import GridContent from './GridContent';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <WindowSelector />
        <Grid />
        <Draggable>
          <div style={{width: '200px', height: '200px', backgroundColor:'#fff', borderRadius: '5px'}}>
            <TitleBar title="Floating 1" onClick={()=>console.log("clicked!")}/>
            <GridContent content={<div style={{paddingTop: '20px'}}>This is a floating window!</div>} />
          </div>
        </Draggable>
        <Draggable>
          <div style={{width: '200px', height: '200px', backgroundColor:'#fff', borderRadius: '5px'}}>
            <TitleBar title="Floating 2" onClick={()=>console.log("clicked!")}/>
            <GridContent content={<div style={{paddingTop: '20px'}}>This is also a floating window!</div>} />
          </div>
        </Draggable>
      </div>
    );
  }
}
