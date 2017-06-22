import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { addWindow } from '../../actions/index';

class Nav extends Component {
  render() {
    return (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <button onClick={() => this.props.addWindow({i: `${Math.random()}`, x: 2, y: 0, w: 2, h: 2})}>Click to add a Window!</button>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
