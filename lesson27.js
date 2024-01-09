// object, number, array

// Array => object => collection of values
// object => collection of key value pairs

// let newObj = {
//     name: 'bhushan'
// }

// console.log(newObj)

// let arr =['bhushan']

// let arr = []; // empty array  i.e array literal

// let arr1 = ["bhushan", "pawar", "john", "mike"]; // array literal with values

// let arr2 = new Array(); // empty array i.e array constructor

// let arr3 = [
//   "bhushan",
//   10,
//   true,
//   null,
//   undefined,
//   { name: "bhushan" },
//   function () {
//     console.log("hello");
//     },
//   'pawar'
// ];

// console.log(arr3)

// let arr = [10, 20, 30, 40]
// console.log(arr)
// console.log(arr.length)

// let arr1 = [];

// arr1[0] = 10;   // insert value in array at 0th index
// arr1[1] = 20;   // insert value in array at 1st index
// arr1[2] = 30;   // insert value in array at 2nd index
// arr1[3] = 40;   // insert value in array at 3rd index

// console.log(arr1)
// console.log(arr1.length)

// let arr2 = [];

// // arr2[0] = 10;   // insert value in array at 0th index
// arr2[5] = 20;   // insert value in array at 5th index

// console.log(arr2)
// console.log(arr2.length)


// constructor way

// let arr = new Array(10,20,30,40,50); // array constructor with values
// console.log(arr)
// console.log(arr[6])

// let arr1 = new Array(10)    //  array constructor with size
// console.log(arr1)


// let arr2 = new Array('bhushan');
// console.log(arr2)

// Rules for array
//1) start index is 0
//2) invalid index will return undefined
//3) arr[0] or arr['0'] => number formatted index is allowed/ recommended
// 4) arr['name'] => string formatted index is not allowed
// 5) associative array is not allowed in javascript

// let arr = [10, 20, 30]
// arr['bhushan'] = 40

// // console.log(arr)

// // delete value from array
// delete arr[1]
// console.log(typeof arr);

let arr = [10, 20, 30, 40, 50];

// for- of loop works on iterable objects it will not work on objects only works on array, string, set, map

for (let i of arr) {            // it returns value
    console.log(i);
}


// for- in loop works on objects and iterable objects
for (let i in arr) {            // it returns index
    console.log(i+" " + arr[i]);
}


// forEach
