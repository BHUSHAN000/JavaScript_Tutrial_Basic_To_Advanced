
// Promise.resolve() is a static method that creates a resolved promise with the value passed as an argument.
// Promise.reject() is a static method that creates a rejected promise with the value passed as an argument.

// const promise1 = new Promise((resolve, reject) => {
//     resolve('Resolved');
// });
// promise1.then(result => console.log(result));
   
// const promise2 = new Promise((resolve, reject) => {
//     reject('Rejected');
// });
// promise2.then(result => console.log(result))
//     .catch(error => console.log(error));
  
let a = 11;
const promise3 = a == 10 ? Promise.resolve('Resolved') : Promise.reject('Rejected');
promise3.then(result => console.log(result))
    .catch(error => console.log(error));
