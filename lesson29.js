// array methods

//static methods
// 1) Array.isArray() => checks if the passed value is an array => returns true or false
// console.log(Array.isArray([])); // true
// console.log(Array.isArray([1, 2, 3, 4, 5])); // true
// console.log(Array.isArray('Hello'));
// console.log(Array.isArray(123));
// console.log(Array.isArray(true));
// console.log(Array.isArray({ name: 'John' }));

// 2) Array.from() => creates a new array from an array-like or iterable object

// console.log(Array.from('Bhushan'));
// console.log(Array.from([1, 2, 3, 4, 5]));
// console.log(Array.from({ name: 'John' }));

// function disp() {
//     console.log(Array.from(arguments));
// }
// disp(1, 2, 3, 4, 5);

// // 3) Array.of() => creates a new array from the passed arguments

// console.log(Array.of(1, 2, 3, 4, 5));
// console.log(Array.of(20));
// console.log(Array.of('Hello','Bye'));



//Instance methods
// 1) at() => returns the element at the passed index => ES2022
// it take negative index also
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr.at(0));
// console.log(arr.at(2));
// console.log(arr[arr.length - 1])
// // replace this legacy code with at() method
// console.log(arr.at(-1));
// console.log(arr[arr.length - 4]);
// console.log(arr.at(-4));

// 2) concat()  => returns a new array by merging two or more arrays

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8];

// console.log(arr1.concat(arr2));
// console.log(arr1, arr2)

// 3) copyWithin() => copies a part of an array to another location in the same array and returns it without modifying its length

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // syntax => arr.copyWithin(target, start, end) => start in inclusive and end is exclusive

// console.log(arr.copyWithin(1, 4, 6))
// console.log(arr.copyWithin(1, 4, 7))
// console.log(arr.copyWithin(1, 4))

// 4) entries()

// let arr = [10, 20, 30, 40, 50];
// // output =>[ [0, 10], [1, 20], [2, 30], [3, 40], [4, 50]]
// console.log(arr.entries());

// for (let i of arr.entries()) {
//     console.log(i);
// }

// 5) every()  => checks if all the elements of an array passes a test => returns true or false

let arr = [10, 20, 30, 40, 50];

console.log(arr.every(function (item) {
    return item > 19
}))

console.log(
  arr.every((item)=> {
    return item > 9;
  })
);

// 6) fill()
// 7) filter()
// 8) find()
// 9) findIndex()
// 10) findLast()
// 11) findLastIndex()
// 12) flat()
// 13) flatMap()
// 14) forEach()
// 15) includes()
// 16) indexOf()
// 17) join()
// 18) keys()
// 19) lastIndexOf()
// 20) map()
// 21) pop()
// 22) push()
// 23) reduce()
// 24) reduceRight()
// 25) reverse()
// 26) shift()
// 27) slice()
// 28) some()
// 29) sort()
// 30) splice()
// 31) toReversed()
// 32) toSorted()
// 33) toSpliced()
// 34) toString()
// 35) unshift()
// 36) values()
// 37) with()
