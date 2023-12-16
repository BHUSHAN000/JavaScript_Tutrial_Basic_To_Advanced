
// closure in JavaScript
// closure is a function that has access to its outer function scope even after the outer function has returned.

// Example 1
// function outerFunction() {
//     var outerVariable = 100;
//     function innerFunction() {
//         let temp = 10;
//         console.log(outerVariable);
//     }
//     console.log(temp)
//     return innerFunction;
// }
// var innerFunc = outerFunction();
// innerFunc();

// Example 2


function display() {
    var count = 100;
    function inner() {
        console.log(count)
    }
    inner();
}

display();
