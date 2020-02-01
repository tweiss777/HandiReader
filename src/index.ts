// Apps main entry point
import {app, BrowserWindow} from 'electron';

function createWindow(): void{
    // our browser window with our defined window properties
    let window =  new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true
    }
    });
    // the html file associated with our window
    window.loadFile('index.html');

    // window.webContents.openDevTools();
    
    window.on('closed', () => {
        window = null;
    })


}

app.on('ready',createWindow);