const score =100;
// console.log(score);

const balance = new Number(100);
console.log(balance);

// console.log(balance.toString());//convet string

// console.log(balance.toString.length);

console.log(balance.toFixed(2));//100.00

const otherNumber = 123.892
// console.log(otherNumber.toPrecision(5));//12
3.89

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));//by default = usa stand

// *********Maths**********
// console.log(Math);//object

// console.log(Math.abs(-4));
// console.log(Math.round(4.59));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(5.9));
// console.log(Math.min(4,5,7,8));
// console.log(Math.max(8,9,7,6));

console.log(Math.random());//0-1 any number
console.log(Math.random()*10);//0-9 any number
console.log(Math.random()*10+1);//1-10 any number

const min=10;
const max=20;

console.log(Math.random()*(max-min+1)+min);//10-18 any decimal random nymber
console.log(Math.floor(Math.random()*(max-min+1)+min));//10-18 any random nymber


