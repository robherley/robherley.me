import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";

import SideNav from "./components/SideNav";
import MobileNav from "./components/MobileNav";
import Animate from './components/AnimatedWrapper';
import { updateWidth } from './actions';
import * as Views from "./views";

const { Content } = Layout;

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("resize", this.windowResize.bind(this));
  }

  windowResize() {
    this.props.updateWidth(window.innerWidth);
  }

  render() {
    let isMobile = this.props.width < 768;
    let view = this.props.view;
    return (
      <Layout>
        {isMobile ? <MobileNav /> : <SideNav /> }
         <Layout style={{ marginLeft: !isMobile? 95 : 0, background: "#55555e" }}> 
           <Content
            style={{
              margin: "0px 32px",
              overflow: "initial",
              height: "100vh"
            }}
          >
              <Animate>{view === 'home' ? <Views.Home /> : null}</Animate>
              <Animate>{view === 'projects' ? <Views.Projects /> : null}</Animate>
              <Animate>{view === 'contact' ? <Views.Contact /> : null}</Animate> 
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  view: state.view,
  width: state.width,
  color: state.color
});

export default connect(mapStateToProps, { updateWidth })(App);
