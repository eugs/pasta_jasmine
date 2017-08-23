'use strict';
const helper = require('../support/Helper.js')
const PastiePage = require('./pastiePage.js');

class ImagePage extends PastiePage {

	constructor() {
		super();
	}

	showPreview() {
		return helper.waitForAndClick(browser.$('img.content-image.ng-scope'));
	}

	closePreview() {
		let bigImg = browser.$('img.fullscreen-image.ng-scope');
		return helper.waitForAndClick(bigImg, helper.waitForVisible);
	}

	bigImageIsVisible() {
		let modalWindow = browser.$('div.modal-window');
		return modalWindow.getAttribute('style')
			.then((text) => {
				return (text === "display: block;")
			});
	}

	getImageURL() {
		let element = browser.$('div img.fullscreen-image.ng-scope');
		return helper.waitForPresence(element)
			.then(() => {
				return element.getAttribute("src")
			});
	}

	saveIMG() {
		return new Promise((resolve, reject) => {
			let save = require('../support/saveFile.js');
			this.getImageURL()
				.then((url) => {
					return browser.get(url);
				})
				.then(() => {
					save('pic');
					//console.log("img saved");
					// browser.sleep(3000);
					resolve("downloaded");
				});
		});
	}
}
module.exports = ImagePage;
