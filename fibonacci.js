// ## `fibonacci.js`

// Write a program, `fibonacci.js` that accepts a number, `n`, from the user and consequently logs the first `n` values in the fibonacci sequence.

// The fibonacci sequence starts with 0 then 1. Each subsequent value can be obtained by summing the previous two values:
// ```
// 0 1 1 2 3 5 8 13 21 34 ...
// ```
const prompt = require('prompt-sync')();

const n = prompt('Enter how many far out you would like to see the Fibinacci sequence run . Numbers Only.     ')
const numN = Number(n);

let nacci1 = 0;
let counterNacci = 0;
let nacci2 = 1;
let totalNacci = 0;

while (counterNacci < (n)) {
    console.log(counterNacci++, '   ', totalNacci);
    totalNacci = nacci1 + nacci2;
    nacci1 = nacci2;
    nacci2 = totalNacci;
}

// ```
// Enter a value for "n":
// > 9

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// ```