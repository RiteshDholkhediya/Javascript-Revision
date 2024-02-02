const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website `); // this is pointing to current context (user)
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // value of 'this' in browser : window object and in node '{}' empty object

// function chai() {
//   let username = "hitesh";
//   console.log(this); // here 'this' will have value in node environment and in browser environment it will be window object
// //   console.log(this.username); // undefined
// }
// chai();

// const chai = function () {
//   let username = "ritesh";
//   console.log(this.username);
// };

// const chai = () => {
//   console.log(this); // for node environment : {} and for browser : window
// };
// chai();

// const addTwo = (num1, num2) => num1 + num2; // this will returned implicitly
// const addTwo2 = (num1, num2) => (num1 + num2); // this will returned implicitly
// console.log(addTwo(3,4));
// console.log(addTwo2(3,5));

// const addTwo = (num1, num2) => ({ username: "Ritesh Dholkhediya" }); // if we dont use bracket this will return nothing for object
// console.log(addTwo(2, 3));
