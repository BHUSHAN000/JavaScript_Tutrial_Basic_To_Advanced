
// JAVASCRIPT single threaded language
// Javascript is a synchronous language

// console.log('Start');
// function display() {
//     console.log('Display');
// }
// display();
// console.log('End');

// JS engine executes the code line by line
// chrome=> v8 engine
// firefox=> spider monkey
// safari=> webkit/ JavascriptCore

// Global execution context => a place where code is stored

// call stack => a place where the code is executed

// Event loop => continuously checks the call stack and the callback queue => if call stack is empty => it will move the item from callback queue to the call stack

// Callback queue => a place where the callback functions are stored

// microtask queue => a place where the promises are stored

// Event loop always gives priority to the microtask queue over the callback queue

console.log("Start");
function display() {
  setTimeout(() => console.log("Display1"), 500);
  setTimeout(() => console.log("Display2"), 5000);
  setTimeout(() => console.log("Display3"), 2500);
  setTimeout(() => console.log("Display4"), 4500);
  setTimeout(() => console.log("Display5"), 1500);
}
display();

Promise.resolve("Promise 1").then((res) => console.log(res));
Promise.resolve("Promise 2").then((res) => console.log(res));
Promise.resolve("Promise 3").then((res) => console.log(res));
Promise.resolve("Promise 4").then((res) => console.log(res));
Promise.resolve("Promise 5").then((res) => console.log(res));
Promise.resolve("Promise 6").then((res) => console.log(res));
console.log("End");




