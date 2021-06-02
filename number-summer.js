// ## `number-summer.js`

// In a file called `number-summer.js` file, write a program that continually prompts the user for numbers until the user enters the keyword `"done"` at which point the sum of all the inputted numbers is logged out.

// import prompt sync
const prompt = require('prompt-sync')();

// get something from user
let someThing = prompt('Enter numbers you would like to add together. When finished type "done"             ');

// set alternate variables
let someThingCounter = 0;
let increaser = 0;
let numSomeThing = 0;

//begin while loop that increases a number as the user so chooses.
while (someThing !== 'done') {
    numSomeThing = Number(someThing);
    someThingCounter = increaser;
    increaser = numSomeThing + someThingCounter;
    console.log('+ ', numSomeThing);
    console.log('= ', increaser);
    console.log('---------');
    someThing = prompt('Do you have more numbers you would like to add together. If not type "done"   ');

}

console.log('Thank you for using my simple addition program. Your added numbers resulted in  | ', increaser, ' |');