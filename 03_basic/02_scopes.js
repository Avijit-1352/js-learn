//*******SCOPES******/

var a=5
let b=7
const c=8

if (true) {
    var a=10;
    let b=70;
    const c=80
    // console.log("INNER: ",a);//10
}

// console.log(a);//inner a value wrok bcoz of var scope problem
// console.log(c);//always print gobal value(1st preference gobal but work scope )


// child scope take any value in parent scope but parent scope not take any value in child scope
function one() {
   const username="yitesh"
   function two() {
    const website="youtube"
    console.log(username);//child take into parent value
  }    
//   console.log(website);// parent scope or variable not acess any child scope value(website is not defined)
  two()
}

// one();//one()->two()

if (true) {
    const username = "yitesh"
    if (username === 'yitesh') {
        let surname = " Roy";
        // console.log(username+surname);//yitesh Roy
    }
    // console.log(surname);
}

// console.log(username);//outside of scope

//++++++++++Interesting+++++++++++

//normal function vs variable content function

//normal function

console.log(addone(5));//execute before function defination
function addone(num) {
    return num+1;
}

//variable content function defination

console.log(addTwo(5));//Cannot access 'addTwo' before initialization 
const addTwo = function (num) {
    return num+2;
}