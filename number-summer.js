// ## `number-summer.js`

// In a file called `number-summer.js` file, write a program that continually prompts the user for numbers until the user enters the keyword `"done"` at which point the sum of all the inputted numbers is logged out.


const prompt = require('prompt-sync')();

let someThing = prompt('Enter numbers you would like to add together. When finished type "done"             ');

let someThingCounter = 0;
let increaser = 0;
let numSomeThing = 0;
while (someThing !== 'done') {
    numSomeThing = Number(someThing);
    someThingCounter = increaser;
    increaser = numSomeThing + someThingCounter;
    someThing = prompt('Do you have more numbers you would like to add together. If not type "done"   ');
    console.log(someThing, increaser, numSomeThing);
}