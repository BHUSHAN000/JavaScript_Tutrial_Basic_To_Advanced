
// normal function
// function expression
// anonymous function
// arrow function

// callback function=> a function that is passed to another function as a parameter

// using normal function

// function displayResult(result) {
//     console.log(result);
// }
// function additionFun(a, b,showResult) {
//     const c = a + b;
//     showResult(c);
// }

// additionFun(10, 20,displayResult);


//using arrow function

// const displayResult =(result) {
//   console.log(result);
// }
// const additionFun =(a, b, showResult) => {      // additionFun is a higher order function and showResult is a callback function
//   const c = a + b;
//   showResult(c);
// }

// additionFun(10, 20, displayResult);

// higher order function => a function that takes another function as a parameter or returns a function as a result

// const addition = (a) => {
//     return (b) => {
//         console.log(a + b);
//     }
// }

// addition(10)(20); // 30     // currying function

//===================

// arrow function vs normal function

// 1) function hoisting difference

// disp(); // valid

// function disp() {
//     console.log("Hello World");
// }

// disp(); // valid


// function hoisting using function expression / anonymous function / arrow function

// disp(); // invalid

// const disp = function () {
//     console.log("Hello World");
// }

// disp();

// 2) syntax difference
// function disp() {
//     return 10 + 20;
// }

// console.log(disp());

// const disp1 = () => 10 + 20
// console.log(disp1());


// 3) this keyword difference


// let newObj = {
//     name: 'bhushan',
//     disp() {
//     console.log(this)
//     console.log(this.name);
//     }
// }

// newObj.disp(); // bhushan


// let newObj2 = {
//     name: "bhushan",
//     age: 35,
//   disp: () => {
//     console.log(this.age);
//   },
// };

// newObj2.disp();

// 4) can't create a constructor of arrow function => can't use new keyword

// function Mobile() {
//     this.name ='samsung'
// }

// const mobile = new Mobile();
// console.log(mobile.name);

// const Mobile =() => {
//   this.name = "samsung";
// }

// const mobile = new Mobile();
// console.log(mobile.name);

// 5) arguments object difference

// function disp() {
//     console.log(arguments);
// }

// disp(10, 20, 30, 40, 50);

// const disp1 = () => {
//     console.log(arguments);
// }
// disp1(10, 20, 30, 40, 50); // arguments is not defined


// 6) generator function difference
