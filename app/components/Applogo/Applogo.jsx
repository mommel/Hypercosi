// @flow
import React, {Component } from 'react'
import banner from '../../images/banner.png'

type Props = {};

export default class Applogo extends Component<Props> {
  props: Props;
  
  render () {
    return (
      <div id="Applogo">
        <img alt="logo" src={banner} />
      </div>
    )
  }
}
