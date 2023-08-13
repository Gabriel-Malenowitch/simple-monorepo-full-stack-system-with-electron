// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
  })

  // And load the index.html of the app.
  mainWindow.loadFile('./public/index.html')
  mainWindow.loadURL('http://localhost:3001')

  // Open the DevTools.
  // MainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// Initialization and is ready to create browser windows.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // Dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// For applications and their menu bar to stay active until the user quits
// Explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// Code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.
