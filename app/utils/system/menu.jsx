// @flow
import { Menu, MenuItem, dialog } from 'electron'
//const path = require('path');
const isMac = process.platform === 'darwin'
const openAboutWindow = require('about-window').default;

function generateMenu() {
  const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: app.name,
      submenu: [
        {
          label: 'About This App',
          click: () =>
            openAboutWindow({
              icon_path: join(__dirname, 'images', 'banner.png'),
              copyright: 'Copyright (c) 2019 HyperCosi Team',
              package_json_dir: __dirname,
              open_devtools: process.env.NODE_ENV !== 'production',
            }),
        },
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
  
}
export default generateMenu