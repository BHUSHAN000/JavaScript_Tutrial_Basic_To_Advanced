
// Synchronous vs Asynchronous

// Synchronous

// console.log('Before');
// console.log('After');
// console.log('End');

// Asynchronous

// console.log("Before");
// console.log("End");
// console.log("After");

// setTimeout => Asynchronous,is a function that takes a callback function and a time in milliseconds as arguments. It calls the callback function after the specified time.

// syntax:
// setTimeout(callback_function, time_in_miliseconds);

// console.log("Before");

// const timeoutId = setTimeout(function () {
//     console.log('After');
//     console.log('After');
//     console.log('After');
//     console.log('After');
//     console.log('After');
//     console.log('After');
//     console.log('After');
// }, 5000);

// console.log("End");


// SetInterval => Asynchronous, is a function that takes a callback function and a time in milliseconds as arguments. It calls the callback function after the specified time, and then calls the callback function again after the specified time has passed.

// syntax:
// setInterval(callback_function, time_in_miliseconds);

// console.log("Before");

// const intervalId= setInterval(function () {
//     console.log('After');
// }, 5000);

// console.log("End");
