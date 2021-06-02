// make-divisble.js
// Write a program that prompts the user for two numberx, x and y. The program should add one to x until it is divisble by y.
const prompt = require('prompt-sync')();

console.log('We will be taking two numbers.');
let x = prompt('First number please.   ');
let numX = Number(x);
let y = prompt('Second number please.   ');
let numY = Number(y);
console.log('Your numbers are ', numX, '  and  ', numY);
console.log('This program will add 1 to ', numX, ' unil it is divisble by ', numY);
console.log(numX);
while (numX % numY !== 0) {
    numX++;

    console.log('+1 = ', numX);
}
console.log('');
console.log(numX, ' is divisble by ', numY);
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