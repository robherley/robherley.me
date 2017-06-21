// Node Modules
import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GridWindow from './GridWindow';

// Actions
import { addWindow, deleteWindow, changeLayout } from '../actions/index';

// Styles
import '../style/Grid.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Grid extends Component {

  render() {
    return (
      <ResponsiveReactGridLayout
        //Eventually add Responsiveness by Reduxing the layouts below
        layouts={{lg: this.props.currentLayout, md: this.props.currentLayout, sm: this.props.currentLayout, xs: this.props.currentLayout, xxs: this.props.currentLayout}}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        onLayoutChange={(layout) => this.props.changeLayout(layout)}
        >
        {this.props.currentLayout.map((box) =>
          <div key={box.i}>
            <GridWindow title="Hello-World" content={`This is window: ${box.i}`} id={box.i}/>
          </div>
        )}
      </ResponsiveReactGridLayout>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  return {
    currentLayout: state.currentLayout
  };
}

// Anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
  // Passing result to all reducers
  return bindActionCreators({
    addWindow: addWindow,
    deleteWindow: deleteWindow,
    changeLayout: changeLayout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);