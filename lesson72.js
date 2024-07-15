
const btn = document.querySelector("#btnId");

// 1. change the styling using style property

// btn.style.backgroundColor = "pink";
// btn.style.color = "black";


// 2. add new class using className property -
// a. setting className property always override the existing class
// b. getting class name using className property always return value in the form of string

// console.log(btn.className);     // get class name on button element
// console.log(typeof btn.className);     // get class name on button element
// btn.className = 'class2'        // set class name on button element
// console.log(btn.className);     // get class name on button element

// 3. add new class using classList property -
// a. setting classList property always add new class to existing
// b. getting class name using classList property always return value in the form of DOMTokenList ie. array like object

// console.log(btn.classList);     // get class name on button element
// console.log(typeof btn.classList);     // get class name on button element

// btn.classList.add('class2')        // set class name on button element - add new class
// btn.classList.remove('class1')     // remove class name on button element

// btn.addEventListener('click', function () {
//     btn.classList.toggle('class1')
// })


const li1 = document.querySelector("#list1");
console.log(li1.classList.length)   // get number of class on element
console.log(li1.classList[0])       // get class name on element
console.log(li1.classList.item(0))  // get class name on element
console.log(li1.classList.contains('class1'))  // check if class is present on element
console.log(li1.classList.contains('listClass1'))  // check if class is present on element
console.log(li1.classList.contains('listclass1'))  // check if class is present on element
