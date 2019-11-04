// @flow
import React, {Component } from 'react'
import styles from '../../styles/Simulatorscreen.css'
import SettingsModal from "./SettingsModal";
import SimulatorTv from "./SimulatorTv";
import Leds from "./Leds";
import VideoV1 from '../../videos/v1.mp4'

type Props = {};

export default class Simulatorscreen extends Component<Props> {
  constructor(props) {
    super( props )
    this.props = props
    let state = this.calculateScreenStyle()
    this.state = state
  }
  
  // videoeRef = null
  
  calculatePositionLeft( width ){
    let positionpoint = null
    /*
      this.props.width combinded with base x  to get a real 50 % position
     */
    return 300
  }
  
  calculatePositionTop( height, isWallmounted ){
    let positionpoint = null
    /*
      this.props.height combinded with base x
      and with option from this.props.wallmounted
      to get a real 50 % position
     */
    return 200
  }
  
  getLedConfig() {
    return {
      "lpm": "60"
    }
  }
  
  getTVConfig() {
    return {
      "id": "1665",
      "name": "65\"",
      "diagonal": {
        "metric": 1651,
        "imperial": 65
      },
      "ratio": 169,
      "width": {
        "metric": 1440,
        "imperial": 56.7
      },
      "height": {
        "metric": 810,
        "imperial": 31.9
      }
    }
  }
  
  getWallmountedConfig(){
    return true
  }
  
  getSkipLowerBorderConfig(){
    return false
  }
  
  calculateScreenStyle () {
    // GatheredConfig
    let tvconfig = this.getTVConfig()
    let ledConfig = this.getLedConfig()
    let isWallmounted = this.getWallmountedConfig()
    let skipLower = this.getSkipLowerBorderConfig()
    let gatheredConfig = {
      tvconfig: tvconfig,
      ledConfig: ledConfig,
      isWallmounted: isWallmounted,
      skipLower: skipLower,
    }
    
    // videoSimulatorCalculation
    let tvWidthMetric = tvconfig.width.metric
    let tvHeightMetric = tvconfig.height.metric
    let simulatorWidth = Math.floor( tvWidthMetric / 2 )
    
    let simulatorHeight = Math.floor( tvHeightMetric / 2 )
    let simulatorPosLeft = this.calculatePositionLeft(
      simulatorWidth
    )
    let simulatorPosTop = this.calculatePositionTop(
      simulatorHeight,
      isWallmounted
    )
    let videoSimulator = {
        position: 'absolute',
        width: `${simulatorWidth}px`,
        height: `${simulatorHeight}px`,
        left: 0,
        top: 0,
        // left: `${simulatorPosLeft}px`,
        // top: `${simulatorPosTop}px`,
    }
    
    // ledsSetupConfiguration
    let ledsPerMeter = ledConfig.lpm
    let ledsTop = Math.floor( simulatorWidth /1000 * ledsPerMeter )
    let ledsLeft = Math.floor( simulatorHeight /1000 * ledsPerMeter )
    let ledsRight = Math.floor( simulatorHeight /1000 * ledsPerMeter )
    let ledsBottom = (
      skipLower ? 0 :
        Math.floor(simulatorWidth /1000 * ledsPerMeter
      )
    )
    
    let ledsSetup = {
      ledsPerMeter: ledsPerMeter,
      ledsTop: ledsTop,
      ledsLeft: ledsLeft,
      ledsBottom: ledsBottom,
      ledsRight: ledsRight,
      simulatorWidth: simulatorWidth,
      simulatorHeight: simulatorHeight,
    }
    
    let simulatorFrame = {
      height: ( simulatorHeight + 14 ),
      width: ( simulatorWidth + 14 ),
      left: simulatorPosLeft,
      top: simulatorPosTop,
    }
    
    return {
      gatheredConfig: gatheredConfig,
      videoSimulator: videoSimulator,
      ledsSetup: ledsSetup,
      simulatorFrame: simulatorFrame,
    }
  }
  
  generateLeds(position, amount, max, ledstyle){
    let leds = []
    // let ledsrefs = []
    for (var lId = 1; lId <= amount; lId++ ) {
      let positioner =  Math.floor( lId * (
        max /
        amount
      ))
      
      let ledId = `${position}Led${lId}`
      // let letIdRef = React.createRef();
      let postitionerFormated = `${positioner}px`
      let randomColor = Math.floor(Math.random()*16777215).toString(16)
      
      if ( position === 'top' || position === 'bottom' ) {
        if ( position === 'top' ) {
          leds.push(
            <Leds style={{
              position: 'absolute',
              display:'inline',
              left:postitionerFormated,
              color: `rgb(${lId}, 10, 10)`,
              top:0
            }}
                  key={ledId}
                  id={ledId}
                  className={ledstyle}
            />
          )
          // ledsrefs.push(letIdRef)
        } else {
          leds.push(
            <Leds style={{
              position: 'absolute',
              left:postitionerFormated,
              display:'inline',
              color: `rgb(10, ${lId}, 10)`,
              bottom:0
            }}
                  key={ledId}
                  id={ledId}
                  className={ledstyle}
            />
          )
          // ledsrefs.push(letIdRef)
        }
      } else {
        if ( position === 'left' ) {
          leds.push(
            <Leds style={{
              position: 'absolute',
              top:postitionerFormated,
              color: randomColor,
              left:0
            }}
                  key={ledId}
                  id={ledId}
                  className={ledstyle}
            />
          )
          // ledsrefs.push(letIdRef)
        } else {
          leds.push(
            <Leds style={{
              position: 'absolute',
              top:postitionerFormated,
              color: `rgb(10, 10, ${lId})`,
              right:0
            }}
                  key={ledId}
                  id={ledId}
                  className={ledstyle}
            />
          )
          // ledsrefs.push(letIdRef)
        }
      }
    }
    // return {
    //   leds: leds,
    //   ledsrefs: ledsrefs
    // }
    return leds
  }
  
