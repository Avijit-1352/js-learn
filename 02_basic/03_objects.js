//singleton
//obeject.create

//object literals
const mySym=Symbol("key1");

const jsUser={
    name:'jitvi',
    "full name":"jitavi mon",
    [mySym]:"mykey1",
    age:18,
    location:"west bengal",
    email:"yitachi@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser);

// console.log(jsUser.email);//yitachi@gmail.com
// console.log(jsUser["email"]);//yitachi@gmail.com
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

//freeze function

// jsUser.email="hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email="liol@gmail.com" // not work
// console.log(jsUser["email"]);


//greeting,greetingTwo

jsUser.word=function () {
    console.log("hello js user");
}

jsUser.wordTwo=function(){
    console.log(`Hello Js user , ${this.name}`);
}

console.log(jsUser.word());
console.log(jsUser.wordTwo());