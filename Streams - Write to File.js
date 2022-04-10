var fs = require('fs');
var writeData = "Node.js is an ultimate backend javascript for backend development";
var writableStream = fs.createWriteStream('Big_data.txt');
writableStream.write(writeData, 'utf-8');
writableStream.end();