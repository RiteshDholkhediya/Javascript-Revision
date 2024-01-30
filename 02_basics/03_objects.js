//Singleton
// Object.create

//Object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mySym1",
  age: 18,
  location: "delhi",
  email: "ritesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser); // after this line we cant change the object
JsUser.email = "hitesh@microsoft.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greeting = function () {
  console.log(`Hello JS user ${this.name}`);
};

console.log(JsUser.greeting());
