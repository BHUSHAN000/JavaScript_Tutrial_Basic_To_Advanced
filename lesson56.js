
// Promise.any() => It takes an array of promises and returns a promise that fulfills when any of the promises fulfills.

const promise1 = new Promise((resolve, reject) => {
    console.log('Promise 1');
    reject(100);
});

const promise2 = new Promise((resolve, reject) => {
    console.log('Promise 2');
    reject(200);
});

const promise3 = new Promise((resolve, reject) => {
    console.log('Promise 3');
    reject(300);
});

Promise.any([promise1, promise2, promise3])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
