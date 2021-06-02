// number-doubler.js
// Write a program that prompts the user for a number, then repeatedly doubles that number until it is greater than or equal to 100.

// Example
// Enter a number:
// > 23

// 23
// 46
// 92
// 184

const prompt = require('prompt-sync')();


let initNum = prompt('Give me a number less than 180 double it up to and stop when close to 180');
let numInitNum = Number(initNum);

while (numInitNum <= 180) {
    console.log(numInitNum);
    numInitNum = numInitNum * 2;
}
console.log(numInitNum);
console.log("That's All Folks")