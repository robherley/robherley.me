import React from "react";
import { connect } from "react-redux";
import { Icon, Col, Row } from "antd";
import styled from "styled-components";

import { updateView } from "../actions";

const LogoText = styled.p`
  display: flex;
  justify-content: center;
  font-family: 'Zilla Slab', serif;
  font-size: 26px;
  color: white;
`;

const Select = styled.div`
  border-radius: 3px;
  padding: 4px 4px;
  margin: 10px 10px;
  background: ${props => props.fill? props.color : 'transparent'};
  color: ${props => props.fill? '#2A2D34' : props.color};
  border: 2px solid ${props => props.color};
`

const StyledIcon = styled(Icon)`
  margin: 0px;
  font-size: 22px;
`

const Avatar = styled.img`
  width: 32px;
  border-radius: 3px !important;
  margin-top: 6px;
`

const MobileNav = props => {
  return (
    <div>
      <Row 
        type="flex" 
        align="middle" 
        justify="center" 
        gutter={8}
        style={{height: '40px', backgroundColor: '#2A2D34', width: '100%', margin: '0px'}}
        >
        <Col>
          <Avatar 
            src="https://github.com/robherley.png" 
            alt="robert's github avatar" />
        </Col>
        <Col>
          <LogoText>Robert Herley</LogoText>
        </Col>
      </Row>
      <Row type="flex" justify="space-around" style={{backgroundColor: '#2A2D34'}}>
        <Col>
          <Select 
          color={props.color}
          onClick={() => props.updateView('home')}
          fill={props.view === 'home'}
          >
            <StyledIcon type="home"/>
          </Select>
        </Col>
        <Col>
          <Select 
          color={props.color}
          onClick={() => props.updateView('projects')}
          fill={props.view === 'projects'}
          >
            <StyledIcon type="code-o"/>
          </Select>
        </Col>
        <Col>
          <Select 
            color={props.color}
            onClick={() => props.updateView('resume')}
            fill={props.view === 'resume'}
          >
            <StyledIcon type="file-text"/>
          </Select>
        </Col>
        <Col>
          <Select 
          color={props.color}
          onClick={() => props.updateView('contact')}
          fill={props.view === 'contact'}
          >
            <StyledIcon type="share-alt"/>
          </Select>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({
  width: state.width,
  view: state.view,
  color: state.color
});

export default connect(mapStateToProps, { updateView })(MobileNav);