  // startLights(){
  //   console.log(' Start the lights ')
  //   console.log(' SimulatorOptions ', this.videoeRef, ' createdLeds ', this.createdLeds, ' ledsRef ', this.createdLedsRefs )
  //   let hyperionSimulator = React.forwardRef(new _HyperionSimulator( this.videoeRef, this.createdLeds, this.createdLedsRefs ))
  // }
  
  createdLeds=[]
  
  props: Props;
  
  render () {
    let topLeds = this.generateLeds(
      'top',
      this.state.ledsSetup.ledsTop,
      this.state.ledsSetup.simulatorWidth,
      styles.topLeds
    )
    // let topLeds = topLedsObj.leds
    // let topLedsRefs = topLedsObj.ledsrefs
    
    // console.log('topLeds', { 1:'top', 2:this.state.ledsSetup.ledsTop, 3:this.state.ledsSetup.simulatorWidth, 4:styles.topLeds})
    let rightLeds = this.generateLeds(
      'right',
      this.state.ledsSetup.ledsRight,
      this.state.ledsSetup.simulatorHeight,
      styles.rightLeds
    )
    // let rightLeds = rightLedsObj.leds
    // let rightLedsRefs = rightLedsObj.ledsrefs
    
    // console.log('rightLeds', { 1:'right', 2:this.state.ledsSetup.ledsRight, 3:this.state.ledsSetup.simulatorHeight, 4:styles.rightLeds})
    let bottomLeds = this.generateLeds(
      'bottom',
      this.state.ledsSetup.ledsBottom,
      this.state.ledsSetup.simulatorWidth,
      styles.bottomLeds
    )
    // let bottomLeds = bottomLedsObj.leds
    // let bottomLedsRefs = bottomLedsObj.ledsrefs
    
    // console.log('bottomLeds', { 1:'bottom', 2:this.state.ledsSetup.ledsBottom, 3:this.state.ledsSetup.simulatorWidth, 4:styles.bottomLeds})
    let leftLeds = this.generateLeds(
      'left',
      this.state.ledsSetup.ledsLeft,
      this.state.ledsSetup.simulatorHeight,
      styles.leftLeds
    )
  
    // console.log('leftLeds', { 1:'left', 2:this.state.ledsSetup.ledsLeft, 3:this.state.ledsSetup.simulatorHeight, 4:styles.leftLeds})
    // let leftLeds = leftLedsObj.leds
    // let leftLedsRefs = leftLedsObj.ledsrefs
    
    this.createdLeds=[]
    this.createdLeds.push(topLeds)
    this.createdLeds.push(rightLeds)
    this.createdLeds.push(bottomLeds)
    this.createdLeds.push(leftLeds)
  
    // this.createdLedsRefs=[]
    // this.createdLedsRefs.push(React.forwardRef(topLedsRefs))
    // this.createdLedsRefs.push(React.forwardRef(rightLedsRefs))
    // this.createdLedsRefs.push(React.forwardRef(bottomLedsRefs))
    // this.createdLedsRefs.push(React.forwardRef(leftLedsRefs))
    
    return (
      <div id="Simulatorscreen" className={styles.simulatorscreencontainer} data-tid="simulatorscreencontainer">
        <h2 style={{textAlign: 'left'}} className={styles.screentitle}>Simulator</h2>
        <SimulatorTv simulatorTvStyle={this.state.simulatorFrame}
        >
          {topLeds}
          {rightLeds}
          {bottomLeds}
          {leftLeds}
          <video id="videoPlayer" muted={true} loop={ true } autoPlay={ true }
                 style={ this.state.videoSimulator }
          >
            <source id="innderVideoPlayer" src={ VideoV1 } type="video/mp4"/>
          </video>
        </SimulatorTv>
        <SettingsModal />
        <div className={styles.roomInterieurBorder} />
        <div className={styles.roomInterieurFloor} />
        <div className={styles.roomTVStand}>
          <div className={styles.tvStandTopPlateTop} />
          <div className={styles.tvStandTopPlate} />
          <div className={styles.tvStandBoxesLeft} >
            <div className={styles.boxesLeftTop}>
              <div className={styles.boxesHandle} />
            </div>
            <div className={styles.boxesLeftBottom}>
              <div className={styles.boxesHandle} />
            </div>
          </div>
          <div className={styles.tvStandBoxesMiddle} >
            <div className={styles.boxMiddleInlayPlateTop} />
            <div className={styles.boxMiddleInlayPlate} />
            <div className={styles.boxMiddleBottomPlateTop} />
          </div>
          <div className={styles.tvStandBoxesRight} >
            <div className={styles.boxesRightTop}>
              <div className={styles.boxesHandle} />
            </div>
            <div className={styles.boxesRightBottom}>
              <div className={styles.boxesHandle} />
            </div>
          </div>
          <div className={styles.tvStandBottomPlate} />
          <div className={styles.tvStandFoodLeft} />
          <div className={styles.tvStandFoodRight} />
        </div>
      </div>
    )
  }
}