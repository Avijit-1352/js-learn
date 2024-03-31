// const tinderUser = new Object();

const tinderUser={}

tinderUser.id="1234abc"
tinderUser.name="lulu"
tinderUser.isLoggedIn=false
// console.log(tinderUser);// { id: '1234abc', name: 'lulu', isLoggedIn: false }

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"lulu",
            lastname:"le"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={1:"a",2:"b"}
const obj4={1:"a",2:"b"}

// const obj3={obj1,obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }


// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3)//{ '1': 'a', '2': 'b' }


// const obj3={...obj1,...obj2}
// console.log(obj3);//{ '1': 'a', '2': 'b' }

const users=[
    {
        id:1,
        email:"t@gmail.com"
    },
    {
        id:1,
        email:"t@gmail.com"
    },
    {
        id:1,
        email:"t@gmail.com"
    }
]


users[1].email

// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));//[ '1234abc', 'lulu', false ]
// console.log(Object.entries(tinderUser));//[ [ 'id', '1234abc' ], [ 'name', 'lulu' ], [ 'isLoggedIn', false ] ]

const course={
    cousrename:"js",
    price:"999",
    courseInstructor:"fvu"
}


//******de-structure of Object******

// course.courseInstructor
const {courseInstructor:instructor}=course
// console.log(courseInstructor);
console.log(instructor);


// ***** JSON- javascript object Notetion ***
/* it is also  aplicable in API , API goes to JSON formet */
// JSON struc - {"string":"string"}

// {
//     "name":"yithes",
//     "coursename":"js"
//     "price":"free"
// }
 

//Array de-structrue
// [
//     {},
//     {},
//     {}
// ]