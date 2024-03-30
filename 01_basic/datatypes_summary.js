// type of datatype-two type
// 1.primitive  2.Non primitive

//primitive

//7 types: string , Number , Boolearn , null , Undefined , BigInt , symbol

const score=100;
const scoreValue=100.3
const outSideTemp=null;
let userEmail;

 const id=Symbol('123')
 const anotherId=Symbol('123')
//  console.log(id===anotherId);//false

//  Symbol 1st leater capital means unique

// const bigNumber = 3587192687878n;



// Reference(Non primitive)

// Array ,Object, Function

const member=['holu','amit','sudu','bolu']

let myObj={
    name:"holu",
    age:23
}

const myFunction=function(){
    console.log("Hello World");
}

myFunction();
console.log(myObj.name);
console.log(member[0]);