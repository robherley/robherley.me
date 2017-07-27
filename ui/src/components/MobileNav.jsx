import React from "react";
import { connect } from "react-redux";
import { Menu, Icon, Col, Row } from "antd";
import styled from "styled-components";

import { updateView } from "../actions";
import * as SVG from "../svg";

const Logo = styled.img`
  height: 32px
`;

const LogoText = styled.p`
  display: flex;
  justify-content: center;
  font-family: 'Zilla Slab', serif;
  font-size: 26px;
  color: white;
`;

const Text = styled.span`
    display: none
`

const MobileNav = props => {
  return (
    <div>
      <Row 
        type="flex" 
        align="middle" 
        justify="center" 
        gutter={24}
        style={{height: '40px', backgroundColor: '#2A2D34'}}
        >
        <Col>
          <Logo src={SVG.Logo} alt="logo" />
        </Col>
        <Col>
          <LogoText>Robert Herley</LogoText>
        </Col>
      </Row>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        onClick={e => props.updateView(e.key)}
        style={{
          backgroundColor: "#2A2D34",
          display: "flex",
          justifyContent: "center",
          fontSize: "24"
        }}
      >
        <Menu.Item key="home" style={{ border: "none" }}>
          <Icon type="home" style={{margin: '0px'}}/>
        </Menu.Item>
        <Menu.Item key="projects" style={{ border: "none" }}>
          <Icon type="code-o" style={{margin: '0px'}}/>
        </Menu.Item>
        <Menu.Item key="resume" style={{ border: "none" }}>
          <Icon type="file-text" style={{margin: '0px'}}/>
        </Menu.Item>
        <Menu.Item key="contact" style={{ border: "none" }}>
          <Icon type="share-alt" style={{margin: '0px'}}/>
        </Menu.Item>
      </Menu>
    </div>
  );
};

const mapStateToProps = state => ({
  width: state.width
});

export default connect(mapStateToProps, { updateView })(MobileNav);
