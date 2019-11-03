// @flow
import React, {Component } from 'react'
import banner from '../../images/banner_sm.png'
import styles from '../../styles/Applogo.css'

type Props = {};

export default class Applogo extends Component<Props> {
  props: Props;
  
  render () {
    return (
      <div id="Applogo" className={styles.applogocontainer} data-tid="applogocontainer">
        <img className={styles.applogoImage} alt="logo" src={banner} />
      </div>
    )
  }
}
