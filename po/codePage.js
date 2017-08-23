'use strict';
const PastiePage = require('../po/pastiePage.js');
const helper = require('../support/Helper.js');

class CodePage extends PastiePage {

	constructor() {
		super();
		// this.syntaxLabel=element(by.css('span.on-text'));
		this.syntaxLabel = browser.$('.highlighting');
		this.colors = {
            'comments': 'rgba(35, 110, 36, 1)',
            'types': 'rgba(147, 15, 128, 1)',
            'strings': 'rgba(26, 26, 166, 1)'
        };
	}

	clickSyntaxButton() {
		return helper.waitForAndClick(this.syntaxLabel, helper.waitForVisible);
	}

	getSyntaxButton() {
		return this.syntaxLabel;
	}

	syntaxButtonIsOn() {
		return browser.$(
				'.switch-toggle.ng-untouched.ng-valid.ng-dirty.ng-valid-parse.ng-not-empty'
			).isPresent()
			.then((result) => {
				return result
			});
	}

	getCodeContainer() {
		return browser.$('.pastie-block.details-block');
	}

	getCommentsColor() {
		return this.getComments().first().getCssValue('color');
	}

	getStringsColor() {
		return this.getStrings().first().getCssValue('color');
	}

	getTypesColor() {
		return this.getTypes().first().getCssValue('color');
	}

	getComments() {
		return this.getCodeContainer().$$('.ace_comment');
	}

	getStrings() {
		return this.getCodeContainer().$$('.ace_string');
	}

	getTypes() {
		return this.getCodeContainer().$$('.ace_type');
	}
}
module.exports = CodePage;
