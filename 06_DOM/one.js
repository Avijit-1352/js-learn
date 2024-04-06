// window->document->HTML->head or body

//All method of window
//console.log(window)
//console.dir(document)


//target id
// document.getElementById('firstHeading')


//Change inner Text target Id
//document.getElementById('firstHeading').innerHTML="<h1>Avijit Mondal</h1>"

// document.getElementById('title')

// document.getElementById('title').id

// document.getElementById('title').class

// document.getElementById('title').className

// document.getElementById('title').getAtribute

// document.getElementById('title').getAttribute('id')

// document.getElementById('title').getAttribute('class')

// document.getElementById('title').setAttribute('class','test')

// const title=document.getElementById('title')

// title.innerHTML
// 'Dom learing on chai aur codes<span style="display:none"> teast text</span>'

// title.textContent
// 'Dom learing on chai aur codes teast text'


// title.innerText
// 'Dom learing on chai aur codes'

//css seletor
// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit amet.​</h2>​

// document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​…​</h1>​

// document.querySelector('.heading')
// <h1 id=​"title" class=​"heading">​…​</h1>​


// const myul = document.querySelector('ul')
// undefined
// myul.querySelector('li')
// <li>​…​</li>​
// const turnGreen = myul.querySelector('li')
// undefined
// turnGreen.st
// undefined
// turnGreen.style.backgroundColor='green'
// 'green'
// turnGreen.style.padding='10px'
// '10px'
// turnGreen.innerText="five"
// 'five'



// document.querySelectorAll('li')
// NodeList(3) [li, li, li]
// [[Prototype]]
// NodeList
// entries// : // ƒ entries()
// forEach// : 
// ƒ forEach()
// item
// : 
// ƒ item()
// keys
// : 
// ƒ keys()
// length
// : 
// (...)
// values
// : 
// ƒ values()
// constructor
// : 
// ƒ NodeList()
// Symbol(Symbol.iterator)
// : 
// ƒ values()
// Symbol(Symbol.toStringTag)
// : 
// "NodeList"
// get length
// : 
// ƒ length()
// [[Prototype]]
// : 
// Object

// const tempList=document.querySelectorAll('li')
// tempList
// NodeList(3) [li, li, li]


// tempList.forEach(function (li) {
//     li.style.backgroundColor="green"
// })



// document.getElementsByClassName('List-item')
// HTMLCollection []
// const tempclassList=document.getElementsByClassName('list-item')
// undefined
// tempclassList
// HTMLCollection []



// const tempList=document.querySelectorAll('li')

// tempList.forEach(function (li) {
//     li.style.color="green"
// })


// const tempList=document.getElementsByClassName('list-item')
// undefined
// Array.from(tempList)
// []
// const myConvertArray = Array.from(tempList)
// undefined
// myConvertArray.forEach(function(li){})
// undefined
// myConvertArray.forEach(function(li){
//     li.style.color="green"
// })



// document.getElementsByClassName('list-item')
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]


// const tempList=document.getElementsByClassName('list-item')



// const myConvertArray = Array.from(tempList)


// myConvertArray.forEach(function (li) {
//     li.style.color='orange'  
//   })



// const allH2=document.querySelectorAll('h2')
// allH2
// NodeList(15) [h2.vector-pinnable-header-label, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2]
// const myH2 = document.querySelectorAll('.mw-headline')
// myH2.forEach(function (h) {
//     h.style.color='black'
//     h.style.backgroundColor='green';
//     h.style.padding='10px'
//     h.innerText='jitavi'
// })