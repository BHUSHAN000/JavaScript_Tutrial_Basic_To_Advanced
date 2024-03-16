
// callback => whenever we are passing any function as an argument to another function, then that function is called as callback function.

// Synchronous callback
// function addition(a) {
//   return a + 100;
// }

// function calculate(num,callbackFN) {
//   return callbackFN(num);
// }

// console.log(calculate(100, addition))


// asynchronous callback

// function addition(a) {
//   return a + 100;
// }

// function calculate(num,callbackFN) {
//   setTimeout(() => {
//     console.log(callbackFN(num));
//   },1000)
// }

// console.log('start')
// calculate(100, addition)
// console.log('end')


// Callback hell or pyramid of doom

function addition(a, callbackFn) {
  callbackFn(a + 100);
}

function multiply(a,callbackFn) {
  callbackFn(a * 100);
}

function division(a,callbackFn) {
    callbackFn(a / 100);
}

function subtraction(a,callbackFn) {
  callbackFn(a - 100);
}

function calculation(initialValue){
  let result = 0;

  addition(initialValue, (result) => {
    multiply(result, (result) => {
     division(result, (result) => {
       subtraction(result, (result) => {
        console.log(result)
       })
     })
   })
  })
}

calculation(1000)
