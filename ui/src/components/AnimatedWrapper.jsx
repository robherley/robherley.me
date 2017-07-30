import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

const Animate = props =>
  <CSSTransitionGroup
    transitionName="mountChange"
    transitionAppear={true}
    transitionAppearTimeout={1000}
    transitionEnter={true}
    transitionEnterTimeout={500}
    transitionLeave={false}
  >
    {props.children}
  </CSSTransitionGroup>;

export default Animate;