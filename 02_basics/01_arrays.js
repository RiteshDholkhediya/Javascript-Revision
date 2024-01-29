const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Hanuman", "power ranger"];
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2);

// Array methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop(6);

// myArr.unshift(9, 2); // add elements at start
// myArr.shift(); // remove elements from start

// console.log(myArr.includes(9)); // return true or false
// console.log(myArr.indexOf(9)); // return -1 if value not found, else index

// const newArray = myArr.join("-");

// console.log(newArray);////0-1-2-3-4-5
// console.log(myArr);

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);

console.log("C ", myArr);


