// @flow
import { Component } from 'react'
// import Toolbar from "../Toolbar/Toolbar";
// import styles from '../../styles/Simulatorscreen.css'
// import banner from '../../images/banner.png'
import { FormGroup, InputGroup } from '@blueprintjs/core';

type Props = {};

export default class Simulatorscreen extends Component<Props> {
  props: Props;
  
  render () {
    return (
      <div >
        <h2>Simulator</h2>
        <FormGroup
          helperText="Helper text with details..."
          label="Label A"
          labelFor="text-input"
          labelInfo="(required)"
        >
          <InputGroup id="text-input" placeholder="Placeholder text" />
        </FormGroup>
      </div>
    )
  }
}

/*
className={styles.container} data-tid="container"
<Toolbar/>
    <img alt="logo" src={banner} />
 */