
/**
 * Generator Function => 1) function that can be paused and resumed
 * 2) function that can return multiple values
 */

/**
 * syntax: function *function_Name() { 
 *          return in the form of yield
 *  }
 */

// function *display() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// let result = display(); // it return an iterator object

// // interator object has next() method

// console.log(result.next()); // { value: 1, done: false }
// console.log(result.next()); // { value: 2, done: false }
// console.log(result.next()); // { value: 3, done: false }
// console.log(result.next()); // { value: 4, done: false }
// console.log(result.next()); // { value: undefined, done: true }

//===================

function* display() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let result = display(); // it return an iterator object

// interator object has next() method

// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

// for(let value of result) {  // it will print all the values which are returned by the generator function using yield not by return keyword
//     console.log(value);
// }

const finalResult = [...result]; // it will print all the values which are returned by the generator function using yield not by return keyword

console.log(finalResult); // [ 1, 2, 3 ]
