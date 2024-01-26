const name = "Ritesh";
const repoCount = 50;

// console.log(name + repoCount + " Value"); // this is not recommended nowdays

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this is the preferred way

// console.log(name.length); // 6

// Another way of decalring the string is :

const gameName = new String("hitesh"); // if you console this this will return the key values pair
console.log(gameName[0]); // h
console.log(gameName.__proto__); // {}

console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf("t"));
console.log(gameName.includes("te"));

const newString = gameName.substring(0, 4);

console.log(newString);

const anotherString = gameName.slice(-4, 5); // tes
console.log(anotherString);

const url = "https://ritesh.com/ritesh%20choudhary%20com";
console.log(url.replace("%20", "-")); //https://ritesh.com/ritesh-choudhary%20com
console.log(url.replaceAll("%20", "-")); //https://ritesh.com/ritesh-choudhary-com

const str2 =  "Hitesh-Choudhary-Lakshay-Ritesh";
console.log(str2.split("-"));
