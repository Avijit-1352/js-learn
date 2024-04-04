//**Truthy***/
/*truthy means assume value is true or false */

const userEmail=[]
//[] empty array means - true
if (userEmail) {
    console.log("got user email");
} else {
    
    console.log("Don't have user email");
}

//falsy values - some value assume are false
//false,0,-0,   BigInt,0n,[],"",null,undefind,,NaN

// truthy values
// "0","false"," ","[]"{},function(){}

const emptyObj = {}
if (Object.keys (emptyObj).length===0) {
    console.log("object");
}

//Nullish colesing operator(after null or undefined are false so print 1st element)
let val1;
val1=5??10  //5
val1=null?? 10   //10
val1=undefined??40   //40
val1=null??10??20    //10

console.log(val1);

//Terniary Operator
//condition?true:flase

const iceTeaprice = 100

iceTeaprice<=80?console.log("less Than 80"):console.log("more than 80");