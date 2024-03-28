
// Promise => async operation perform

// async - await => is a new way to write asynchronous code. It makes your code look synchronous, but it's actually asynchronous.

// async function displayData() {  // async function always return a promise
//     return 100;
// }

// console.log(displayData());


//===============================================================

//  function displayData() {  // async function always return a promise
//     new Promise((resolve) => {  // async operation
//         resolve(100);
//     }).then(result => {
//         console.log(result);
//     })

//     console.log('hello');       // sync operation
//     console.log('world');       // sync operation
// }

// displayData();

async function displayData() {
    const result = await Promise.resolve(100);  // async operation
    console.log(result)                 
    console.log('hello')             // sync operation
    console.log('world')             // sync operation
}

displayData();
