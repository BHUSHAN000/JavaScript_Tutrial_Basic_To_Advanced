
// Promise chaining
// Promise chaining is used to execute multiple promises one after another.


// If a handler returns a promise, then the promise returned by the then call gets resolved with the returned promise as its value.

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// }).then((result) => {
//     console.log(result);
//     return result * 2;              // return a promise => resolve(result * 2)
//     // return new Promise((resolve, reject) => resolve(result * 2));
// }).then((result) => {
//   console.log(result);
//   return result * 2;                // return a promise => resolve(result * 2)
//   // return new Promise((resolve, reject) => resolve(result * 2));
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// }).catch((error) => {
//     console.log(error);
// });


//===============================================


// NOTE: If a promise is rejected, the control jumps to the nearest catch block down the chain.

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => resolve(result * 2));
//   })
//   .then((result) => {
//     console.log(result);
//     // return result * 2; // return a promise => resolve(result * 2)
//       // return new Promise((resolve, reject) => reject("Error occurred!"));
//       throw new Error("Error occurred!");
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("Error1 :",error);
//   })


//===============================================

// const promiseVal = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// });

// promiseVal.then((result) => {               // result = 1
//     console.log(result);
//     return new Promise((resolve, reject) => resolve(result * 2));
// });
// promiseVal.then((result) => {               // result = 1
//     console.log(result);
//     return new Promise((resolve, reject) => resolve(result * 2));
// });
// promiseVal.then((result) => {               // result = 1
//     console.log(result);
//     return new Promise((resolve, reject) => resolve(result * 2));
// });
// promiseVal.catch((error) => {
//     console.log("Error2 :",error);
// });

//================================================

// const promiseVal = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// });

// promiseVal.then((result) => {               // result = 1
//     console.log(result);
//     return new Promise((resolve, reject) => resolve(result * 2));
// });
// promiseVal.then((result) => {               // result = 1
//     console.log(result);
//     return new Promise((resolve, reject) => reject(result * 2));
// });
// promiseVal.then((result) => {               // result = 1
//     console.log(result);
//     return new Promise((resolve, reject) => resolve(result * 2));
// });
// promiseVal.catch((error) => {
//     console.log("Error2 :",error);
// });
