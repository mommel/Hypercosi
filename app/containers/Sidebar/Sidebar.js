// @flow
import React, { Component } from 'react';
import SidebarNavigation from "../../components/SidebarNavigation/SidebarNavigation";

type Props = {}

export default class Sidebar extends Component<Props> {
  
  props: Props
  
  constructor(props){
    super(props)
    this.props = props
  }
  
  
  render() {
    return <SidebarNavigation />;
  }
}
