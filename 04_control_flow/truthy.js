const userEmail = "hitesh@gmail.com";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// Falsy values

// undefined, false, 0, -0, NaN, null, BigInt 0n

// truthy values
// "0", " ", 'false', " ", [], {}, functionality(){}

//How to check array is empty or not

/*if(userEmail.length === 0){
    console.log("Array is empty");
}
*/
//How to check object is empty or not

/*if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
*/ // here Object.keys(emptyObj) will return the array

//Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10; // 5;
// val1 = null ?? 10; // 10
// val1 = undefined ?? 10 ?? 20; // 10,  this will return value which is not null or undefined and in this case 10 comes before 20

// console.log(val1);
