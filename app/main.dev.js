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

const { app, BrowserWindow, systemPreferences, nativeTheme } = require('electron')
const config = require('./config')
const { hot } = require ('react-hot-loader/root')
// const { autoUpdater } = require('electron-updater')
// const { log } = require('electron-log')
const { menu } = require('./utils/system/menu')

/*
export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}
*/
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
  console.log(icon)
  const opts = {
    show: false,
    minWidth: 1200,
    minHeight: 600,
    center: true,
    kiosk: false,
    title: config.APP_NAME,
    webPreferences: {
      nodeIntegration: true,
    },
    //icon: icon,
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
  
    // Setup Menu
    if (menu) {
      Menu.setApplicationMenu(menu);
    }

    console.log(config.APP_FILE_ICON)
    //const traymenu = require('./utils/system/traymenu')
    
    if (process.env.START_MINIMIZED
    || process.env.REACT_APP_START_MINIMIZED
    ){
      win.minimize()
    } else {
      win.show()
      win.focus()
    }
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
  //console.log('***** SET OPS FOR DS *****')
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
/*
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
  
  // eslint-disable-next-line
  //new AppUpdater()
});