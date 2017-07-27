import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import styled from "styled-components";

const PageTitle = styled.p`
  font-family: 'Zilla Slab', serif;
  font-size: 32px;
  color: white;
`;

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

const Window = styled.div`
  height: 500px;
  background-color: #2a2d34;
  color: #f1f1f1;
  padding: 20px;
  font-size: 18px;
  font-family: 'Inconsolata', monospace;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Dot = styled.div`
  position: absolute;
  top: 0;
  margin: 10px;
  margin-left: ${props => props.loc};
  float: left;
  background-color: ${props => props.color};
  height: 15px;
  width: 15px;
  border-radius: 20px;
  &:hover {
    filter: brightness(1.5);
  }
`;

const Home = props =>
  <Row
    type="flex"
    justify="center"
    align={props.width > 768 ? "middle" : null}
    style={{
      height: "100%",
      paddingTop: props.width < 768 ? "32px" : null
    }}
  >
    <Col lg={16} md={18} sm={24} xs={24}>
      <TitleBar>Terminal</TitleBar>
      <Window>you@robherley.me ~</Window>
      <Dot color="#009DDC" loc="10px" />
      <Dot color="#6761A8" loc="30px" />
      <Dot color="#009B72" loc="50px" />
    </Col>
  </Row>;

const mapStateToProps = state => ({
  width: state.width
});

export default connect(mapStateToProps)(Home);
