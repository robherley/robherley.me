import React from 'react';
import {Row, Col} from 'antd';
import { connect } from "react-redux";
import styled from 'styled-components';

import LinkedIn from '../svg/linkedin.svg';
import GitHub from '../svg/github.svg';
import Facebook from '../svg/facebook.svg';
import Twitter from '../svg/twitter.svg';
import Instagram from '../svg/instagram.svg';

const Square = styled.div`
  border-radius: 3px;
  background: ${props => props.color};
  padding: 5px;
  width: 100px;
  color: #2A2D34;
  border: 2px solid ${props => props.color};
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  &:focus {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  &:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`

const Icon = styled.img`
  width: 80px;
`

const Contact = (props) => (
    <Row type="flex" justify="center" align="middle" style={{height: '100%'}} gutter={24}>
        <Col>
            <Square color={props.color} onClick={() => window.open('https://www.linkedin.com/in/robherley')}>
                <Icon src={LinkedIn} alt="social network icon" />
            </Square>
        </Col>
        <Col>
            <Square color={props.color} onClick={() => window.open('https://github.com/robherley')}>
                <Icon src={GitHub} alt="social network icon" />
            </Square>
        </Col>
        <Col>
            <Square color={props.color} onClick={() => window.open('https://www.facebook.com/robert.herleyiv')}>
                <Icon src={Facebook} alt="social network icon" />
            </Square>
        </Col>
        <Col>
            <Square color={props.color} onClick={() => window.open('https://twitter.com/robherley')}>
                <Icon src={Twitter} alt="social network icon" />
            </Square>
        </Col>
        <Col>
            <Square color={props.color} onClick={() => window.open('https://instagram.com/robherley')}>
                <Icon src={Instagram} alt="social network icon" />
            </Square>
        </Col>
    </Row>
)

const mapStateToProps = state => ({
  color: state.color,
  view: state.view
});

export default connect(mapStateToProps, null)(Contact);