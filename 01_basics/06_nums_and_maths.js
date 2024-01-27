const score = 400;
// console.log(score); // 400

const balance = new Number(100.036);
// console.log(balance); // output: [Number: 100.036]

// console.log(balance.toString().length); // 7

// console.log(balance.toFixed(2)); // 100.04, this method will return string

let otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3)); // 124
otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); //10,00,000

//++++++++++++++++++++++++ Math Library in Js +++++++++++++++++++++++++++++

// console.log(Math); // log this in browser than it will show its property and methods
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.5)); // 5
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(1, 2, 3, 4, 5)); // 1
// console.log(Math.max(2, 3, 3, 44, 2)); // 44

// Find random numbers using Math.random

console.log(Math.random());
console.log(Math.random() * 10 + 1); // now this will give number from 1 to 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Explanation
/*
    - (max-max+1) we are multiplying this b/c we want 10 numbers 
    - plus 1 is added for the maximum range, for ex- 20
*/
