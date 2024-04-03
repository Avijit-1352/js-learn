//**********Control_flow********/


//if
const isUserloggedIn = true

// if (true) {
//     console.log(`inside of if ${isUserloggedIn}`);
// }

// if (isUserloggedIn) {
//     console.log("inside in if");
// }

//if else
const temperature = 40

// if (temperature == 40) {
//     console.log("temperature is  40");
// } else {
//     console.log("temperature is greater than 50");
// }

//condition operator 
//<,>,<=,>=,==(checking two value) ,===(same as ==  extra checking datatype)

//********"==="******/
// if (2=="2") {
//     console.log(`both are same "2==2"`);
// }

// if (2==="2") {
//     console.log("both are same 2==2");
// } else {
//     console.log("both are not same 2==2");
// }


const balance = 1000
// if (balance>500) console.log("test"),console.log("test2");//not prefareble

// if (balance<500) {
//     console.log("less than 500");
// }
// else if (balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }

// else{
//     console.log("less than 1000");
// }


const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard ) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}