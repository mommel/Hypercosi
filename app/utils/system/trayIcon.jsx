// @flow
import react from 'react';
const { nativeImage, Tray } = require('electron')
import { config } from '../../config'

class TrayIcon {
  constructor(props) {
    return new Tray(config.APP_FILE_ICON)
  }
}

export default TrayIcon;