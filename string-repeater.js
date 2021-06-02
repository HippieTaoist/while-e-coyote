// string-repeater.js
// Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.
const prompt = require('prompt-sync')();

let stringMe = prompt("Got a string you want to give me? It's only a fwe little characters.    ");

let n = stringMe.length;
// Examples
// Enter a string:
// > abc
while (n < 10) {
    console.log(stringMe);
    stringMe = stringMe + stringMe;
    n = stringMe.length;
};
console.log(stringMe);
// abc
// abcabc
// abcabcabc
// abcabcabcabc
// Enter a string:
// > a

// a
// aa
// aaa
// aaaa
// aaaaa
// aaaaaa
// aaaaaaa
// aaaaaaaa
// aaaaaaaaa
// aaaaaaaaaa