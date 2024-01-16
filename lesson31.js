//====================================================
// 12) flat() => it is used to flat the array
// it returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// let arr = [10, 20, 30, 40, [50, 60, 70]]
// console.log(arr.flat(1))

// let arr1 = [10, 20, 30, 40, [50, 60, 70, [80, 90, 100]]]
// console.log(arr1.flat(2))

// let arr2 = [10, 20, 30, 40, [50, 60, 70, [80, 90, 100, [110, 120, 130,[140,150,[160,170]]]]]]
// console.log(arr2.flat(Infinity))

//====================================================
// 14) forEach() => it is used to iterate the array

// NOTE: foreach() method doesn't return anything
// NOTE: foreach() method doesn't change the original array
// NOTE: foreach() method always takes a callback function as an argument
// NOTE: foreach() method calls the callback function one time for each element in the array
// NOTE: foreach() method can take 3 arguments i.e currentValue, index, array

// syntax: array.forEach(function(currentValue, index, arr)))

// let arr3 = [10, 20, 30, 40, 50]

// arr3.forEach((element, index, arr) => {
//     element = element + 10
//     console.log('after change',element)

// })

// console.log(arr3)

//====================================================

// 15) includes() => it checks whether the given element is present in the array or not

// NOTE: includes() method returns true if the element is present in the array
// NOTE: includes() method returns false if the element is not present in the array
// let arr = [10, 20, 30, 40, 50]

// console.log(arr.includes(10))
// console.log(arr.includes(100))


//====================================================

// 16) indexOf() => it returns the index of the given element

// NOTE: indexOf() method returns the index of the given element
// NOTE: indexOf() method returns -1 if the given element is not present in the array


// let arr1 = [10, 20, 30, 40, 50]

// console.log(arr1.indexOf(50))


// findIndex vs indexOf what is the difference ?
// Answer => findIndex() method is used to find the index of the given element based on the condition


//====================================================
// 19) lastIndexOf() => it returns the last index of the given element

// let arr2 = [10, 20, 30, 40, 50];

// console.log(arr2.lastIndexOf(50));

// findLastIndex vs lastIndexOf what is the difference ?
// Answer => findLastIndex() method is used to find the index of the given element based on the condition

//====================================================
// 17) join() => it is used to join the elements of the array


// it returns a string => separated by the given separator

// let arr = [10 , 20, 30, 40, 50]
// console.log(arr.join(':'))

//====================================================

// 34) toString() => it is used to convert the array into string

// it returns a string => separated by comma

// let arr1 = [10, 20, 30, 40, 50]

// console.log(arr1.toString())

//====================================================

// 18) keys()
// 20) map()
// 13) flatMap()
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
// 35) unshift()
// 36) values()
// 37) with()
