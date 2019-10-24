// Do this from the renderer process
let notif = new window.Notification('Download Complete', {
  body: torrent.name,
  silent: true, // We'll play our own sound
})

// If the user clicks in the Notifications Center, show the app
notif.onclick = function () {
  ipcRenderer.send('focusWindow', 'main')
}

// Play a sound using the standard HTML5 Audio API
sound.play('DONE')
