'use strict';
const HomePage = require('../po/homePage.js');
const CodePage = require('../po/codePage.js');
const helper = require('../support/Helper.js');

//!tests are bound
describe('upload file on main page', () => {
    var main;
    var codePage;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        main = new HomePage();
        codePage = new CodePage();
        main.visit();
        //main.login();
        //setTimeout(function() {
        //  done();
        //}, 10000);
    });

    afterEach(() => {
        helper.pauseFor(1000);
    });

    //! expect should correspond to test description
    it('should upload valid txt file', function () {
        main.setDescription("Txt file");
        main.setExpirationDate('10min');
        expect(main.uploadButton.isPresent()).toBe(true);
        main.uploadUI('txt');
        main.shareButton.click();
    });

    it('should display copy button and syntax switch', function () {
        helper.waitForClickable(codePage.copyButton);
        expect(codePage.copyButton.isPresent()).toBe(true);
        helper.waitForClickable(codePage.syntaxLabel);
        expect(codePage.syntaxLabel.isPresent()).toBe(true);
    });
});
