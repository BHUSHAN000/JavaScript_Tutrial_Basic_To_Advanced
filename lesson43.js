
// let newObj = new Object();
// console.log(newObj)

// console.log(Object.getPrototypeOf(newObj))

// console.log(Object.getPrototypeOf(Object.prototype));


// let newArr = new Array();

// // console.log(typeof newArr)
// console.log(newArr)
// const temp1 = Object.getPrototypeOf(newArr);
// console.log(temp1)  // Array.prototype
// // console.log(Array.prototype)  // Array.prototype

// // console.log(Object.getPrototypeOf(newArr) === Array.prototype)
// const temp2 = Object.getPrototypeOf(temp1);
// console.log(temp2);

// console.log(Object.getPrototypeOf(temp2))


let newString = new String();
console.log(newString)
const temp3 = Object.getPrototypeOf(newString);
console.log(temp3)
const temp4 = Object.getPrototypeOf(temp3);
// console.log(String.prototype)
console.log(temp4)

console.log(Object.getPrototypeOf(temp4))  // null
