const myArr =[0,1,2,3,4,5]
const myHero=["shaktiman","naagraj"]

// console.log(myArr,myHero);
// console.log(myArr[0],myHero[1]);

const myArr2=new Array(1,2,3,4);

// console.log(myArr2);


//Array method

myArr.push(12);
myArr2.push(11);

// console.log(myArr,myArr2);

myArr.pop()
myArr2.pop()
myArr.pop()
myArr2.pop()

// console.log(myArr,myArr2);

myArr.unshift(45);
myArr2.unshift(78);

// console.log(myArr,myArr2);


myArr.shift()
myArr2.shift()
// console.log(myArr,myArr2);

// console.log(myArr.indexOf(4));
// console.log(myArr.includes(2));

//show without []
const newArr =myArr.join()
// console.log(newArr);//0,1,2,3,4

//slice , splice

console.log("A",myArr);

const myNum=myArr.slice(1,3);

// console.log(myNum);//[ 1, 2 ]
// console.log("B",myArr);//B [ 0, 1, 2, 3, 4 ]

const myNum2=myArr.splice(1,3);

// console.log("C",myArr);//C [ 0, 4 ]
// console.log(myNum2);//[ 1, 2, 3 ]







