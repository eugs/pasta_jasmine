'use strict';
const PastiePage = require('../po/pastiePage.js');
const HomePage=require('../po/homePage.js');
const helper = require('../support/Helper.js');

//!tests are bound
describe('check contain on pastie page', () => {
    var pastiePage;
    var main;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        pastiePage = new PastiePage();
        main = new HomePage();
    });

    afterEach(() => {
        helper.pauseFor(1000);
    });

    it('should open the pastie page', () => {
        pastiePage.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/jus7wnrw');
    });

    it('should check link on pastie page', function(){
        expect(pastiePage.getLinkField()).toEqual('https://pasta.lab.epam.com/pasties/jus7wnrw');
    });

    it('should check describe on pastie page', function(){
        expect(pastiePage.getDescText()).toEqual('Image file');
    });

    it('should check button copy on pastie page', function(){
        pastiePage.clickCopyButton();
        expect(pastiePage.getLinkCopyButton()).toEqual('https://pasta.lab.epam.com/pasties/jus7wnrw');
    });
});
