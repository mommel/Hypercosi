const electron = require('electron')
const config = require('../config')

const init = () => {
  electron.crashReporter.start({
    companyName: config.APP_NAME,
    productName: config.APP_NAME,
    submitURL: config.CRASH_REPORT_URL,
  })
}

module.exports = {
  init,
}
