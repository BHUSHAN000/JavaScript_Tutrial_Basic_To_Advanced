
// Promise.allSettled() method returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.

const promise1 = new Promise((resolve, reject) => {
    console.log('Promise 1');
    reject(100);
});

const promise2 = new Promise((resolve, reject) => {
    console.log('Promise 2');
    reject("Something is wrong!");
});

const promise3 = new Promise((resolve, reject) => {
    console.log('Promise 3');
    reject(300);
});

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
    });
