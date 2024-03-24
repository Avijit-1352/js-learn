//Dates(start 1970 1jan)

let myDate=new Date();

// console.log(myDate);//2024-03-24T15:33:09.255Z

// console.log(myDate.toString());//Sun Mar 24 2024 15:36:46 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());//Sun Mar 24 2024

// console.log(myDate.toLocaleDateString());// 3/24/2024

let myCreateDate=new Date(2023,0,23);
// console.log(myCreateDate.toString());//Mon Jan 23 2023 00:00:00 GMT+0000

//  myCreateDate=new Date(2023,0,23,5,3)
//  console.log(myCreateDate.toString());//Mon Jan 23 2023 05:03:00 GMT+0000

myCreateDate=new Date("01-14-2002")
// console.log(myCreateDate.toLocaleDateString());//1/14/2002
// console.log(myCreateDate.toLocaleString());// 1/14/2002, 12:00:00 AM


let newDate = new Date();
// console.log(newDate.toString());//Sun Mar 24 2024 15:54:28 

console.log(newDate.getDate());
console.log(newDate.getDay()+1);// 0 start 0

const getTime= newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(getTime);