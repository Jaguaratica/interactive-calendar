const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 700,
        height: 800,
        resizable: false
    });
    
    mainWindow.loadURL(`file://${__dirname}/index.html`)

});

