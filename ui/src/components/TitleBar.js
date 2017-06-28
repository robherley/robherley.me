import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.div`
	position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 21px;
  position: fixed;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #fff;
  text-align: center;
  padding-top: 2px;
  font-size: 14px;
  background: #3a6186;
`;

const Button = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 3px;
  margin-right: 6px;
  width: 15px;
  height: 15px;
  background-color: #89253e;
  border-radius: 20px;
  &:hover {
    -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;


export default class TitleBar extends Component {
  render() {
    return (
    <div>
        <Title>{this.props.title}</Title>
        <Button onClick={() => this.props.onClick()}></Button>
    </div>
    );
  }
}

