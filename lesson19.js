//Object methods

// Object.assign() - copies all properties from one object to another
// Object.keys() - returns an array of keys
// Object.values() - returns an array of values
// Object.entries() - returns an array of key-value pairs
// Object.freeze() - prevents modification to existing object properties
// Object.seal() - prevents addition or deletion of object properties
// Object.isFrozen() - determines if an object is frozen
// Object.isSealed() - determines if an object is sealed
// Object.is() - compares two objects
// object_name.hasOwnProperty() - returns true if the property is a member of the object
// Object.preventExtensions() - prevents any extensions of an object


// assign method

// let newObject = {
//     name: 'bhushan',
//     age: 30
// }
// let newObject2 = {
//     name: 'John',
//     salary: 20000,
//     address: 'Delhi'
    
// }

// let newObject1 = Object.assign({}, newObject, newObject2)


// console.log(newObject)
// console.log(newObject2)
// console.log(newObject1)

//=======================

// keys method and values method and entries method

// let newObject2 = {
//     name: 'John',
//     salary: 20000,
//     address: 'Delhi'
    
// }

// console.log(Object.keys(newObject2))    // returns an array of keys
// console.log(Object.values(newObject2))  // returns an array of values
// console.log(Object.entries(newObject2)) // returns an array of key-value pairs

//=======================

// freeze method

// let newObj = {
//     name: 'bhushan',
//     age: 30
// }

// Object.freeze(newObj)

// newObj.salary = 20000   // freeze wont allow to add new properties
// newObj.name = 'John'    // freeze wont allow to modify the exiting properties
// delete newObj.age       // freeze wont allow to delete the existing properties


// console.log(newObj)


//=======================

// seal method

// let newObj = {
//   name: "bhushan",
//   age: 30,
// };

// Object.seal(newObj);

// newObj.salary = 20000; // seal wont allow to add new properties
// newObj.name = "John";  // seal allow to modify the exiting properties
// delete newObj.age;     // seal wont allow to delete the existing properties

// console.log(newObj);


//=======================

// preventExtensions method

// let newObj = {
//   name: "bhushan",
//   age: 30,
// };

// Object.preventExtensions(newObj);

// newObj.salary = 20000; // preventExtensions wont allow to add new properties
// newObj.name = "John";  // preventExtensions allow to modify the exiting properties
// delete newObj.age;     // preventExtensions allow to delete the existing properties

// console.log(newObj);


//=======================

// isFrozen and isSealed method

// let newObj = {
//   name: "bhushan",
//   age: 30,
// };

// // Object.freeze(newObj);

// // console.log(Object.isFrozen(newObj))    // returns true if an object is frozen

// Object.seal(newObj);

// console.log(Object.isSealed(newObj))    // returns true if an object is sealed


//=======================

// hasOwnProperty method

// ways 2 =>
// 1) in operator
// 2) value of the property is not undefined
// 3) hasOwnProperty method

// let newObj = {
//   name: "bhushan",
//   age: 30,
// };


// console.log(newObj.hasOwnProperty('name'))
// console.log(newObj.hasOwnProperty('salary'))


//=======================

// is method

// let newObj = {
//     name: "bhushan",
//     age: 30,
// };
    
// let newObj1 = newObj;

// console.log(Object.is(newObj, newObj1))    // returns true if both objects are same


// let newObj2 = {
//   name: "bhushan",
//   age: 30,
// };

// console.log(Object.is(newObj, newObj2))    // returns false if both objects are not same

// let newObj3 = new Object({
//     name: "bhushan",
//     age: 30,
// })

// console.log(Object.is(newObj, newObj3))    // returns false if both objects are not same


//=======================
