module.exports = {
  downloadFinished,
  init,
  setBadge,
}

const electron = require('electron')
const app = electron.app
const dialog = require('./dialog')
const log = require('./log')

const init = () => {
  if (!app.dock) return
  let menu = electron.Menu.buildFromTemplate(getMenuTemplate())
  app.dock.setMenu(menu)
}

const downloadFinished = path => {
  if (!app.dock) return
  log(`downloadFinished: ${path}`)
  app.dock.downloadFinished(path)
}

const setBadge = text => {
  if (!app.dock) return
  log(`setBadge: ${text}`)
  app.dock.setBadge(String(text))
}

function getMenuTemplate () {
  return [
    {
      label: 'Create New Torrent...',
      accelerator: 'CmdOrCtrl+N',
      click: () => dialog.openSeedDirectory(),
    },
    {
      label: 'Open Torrent File...',
      accelerator: 'CmdOrCtrl+O',
      click: () => dialog.openTorrentFile(),
    },
    {
      label: 'Open Torrent Address...',
      accelerator: 'CmdOrCtrl+U',
      click: () => dialog.openTorrentAddress(),
    },
  ]
}
