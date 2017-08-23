exports.config = {
    params: {
        defaultTimeOut: 15000
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showTiming: true
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
    },

    //specs: ['tests/login.js'],

    suites: {
        all: [
            'tests/*.js'
        ],
        code: [
            'tests/validTxtTest.js',
            'tests/validCodeTests.js'
        ],
        image: [
            'tests/validImgTest.js'
        ],
        pastie: [
            'tests/pastiePageTest.js',
        ],
        pasties: [
            'tests/pastiesPageTests.js'
        ],
        video: [
            'tests/validVideoTest.js'
        ],
        login: [
            'support/login.js'
        ],
        negative: [
            'tests/invalidSizeFileTest.js'
        ]
    },

    multiCapabilities: [{
            name: 'desktop',
            browserName: 'chrome',
            chromeOptions: {
                args: ['--window-size=1524,1068', '--disable-infobars']
            }
        }
    ]
}
