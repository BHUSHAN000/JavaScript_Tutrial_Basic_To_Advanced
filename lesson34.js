
// String Datatype

// 2 ways to create a string

// 1) using string literal

let newString = 'Hello World';

// 2) using string constructor

let newString2 = new String('Hello World');

// console.log(newString);
// console.log(newString2);
// console.log(newString == newString2); // true => // loose equality operator
// console.log(newString === newString2); // false => // strict equality operator
// console.log(typeof newString, typeof newString2); // string object
//=================================================================================

// 3 ways to denote a string

// 1) single quote
// let singleQuote = 'Hello\nWorld';
// console.log(singleQuote);
// // 2) double quote
// let doubleQuote = "Hello\nWorld";
// console.log(doubleQuote);
// // 3) backtick
// let backtick = `Hello
// World`;
// console.log(backtick);


// let singleQuote1 = 'Hello \"World\"';
// console.log(singleQuote1);
// // 2) double quote
// let doubleQuote1 = "Hello \'World\'";
// console.log(doubleQuote1);
// // 3) backtick
// let backtick1 = `Hello \"World\"`;
// console.log(backtick1);
//=================================================================================

// string property

// 1) length property
// console.log(newString.length); // 11


//=================================================================================

// static methods: methods that are called directly on the constructor

//1)  String.fromCharCode() // returns a string created by using the specified sequence of Unicode values => BMP Code (Basic Multilingual Plane)
// 0 - 65535

// console.log(String.fromCharCode(65,66,67,68))
// console.log(String.fromCharCode(66))
// console.log(String.fromCharCode(90))
// console.log(String.fromCharCode(0x1f609));
// console.log(String.fromCharCode(0x01d4bd));

//2)  String.fromCodePoint() // returns a string created by using the specified sequence of code points => Unicode Code Point or Non BMP Code (Basic Multilingual Plane)
// 0 - 1114111

// console.log(String.fromCodePoint(65));
// console.log(String.fromCodePoint(66));
// console.log(String.fromCodePoint(90));
// console.log(String.fromCodePoint(0x1f609));
// console.log(String.fromCodePoint(0x01d4bd));

//=================================================================================
//3)  String.raw => return a raw string representation of a template literal

// escape character
// \n => new line
// \t => tab
// \b => backspace
// \r => carriage return
// \v => vertical tab
// \f => form feed
// \" => double quote
// \' => single quote

// console.log(`Hello\nWorld`);
// console.log(String.raw`Hello\nWorld`);
console.log(`c:\dev\notes\lesson34.js`)
console.log(String.raw`c:\dev\notes\lesson34.js`);

//=================================================================================

// template literal => backtick

let myName = `Bhushan Pawar`

// string interpolation => it means we can inject a variable or expression inside a string

console.log(`hello ${myName}`)
console.log(`hello ${myName.toUpperCase()}`)
console.log(`hello ${20     + 30}`)
