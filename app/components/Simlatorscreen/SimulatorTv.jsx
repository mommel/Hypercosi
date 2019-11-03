// @flow
import React, {Component } from 'react'
import styles from '../../styles/SimulatorTv.css'

type Props = {};

export default class SimulatorTv extends Component<Props> {
  constructor(props){
    super(props)
    this.props = props
  }
  
  props: Props;
  
  render () {
    // this.props.width='800';
    // this.props.height='400';
    // this.props.stand=false;
    
    return (
      <div id="SimulatorTV" className={styles.simulatortv} data-tid="simulatortv" >
      
      </div>
    )
  }
}


