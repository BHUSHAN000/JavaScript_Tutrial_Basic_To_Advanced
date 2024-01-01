
// Number types methods are 2 types
// 1) static methods
// 2) instance methods

// static methods => methods are called directly on the Number object
// instance methods => methods are called on the Number object instances

let num1 = new Number(10);

// static methods syntax
// ObjectName_or_ClassName.methodName()

// instance methods syntax
// objectName_or_instance.methodName()


// static methods
// 1) Number.isFinite() => to check if number is finite or not (true or false)

// console.log(Number.isFinite(10));   // true
// console.log(Number.isFinite(10.2)); // true
// console.log(Number.isFinite("Hello")); // false
// console.log(Number.isFinite(""));   // false
// console.log(Number.isFinite(null)); // false
// console.log(Number.isFinite(undefined));  // false
// console.log(Number.isFinite({
//     name: "John"
// }));                                    //false
// console.log(Number.isFinite({}));       // false
// console.log(Number.isFinite(Number.POSITIVE_INFINITY)); // false
// console.log(Number.isFinite(Number.NEGATIVE_INFINITY)); // false


// 2 types of isFinite() methods
// 1) static method
// 2) global method

// console.log(Number.isFinite(0));   // true
// console.log(isFinite(0));  // true

// console.log(Number.isFinite("0"));   // false => it wont convert string to number
// console.log(isFinite("0"));  // true    => it will convert string to number


// ================================
// 2) Number.isInteger()    => to check if number is integer or not (true or false)

// console.log(Number.isInteger(10));   // true
// console.log(Number.isInteger(10.2)); // false
// console.log(Number.isInteger("Hello")); // false
// console.log(Number.isInteger(""));   // false
// console.log(Number.isInteger(null)); // false
// console.log(Number.isInteger(undefined));  // false
// console.log(Number.isInteger({
//     name: "John"
// }));                                    // false
// console.log(Number.isInteger({}));       //
// console.log(Number.isInteger(Number.POSITIVE_INFINITY)); // false
// console.log(Number.isInteger(Number.NEGATIVE_INFINITY)); // false

// ================================

// 3) Number.isNaN()    => to check if number is NaN or not (true or false)

// console.log(Number.isNaN(10));   // false
// console.log(Number.isNaN(10.36));   // false
// console.log(Number.isNaN("10"));   // false
// console.log(Number.isNaN("Hello")); // false
// console.log(Number.isNaN("NaN"));   // false

// console.log("=====================================")

// console.log(isNaN(10));   // false
// console.log(isNaN(10.36));   // false
// console.log(isNaN("10"));   // false => it converts string to number and then checks if it is NaN or not
// console.log(isNaN("Hello")); // true => it converts string to number and then checks if it is NaN or not
// console.log(isNaN("NaN"));   //  true => it converts string to number and then checks if it is NaN or not
// console.log(isNaN(" "))  // false => it converts string to number and then checks if it is NaN or not
// console.log(isNaN(10/0))  // false => it converts string to number and then checks if it is NaN or not
// console.log(isNaN(10 / 'hello'))  // true => it converts string to number and then checks if it is NaN or not

// ==================================
// 4) Number.parseInt() => to convert string to integer => output will be in the form of integer

// console.log(Number.parseInt(10));   // 10
// console.log(Number.parseInt("10"));   // 10
// console.log(Number.parseInt("10.36"));   // 10
// console.log(Number.parseInt(null));   // NaN
// console.log(Number.parseInt(undefined));   // NaN
// console.log(Number.parseInt("Hello"));   // NaN
// console.log(Number.parseInt(""));   // NaN
// console.log(Number.parseInt("   "));   // NaN
// console.log(Number.parseInt("10 years"));   // 10
// console.log(Number.parseInt("years 10"));   // NaN

// // 2nd argument is radix -this is optional parameter default value of radix is 10 - decimal system

// console.log(Number.parseInt("10", 2));  // 2 => binary
// console.log(Number.parseInt("101", 2));  // 5 => binary
// console.log(Number.parseInt("101", 8));  // 65 => octal
// console.log(Number.parseInt("FFFF", 16));  // 65 => hexadecimal


//=================================================

// 5) Number.parseFloat() => to convert string to float => output will be in the form of float

console.log(Number.parseFloat(10));   // 10
console.log(Number.parseFloat("10"));   // 10
console.log(Number.parseFloat("10.36"));   // 10.36
console.log(Number.parseFloat(null));   // NaN
console.log(Number.parseFloat(undefined));   // NaN
console.log(Number.parseFloat("Hello"));   // NaN
console.log(Number.parseFloat(""));   // NaN
console.log(Number.parseFloat("   "));   // NaN
console.log(Number.parseFloat("10.35 years"));   // 10.35
console.log(Number.parseFloat("years 10"));   // NaN


//instance methods
// 1) num1.toExponential()
// 2) num1.toFixed()
// 3) num1.toPrecision()
// 4) num1.toString()
// 5) num1.valueOf()
