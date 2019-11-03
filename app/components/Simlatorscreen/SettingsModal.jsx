// @flow
import React, {Component } from 'react'
import styles from '../../styles/SimulatorSettingsmodal.css'
import SelectTVSize from './SelectTVSize'
import {
  FormGroup,
  Classes,
  InputGroup,
  Button,
  MenuItem
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
      </div>
    )
  }
}


