
// Promise having some static methods

// Promise.all() method => returns a single value in the form of an array if all the promises are resolved

const promise1 = new Promise((resolve, reject) => {
    console.log('Promise 1 is resolved');
    resolve(100)
});
const promise2 = new Promise((resolve, reject) => {
    console.log('Promise 2 is rejected');
    reject(200)
});
const promise3 = new Promise((resolve, reject) => {
    console.log('Promise 3 is resolved');
    resolve(300)
});

Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
        result.forEach((value) => {
            console.log(value);
        })
    })
    .catch((error) => {
        console.log(error);
    })
