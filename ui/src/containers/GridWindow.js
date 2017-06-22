// Node Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { deleteWindow } from '../actions/index';

// Styles
import '../style/App.css';
import 'react-resizable/css/styles.css';

class GridWindow extends Component {
  render() {
    return (
      <div>
        <span className="Grid-titlebar">{this.props.title}</span>
        {(!this.props.static) ?
          <span className="Grid-button"
                onClick={() => this.props.deleteWindow(this.props.id)}></span>
         :<span></span>}
         <div className="Grid-content">
           {this.props.content}
         </div>
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
    deleteWindow,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GridWindow);
