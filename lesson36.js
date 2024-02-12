//================================================================
// 8) match() => used to search a string for a match against a regular expression, and returns the matches
// Syntax: string.match(regexp)

// returns an array of matches
// if there is no match then it returns null
// let str1 = 'Welcome to JavaScript tuTorial';
// let str2 = /[A-Z]/g;

// console.log(str1.match(str2));

// let str3 = 'welcome to javascript tutorial';
// let str4 = /[A-Z]/g;
// console.log(str3.match(str4));

// //================================================================
// // 9) padEnd()  => used to pad the current string with a given string until the resulting string reaches the given length

// // Syntax: string.padEnd(targetLength, padString)

// let str5 = 'Hello';

// console.log(str5.padEnd(20, '*'));


// //================================================================
// // 10) padStart() => used to pad the current string with a given string until the resulting string reaches the given length

// let str6 = 'Hello';
// console.log(str6.padStart(20, '*'));
// console.log(str6.padStart(6, '*'));


// //================================================================
// // 11) repeat() => used to return a new string with a specified number of copies of the string

// // Syntax: string.repeat(count)
// let str7 = 'Hello ';
// console.log(str7.repeat(5));


//================================================================
// 12) replace() => used to replace a specified value with another value in a string
// Syntax: string.replace(searchValue, newValue)

// let str8 = 'Welcome to JavaScript tutorial JavaScript';

// console.log(str8.replace('JavaScript', 'JS'));


// let str9 = 'Welcome to JavaScript tutorial JavaScript';
// let regexp1 = /JavaScript/;
// console.log(str9.replace(regexp1, 'JS'));
//================================================================
// 13) replaceAll() => used to replace all occurrences of a specified value with another value in a string

// let str10 = 'Welcome to JavaScript tutorial JavaScript';
// console.log(str10.replaceAll('JavaScript', 'JS'));

// this is an alternative to the replaceAll() method by using regular expression
// let str9 = "Welcome to JavaScript tutorial JavaScript";
// let regexp1 = /JavaScript/g;
// console.log(str9.replace(regexp1, "JS"));

//================================================================
// 14) search() => it is used to search a string for a specified value and returns the position of the match

// it always returns the position of the first match
// if there is no match then it returns -1

// Syntax: string.search(searchValue)
let str11 = 'Welcome to JavaScript tutorial JavaScript';
console.log(str11.search('JavaScript', 12));
let str12= /JavaScript/;
console.log(str11.search(str12));
let str13= /JavaScript/g;
console.log(str11.search(str13));

let str14 = 'javascript'
console.log(str11.search("javascript")); // -1

// differs from indexOf() method in the following ways:
// 1) search() method cannot take a second start position argument
// 2) search() method can take a regular expression as an argument

//================================================================
// 15) slice() => used to extract a part of a string and returns the extracted part in a new string

// Syntax: string.slice(start, end) => start position inclusive, end position exclusive
// start required and end are optional

let str15 = 'Welcome to JavaScript tutorial JavaScript';
console.log(str15.slice(8, 18));
console.log(str15.slice(8));
console.log(str15.slice(8, -4));
console.log(str15.slice(-8, -4));
console.log(str15.slice(-4, 8));

//================================================================
// 16) split()
// 17) startsWith()
// 18) substr()
// 19) substring()
// 20) toLowerCase()
// 21) toUpperCase()
// 22) toString()
// 23) trim()
// 24) trimEnd()
// 25) trimStart()
// 26) valueOf()
