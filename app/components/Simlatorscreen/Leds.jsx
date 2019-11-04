// @flow
import React, {Component } from 'react'

type Props = {};

export default class Leds extends Component<Props> {
  constructor (props) {
    super(props)
    this.props = props
  }
  props: Props;
  
  
  render () {
    return (
      <div
      id={this.props.id}
      className={this.props.className}
      style={this.props.style}
      >
      {this.props.children}
      </div>
    )
  }
}
