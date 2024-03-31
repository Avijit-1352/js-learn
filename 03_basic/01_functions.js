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

// addTwoNum(5,7);
// addTwoNum(3,null);

// const result = addTwoNum(3,5);
// console.log("Result: ", result);//Result:  undefined

//**not work becasue not write in return in func */

//paremater-> function defination take any input call is perameter.
//argument-> in function call time passing value called Arrgement.


//retrun function
// function addTwoNum(num1,num2) {
//     let result = num1+num2;
//     console.log("hello");
//     return result;
//     // console.log("sds");//not wrok after retrun
// }



//another way to declar function

// function addTwoNum (num1,num2){
//     console.log("sum of");
//     return num1+num2;
// }

// const sum = addTwoNum(4,5);
// console.log(sum);

// function loginUserMessage(username){
//     // if (username ===undefined) {
//     //     console.log("please enter a username");
//     //     return
//     // }

//     if (!undefined) {
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("yetish"));
// console.log(loginUserMessage());

/**NOTE***/
// "" --> false
// undefined --> false


// take default parameter value
function loginUserMessage(username = "sam"){
    if (!undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("yetish"));
// console.log(loginUserMessage());



// function calulateCartPrice(num1){
//     return num1;
// }

// console.log(calulateCartPrice(200,500,600));//consider 1st value - > 200

//REST operator ...paremeatr
// function calulateCartPrice(...num1){
//     return num1;
// }
// console.log(calulateCartPrice(200,500,600));//[ 200, 500, 600 ]


function calulateCartPrice(val1,val2,...num1){
        return num1;
}

// console.log(calulateCartPrice(200,540,5000,850)) //[ 5000, 850 ]

const user ={
    username:"yitehs",
    price:199
}
//take any dataType pearmetar
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//pass object paremeter

// handleObject({
//     username:"sam",
//     price:789
// })

//pass Array paremeter

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,60]));
