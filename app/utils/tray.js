module.exports = {
  hasTray,
  init,
  onWindowBlur,
  onWindowFocus,
}

let electron = require('electron')

let app = electron.app

let config = require('../config')
let windows = require('./windows')

let tray

const init = () => {
  if (process.platform === 'linux') {
    initLinux()
  }
  if (process.platform === 'win32') {
    initWin32()
  }
  // OS X apps generally do not have menu bar icons
}

/**
 * Returns true if there a tray icon is active.
 */
const hasTray = () => {
  return !!tray
}

const onWindowBlur = () => {
  if (!tray) return
  updateTrayMenu()
}

const onWindowFocus = () =>  {
  if (!tray) return
  updateTrayMenu()
}

const initLinux = () => {
  checkLinuxTraySupport(function (supportsTray) {
    if (supportsTray) createTray()
  })
}

const initWin32 = () => {
  createTray()
}

/**
 * Check for libappindicator1 support before creating tray icon
 */
const checkLinuxTraySupport = cb => {
  let cp = require('child_process')

  // Check that we're on Ubuntu (or another debian system) and that we have
  // libappindicator1. If WebTorrent was installed from the deb file, we should
  // always have it. If it was installed from the zip file, we might not.
  cp.exec('dpkg --get-selections libappindicator1', function (
    err,
    stdout,
  ) {
    if (err) return cb(false)
    // Unfortunately there's no cleaner way, as far as I can tell, to check
    // whether a debian package is installed:
    cb(stdout.endsWith('\tinstall\n'))
  })
}

const createTray = () => {
  tray = new electron.Tray(getIconPath())

  // On Windows, left click opens the app, right click opens the context menu.
  // On Linux, any click (left or right) opens the context menu.
  tray.on('click', () => windows.main.show())

  // Show the tray context menu, and keep the available commands up to date
  updateTrayMenu()
}

const updateTrayMenu = () => {
  let contextMenu = electron.Menu.buildFromTemplate(getMenuTemplate())
  tray.setContextMenu(contextMenu)
}

let getMenuTemplate = () => {
  return [
    getToggleItem(),
    {
      label: 'Quit',
      click: () => app.quit(),
    },
  ]

  let getToggleItem = () => {
    if (windows.main.win.isVisible()) {
      return {
        label: 'Hide to tray',
        click: () => windows.main.hide(),
      }
    } else {
      return {
        label: 'Show WebTorrent',
        click: () => windows.main.show(),
      }
    }
  }
}

const getIconPath = () => {
  return process.platform === 'win32'
    ? config.APP_ICON + '.ico'
    : config.APP_ICON + '.png'
}
