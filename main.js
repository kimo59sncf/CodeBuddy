const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
        },
        // Configuration de l'icône selon la plateforme
        icon: process.platform === 'darwin'
            ? __dirname + '/assets/icon.icns' // MacOS
            : process.platform === 'win32'
            ? __dirname + '/assets/icon.ico'  // Windows
            : __dirname + '/assets/icon.png'  // Linux
    });

    // Chargez votre fichier HTML principal
    mainWindow.loadFile('index.html');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
