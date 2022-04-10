// Create and export a module with two functions sum and multiply
// Both functions should two arguements and return the sum and product values
module.exports.sum = (a, b) => {
    return a + b
};
module.exports.multiply = (a, b) => {
    return a * b
};
//import the 'fs' and 'maths.js' module
//read the content of 'input.txt' file and copy the content to 'duplicate.txt' file
//call the 'sum and 'multiply' functions of maths module and store the return values in 'result' and 'product' variables
//write the content 'The sum of the numbers is: result. The product of the numbers is: product' to the 'output.txt' file
var fs = require('fs');
var maths = require('./maths.js');
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;
    fs.writeFile('duplicate.txt', data, (err) => {
        if (err) throw err;
    }
    )
}
)
var result = maths.sum(2, 3);
var product = maths.multiply(2, 3);
fs.writeFile('output.txt', `The sum of the numbers is: ${result}. The product of the numbers is: ${product}`, (err) => {
    if (err) throw err;
})