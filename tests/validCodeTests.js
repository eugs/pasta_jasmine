'use strict';
const helper = require('../support/Helper.js');
const CodePage = require('../po/codePage.js');
const HomePage = require('../po/homePage.js');

//!tests are bound
describe('checking code page', () => {
    var codePage;
    var main;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        codePage = new CodePage();
        main = new HomePage();

        main.visit();
        main.setDescription("JS Code");
        main.uploadUI('javascript');
        helper.waitForAndClick(main.shareButton, helper.waitForVisible);
    });

    afterEach(() => {
        browser.sleep(1000);
    });

    it('should identify JS syntax', function () {

        // check btn off
        codePage.clickSyntaxButton();
        expect(codePage.syntaxButtonIsOn()).toBeFalsy();

        // all highlights are off
        expect(codePage.getComments().count()).toEqual(0);
        expect(codePage.getTypes().count()).toEqual(0);
        expect(codePage.getStrings().count()).toEqual(0);

        /* check btn on */
        codePage.clickSyntaxButton();
        expect(codePage.syntaxButtonIsOn()).toBeTruthy();

        /* all highlights are on */
        expect(codePage.getComments().count()).toBeGreaterThan(0);
        expect(codePage.getTypes().count()).toBeGreaterThan(0);
        expect(codePage.getStrings().count()).toBeGreaterThan(0);
    });

    it('should highlight JS syntax with proper colors', function () {
        expect(codePage.getCommentsColor()).toEqual(codePage.colors['comments']);
        expect(codePage.getTypesColor()).toEqual(codePage.colors['types']);
        expect(codePage.getStringsColor()).toEqual(codePage.colors['strings']);
    });

});
