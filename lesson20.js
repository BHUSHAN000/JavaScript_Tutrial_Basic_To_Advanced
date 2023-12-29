
// creation of the object

//1) let obj = {};  // literal syntax
//2) let obj = new Object(); // constructor syntax

//3)  Factory function => a function which can create an object and return from it.


// function objCreation() {
//     return {
//         fname: 'Bhushan',
//         lname: 'Pawar',
//     }
// }


// let obj = objCreation();
// let obj1 = objCreation();

// console.log(obj)
// console.log(obj1)


// ============================================================

function objCreation(firstName, lastName,ageParam) {
    let age = 20;   // this is private variable
  return {
    fname: firstName,
    lname: lastName,
    age: ageParam + age,
  };
}

let obj = objCreation('Bhushan','Pawar',40);
let obj1 = objCreation('Rahul','Pawar',50);

console.log(obj.age);
console.log(obj1);


// ============================================================

// factory function's benefits

// 1) we can create multiple objects
// 2) we can pass the arguments to the factory function
// 3) we can return the object from the factory function
// 4) we can create a encapsulation of the data
// 5) we can configure the object as per our requirement
// 6) we can create a private variable inside the factory function
