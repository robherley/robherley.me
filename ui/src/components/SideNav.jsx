import React from "react";
import { connect } from "react-redux";
import { Layout, Menu, Icon } from "antd";
import styled from "styled-components";

import { updateView } from "../actions";
import * as SVG from "../svg";

const { Sider } = Layout;

const Logo = styled.img`
  padding: 20px;
  width: 100%;
`;

const LogoText = styled.p`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  font-family: 'Zilla Slab', serif;
  font-size: 26px;
  color: white;
`;

const SideNav = props => {
  return(
  <Sider
    style={{
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      backgroundColor: "#2A2D34",
      left: 0
    }}
  >
    <Logo src={SVG.Logo} alt="logo" />
    <LogoText>Robert Herley</LogoText>
    <Menu
      theme="dark"
      style={{ backgroundColor: "#2A2D34" }}
      mode="inline"
      defaultSelectedKeys={["home"]}
      onClick={e => props.updateView(e.key)}
    >
      <Menu.Item key="home">
        <Icon type="home" />
        <span className="nav-text">Home</span>
      </Menu.Item>
      <Menu.Item key="projects">
        <Icon type="code-o" />
        <span className="nav-text">Projects</span>
      </Menu.Item>
      <Menu.Item key="resume">
        <Icon type="file-text" />
        <span className="nav-text">Resume</span>
      </Menu.Item>
      <Menu.Item key="contact">
        <Icon type="share-alt" />
        <span className="nav-text">Contact</span>
      </Menu.Item>
    </Menu>
  </Sider>)}

export default connect(null, {updateView})(SideNav);
