// Node Modules
import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Containers/Components
import GridWindow from './GridWindow';
import Nav from './windows/Nav';

// Actions
import { changeLayout } from '../actions/index';

// Styles
import '../style/App.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const contentChooser = (windowID) => {
  switch(windowID){
    case 'nav':
      return <Nav />
    default:
      return <p>Error: Invalid windowID</p>
  }
}

class Grid extends Component {
  render() {
    return (
      <ResponsiveReactGridLayout
        layouts={{
          lg: this.props.currentLayout
        }}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 10, md: 10, sm: 6, xs: 4, xxs: 2}}
        onLayoutChange={(layout) => this.props.changeLayout(layout)}>
        {this.props.currentLayout.map((win) =>
          <div key={win.i} style={{overflow: 'scroll'}}>
            <GridWindow title="Navigation"
                        content={contentChooser(win.i)}
                        static={win.static}
                        id={win.i}/>
          </div>
        )}
      </ResponsiveReactGridLayout>
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
    changeLayout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
