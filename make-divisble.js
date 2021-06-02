// make-divisble.js
// Write a program that prompts the user for two numberx, x and y. The program should add one to x until it is divisble by y.
const prompt = require('prompt-sync')();

console.log('We will be taking two numbers. This program will add the second to the first repeatedly until that number is divisble by 4')
let x = prompt('First number please.   ');
let numX = Number(x);
let y = prompt('Second number please.   ');
let numY = Number(y);
console.log('Your numbers are ', numX, '  and  ', numY);
console.log('Together they equal ', numX + numY);
numX = numX + numY;
while (numX % 4 !== 0) {
    numX = numX + numY;

    console.log(numX);
}
console.log('');
console.log(numX, ' is divisble by 4')
    // Examples
    // Enter x: 
    // > 9
    // Enter y: 
    // > 1

// 9 is divisible by 1
// ```

// ```
// Enter x: 
// > 9
// Enter y: 
// > 2

// 9
// 10 is divisible by 2
// ```


// ```
// Enter x: 
// > 10
// Enter y: 
// > 3

// 10
// 11
// 12 is divisible by 3
// ```

// ```
// Enter x: 
// > 5
// Enter y: 
// > 4

// 5
// 6
// 7
// 8 is divisible by 4
// ```