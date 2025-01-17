const { app, BrowserWindow } = require('electron')
const path = require('path');


// modify your existing createWindow() function .
function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
 
