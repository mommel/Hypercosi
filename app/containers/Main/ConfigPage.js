// @flow
import React, { Component } from 'react';
import Configscreen from "../../components/Configscreen/Configscreen";

type Props = {}

export default class ConfigPage extends Component<Props> {
  
  props: Props
  
  constructor(props){
    super(props)
    this.props = props
  }

  
  render() {
    return <Configscreen />;
  }
}
