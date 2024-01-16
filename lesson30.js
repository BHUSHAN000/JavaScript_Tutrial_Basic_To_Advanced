

// 6) fill() => fill the array with a static value
// syntax: array.fill(value, start, end) => start and end are optional

// start: index at which to start changing the array ( inclusive)
// end: index at which to end changing the array (not included i.e exclusive)

// return => existing array get modified and return it

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr.fill(0, 2, 5));// 2 will inclusive and 5 will exclusive
// console.log(arr.fill(0,2))
// console.log(arr.fill(0))

//====================================================

// 7) filter() => it is used to iterate over the array and filter out the elements

// Note: 1) it does not change the original array, it returns the new array
// 2) it takes a callback function as an argument which contains 3 arguments i.e element, index, array

// syntax: array.filter((element, index, array) => { })

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const callbackFunction = (value, index, array) => {
//     return value >= 6
// }

// const result = arr.filter(callbackFunction);
// console.log(result);


// const result = arr.filter((value, index, array) => {
//   return value >= 6;
// });
// console.log(result);
//====================================================
// 8) find() => it is used to find the first element occurance from the array based on the callback function

//NOTE:  it returns the first element from the array based on the callback function, if element is not found then it returns undefined

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = arr.find((value) => {
//     return value > 60
// });
// console.log(result);

//====================================================

// 9) findIndex() => it is used to find the index of the first element occurance from the array based on the callback function

// return => it returns the index of the first element from the array based on the callback function, if element is not found then it returns -1

// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// const result1 = arr1.findIndex((value) => {
//     return value > 600
// });
// console.log(result1);
//====================================================

// 10) findLast() => it is used to find the last element occurance from the array based on the callback function

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = arr.findLast((value) => {
//   return value > 6;
// });
// console.log(result);

//====================================================
// 11) findLastIndex() => it is used to find the index of the last element occurance from the array based on the callback function


// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90 , 10];

// const result1 = arr1.findLastIndex((value) => {
//     return value > 60
// });
// console.log(result1);
