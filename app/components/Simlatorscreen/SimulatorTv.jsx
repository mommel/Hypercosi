// @flow
import React, {Component } from 'react'
import styles from '../../styles/SimulatorTv.css'

type Props = {};

export default class SimulatorTv extends Component<Props> {
  constructor(props){
    super(props)
    this.props = props
    console.log('SimulatorTv PROPS', this.props)
    let height = props.simulatorTvStyle.height //  / 2
    let width  = props.simulatorTvStyle.width // / 2
    let left = props.simulatorTvStyle.left // this.calculatePositionLeft()
    let top = props.simulatorTvStyle.top // this.calculatePositionTop()
    this.state = {
      variableStyle: {
        zIndex: 2000,
        height: `${height}px`,
        width: `${width}px`,
        left: `${left}px`,
        top: `${top}px`,
      }
    }
  }
  
  props: Props;
  
  render () {
    let divStyle =  this.state.variableStyle
    return (
      <div id="SimulatorTV" style={divStyle} className={styles.simulatortv} data-tid="simulatortv" >
        {this.props.children}
      </div>
    )
  }
}


