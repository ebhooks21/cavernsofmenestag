/**
 * GameWindow.js -- File to hold the GameWindow class.
 */
const {app, BrowserWindow, ipcMain} = require('electron');

class GameWindow {
	/**
	 * Main constructor for the GameWindow class.
	 */
	constructor(config) {
		let self = this;

		self.config = config;
	}
};

module.exports = GameWindow;