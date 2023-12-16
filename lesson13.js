
// rest parameter

// function add(a,b,c,d,...rest) {
//     console.log(rest.length);
//     console.log(arguments.length);
// }

// add(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

// need of rest parameter

// 1. rest parameter is used to get all the arguments passed to a function


// difference between arguments and rest parameter
// 1. rest parameters takes all the remaining values which are not taken by the function parameters
// 2. rest parameters takes all the values passed to the function if no parameters are passed to the function
// 3. rest parameters is an array

// limitations of arguments object

// 1. arguments object can not be used with arrow function

// const add1 = () => {
//     console.log(arguments);
// }

// add1(10, 20, 30, 40, 50);

// const add2 = (...rest) => {
//     console.log(rest);
// }

// add2(10, 20, 30, 40, 50);


// 2. arguments object can not be used in nested function

// function add3() {
//     function add4() {
//         console.log(arguments);
//     }
//     add4();
// }

// add3(10, 20, 30, 40, 50);


// function add5(...rest) {
//     function add6() {
//         console.log(rest);
//     }
//     add6();
// }

// add5(10, 20, 30, 40, 50);
