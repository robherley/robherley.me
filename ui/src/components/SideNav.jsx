import React from "react";
import { connect } from "react-redux";
import { Layout, Icon, Tooltip } from "antd";
import styled from "styled-components";

import { updateView } from "../actions";

const { Sider } = Layout;

const Select = styled.div`
  border-radius: 3px;
  padding: 1em 1em;
  margin: 25px 25px;
  background: ${props => props.fill? props.color : 'transparent'};
  color: ${props => props.fill? '#2A2D34' : props.color};
  border: 2px solid ${props => props.color};
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  &:hover {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
  &:focus {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
  &:active {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
`

const StyledIcon = styled(Icon)`
  margin: 0px;
  font-size: 30px;
`

const SideNav = props => {
  return(
  <Sider
    width='60px'
    style={{
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      backgroundColor: "#2A2D34",
      left: 0,
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <Tooltip placement="right" title="Home" overlayStyle={{color: 'purple'}}>
      <Select 
        color={props.color}
        onClick={() => props.updateView('home')}
        fill={props.view === 'home'}
      >
        <StyledIcon type="home"/>
      </Select>
    </Tooltip>
    {/* <Tooltip placement="right" title="Projects">
      <Select 
        color={props.color}
        onClick={() => props.updateView('projects')}
        fill={props.view === 'projects'}
      >
        <StyledIcon type="code-o"/>
      </Select>
    </Tooltip> */}
    <Tooltip placement="right" title="Resume">
      <Select 
        color={props.color}
        onClick={() => window.open("/resume.pdf", "Rob's Resume")}
        fill={props.view === 'resume'}
      >
        <StyledIcon type="file-text"/>
      </Select>
    </Tooltip>
    <Tooltip placement="right" title="Contact">
      <Select 
        color={props.color}
        onClick={() => props.updateView('contact')}
        fill={props.view === 'contact'}
      >
        <StyledIcon type="share-alt"/>
      </Select>
    </Tooltip>
</Sider>)}

const mapStateToProps = state => ({
  color: state.color,
  view: state.view
});

export default connect(mapStateToProps, { updateView })(SideNav);
