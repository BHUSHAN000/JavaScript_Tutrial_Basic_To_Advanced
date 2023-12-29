
// 3 ways to create an object
// 1) Object literal
// 2) Constructor function (Object constructor)
// 3) Factory function

// function CreateObj() {
//   // this = {}; // implicit javascript code
//   this.fname = "John";
//   this.lname = "Doe";
//   // return this; // implicit javascript code
// }

// let obj = new CreateObj();
// console.log(obj);

//====================================================

function CreateObj(firstname, lastname) {
  // this = {}; // implicit javascript code
  this.fname = firstname;
  this.lname = lastname;
  // return this; // implicit javascript code
}

let obj = new CreateObj('Bhushan','pawar');
let obj1 = new CreateObj('Bhushan','pawar');
console.log(obj);
console.log(obj1);

console.log(Object.is(obj,obj1))
