if (true) {
  let a = 30;
  const b = 20;
  var c = 40;
}

// console.log(a);
// console.log(b);
// console.log(c);

console.log(addOne(3)); // 4
function addOne(num) {
  return num + 1;
}

// console.log(addTwo(3)); //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};

// Note :

/*
    - Node and window browser have different global scope
*/
