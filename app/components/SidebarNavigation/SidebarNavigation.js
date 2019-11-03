// @flow
import React, {Component } from 'react'

type Props = {};

export default class SidebarNavigation extends Component<Props> {
  constructor(props){
    super(props)
    this.props = props
  }
  
  props: Props;
  
  render () {
    return (
      <nav-group>
        <h5 className="nav-group-title">Favorites</h5>
        <nav-item>
          <div className="icon">
          </div>
          Option1
        </nav-item>
      </nav-group>
    )
  }
}