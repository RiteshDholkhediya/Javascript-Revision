const arr = [1, 2, 4, 6, 5, 6];

for (const val of arr) {
  //   console.log(val);
}

const greetings = "Hello Ritesh";
for (const greet of greetings) {
  //   console.log(`Each char ${greet}`);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United state of america");
map.set("Fr", "France");

// console.log(map);
//output:
/*Map(3) {
    'IN' => 'India',
    'USA' => 'United state of america',
    'Fr' => 'France'
  }
*/

for (const [key, val] of map) {
  //   console.log(`${key} :- ${val}`);
}

const myObj = {
  game1: "Contra",
  game2: "Taken 3",
};

// for (const [key, val] of myObj) {
//   //   console.log(key + ":-" + val);// error:  myObj is not iterable
// }

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(`${key} is shortcut for ${myObject[key]}`);
}

/* Note :
 - You can use forof loop on iterables in js like strings, array, object
 - new Map() is not iterable so you can't use forin loop on it
 */
