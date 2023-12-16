
// arguments object

function add(a,b) {
    console.log('Hello', a, b)
    console.log(arguments.length)
    // console.log(arguments.callee)
}

add(10, 20, 30, 40, 50,60,70,80,90,100)


// need of arguments object

// finding length of arguments i.e number of arguments passed to a function

//Limitation of arguments object
// 1. arguments object is not an array
// 2. arguments object does not support array methods
// 3. arguments object is not available in arrow function
// 4. arguments object is not available in nested function
// 5. arguments object is not available in callback function
// 6. arguments object is not available in event handler
// 7. arguments object is not available in async function
// 8. arguments object is not available in generator function
// 9. arguments object is not available in class method
// 10. arguments object is not available in object method
// 11. arguments object is not available in getter and setter
// 12. arguments object is not available in constructor
// 13. arguments object is not available in class static method
// 14. arguments object is not available in class static getter and setter
// 15. arguments object is not available in class static constructor
// 16. arguments object is not available in class static arrow function
// 17. arguments object is not available in class static nested function
// 18. arguments object is not available in class static callback function
// 19. arguments object is not available in class static event handler
// 20. arguments object is not available in class static async function
// 21. arguments object is not available in class static generator function
// 22. arguments object is not available in class static object method
// 23. arguments object is not available in class static getter and setter


// arguments object is not available in arrow function

// const add1 = () => {
//     console.log(arguments)
// }

// add1(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

// arguments object is not available in nested function

// const add2 = function () {
//     function inner() {
//         console.log(arguments)
//     }
//     inner()
// }

// add2(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

// arguments object is not available in callback function

// const add3 = function () {
//     setTimeout(function () {
//         console.log(arguments)
//     }, 1000)
// }
// add3(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

// arguments object is not available in event handler

// const add4 = function () {
//     document.getElementById('btn').addEventListener('click', function () {
//         console.log(arguments)
//     })
// }
// add4(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
