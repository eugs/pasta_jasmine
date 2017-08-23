'use strict';
const BasePage = require('./BasePage.js');

class PastiesPage extends BasePage {

    constructor() {
        super();
        this.pastiesID = $$('a.pastie-link');
        this.pastiesExp = $$('tr.url>td:nth-child(2)');
        this.pastiesDesc = $$('tr.url>td:nth-child(3)');
        this.pastiesCopyButton = $$('tr.url copy-to-clipboard');
        //this.nextPageButton = $$('li.next-page>a');
        this.prevPageButton = $('ul.pagination-items.prev');
        this.nextPageButton = $('ul.pagination-items.next');
    }

    getPastieLine(pastieID) {
        return this.pastiesID.reduce(function(acc, elem, ind) {
            return elem.getText().then(function(text) {
                if (text == pastieID) {
                    return acc + ind;
                } else {
                    return acc;
                }
            });
        }, '');
    }


    getExp(pastieID) {
        return this.getPastieLine(pastieID)
            .then((line) => {
                if (line) {
                    return this.pastiesExp.get(line).getText();
                } else {
                    this.nextPageButton.click();
                    browser.sleep(3000);
                    return this.getExp(pastieID);
                }
            });
    }

    choosePastie(pastieID) {
    	let pastieLine = this.getPastieLine(pastieID);
    	return this.pastiesID.get(pastieLine).click();
    }

    getLinkCopyButton(pastieID) {
        return this.getPastieLine(pastieID)
            .then((line) => {
                if (line) {
                    return this.pastiesCopyButton.get(line).getAttribute('copy-to-clipboard');
                } else {
                    this.nextPageButton.click();
                    browser.sleep(3000);
                    return this.getLinkCopyButton(pastieID);
                }
            });
    }

    getPastiesAmount() {
    	return this.pastiesID.count();
    }

    getDescription(pastieID) {
        return this.getPastieLine(pastieID)
            .then((line) => {
                if (line) {
                    return this.pastiesDesc.get(line).getText();
                } else {
                    this.nextPageButton.click();
                    browser.sleep(3000);
                    return this.getDescription(pastieID);
                }
            });
    }
}

module.exports = PastiesPage;
