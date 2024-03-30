const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//Array margeing

//1st way (array in array)
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//2nd way - concatination

const allNew = marvel_heros.concat(dc_heros)

// console.log(allNew); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//3rd way
const all_new_Heros = [...marvel_heros,...dc_heros];

// console.log(all_new_Heros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);//[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

// console.log(Array.isArray("yitachi")); // search

// console.log(Array.from("yitachi")); //separetion every letter

// console.log(Array.from({name:"yitachi"})); //[]



let score1=100
let score2=200
let score3=300

// console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]