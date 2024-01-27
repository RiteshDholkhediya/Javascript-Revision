let myDate = new Date();
// console.log(myDate); // 2024-01-27T09:17:02.763Z
// console.log(typeof myDate); // object

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());

// let myCreateDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime()); // this will also return timestamp since 1970 jan midnight

// console.log(Math.floor(Date.now() / 1000)); // answer will be in seconds

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

newDate.toLocaleString("default", {
  weekday: "long",
});
