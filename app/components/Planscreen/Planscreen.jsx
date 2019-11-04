// @flow
import React, {Component } from 'react'
import styles from '../../styles/Planscreen.css'

type Props = {};

export default class Planscreen extends Component<Props> {
  constructor(props){
    super(props)
    this.props = props
  }
  
  props: Props;
  
  render () {
    return (
      <div id="Planscreen" className={styles.planscreencontainer} data-tid="planscreencontainer">
        <h2 style={{textAlign: 'left'}} className={styles.screentitle}>Plan your Illumination</h2>
      </div>
    )
  }
}