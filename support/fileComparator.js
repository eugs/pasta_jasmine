'use strict';
const fs = require('fs');
const path = require('path');

var compareFiles = function (path1, path2) {
    let data1 = fileToString(path1);
    let data2 = fileToString(path2);
    if (data1 === data2) {
        return true;
    } else {
        throw ("different files:" + data1.length + " vs " + data2.length);
    }
};

function fileToString(file) {
    let pth = path.resolve(__dirname, file);
    let contents = fs.readFileSync(pth).toString();
    return contents;
}

module.exports = compareFiles;
