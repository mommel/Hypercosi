// @flow
import React, {Component } from 'react'
import styles from '../../styles/Configscreen.css'

type Props = {};

export default class Configscreen extends Component<Props> {
  constructor(props){
    super(props)
    this.props = props
  }
  
  props: Props;
  
  render () {
    return (
      <div id="Configscreen" className={styles.configscreencontainer} data-tid="configscreencontainer">
        <h2 style={{textAlign: 'left'}} className={styles.screentitle}>Configcreation</h2>
      </div>
    )
  }
}