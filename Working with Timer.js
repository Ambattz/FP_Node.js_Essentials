process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    logString(_input);
});
function logString(stringToLog) {
    //Enter your code here
    setTimeout(function () {
        console.log(`Logging ${stringToLog} every 0.5 seconds`)
    }, 300);
    mainInterval = setInterval(function () {
        console.log(stringToLog);
    }, 500);
    setTimeout(function () {
        clearInterval(mainInterval);
        return;
    }, 2600);
} 
