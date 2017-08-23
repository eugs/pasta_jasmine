'use strict';
const EC = protractor.ExpectedConditions;
const TIMEOUT = 5000;

class Helper {

    // WAITS

    waitForPresence(element) {
        return browser.wait(EC.presenceOf(element, TIMEOUT));
    }

    waitForStale(element) {
        return browser.wait(EC.stalenessOf(element, TIMEOUT));
    }

    waitForVisible(element) {
        return browser.wait(EC.visibilityOf(element, TIMEOUT));
    }

    waitForClickable(element) {
        return browser.wait(EC.elementToBeClickable(element, TIMEOUT));
    }

    // Wait + Click
    // Give the link to your awaiting function or use default one
    waitForAndClick(element, waitFunction = EC.presenceOf) {
        return browser.wait(waitFunction(element, TIMEOUT)).then(() => {
            return element.click();
        });
    }

    //  JS actions

    JS_click(element) {
        return browser.executeScript("arguments[0].click();", element.getWebElement())
    }

    JS_scroll(element) {
        return browser.driver.executeScript(
            "arguments[0].scrollIntoView();", element.getWebElement())
    }

    // ACTIONS

    hoverMouseOn(element) {
        return browser.actions().mouseMove(element).perform()
    }

    pauseFor(milliseconds) {
        return browser.sleep(milliseconds);
    }

    // frame handling
    getFrame(frame_loc) {
        var el = browser.driver.findElement(frame_loc);
        return browser.switchTo().frame(el)
            .then(() => {
                return el;
            })
    }
}

module.exports = new Helper();
