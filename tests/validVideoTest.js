'use strict';
const HomePage = require('../po/homePage.js');
const VideoPage = require('../po/videoPage.js');
const helper = require('../support/Helper.js');

describe('upload valid video', () => {
    var main;
    var videoPg;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        main = new HomePage();
        videoPg = new VideoPage();
    });

    beforeEach(() => {
        main.visit();
    });

    it('should upload a video', () => {
        main.uploadUI('video');
        helper.waitForClickable(main.shareButton);
        main.shareButton.click();
        expect(videoPg.videoPlayer.isPresent()).toBe(true);
    });

    // FAILED because of videoPlayer issues
    it('should download the video through Player', () => {
        main.uploadUI('video');
        expect(main.shareButton.isPresent()).toBe(true);
        expect($('#VideoElement').isPresent()).toBe(true);
        helper.waitForAndClick(main.shareButton);

        helper.waitForClickable(videoPg.copyButton);
        let expTitle = videoPg.getPageTitle();
        helper.hoverMouseOn(videoPg.videoPlayer); videoPg.downloadButtonInPlayer.click();
        helper.pauseFor(2000);
        expect(browser.getTitle()).toEqual(expTitle);
    });
});
