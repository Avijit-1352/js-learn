//*******FUNCTION*******

/* fountion basicaly means store some line of code in pack and
   that is used any where and many time call no problem */

//EG:-
//   console.log('y');
//   console.log('I');
//   console.log('t');
//   console.log('e');
//   console.log('s');
//   console.log('h');
        
// look that easy way many time call

// function defination

function sayMyName(){
    console.log('y');
    console.log('I');
    console.log('t');
    console.log('e');
    console.log('s');
    console.log('h');
}

// Analysis:
// function -> keyword
// sayMyName -> function name
// function syntext -> (){}

//sayMyName - only function name call funtion reference
//sayMyName () - Name with parethisis call function execution
 
// sayMyName ();


// TAKE input function 

function addTwoNum(num1,num2) {
    console.log(num1+num2);
}

addTwoNum(5,7);
addTwoNum(3,null);

const result = addTwoNum(3,5);
// console.log("Result: ", result);//Result:  undefined

//**not work becasue not write in return in func */

//paremater-> function defination take any input call is perameter.
//argument-> in function call time passing value called Arrgement.


//retrun function
function addTwoNum(num1,num2) {
    let result = num1+num2;
    console.log("hello");
    return result;
    console.log("sds");//not wrok after retrun
}

const sum = addTwoNum(4,5);
console.log(sum);