'use strict';
const HomePage = require('../po/homePage.js');
const ImagePage = require('../po/imagePage.js');
const helper = require('../support/Helper.js');
const compare = require('../support/fileComparator.js');

describe('upload file on main page', () => {
    var main;
    var imgPage;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        main = new HomePage();
        imgPage = new ImagePage();
        main.visit();
    });

    afterEach(() => {
        browser.sleep(2000);
    });

    it('should upload valid image file', function () {
        main.setExpirationDate('10min');
        main.uploadUI('pic');
        helper.waitForVisible(main.shareButton)
            .then(() => {
                expect(main.shareButton.isPresent()).toBe(true);
            });
        main.setDescription("Image file");
        main.shareButton.click();
        helper.waitForClickable(imgPage.copyButton).then(() => {
            expect(imgPage.copyButton.isPresent()).toBe(true);
        })
    });

    it('should show the preview', () => {
        expect(imgPage.bigImageIsVisible()).toBeFalsy();
        imgPage.showPreview();
        expect(imgPage.bigImageIsVisible()).toBeTruthy();
        imgPage.closePreview();
        expect(imgPage.bigImageIsVisible()).toBeFalsy();
    });

    it('should provide the same quality images as uploaded one', function () {
        // download uploaded image
        imgPage.saveIMG()
            .then(function (msg) {
                helper.pauseFor(3000)
                .then(() => {
                    var comparisonResult = compare(
                        './filesToUpload/pic_downloaded.jpg',
                        './filesToUpload/pic.jpg');
                    expect(comparisonResult).toBeTruthy();
                })
            });
    });
});
