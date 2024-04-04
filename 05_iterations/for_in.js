//**FOR_IN**/
//ony of pass object in for_in

const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

// for(const key in programming){
//     console.log(`${key} value is ${programming[key]}`);
// }


const cap = new Map()
cap.set('IN',"india")
cap.set('USA',"united States of America")
cap.set('Fr',"France")


// for(const key in cap)
// { 
//     console.log(key);
// }

//*Note*/
// for_in not wrok in Map only work in for_of