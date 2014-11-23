var app = require('app');
var Menu = require('menu');
var MenuItem = require('menu-item');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    'use-content-size': true,
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
	mainWindow.openDevTools();
});

app.on('window-all-closed', function() {
	console.log('window-all-closed');
	app.quit();
});

app.on('will-finish-launching', function() {
	console.log('will-finish-launching');
});

app.on('will-quit', function() {
	console.log('will-quit');
});

app.on('quit', function() {
	console.log('quit');
});

app.addRecentDocument('/Users/kimyangwon/Develop/Ninja/atom-app-builder/README.md');

console.log('app.getDataPath(): '+ app.getDataPath());
console.log('app.getVersion(): '+ app.getVersion());
console.log('app.getName(): '+ app.getName());

var dockMenu = Menu.buildFromTemplate([
  { label: 'New Window', click: function() { console.log('New Window'); } },
  { label: 'New Window with Settings', submenu: [
    { label: 'Basic' },
    { label: 'Pro'},
  ]},
  { label: 'New Command...'},
]);

// console.log(dockMenu);

// app.dock.setMenu(dockMenu);

app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'New Window',
    description: 'Create a new winodw'
  }
]);