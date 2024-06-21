
const divElement = document.getElementById("containerId");
console.log(divElement);

// const divElement2 = document.getElementsByTagName("div");
// console.log(divElement2);

const ulElement = divElement.getElementsByTagName('ul');
console.log(ulElement);

const liElement = ulElement[0].getElementsByClassName("listClass2");
console.log(liElement);

liElement[0].style.color = "blue";

// const classElements = document.getElementsByClassName("listClass2");
// console.log(classElements[0]);
