// @flow
import React, {Component } from 'react'
import Toolbar from "../Toolbar/Toolbar";
import styles from '../../styles/Homescreen.css'
// import Sidebar from "../Sidebar/Sidebar"
import Applogo from '../Applogo/Applogo'

type Props = {};

export default class Homescreen extends Component<Props> {
  props: Props;
  
  render () {
    return (
      <div id="Homescreen" className={styles.homescreencontainer} data-tid="homescreencontainer">
          <Toolbar />
          <Applogo />
          <h2>Configuration</h2>
      </div>
    )
  }
}