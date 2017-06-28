// Node Modules
import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Containers/Components
import GridContent from '../components/GridContent';
import TitleBar from '../components/TitleBar';

// External Data
import {contentData} from '../config/contentData';

// Actions
import { changeLayout, deleteWindow } from '../actions/index';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Grid extends Component {
  render() {
    return (
      <ResponsiveReactGridLayout
        layouts={{
          lg: this.props.currentLayout
        }}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        onLayoutChange={(layout) => this.props.changeLayout(layout)}>
        {this.props.currentLayout.map((win) =>
          <div key={win.i}>
            <TitleBar title={contentData[win.i].title} onClick={() => this.props.deleteWindow(win.i)}/>
            <GridContent content={contentData[win.i].content} />
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
    changeLayout, deleteWindow
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
