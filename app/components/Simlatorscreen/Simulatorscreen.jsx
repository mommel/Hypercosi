// @flow
import React, {Component } from 'react'
import styles from '../../styles/Simulatorscreen.css'
import SettingsModal from "./SettingsModal";
import SimulatorTv from "./SimulatorTv";

type Props = {};

export default class Simulatorscreen extends Component<Props> {
  constructor(props){
    super(props)
    this.props = props
  }
  
  props: Props;
  
  render () {
    return (
      <div id="Simulatorscreen" className={styles.simulatorscreencontainer} data-tid="simulatorscreencontainer">
        <h2 style={{textAlign: 'left'}} className={styles.screentitle}>Simulator</h2>
        <SimulatorTv />
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