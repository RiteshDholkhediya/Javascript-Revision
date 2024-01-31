// const tinderUser  = new Object(); // this is single ton object

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Ritesh",
      lastName: "Dholkhediya",
    },
  },
};

// console.log(regularUser.fullName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 2: "c", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const Obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(Obj4);

// console.log({ ...obj1, ...obj2 });

// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

const course = {
  courseName: "js hindi",
  price: "999",
  courseInstructor: "Hitesh choudhary",
};

const { courseName, courseInstructor: instructor } = course;
// console.log(courseName); //js hindi, this is destructuring
// console.log(instructor); // we destructured courseInstructor and gave it different name

function addTwoNumbers(num1, num2) {
  console.log(`num1 :  ${isNaN(num1)}, num2 : ${isNaN(num2)}`);
  console.log(num1 + num2); // 6
}

// const result = addTwoNumbers("", false);
// console.log(result); // undefined

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage());
