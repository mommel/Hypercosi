// @flow
import react from 'react';
import { Menu, MenuItem, dialog } from 'electron'

const isMac = process.platform === 'darwin'

const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click: () => { dialog.showOpenDialogSync()}
      },
      {
        label: 'Save',
        click: () => { dialog.showSaveDialogSync()}
      },
      {
        label: 'Open2',
        click: () => { dialog.showOpenDialog(
          mainWindow, {
            defaultPath: '~/',
            properties: ['openFile', 'openDirectory'],
            message: 'OBEN',
            filters: [
              { name: 'HyperCoSi Workspace', extensions: ['hsc'] },
              { name: 'All Files', extensions: ['*'] }
            ]
          }).then(result => {
            console.log(result.canceled)
            console.log(result.filePaths)
          }).catch(err => {
            console.log(err)
          })}
      },
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
      ] : [
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://github.com/mommel/Hypercosi')
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

export default menu