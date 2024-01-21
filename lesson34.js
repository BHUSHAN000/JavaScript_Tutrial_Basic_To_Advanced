
// String Datatype

// 2 ways

// 1) literal

// let newStr = 'Hello World';

// 2) constructor

// let newStr2 = new String('Hello World');

// console.log(newStr == newStr2); // true // loose equality
// console.log(newStr === newStr2); // false // strict equality
// console.log(typeof newStr, typeof newStr2);

// String Properties

// 1) length

// console.log(newStr.length);


// string denotation

// 1) single quote
// let str1 = 'Hello World';
// console.log(str1);
// // 2) double quote
// let str2 = "Hello world";
// console.log(str2);
// // 3) backtick
// let str3 = `Hello
// World`;
// console.log(str3);

// Static Methods

//1)  String.fromCharCode() // returns a string created by using the specified sequence of Unicode values => BMP Code (Basic Multilingual Plane)
// 0 - 65535

// let str4 = String.fromCharCode(65, 66, 67);
// console.log(str4);
// let str5 = String.fromCharCode(68);
// console.log(str5);
// let str8 = String.fromCharCode(0x1f609);
// console.log(str8)

// let str10 = String.fromCharCode(0x01d4bd);
// console.log(str10)
//2)  String.fromCodePoint() // returns a string created by using the specified sequence of code points => Unicode Code Point or Non BMP Code (Basic Multilingual Plane)
// 0 - 1114111

// let str6 = String.fromCodePoint(65, 66, 67);
// console.log(str6);
// let str7 = String.fromCodePoint(68);
// console.log(str7);
// let str9 = String.fromCodePoint(0x1f609);
// console.log(str9);

// let str11 = String.fromCodePoint(0x01d4bd);
// console.log(str11);

//3)  String.raw => return a raw string representation of a template literal


// escape sequence or escape character
// \n => new line
// \t => tab
// \b => backspace
// \" => double quote
// \' => single quote

// let str12 = String.raw`Hello\"World\"`;

// console.log(str12);

// console.log('Hello\nWorld');
// console.log('Hello\tWorld');
// console.log('Hello\"World\"');
// console.log("C:Users\notissueDesktopJavaScriptlesson34.js");

// let str13 = String.raw`C:\Users\notissue\Desktop\JavaScript\lesson34.js`;
// console.log(str13);

// template literal => it means we can use multi line string using backtick

// let str14 = `Hello
// World`;
// console.log(str14);

// string interpolation => it means we can use variable inside the string
// let temp = 20
// let str15 = 'Hello ' + temp + 10 + ' World';
// console.log(str15);

// // let str16 = `Hello ${temp} World`;
// // console.log(str16);

// let str17 = `Hello ${temp + 10} World`;
// console.log(str17);
