'use strict';
class Header {

    constructor() {
        this.body = browser.$('.container-fluid.header-container');
    }

    getBody() {
        return this.body;
    }

    clickLogo() {
        return this.getBody().$('.main-logo').click();
    }

    clickPasties() {
        return this.getBody().$('.fa.fa-clipboard').click();
    }

    clickDocumentation() {
        return this.getBody().$('.fa.fa-book').click();
    }
};

module.exports = new Header();
