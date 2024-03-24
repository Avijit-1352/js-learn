let name="Joy sri krishna "
const repeatTime =1000
const unit = " time"

//Concatinet - Two way - +(old) ,"Backtick" - ``(new or most used) 

// console.log(name+ repeatTime+unit);//backdated

// String Interpolation
// console.log(`Everyone call ${name} ${repeatTime} ${unit}`);//new way

//++++++++++STRING ANALYSIS +++++++++ 

const gameName = new String('shiva-sambhoo');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

//Substring(not react neagtive value)

// const newString=gameName.substring(0,6);
// console.log(newString);

// Slice(negative value work for reverse  )

const newSlice=gameName.slice(-2,4)
console.log(newSlice);

const newString="  hitesh  "

// console.log(newString);
// console.log(newString.trim());//whitespace remove

const url="https://github.com/Avijit-1352/js-learn"
console.log(url.replace('/','-'));

console.log(url.includes('hub'));
// console.log(gameName.split('-'));//[ 'shiva', 'sambhoo' ]

// let word=gameName.split('-')
// console.log(word[0]);//shiva
