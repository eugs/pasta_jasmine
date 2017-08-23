'use strict';
const moment = require('moment');
const url = require('url');
const HomePage = require('../po/HomePage.js');
const PastiesPage = require('../po/pastiesPage.js');
const PastiePage = require('../po/pastiePage');

describe('expiration date', () => {
    var ID;
    var expectedExpDate;
    var nowDate;
    var pastiesPage;
    var pastiePage;
    var main;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        pastiesPage = new PastiesPage();
        pastiePage = new PastiePage();
        main = new HomePage();
        main.visit()
            .then(() => main.login());
    });

    afterEach(() => {
        browser.sleep(1000);
    });

    beforeEach(() => {
        main.visit();
    });

    it('should display expiration date for 10min', () => {
        main.setExpirationDate('10min')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(10, 'm').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 10min = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });

    it('should display expiration date for 1d', () => {
        main.setExpirationDate('1d')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(1, 'd').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 1d = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });

    it('should display expiration date for 3d', () => {
        main.setExpirationDate('3d')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(3, 'd').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 3d = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });

    it('should display expiration date for 7d', () => {
        main.setExpirationDate('7d')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(7, 'd').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 7d = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });

    it('should display expiration date for 2w', () => {
        main.setExpirationDate('2w')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(2, 'w').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 2w = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });

    it('should display expiration date for 1month', () => {
        main.setExpirationDate('1mnth')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(1, 'M').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 1month = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });
});
