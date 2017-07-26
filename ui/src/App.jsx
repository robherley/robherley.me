import React from "react";
import { connect } from 'react-redux';
import { Layout } from "antd";
import SideNav from "./components/SideNav";

import * as Views from "./views";

const { Content } = Layout;
const displayView = {
  home: <Views.Home />,
  projects: <Views.Projects />,
  resume: <Views.Resume />,
  contact: <Views.Contact />
}


const App = props =>
  <Layout>
    <SideNav />
    <Layout style={{ marginLeft: 200, background: "#55555e" }}>
      <Content
        style={{
          margin: "24px 16px 0",
          overflow: "initial",
          background: "#55555e"
        }}
      >
        {displayView[props.view]}
      </Content>
      {/* <Footer style={{ textAlign: "center", color: '#c2c2c6' }}>"Why join the navy if you can be a pirate?" - Steve Jobs</Footer> */}
    </Layout>
  </Layout>;

const mapStateToProps = (state) => ({
  view: state.view
});


export default connect(mapStateToProps)(App);
