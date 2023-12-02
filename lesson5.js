
// var , let and const difference

// re-declaration and re-assignment

//1. var

var firstName = 'John';
var firstName;              // this is re-declaration
firstName = 'Mike';         // this is re-assignment
console.log(firstName);
var firstName = 'Mike';     // this is allowed for var variable


//2. let

let lastName = 'Smith';
// let lastName;               // re-declaration is not allowed for let variable
lastName = 'Johnson';          // re-assignment is allowed for let variable
console.log(lastName);

//3. const

const age = 30;
// const age;                  // re-declaration is not allowed for const variable
// age = 50;                   // re-assignment is not allowed for const variable
console.log(age);

// scope of var, let and const

//Scope => area where variable is accessible => global scope, function scope, block scope

//1. var

var firstName = 'John';     // global scope
function display1() {
    var firstName = 'Mike'; // function scope
    {
        var firstName = 'Smith'; // block scope
        console.log("Block scope ",firstName);
        
    }
    console.log("function scope ",firstName);
}

console.log("Global scope",firstName);
display1();

//2. let

let schoolName = "John"; // global scope
function display2() {
  let schoolName = "Mike"; // function scope
  {
    let schoolName = "Smith"; // block scope
    console.log("Block scope ", schoolName);
  }
  console.log("function scope ", schoolName);
}

console.log("Global scope", schoolName);
display2();


//3. const

const stateName = "John"; // global scope
function display3() {
  const stateName = "Mike"; // function scope
  {
    const stateName = "Smith"; // block scope
    console.log("Block scope ", stateName);
  }
  console.log("function scope ", stateName);
}

console.log("Global scope", lastName);
display3();


// hoisting of var, let and const

// hoisting => variable declaration is moved to the top of the scope
var firstName;               // var variable is hoisted
console.log(firstName);      // undefined
var firstName = 'John';
console.log(firstName);


// //console.log(personName);    //let variable is not hoisted
let personName = 'Smith';
console.log(personName);


// console.log(salary);            // const variable is not hoisted
const salary = 30000;
console.log(salary);
