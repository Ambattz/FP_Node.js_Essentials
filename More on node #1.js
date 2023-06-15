process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    //write your code within the function
    // convert string to an array  
    const arrayValues = input.split('');
    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();
    // convert array to string
    const reverseString = reverseArrayValues.join('');
    var inputstr = input.toLowerCase();
    var reverseStr = reverseString.toLowerCase();
    if (inputstr == reverseStr) {
        console.log('true');
    }
    else {
        console.log('false');
    }
});
