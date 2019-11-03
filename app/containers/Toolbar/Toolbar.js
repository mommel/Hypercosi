// @flow
import React, { Component } from 'react';
import Navigation from "../../components/Navigation/Navigation";

type Props = {}

export default class Toolbar extends Component<Props> {
  
  props: Props
  
  constructor(props){
    super(props)
    this.props = props
  }

  
  render() {
    return <Navigation history={this.props.history} />;
  }
}
