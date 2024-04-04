//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element==5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

//Table print
// for (let i = 1; i <= 10; i++) {
    
//     console.log(`outer loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`inner loop ${i} * ${j} = ${i*j}`);
        
//     }
// }


const array = ["superman","batman","flash"]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
// }


//break , continue

// for (let i = 0; i < 10; i++) {
//     if(i==5){
//         console.log("detced 5");
//         break
//     }
//   console.log(i);
// }


// for (let i = 0; i <10; i++) {
//     if(i==5){
//         console.log("detced 5");
//         continue
//     }
//   console.log(i);
// }


//while 

let index=0;
while (index<=10) {
    // console.log(`index value is ${index}`);
    index=index+2;
}


let myArray = ["superman","batman","flash"]

let arr = 0
while (arr<myArray.length) {
    // console.log(`value is ${myArray[arr]}`);
    arr=arr+1;
}

let score = 10;

do{
    console.log(`Score is ${score}`);
    score++
}while(score<10 && score>10)