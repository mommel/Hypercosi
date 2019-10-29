// @flow
import React, {Component } from 'react'
import Toolbar from "../Toolbar/Toolbar";
import Statusbar from "../Statusbar/Statusbar";
import styles from '../../styles/Homescreen.css'
// import Sidebar from "../Sidebar/Sidebar"

type Props = {};

export default class Homescreen extends Component<Props> {
  props: Props;
  
  render () {
    return (
      <div id="Homescreen" className={styles.homescreencontainer} data-tid="homescreencontainer">
          <Toolbar className={styles.toolbar} />
          <h2 className={styles.screentitle}>Configuration</h2>
      </div>
    )
  }
}