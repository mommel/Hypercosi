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
      <div id="Homescreen" className={styles.homescreencontainer} data-tid="homescreencontainer">
          <h2 style={{textAlign: 'left'}} className={styles.screentitle}>Configuration</h2>
      </div>
    )
  }
}