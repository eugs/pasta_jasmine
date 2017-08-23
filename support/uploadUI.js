'use strict';
const exec = require('child_process').execFile;
const path = require('path');

// usage
//var uploader = require('../support/uploadUI');
// $('button[type=submit]').click();
// uploader('pic');

var filePaths = {
	'pic': './filesToUpload/pic.jpg',
	'txt': './filesToUpload/text.txt',
	'video': './filesToUpload/video.mp4',
	'invalid-pic': './filesToUpload/5mb.jpg',
	'invalid-txt': './filesToUpload/more-than-500kb.txt',
	'javascript': './filesToUpload/JS_code.txt'
};

var upload = function (fileType) {
	exec('./support/exe/upload.exe', [path.resolve(__dirname, filePaths[fileType])],
		function (err, data) {
			//console.log(err);
			//console.log(data.toString());
		});
};

module.exports = upload;
