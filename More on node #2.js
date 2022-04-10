process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    largestPrimeFactor(input)
});
function largestPrimeFactor(number) {
    //enter your code here  
    var divisor = 2
    while (number > 1) {
        if (number % divisor === 0) {
            number /= divisor;
        } else {
            divisor++;
        }
    }
    console.log(divisor);
}




