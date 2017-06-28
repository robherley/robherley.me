// Node Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// Actions
import { addWindow } from '../actions/index';

// External Data
import { contentData } from '../config/contentData';

class WindowSelector extends Component {
  checkAddWindow(windowID){
    if(_.findIndex(this.props.currentLayout, (w) => {return w.i === windowID}) === -1){
      this.props.addWindow({i: windowID, x: 0, y: 0, w: 3, h: 4})
    }
  }

  render() {
    return (
      <div>
        {_.map(contentData, (window, id) => {
          return (
            <button key={id} onClick={() => this.checkAddWindow(id)}>{window.title}</button>
          )
        })}
       </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLayout: state.currentLayout
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addWindow
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WindowSelector);
