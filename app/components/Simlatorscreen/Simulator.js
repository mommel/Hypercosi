// @flow
import React, { Component } from 'react'
//import styles from './Simulator.css'
import banner from '../../images/banner.png'

type Props = {}

export default class Simulator extends Component<Props> {
  props: Props

  render () {
    return (
      <div
        simulatorbg
        className={styles.container}
        data-tid="container"
      >
        <img alt="logo" src={banner} />
        <h2>Simulator</h2>
      </div>
    )
  }
}
