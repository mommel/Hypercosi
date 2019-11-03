/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */

const { app, BrowserWindow, crashReporter,
  nativeTheme, Menu, dialog  } = require('electron')
const join = require('path').join;
const isMac = process.platform === 'darwin'
const openAboutWindow = require('about-window').default;
const config = require('./config')
const { hot } = require ('react-hot-loader/root')

let mainWindow = null;

const createMainWindow = starthot =>  {
  const is2nd = process.argv.indexOf('--2nd') >= 0;
  const icon = (
      ( process.platform === 'darwin' )
        ? config.APP_FILE_ICON
        :(
          ( process.platform === 'windows' )
            ? config.APP_ICON
            : config.APP_FILE_ICON
        )
      )
  
  const menuTemplate = [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: 'HyperCoSi',
      submenu: [
        {
          label: 'About This App',
          click: () =>
            openAboutWindow({
              product_name: 'HyperCoSi',
              use_version_info: true,
              adjust_window_size: true,
              icon_path: join(__dirname, 'images', 'icon.png'),
              copyright: 'Copyright (c) 2019 HyperCosi Team',
              description: 'We like smooth enlightments.',
              licencse: 'MIT',
              homepage: 'https://mommel.github.io/Hypercosi/',
              package_json_dir: join(__dirname, 'package.json'),
              open_devtools: process.env.NODE_ENV !== 'production',
            }),
        },
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
        {
          label: 'Save',
          click: () => { dialog.showSaveDialogSync()}
        },
        isMac ? { role: 'close' } : { role: 'quit' }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: () => {
            let child = new BrowserWindow({ parent: 0, modal: true, show: false })
            child.loadURL('https://github.com/mommel/Hypercosi/wiki')
            child.once('ready-to-show', () => {
              child.show()
            })
          }
        }
      ]
    }
  ]
  
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu);
  
  const opts = {
    show: false,
    width:1600,
    height:1000,
    minWidth: 1350,
    minHeight: 930,
    center: true,
    kiosk: false,
    title: config.APP_NAME,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: icon,
    titleBarStyle: 'default',
    darkTheme: nativeTheme.shouldUseDarkColors,
    defaultFontFamily: {
      standard: 'Helvetica Neue',
    },
    defaultFontSize: 12
  }
  
  
  if (is2nd) {
    setOptsForDualScreen(opts);
  }
  
  const win = new BrowserWindow(opts);
  win.loadFile('app.html')
  win.on('closed', onClosed);
  
  if( process.env.REACT_APP_SECURED && process.platform === 'darwin' ) {
    systemPreferences.promptTouchID('To get consent for a Security-Gated Thing').then(success => {
      console.log('You have successfully authenticated with Touch ID!')
    }).catch(err => {
      console.log(err)
    })
  }
  
  win.on('ready-to-show', () => {
    console.log('***** WIN READY-TO-SHOW *****')
    if (!win) {
      throw new Error('"mainWindow" is not defined');
    }
    
    if (process.env.START_MINIMIZED
    || process.env.REACT_APP_START_MINIMIZED
    ){
      win.minimize()
    } else {
      win.show()
      win.focus()
    }
  })
  
  
  crashReporter.start({
    productName: config.APP_NAME,
    companyName: config.APP_TEAM,
    submitURL: config.CRASH_REPORT_URL,
    uploadToServer: false
  })
  
  if( starthot )
  {
    return hot(win)
  } else {
    return win;
  }
}

const onClosed = () => {
  // dereference the window
  // for multiple windows store them in an array
  mainWindow = null;
}

function setOptsForDualScreen(opts) {
  const atomScreen = require('screen');
  const displays = atomScreen.getAllDisplays();
  const d2 = displays.length > 1 ? displays[1] : null;
  if (d2) {
    opts.x = d2.bounds.x + (d2.size.width - opts.width) / 2;
    opts.y = d2.bounds.y + (d2.size.height - opts.height) / 2;
  }
}

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (
  process.env.NODE_ENV === 'development'
  || process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')();
}

/**
 * Add event listeners...
 */

app.on('window-all-closed', (e) => {
  if (process.platform !== 'darwin' && !tray.hasTray()) {
    app.quit();
  } else if (!app.isQuitting) {
    e.preventDefault();
    mainWindow.hide();
  }
});


// app.on('ready', async () => {
app.on('ready', () => {
  console.log('***** APP READY *****')
  if (
    process.env.NODE_ENV === 'development'
    || ( process.env.DEBUG_PROD === 'true'
    || process.env.REACT_APP_DEBUG_PROD === 'true')
  ) {
    // require('devtron').install()
  }
  mainWindow = createMainWindow(
    process.env.NODE_ENV === 'development' && (
    process.env.HOT || process.env.REACT_APP_HOT
  ))
});