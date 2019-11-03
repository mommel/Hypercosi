// @flow
import React, { Component } from 'react';
import HomeScreen from '../../components/Homescreen/Homescreen';

type Props = {}

export default class HomePage extends Component<Props> {
  
  props: Props
  
  constructor(props){
    super(props)
    this.props = props
  }

  
  render() {
    return <HomeScreen />;
  }
}
