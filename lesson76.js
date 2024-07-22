
const BElement = document.querySelectorAll(".childDiv");
// console.log(BElement[1])

// // nextElementSibling => it returns the element node

// console.log(BElement[1].nextElementSibling)

// // nextSibling => it returns the node i.e text node, element node, comment node

// console.log(BElement[1].nextSibling)

// // previousElementSibling => it returns the element node

// console.log(BElement[1].previousElementSibling)

// // previousSibling => it returns the node i.e text node, element node, comment node

// console.log(BElement[1].previousSibling)

const innerEle = document.querySelector(".innerClass");
console.log(innerEle.nextElementSibling)
console.log(innerEle.nextSibling)
console.log(innerEle.previousElementSibling)
console.log(innerEle.previousSibling)
