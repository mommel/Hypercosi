// @flow
import react from 'react';
import { TouchBarColorPicker } from 'electron'
import { config } from "../../config";

export default class tbColorPicker {
  constructor(props) {
  
  }
  create () {
    this.colorPicker = new TouchBarColorPicker();
    this.colorPicker.on('change',console.log(this.colorPicker.selectedColor()))
  }
  colorPicker = null
}