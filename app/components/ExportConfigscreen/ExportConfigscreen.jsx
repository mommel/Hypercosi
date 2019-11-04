// @flow
import React, {Component } from 'react'
import styles from '../../styles/ExportConfigscreen.css'

type Props = {};

export default class ExportConfigscreen extends Component<Props> {
  constructor(props){
    super(props)
    this.props = props
  }
  
  props: Props;
  
  render () {
    return (
        <div id="ExportConfigscreen" className={styles.exportconfigscreencontainer} data-tid="exportconfigscreencontainer" >
         <h1 style={{textAlign: 'left'}} className={styles.screentitle}>Config Creation and Export</h1>
        </div>
    )
  }
}