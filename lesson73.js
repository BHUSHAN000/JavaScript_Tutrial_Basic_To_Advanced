
const innerDiv = document.querySelector('.innerClass')
console.log(innerDiv)

const outerDiv = innerDiv.parentElement
console.log(outerDiv); // parentElement is the parent of the element

const bodyEle = innerDiv.parentElement.parentElement;
console.log(bodyEle) // parentElement is the parent of the element

const htmlEle = innerDiv.parentElement.parentElement.parentElement;
console.log(htmlEle) // parentElement is the parent of the element

const nullEle = innerDiv.parentElement.parentElement.parentElement.parentElement;
console.log(nullEle); // parentElement is the parent of the element

console.log('----------------------------------------')
const innerDiv1 = document.querySelector('.innerClass')
console.log(innerDiv1)

const outerDiv1 = innerDiv.parentNode
console.log(outerDiv1); // parentNode is the parent of the element

const bodyEle1 = innerDiv.parentNode.parentNode;
console.log(bodyEle1) // parentNode is the parent of the element

const htmlEle1 = innerDiv.parentNode.parentNode.parentNode;
console.log(htmlEle1) // parentNode is the parent of the element

const nullEle1 = innerDiv.parentNode.parentNode.parentNode.parentNode;
console.log(nullEle1); // parentElement is the parent of the element
