'use strict';
const helper = require('../support/Helper.js')
const PastiePage = require('./pastiePage.js');

class VideoPage extends PastiePage {
	
	constructor() {
		super();
		this.videoPlayer = element(by.css('#VideoElement'));
		this.downloadButtonInPlayer = element(by.css('.fa-download'));
	}

	getVideoURL() {
		return element(by.css('#VideoElement > source')).getAttribute("src");
	}
}

module.exports = VideoPage;
