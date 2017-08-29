import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import styled from "styled-components";
import _ from 'lodash';

import { updateColor } from '../actions';

const TitleBar = styled.div`
  display: flex;
  justify-content: center;
  color: #f1f1f1;
  height: 20px;
  background-color: #2a2d34;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 10px 0px;
`;

const Window = styled(Col)`
  background-color: #2a2d34;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`

const Content = styled.div`
  height: 500px;
  color: #f1f1f1;
  padding: 20px;
  font-size: 18px;
  font-family: 'Inconsolata', monospace;
`;

const Dot = styled.div`
  position: absolute;
  top: 0;
  margin: 10px;
  margin-left: ${props => props.loc};
  float: left;
  background-color: ${props => props.color};
  height: 13px;
  width: 13px;
  border-radius: 20px;
  &:hover {
    filter: brightness(1.5);
  }
`;

const Cursor = styled.div`
  height: 15px;
  width: 10px;
  display: inline;
  ${props => props.blink? 'border: 1px solid white;' : ''}
`

const Avatar = styled.img`
  width: 75%;
  border-radius: 20px;
  padding: 10px;
`

const Text = styled.p`
  display: inline-block;
  padding-right: ${props => props.pad? '10px' : '0px'};
  color: ${props => props.c};
`

const langArray = [
  ['Javascript', '#FFBB1C'],
  ['C++', '#BA3B46'],
  ['Python', '#5C80BC'],
  ['SQL (Postgres)', '#9CEC5B'],
  ['Java', '#8377D1'],
  ['Scheme (Racket)', '#DE8F6E']
]

const webArray = [
  ['HTML5', '#DB5461'],
  ['CSS', '#9BC53D'],
  ['React', '#6A7FDB'],
  ['Redux', '#944BBB'],
  ['Node.js', '#F6C0D0'],
  ['IBM Bluemix', '#47E5BC'],
  ['AWS', '#DDA448'],
  ['Heroku', '#9067C6'],
]

const miscArray = [
  ['Git', '#03B5AA'],
  ['Linux', '#E26D5C'],
  ['Bash', '#ECFFB0']
]

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      blink : false,
      frame : 0,
      showContent: false,
      currentColor: 'coral' 
    }
    this.update = setInterval(() => this.updateAnimation(), 600);
    this.blink = setInterval(() => this.setState({blink: !this.state.blink}), 500)
  }

  updateAnimation(){
    this.setState({frame: this.state.frame+1})
    if(this.state.frame === 8){
      this.setState({showContent: true})
    }
    if(this.state.frame > 9){
      clearInterval(this.update)
    }
  }

  componentWillUnmount(){
    clearInterval(this.update);
    clearInterval(this.blink);
  }

  render() {
    return (
      <Row
        type="flex"
        justify="center"
        align={this.props.width > 767 ? "middle" : null}
        style={{
          height: "100%",
          paddingTop: this.props.width < 768 ? "32px" : null,
        }}
      >
        <Window xl={12} lg={16} md={18} sm={24} xs={24}>
          <TitleBar>Terminal</TitleBar>
          <Content style={{overflow: 'auto'}}>
            <Row>
              <Text pad c={this.props.color}>root@robherley.me</Text>
               ~ {"whoami".slice(0, this.state.frame)}
              {this.state.frame < 8 ? <Cursor blink={this.state.blink}/> : null}
            </Row>
            {this.state.showContent? 
              <div>
                <Row type="flex">
                  <Col sm={8} xs={0}>
                    {this.props.width <= 768 ?
                      null :
                      <Avatar 
                        src="/avatar.png" 
                        alt="robert's github avatar" />}
                  </Col>
                  <Col sm={5} xs={8} style={{paddingTop: '10px', color: '#7c7c7c'}}>
                    <Row>Name:</Row>
                    <Row>Location:</Row>
                    <Row>Major:</Row>
                    <Row>School:</Row>
                    <Row>Grad:</Row>
                  </Col>
                  <Col sm={11} xs={16} style={{paddingTop: '10px'}}>
                    <Row>Robert Herley</Row>
                    <Row>Hoboken, NJ</Row>
                    <Row>Computer Science</Row>
                    <Row>Stevens Tech</Row>
                    <Row>May 2019</Row>
                  </Col>
                </Row>
                <Row type="flex">
                  <Col xs={24}>
                    <Row style={{color: '#7c7c7c'}}>Languages:</Row>
                    <Row>
                      {_.map(langArray, el => 
                        <Text
                          key={el[0]} 
                          onMouseEnter={() => this.props.updateColor(el[1])} 
                          pad 
                          c={el[1]}>{el[0]}</Text>)}
                    </Row>
                  </Col>
                  <Col xs={24}>
                    <Row style={{color: '#7c7c7c'}}>Web & Cloud:</Row>
                    <Row>
                      {_.map(webArray, el => 
                        <Text
                          key={el[0]}    
                          onMouseEnter={() => this.props.updateColor(el[1])} 
                          pad 
                          c={el[1]}>{el[0]}</Text>)}
                    </Row>
                  </Col>
                  <Col xs={24}>
                    <Row style={{color: '#7c7c7c'}}>Misc:</Row>
                    <Row>
                      {_.map(miscArray, el => 
                        <Text 
                          key={el[0]} 
                          onMouseEnter={() => this.props.updateColor(el[1])} 
                          pad 
                          c={el[1]}>{el[0]}</Text>)}
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Text pad c={this.props.color}>root@robherley.me</Text>
                   ~  {this.state.frame > 8 ? <Cursor blink={this.state.blink}/> : null}
                </Row>
              </div> 
            : null}
          </Content>
          <Dot color="#ED6B5F" loc="10px" />
          <Dot color="#F6C150" loc="30px" />
          <Dot color="#62C755" loc="50px" />
        </Window>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  width: state.width,
  color: state.color
});

export default connect(mapStateToProps, { updateColor })(Home);
