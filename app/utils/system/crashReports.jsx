// @flow
import react from 'react';
const { crashReporter } = require('electron')
const { config } = require('config')

crashReporter.start({
  productName: config.APP_NAME,
  companyName: config.APP_TEAM,
  submitURL: config.CRASH_REPORT_URL,
  uploadToServer: false
})