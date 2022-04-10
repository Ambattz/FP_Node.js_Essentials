//Write your code here
const https = require('https');
var fs = require('fs');
var writeStream = fs.createWriteStream('Node.html');
const options = {
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/Nodejs',
    method: 'GET',
};
const req = https.request(options, res => {
    res.on('data', d => {
        writeStream.write(d, 'UTF8');
    });
});
writeStream.on('finish', () => {
    writeStream.end();
});
req.end()