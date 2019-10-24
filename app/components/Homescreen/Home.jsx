// @flow
import banner from '../../images/banner.png'
import React, { Component } from 'react'
//import styles from './Home.css'


export default class Home extends Component {
  render () {
    return (
      <div homebg className={styles.container} data-tid="container">
        <img alt="logo" src={banner} />
        <h2>Configuration</h2>
      </div>
    )
  }
}
