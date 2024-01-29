const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["Superman", "flash", "Batman"];

// marvel_heros.push(dc_heroes);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeroes = marvel_heros.concat(dc_heroes); // concat method combines two or more arrays

// console.log(allHeroes); //

const all_new_heroes = [...marvel_heros, ...dc_heroes];
// console.log(all_new_heroes); // [ 'thor', 'Ironman', 'spiderman', 'Superman', 'flash', 'Batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // recommended to provide number but we can add infinity also

// console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Hitesh")); //false
console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({ name: "Hitesh" })); //[], returns empty array if can't convert, but we can tell it to convert properties (read about this)

const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;

console.log(Array.of(score1, score2, score3, score4)); //[ 100, 200, 300, 400 ]
