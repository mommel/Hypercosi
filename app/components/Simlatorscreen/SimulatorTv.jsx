// @flow
import React, {Component } from 'react'
import rd from 'react-dom'
import styles from '../../styles/SimulatorTv.css'
import FastAverageColor from 'fast-average-color'

type Props = {};

export default class SimulatorTv extends Component<Props> {
  topLeds = []
  rightLeds = []
  bottomLeds = []
  leftLeds = []
  videoObject = null
  
  constructor(props){
    super(props)
    
    this.topLeds = props.children[0]
    this.rightLeds = props.children[1]
    this.bottomLeds = props.children[2]
    this.leftLeds = props.children[3]
    this.videoObject = props.children[4]
    
    console.log('this.videoObject', this.videoObject)
    console.log('this.videoObject', this.videoObject.props.children)
    
    this.props = props.simulatorTvStyle
    
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
    this.initHyperionLights()
  }
  
  createScanArea = () => {
    console.log('Creating Scan Area')
    console.log(this.topLeds[0])
    let setLedColor = ( ) => {
      let fastAverageColor = new FastAverageColor()
      // let size = 20 //Math.floor(this._width / this.countByWidth);
      let gotColor = fastAverageColor.getColor(
        this.videoObject, {
        left: 0,
        top: 0,
        width: 20,
        height: 20
      })
      return gotColor
    }
  
    console.log('setLedColor', setLedColor())
    console.log('TopLedsAmount ', this.topLeds.length)
    let selectedActiveLed = this.topLeds[0];
    console.log( 'Leds', selectedActiveLed.style )
    selectedActiveLed.style = { color: setLedColor(), ...selectedActiveLed.style }
  }
  
  initHyperionLights = () => {
    console.log( 'init fired' )
    this.createScanArea()
  }
  
  startHyperion = () => {
    console.log('Hyperion started')
  }
  
  stopHyperion = () => {
    console.log('Hyperion stop')
  }
  
  props: Props;
  
  render () {
    let divStyle =  this.state.variableStyle
    return (
      <div id="SimulatorTV" style={divStyle} className={styles.simulatortv} data-tid="simulatortv" >
        {this.topLeds}
        {this.rightLeds}
        {this.bottomLeds}
        {this.leftLeds}
        {this.videoObject}
      </div>
    )
  }
}


