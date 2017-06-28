import React, { Component } from 'react';

export default class GridContent extends Component {
  render() {
    return (
      <div style={{height: '100%', width: 'auto', overflow: 'auto' }}>
        <div style={{padding: '7px'}}>
           {this.props.content}
        </div>
      </div>
    )
  }
}