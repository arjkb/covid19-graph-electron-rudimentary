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

    // window.loadURL(url.format({
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file:',
    //     slashes: true,
    // }))

    window.once('ready-to-show', () => {
        window.show()
    })
})

// app.whenReady().then(createWindow)