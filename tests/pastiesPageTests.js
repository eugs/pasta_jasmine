'use strict';
const PastiesPage = require('../po/pastiesPage.js');
const HomePage = require('../po/homePage.js');
const helper = require('../support/Helper.js');

describe('check contain on pasties page', () => {
    var main;
    var pastiesPage;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        main = new HomePage();
        pastiesPage = new PastiesPage();
    });

    afterEach(() => {
        helper.pauseFor(1000);
    });

    it('should open the main page', () => {
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
    });

    it('should open the pasties page', () => {
        main.header.clickPasties();
        helper.waitForVisible(pastiesPage.prevPageButton);
        helper.waitForClickable(pastiesPage.nextPageButton);
        expect(pastiesPage.getUrl()).toEqual(
            'https://pasta.lab.epam.com/pasties/page/1');
        expect(pastiesPage.getPastiesAmount()).toBe(10);
    });

    it('should check ID sharing file', () => {
        pastiesPage.pastiesID.first().getText().then((id) => {
            pastiesPage.choosePastie(id);
            helper.pauseFor(1000);
            expect(browser.getCurrentUrl()).toEqual(
                'https://pasta.lab.epam.com/pasties/' + id);
        });
    });
});
