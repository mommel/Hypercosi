// @flow
import React, { Component } from 'react';
import Simulatorscreen from "../../components/Simlatorscreen/Simulatorscreen";

type Props = {}

export default class HomePage extends Component<Props> {
  
  props: Props
  
  constructor(props){
    super(props)
    this.props = props
  }
  
  
  render() {
    return <Simulatorscreen />;
  }
}
