// @flow
import React, {Component } from 'react'
import styles from '../../styles/SimulatorSettingsmodal.css'
import SelectTVSize from './SelectTVSize'
import SelectLedStripe from "./SelectLedStripe";
import {
  FormGroup,
  Classes,
  InputGroup,
  Button,
  Label,
  MenuItem,
  Switch
} from "@blueprintjs/core";

type Props = {};

export default class SettingsModal extends Component<Props> {
  constructor(props){
    super(props)
    this.props = props
  }
  
  props: Props;
  
  render () {
    return (
      <div id="SimulatorSettings" className={styles.simulatorsettingscontainer} data-tid="simulatorsettingscontainer" >
        <SelectTVSize />
        <SelectLedStripe />
        <Label>Your TV is wallmounted
          <Switch id="text-input" label="yes" />
        </Label>
        <Label>Skip Bottom Leds
          <Switch id="text-input" label="yes" />
        </Label>
        <hr />
        <h4>Overview</h4>
        <ul>
          <li>
            <b>Leds total:</b><br /><i>200</i>
          </li>
          <li>
            <b>Needed Power:</b><br /><i>10A 5V 50W</i>
          </li>
        </ul>
      </div>
    )
  }
}


