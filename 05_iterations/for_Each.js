//**For-each**/
//structrue :-
// array.forEach(element => {
    
// });
// array.forEach(any function);

const coding = ["js","ruby","java","python","cpp"]

//way1
// coding.forEach(function(val){
//   console.log(val);
// })

//way2
// coding.forEach((item)=>{
//     console.log(item);
// })

//Way3
function print(item) {
    // console.log(item);
}

// coding.forEach(print)

//Object passing through for_of

const myCoding =[
    {languageName:"javascript",
     languageFileName:'js' 
    },
    {languageName:"java",
     languageFileName:'java' 
    },
    {languageName:"python",
     languageFileName:'py' 
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})