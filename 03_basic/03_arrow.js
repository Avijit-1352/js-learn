
const user = {
    username:"yitesh",
    price:999,
    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

//  user.welcomeMessage()

 /*yitesh,welcome to website
{
  username: 'yitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/

//user.username="hari"

// user.welcomeMessage();

/* hari,welcome to website
 {
     username: 'hari',
     price: 999,
     welcomeMessage: [Function: welcomeMessage]
   } */

//***NOTE***/   This operator is current context of object , means every function own method call through this.

// console.log(this); // by default current context window object



/**This operator not wrok in function only work in Object**/

// normal function defination
// function chai() {
//     let username = "yethi"
//     console.log(this.username);
// }
// chai();//undefined

//Variable content function defination
// const chai = function(){
//     let username = "yethi"
//     console.log(this.username);
// } 
//  chai();//undefined

//Arrow function
// const chai =()=>{
//     let username = "yethi"
//     console.log(this.username);}

//  chai() //undefined  


/**Arrow function**/

// Many way to defient arrow function

//Way1

// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(4,5))//9
// write curle bracket"{}" then must write return


//way2
// const addTwo =(num1,num2)=>num1+num2;
// console.log(addTwo(4,5))//9
//no need return , by default have return

//way3
// const addTwo =(num1,num2)=>(num1+num2)
// console.log(addTwo(4,5))//9
// if write parenthsis by default have return  

//way4(also return object)

// const addTwo=(num1,num2)=>({username:"hitesh"})
// console.log(addTwo(4,5))//{ username: 'hitesh' }

