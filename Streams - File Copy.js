var fs = require('fs');
var readableStream = fs.createReadStream('data_file.txt');
var writableStream = fs.createWriteStream('new_data_file.txt');
readableStream.pipe(writableStream);