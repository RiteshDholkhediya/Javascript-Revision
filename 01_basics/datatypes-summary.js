// Primitive types : they are passed by value

// 7 types :  String,  Number, Boolean, null, undefined, Bigint, Symbol

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId); //false,  there values are same but they are not same rather unique

// Reference types (Non Primitive)

// Array, Object, Function

const heroes = ["Shaktimaan", "Hanuman", "Doga"];
const myObj = {
  name: "Ritesh",
  age: 26,
};

const myFuntion = function () {
  console.log("hello world");
};

// console.log(typeof myFuntion);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory (Primitive types) and Heap memory (Non-Primitive types)

/*
- In primitive type we get the copy declared varibles
- In Non-Primitive types we get the refference of the declared variable


*/

let youtubeName = "RiteshDholkhediya";
let anotherName = youtubeName;
anotherName = "ChaiAurCode";

// console.log(anotherName); //ChaiAurCode
// console.log(youtubeName); // RiteshDholkhediya
// As you can see both have different values thats means variable got the copy of another variable;

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne; // this will get the reference not the value
userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);
