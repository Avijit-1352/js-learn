//**FOR OF**/
// for_of only for array pass through for loop


//["","",""] --> string array 
//[{},{},{}] --> object contain array

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

//for_of -->  no need condition automaticaly calculate array length

const greeting = "Hello world!"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`);
}


// MAP

// Map pass through for_of

const map=new Map()
map.set('IN',"india")
map.set("USA","united states of america")
map.set("Fr","France");
map.set("IN","India");

for (const [key,value] of map) {
    console.log(key, ':-',value);
}

// object contained array pass through for_of

const games ={
    game1:"NFS",
    GAME2:"Spiderman"
}
for (const [key,value] of games) {
    console.log(key,":-",value);
}

//TypeError: Objects is not iterable

//*NOTE:-*/
// object is not work in for_of only of Map And string,number conataing array