//====================================================

// 18) keys() => return an iterator of keys
// let arr1 = [100, 200, 300, 400, 500];
// // console.log(arr1.keys()); // Array Iterator {}

// // // we have 2 ways to get the keys

// // // 1) using next() method
// // let interatorKeys = arr1.keys();

// // console.log(interatorKeys.next()); // {value: 0, done: false}
// // console.log(interatorKeys.next()); // {value: 1, done: false}
// // console.log(interatorKeys.next()); // {value: 2, done: false}
// // console.log(interatorKeys.next()); // {value: 3, done: false}
// // console.log(interatorKeys.next()); // {value: 4, done: false}
// // console.log(interatorKeys.next()); // {value: undefined, done: true}    // it indicates that there is no more keys

// // // 2) using for of loop

// // for (let key of arr1.keys()) {
// //   console.log(key);
// // }

//====================================================
// 36) values()
// let arr1 = [100, 200, 300, 400, 500];
// // console.log(arr1.values()); // Array Iterator {}

// // // we have 2 ways to get the values

// // // 1) using next() method
// let interatorvalues = arr1.values();

// console.log(interatorvalues.next()); // {value: 100, done: false}
// console.log(interatorvalues.next()); // {value: 200, done: false}
// console.log(interatorvalues.next()); // {value: 300, done: false}
// console.log(interatorvalues.next()); // {value: 400, done: false}
// console.log(interatorvalues.next()); // {value: 500, done: false}
// console.log(interatorvalues.next()); // {value: undefined, done: true}    // it indicates that there is no more values

// // // 2) using for of loop

// for (let key of arr1.values()) {
//   console.log(key);
// }

//====================================================

// 25) reverse() => reverse the array => it will change the original array

// let arr2 = [100, 200, 300, 400, 500];
// console.log(arr2.reverse()); // [500, 400, 300, 200, 100]
// console.log(arr2); // [500, 400, 300, 200, 100]

// ====================================================

// 31) toReversed() => reverse the array => it will not change the original array


// let arr3 = [100, 200, 300, 400, 500];
// console.log(arr3.toReversed()); // [500, 400, 300, 200, 100]
// console.log(arr3);

// ====================================================

// 29) sort() => it sorts the array => it will change the original array

// let arr4 = ['a', 'c', 'b', 'f', 'e', 'd'];
// console.log(arr4.sort()); // ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(arr4); // ['a', 'b', 'c', 'd', 'e', 'f']

// // interview question

// let arr6 = [100, 200, 2000, 3000, 300, 400, 500, 1000, 4000, 5000];
// console.log("interview question", arr6.sort()); // [100, 1000, 200, 2000, 300, 3000, 400, 4000, 500, 5000]

// // note=> it will work with numbers only => if subtraction comes negative number it wont change the order => if subtraction comes positive number it will change the order

// console.log("interview question", arr6.sort((a, b) => a - b)); // [100, 200, 300, 400, 500, 1000, 2000, 3000, 4000, 5000]

// console.log("interview question", arr6.sort((a, b) => b - a )); // [5000, 4000, 3000, 2000, 1000, 500, 400, 300, 200, 100]

//====================================================

// 32) toSorted() => it sorts the array => it will not change the original array

// let arr5 = ['a', 'c', 'b', 'f', 'e', 'd'];
// console.log(arr5.toSorted()); // ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(arr5); // ['a', 'b', 'c', 'd', 'e', 'f']


// // note=> it will work with numbers only => if subtraction comes negative number it wont change the order => if subtraction comes positive number it will change the order

// console.log("interview question", arr6.toSorted((a, b) => a - b)); // [100, 200, 300, 400, 500, 1000, 2000, 3000, 4000, 5000]
// console.log(arr6);
// console.log("interview question", arr6.toSorted((a, b) => b - a)); // [5000, 4000, 3000, 2000, 1000, 500, 400, 300, 200, 100]
// console.log(arr6);

//====================================================
// 37) with() => it will return the array with the new value

// syntax => with(index, value)

// let arr7 = [100, 200, 300, 400, 500];
// console.log(arr7.with(2, 600))
// console.log(arr7.with(1000)) // error :RangeError: Invalid index : 1000

//====================================================

// 28) some() => it will return true if any one of the element in the array satisfies the condition

// let arr8 = [100, 200, 300, 400, 500];

// console.log(arr8.some((value) => value > 200)); // true
// console.log(arr8.some((value) => value > 2000)); // false

//====================================================


// 20) map()
// 13) flatMap()
// 21) pop()
// 22) push()
// 23) reduce()
// 24) reduceRight()
// 26) shift()
// 27) slice()
// 30) splice()
// 33) toSpliced()
// 35) unshift()

