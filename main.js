const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;
let miniWindow;
let miniatureEnabled = true; // Contrôle si la miniature est activée

app.on('ready', () => {
    // Fenêtre principale
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
        },
        icon: process.platform === 'darwin'
            ? __dirname + '/icon.icns'
            : process.platform === 'win32'
            ? __dirname + '/icon.ico'
            : __dirname + '/icon.png'
    });

    mainWindow.loadFile('index.html');

    // Gérer la minimisation
    mainWindow.on('minimize', () => {
        if (miniatureEnabled && !miniWindow) {
            miniWindow = new BrowserWindow({
                width: 300,
                height: 200,
                frame: false,
                resizable: false,
                alwaysOnTop: true,
                webPreferences: {
                    nodeIntegration: true,
                },
            });

            miniWindow.loadFile('miniature.html');
            miniWindow.setSkipTaskbar(true);

            miniWindow.on('closed', () => {
                miniWindow = null;
            });
        }
    });

    // Restaurer la fenêtre principale
    mainWindow.on('restore', () => {
        if (miniWindow) {
            miniWindow.close();
            miniWindow = null;
        }
    });

    // Écouteur pour fermer la fenêtre miniature
    ipcMain.on('close-mini-window', () => {
        if (miniWindow) {
            miniWindow.close();
            miniWindow = null;
        }
    });

    // Gérer le basculement du thème
    ipcMain.on('toggle-theme', (event, theme) => {
        if (miniWindow) {
            miniWindow.webContents.send('toggle-theme', theme);
        }
    });

    // Gérer l'activation/désactivation de la miniature
    ipcMain.on('toggle-miniature', (event, enabled) => {
        miniatureEnabled = enabled;
    });

    // Quitter l'application quand toutes les fenêtres sont fermées
    mainWindow.on('closed', () => {
        app.quit();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
