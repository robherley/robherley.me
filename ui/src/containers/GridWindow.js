// Node Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { addWindow, deleteWindow } from '../actions/index';

// Styles
import '../style/Grid.css';
import 'react-resizable/css/styles.css';

class GridWindow extends Component {

  render() {
    return (
      <div>
        <span className="Grid-titlebar">{this.props.title}</span>
        {(this.props.static !== true) ? <span className="Grid-button" onClick={() => this.props.deleteWindow(this.props.id)}></span> : <span></span>}
        <div className="Grid-content">
          <button onClick={() => this.props.addWindow({i: `${Math.random()}`, x: 2, y: 0, w: 2, h: 2})}>Click Me!</button>
          {this.props.content}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentLayout: state.currentLayout
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addWindow: addWindow,
    deleteWindow: deleteWindow,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GridWindow);
