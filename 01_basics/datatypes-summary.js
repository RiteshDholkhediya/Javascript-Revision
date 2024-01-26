// Primitive types : they are passed by value

// 7 types :  String,  Number, Boolean, null, undefined, Bigint, Symbol

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //false,  there values are same but they are not same rather unique

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

console.log(typeof myFuntion);