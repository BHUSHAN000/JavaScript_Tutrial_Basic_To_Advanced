
const h1Element = document.querySelector('h1');
// console.log(h1Element);

console.log(h1Element.innerText);   // to get text inside h1 tag but it always checks the visibility of the element if visibility is hidden then it will not return the text it will return empty string in that situation and if visibility is visible then it will return the text inside the h1 tag

// console.log(h1Element.innerHTML); // to get HTML/text inside h1 tag

// // getAttribute() method used to get attribute value of an element
// console.log(h1Element.getAttribute('id'))
// console.log(h1Element.getAttribute('class'))

// // to get all attributes of an element
// console.log(h1Element.attributes) 

//     // to get attribute node of an element
// console.log(h1Element.getAttributeNode('id'))

console.log(h1Element.textContent)
