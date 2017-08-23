'use strict';
const BasePage = require('./BasePage.js');

class PastiePage extends BasePage {

	constructor() {
		super();
		this.url = 'pasties/jus7wnrw';
		this.linkField = $('p.url');
		this.copyButton = $('copy-to-clipboard');
		this.contentBox = $('div.images');
		this.descText = $$('input').first();
	}

	getLinkField() {
		return this.linkField.getText();
	}

	clickCopyButton() {
		return this.copyButton.click();
	}

	getLinkCopyButton() {
		return this.copyButton.getAttribute('copy-to-clipboard');
	}

	getDescText() {
		return this.descText.getAttribute('value');
	}
}
module.exports = PastiePage;
