process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {

    var events = require('events');
    var eventEmitter = new events.EventEmitter();
    // Enter your code here
    var numArray = input.split(' ').map(Number);
    var logInfo = function (a, b) {
        console.log(`Multiples of ${numArray[0]} & ${numArray[1]}`);
    }
    eventEmitter.on('MyEvent', logInfo);
    function findSum(n, a, b) {
        var sum = 0;
        for (let i = 0; i <= n; i++) {
            // If i is a multiple of a or b
            if (i % a == 0)
                sum += i;
            if (i % b == 0)
                sum += i;
        }

        console.log(sum);
    }
    eventEmitter.emit('MyEvent');
    setTimeout(findSum, 2000, 1000, numArray[0], numArray[1]);
});
