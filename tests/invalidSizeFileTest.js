'use strict';
var HomePage = require('../po/HomePage.js');

describe('invalid files tests', () => {
    var main;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        main = new HomePage();
        //main.visit();
        //browser.sleep(5000);
        //main.login();
        //console.log("!!!!!!! BEFORE ALL LOGIN end");
    });

    beforeEach(() => {
        main.visit();
    });

    it('should show an alert with defined text for invalid-size img', () => {
        main.uploadUI('invalid-pic');
        expect(main.invalidSizeAlert.isPresent()).toBe(true);
        expect(main.invalidSizeAlert.getText()).toEqual(main.invalidSizeImgText);
    });

    it('should show an alert with defined text for invalid-size txt', () => {
        main.uploadUI('invalid-txt');
        expect(main.invalidSizeAlert.isPresent()).toBe(true);
        expect(main.invalidSizeAlert.getText()).toEqual(main.invalidSizeTxtText);
    });
});
