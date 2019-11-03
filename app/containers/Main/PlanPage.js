// @flow
import React, { Component } from 'react';
import Planscreen from "../../components/Planscreen/Planscreen";

type Props = {}

export default class PlanPage extends Component<Props> {
  
  props: Props
  
  constructor(props){
    super(props)
    this.props = props
  }
  
  
  render() {
    return <Planscreen />;
  }
}
