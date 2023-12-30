// Symbols  => it is a primitive type in ES6

let newObj = {
  name: "bhushan",
  10: "ten",
  true: "it is true",
};

// normally object keys are of type string but we can use symbols as keys

// let sym1 = Symbol('my symbol');
let sym1 = Symbol("name");
let sym2 = Symbol("name");

newObj[sym1] = "Aakash";
newObj[sym2] = "Rahul";

// console.log(newObj)

// console.log(sym1 === sym2)

// for(let key in newObj){
//     console.log(key, newObj[key])
// }

// console.log('name' in newObj);

// Global symbols

let sym3 = Symbol.for("name"); // aakash => global symbol
// if symbol is not present then it will create a new symbol in global symbol registry

let sym4 = Symbol.for("name"); // Rahul => global symbol

// console.log(sym3 === sym4)  // they shared the same symbol

// console.log(Symbol.keyFor(sym3))  // name
// console.log(Symbol.keyFor(sym4))  // name

// newObj[sym3] = "Aakash";
// newObj[sym4] = "Rahul";

console.log(newObj);
//====================

console.log(Object.getOwnPropertySymbols(newObj));
// Object.getOwnPropertySymbols() => it will return all the symbols present in the object in the form of array

// Object.getOwnPropertyDescriptors() => it will return all the properties of the object in the form of array

console.log(Object.getOwnPropertySymbols(newObj)[0]);
console.log(
  Object.getOwnPropertyDescriptor(
    newObj,
    Object.getOwnPropertySymbols(newObj)[0]
  ).value
);

console.log(
  Object.getOwnPropertyDescriptor(
    newObj,
    Object.getOwnPropertySymbols(newObj)[1]
  ).value
);
