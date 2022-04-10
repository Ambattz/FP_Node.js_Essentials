var fs = require('fs');
var data = '';
var readStream = fs.createReadStream('/tmp/foo.txt', { encoding: 'utf8' });
readStream.on('data', function (chunk) {
    data += chunk;
    console.log(chunk);
});