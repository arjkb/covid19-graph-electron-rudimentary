const { app, BrowserWindow } = require('electron')

app.once('ready', () => {
    const window = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
        },
        show: false,
        resizable: false
    })

    window.loadFile('index.html')    

    // window.webContents.openDevTools()

    window.once('ready-to-show', () => {
        window.show()
    })
})