
/**
 * getElementById()   => id target
 * getElementsByClassName() => class target
 * getElementsByTagName()  => tag target
 * 
 * 
 * querySelector()  => css selector target
 * querySelectorAll() => css selector target
 */

// targeting using tag name
// const h1Element1 = document.querySelector('li');
// console.log(h1Element1);

// //targeting using id
// const h1Element2 = document.querySelector("#list1");
// console.log(h1Element2);

// targeting using class name

// const h1Element3 = document.querySelector(".listClass1"); // it always returns the first occurrence of the element which having this class
// console.log(h1Element3);


// // targeting using class 
// const liElement = document.querySelectorAll(".listClass1");
// console.log(liElement)


// // targetting using css
// const liElement2 = document.querySelector('li[id="list1"]');
// console.log(liElement2);

// const liElement3 = document.querySelector('li[id]');
// console.log(liElement3);

// const liElement4 = document.querySelectorAll("li[id]");
// console.log(liElement4);

const liElement4 = document.querySelectorAll("li[id]");
console.log(liElement4.entries().next().value);
console.log(liElement4.forEach((element) => {
    console.log(element);
}))

