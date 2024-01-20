
// 20) map() => creates a new array with the results of calling a provided function on every element in the calling array

// const arr = [1, 2, 3, 4, 5];

// //o/p =>  [4, 5, 6, 7, 8]

// const result = arr.map((item, index, array) => {        // map always returns a new array
//     return item + 3;
//  })

//  console.log(result);

//==============================================================================

// 13) flatMap()   =>  returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but flatMap() is often quite useful, as merging both into one method is slightly more efficient.

// let arr = [1, 2, 3, 4, 5];

// // o/p => [1,2,[3,6,7],4,5]

// let result = arr.map((item, index, array) => {
//     return item == 3? [item, item+ 3, item +4] : item;
// })

// console.log(result);

// let result2 = result.flat(Infinity);
// console.log(result2);

// // it is made easy with flatMap()

// let result3 = arr.flatMap((item, index, array) => {
//     return item == 3? [item, item+ 3, item +4] : item;
// })
// console.log(result3);

//==============================================================================
// 21) pop() => remove last element from an array=> returns the removed element

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.pop())
// arr1.pop()
// console.log(arr1);
//==============================================================================

// // 26) shift() => remove first element from an array =>  returns the removed element
// let arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.shift());
// arr2.shift();
// console.log(arr2);
//==============================================================================
// 22) push() => add element to the end of an array => returns the new length of the array

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.push(6));
// arr1.push(7);
// console.log(arr1);
// //==============================================================================

// // 35) unshift() => add element to the beginning of an array => returns the new length of the array

// let arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.unshift(6));
// arr2.unshift(7);
// console.log(arr2);
//==============================================================================
// 27) slice() => returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

// let arr = [1, 2, 3, 4, 5];

// // syntax: slice(start, end)    => start is inclusive and end is exclusive
// // start is required and end is optional

// console.log(arr.slice(2, 4)) // o/p => [3, 4]
// console.log(arr)

// console.log(arr.slice(2)) // o/p => [3, 4, 5]

//==============================================================================
// 30) splice() => use to add or remove elements from an array => returns removed elements

// syntax: splice(start, deleteCount, item1, item2, item3, ...)

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.splice(2, 0, 6, 7, 8));   // insert 6, 7, 8 at index 2
// // console.log(arr);

// console.log(arr.splice(2, 2))     // remove 2 elements from index 2
// console.log(arr);

// arr.splice(2, 2, 6, 7, 8)   // remove 2 elements from index 2 and insert 6, 7, 8
// console.log(arr);

//==============================================================================
// 33) toSpliced() => use to add or remove elements from an array => returns removed elements
// let arr = [1, 2, 3, 4, 5];

// // console.log(arr.splice(2, 0, 6, 7, 8));   // insert 6, 7, 8 at index 2
// // console.log(arr);

// console.log(arr.splice(2, 2))     // remove 2 elements from index 2
// console.log(arr);

// arr.splice(2, 2, 6, 7, 8)   // remove 2 elements from index 2 and insert 6, 7, 8
// console.log(arr);
//==============================================================================
// 23) reduce() => returns a single value after reducing the array from left to right

// let arr = [10, 20, 30, 40, 50];

// o/p => 250

// let callbackFn = (acc, current) => {
//     console.log(acc, current);
//     return acc + current;
// }

// let result = arr.reduce(callbackFn,100);
// console.log(result);

//==============================================================================
// 24) reduceRight() => returns a single value after reducing the array from right to left


// let arr1 = [10, 20, 30, 40, 50];

// // o/p => 250

// let callbackFn1 = (acc, current) => {
//   console.log(acc, current);
//   return acc + current;
// };

// let result1 = arr1.reduceRight(callbackFn1, 100);
// console.log(result1);
