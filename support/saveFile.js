'use strict';
const exec = require('child_process').execFile;
const path = require('path');
const fs = require('fs');

var filePaths = {
	'pic': './filesToUpload/pic_downloaded.jpg',
	'txt': './filesToUpload/code_downloaded.txt',
	'video': './filesToUpload/video_downloaded.mp4',
	'invalid-pic': './filesToUpload/5mb.jpg',
	'invalid-txt': './filesToUpload/more-than-500kb.txt'
};

var save = function (fileType) {
	var pth = path.resolve(__dirname, filePaths[fileType]);
	if (fs.existsSync(pth)) {
		//console.log("file already exists, will be removed...");
		fs.unlinkSync(pth);
	}
	exec('./support/exe/ctrl-s.exe', [pth], function (err, data) {
		//console.log(err);
		//console.log(data.toString());
	});
};

module.exports = save;
