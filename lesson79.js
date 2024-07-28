

// insertAdjacentElement() => insert an element as a sibling to the element

// syntax: targetElement.insertAdjacentElement(position_in_string_format, newElement)

// position: beforebegin, afterbegin, beforeend, afterend

// beforebegin: before the targetElement


//targetElement
const targetElement = document.querySelector(".innerClass");

//newElement
const newElement = document.createElement("p");
const textNode = document.createTextNode("New Element");
newElement.appendChild(textNode);
console.log(newElement);


//insert newElement before targetElement
// targetElement.insertAdjacentElement("beforebegin", newElement);
// targetElement.insertAdjacentElement("afterbegin", newElement);
// targetElement.insertAdjacentElement("beforeend", newElement);
// targetElement.insertAdjacentElement("afterend", newElement);
