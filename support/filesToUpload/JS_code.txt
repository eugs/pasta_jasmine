'use strict';

var helper = require('../support/Helper.js');
var CodePage = require('../po/codePage.js');
var codePage = new CodePage();
var HomePage = require('../po/homePage.js');
var main = new HomePage();

describe('upload file on main page', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
        main.setDescription("JS Code");
        main.uploadUI('javascript');
        helper.waitForAndClick(main.shareButton, helper.waitForVisible);
    });

    afterEach(() => {
        browser.sleep(1000);
    });


    it('should identify JS syntax', function() {

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

        // all highlights are on
      expect(codePage.getComments().count()).toBeGreaterThan(0);
      expect(codePage.getTypes().count()).toBeGreaterThan(0);
      expect(codePage.getStrings().count()).toBeGreaterThan(0);

    });

    it('should highlight JS syntax with proper colors', function() {
      var colors = {
                    'comments' : 'rgba(35, 110, 36, 1)',
                    'types' : 'rgba(147, 15, 128, 1)',
                    'strings' : 'rgba(26, 26, 166, 1)'
                  };

      expect(codePage.getCommentsColor()).toEqual(colors['comments']);
      expect(codePage.getTypesColor()).toEqual(colors['types']);
      expect(codePage.getStringsColor()).toEqual(colors['strings'])

    });

  });
