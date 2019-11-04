// @flow
import React, {Component } from 'react'
import styles from '../../styles/Homescreen.css'

type Props = {};

export default class Homescreen extends Component<Props> {
  constructor(props){
    super(props)
    this.props = props
  }
  
  props: Props;
  
  render () {
    return (
      <div id="Homescreen" className={styles.homescreencontainer} data-tid="homescreencontainer" >
        <div className={styles.content}>
          <div className={styles.container}>
            <p className={styles.text}>
              HyperCoSi is a
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>Hyperion</li>
              <li className={styles.item}>Planner</li>
              <li className={styles.item}>Simulator</li>
              <li className={styles.item}>Configurator</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}