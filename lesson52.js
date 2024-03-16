
// 1. asynchronous code
// 2. callback function
// 3. result of 2 types => success or failure
// 4. state of promise => pending, fulfilled, rejected

// Promise is a JavaScript object for asynchronous operation. which is used to handle asynchronous operation. which eventually produces a value.

// Syntax
// const promise = new Promise(callbackFn);
// callback decides whether the promise is fulfilled or rejected.

// const callbackFn=(resolve, reject) => {}

// let temp = 110;
// const Promise1 = new Promise((resolve, reject) => {
//     if (temp === 10) {
//         setTimeout(() => resolve('Success because temp is 10'),5000);
//     } else {
//         setTimeout(() => reject('Failure because temp is not 10'),5000);
//     }
// });

// console.log(Promise1);
// // promise success handling way
// Promise1.then((result) => {
//     console.log(result)
// })

// // promise failure handling way
// Promise1.catch((error) => {
//     console.log(error)
// })


// 2nd way of handling promises
// Promise1.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );


const promise2 = new Promise((resolve, reject) => {
    const temp = Math.floor(Math.random() * 10);
    if (temp > 4) {
        resolve(`resolved promise due to value ${temp}`);
    } else {
        reject(`rejected promise due to value ${temp}`);
    }
});

promise2.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
    
