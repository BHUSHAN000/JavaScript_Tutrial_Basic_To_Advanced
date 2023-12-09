
// Functions

// normal function

// syntax of function
/*

    function functionName() {
        function body i.e operation to be performed
    }

    functionName();     // calling function

*/
function add() {        // function definition
    let c = 10 + 20;
    console.log(" Result of addition is " , c);
}

add();      // calling function


// function expression => whenever we store function in a
// variable then it is called function expression and it is
// get call by that variable name


let tempFunction = function add() {        // function definition
    let c = 100 + 200;
    console.log(" Result of addition is " , c);
}

tempFunction();      // calling function


// annonymous function => function without name

let tempFunction2 = function () {  // function definition
  let c = 1000 + 2000;
  console.log(" Result of addition is ", c);
};

tempFunction2();

// arrow function => function with arrow    // ES6
// arrow function is also called as lambda function
// arrow function is also called as fat arrow function


// scenario 1
let tempFunction3 = () => {
    let c = 200 + 400;
    console.log(" Result of addition is ", c);
}

tempFunction3();


// scenario 2
let tempFunction4 = () => console.log("Hello World");
tempFunction4();


// scenario 3

let tempFunction5 = () => 'Welcome to javascript tutorial';
console.log(tempFunction5());

//example for arrow function with addition functionality
let addFunction = () => 100 + 200;
console.log(addFunction());


//normal function with parameters
function add(a, b) {
    let c = a + b;
    console.log(" Result of addition is ", c);
}

add(10, 20);

// function expression with parameters
let addFunction2 = function add(a, b) {
  let c = a + b;
  console.log(" function expression -Result of addition is ", c);
}

addFunction2(100, 200);

//annonymous function with parameters
let addFunction3 = function (a, b) {
  let c = a + b;
  console.log("annonymous function -Result of addition is ", c);
};

addFunction3(1000, 2000);

// arrow function with parameters

let addFunction4 = (a, b) => {
  let c = a + b;
  console.log("arrow function -Result of addition is ", c);
};

addFunction4(3, 4);
