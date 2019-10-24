// In the main process, check whether the app is starting
// because the user dragged files onto the app icon
process.argv.forEach(onOpen)

// Open handlers should be added on the first tick.
// These fire if the app is already running and the user
// drags files or URLs onto the dock icon, or if they set
// the app as a handler for a file type and then open a file
app.on('open-file', onOpen)
app.on('open-url', onOpen)

// Separately, in the renderer process, you can use the HTML5
// drag-drop API to create a drop target and handle files
// dropped directly onto the window.
