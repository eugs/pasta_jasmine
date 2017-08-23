'use strict';
const exec = require('child_process').execFile;
const path = require('path');

var filePaths = {
	'pic': './filesToUpload/pic_downloaded.jpg',
	'txt': './filesToUpload/code_downloaded.txt',
	'video': '',
	'invalid-pic': './filesToUpload/5mb.jpg'
};

var save = function (fileType) {
	exec('./support/exe/ctrl-s.exe', [path.resolve(__dirname, filePaths[fileType])],
		function (err, data) {
			//console.log(err);
			//console.log(data.toString());
		});
};

module.exports = save;
