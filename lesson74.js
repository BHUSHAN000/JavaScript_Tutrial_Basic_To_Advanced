
const parentEle = document.querySelector(".outerClass");
console.log(parentEle.children);
// 1st way to target child element
// const childEle = parentEle.children;    // it returns a HTMLCollection

// console.log(childEle[0]);
// console.log(childEle[1]);
// childEle[1].style.color = "red";


// 2nd way to target child element i.e childNodes

console.log(parentEle.childNodes);    // it returns a NodeList

// childNodes includes text nodes, comments, etc. So, we need to filter out the text nodes

parentEle.childNodes[5].style.color = "red";
