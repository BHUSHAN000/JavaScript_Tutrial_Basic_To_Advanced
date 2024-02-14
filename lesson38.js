
// Property flags and descriptors

let user = {
    name: 'Bhushan',
    age: 35,
    salary: 100000,
};

console.log(Object.getOwnPropertyDescriptors(user)) // getOwnPropertyDescriptors is a method of Object which returns all the properties of an object with their flags and descriptors.

// console.log(Object.getOwnPropertyDescriptor(user, 'name')) // getOwnPropertyDescriptor is a method of Object which returns the flags and descriptors of a specific property of an object.


// flags and descriptors
// 1. value: The value of the property.
// 2. writable: If true, the value of the property can be changed.
// 3. enumerable: If true, the property is listed in loops.
// 4. configurable: If true, the property can be deleted and these attributes can be modified.

// ============

// 1) value
// console.log(Object.getOwnPropertyDescriptor(user, 'name').value) // Bhushan

// =================

// 2) writable => If true, the value of the property can be changed.


// Object.defineProperty(user, 'age', { writable: false }); // Now, age property is not writable.

// user.age = 36;
// console.log(user.age)

// Object.defineProperty(user, 'age', { writable: true }); // Now, age property is now writable.

// user.age = 36;
// console.log(user.age);

// =================

// 3) enumerable => If true, the property is listed in loops.
// for(let key in user) {
//     console.log(key);
// }

// Object.defineProperty(user, 'age', { enumerable: false }); // Now, age property is not enumerable.

// for (let key in user) {
//   console.log(key);
// }

// console.log(Object.getOwnPropertyDescriptor(user, "age"));

// =================

// 4) configurable => If true, the property can be deleted and these attributes can be modified.

// Object.defineProperty(user, 'age', { configurable: false, writable: false }); // Now, age property is not configurable.

// delete user.age;

// console.log(user);

// user.age = 36;
// console.log(user);

//================================================

Object.defineProperties(user, {
    name: { writable: false ,configurable: false},
    age: { writable: false , value: 40},
    salary: { writable: false, enumerable: false},
});

console.log(user)

for(let key in user) {
    console.log(key);
}
