//================================================================
// 16) split() => used to split a string into an array of substrings, and returns the new array.
// it returns an array of strings, which are separated by the specified separator.
let str = "Hello World bhushan pawar 123";
console.log(str.split(" ")); // ["Hello", "World", "bhushan", "pawar", "123"]
console.log(str.split("")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", " ", "b", "h", "u", "s", "h", "a", "n", " ", "p", "a", "w", "a", "r", " ", "1", "2", "3"]


//================================================================
// 17) startsWith() => used to check whether a string begins with the characters of a specified string.

// it returns true if the string begins with the characters, and false if not.
// it is case sensitive.
// syntax: string.startsWith(searchString, position)
// searchString: the characters to be searched for at the start of the string.
// position: optional. the position in the string at which to begin searching for searchString. default is 0.


let str1 = "Hello World";
console.log(str1.startsWith("Hello")); // true
console.log(str1.startsWith("hello")); // false

console.log(str1.startsWith("World",6)); // true
console.log(str1.startsWith("World",5)); // false


//================================================================
// 18) substr() => it is deprecated. use subString() or slice() instead.

// it is used to extract parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

// syntax: string.substr(start, no_of_characters_to_return)

let str2 = "Hello World";
console.log(str2.substr(1,6)); // "ello W"


//================================================================
// 19) substring() => used to extract parts of a string, and returns the extracted parts in a new string.
//syntax: string.substring(start, end)

// start: required. the position where to start the extraction. first character is at index 0.
// end: optional. the position where to end the extraction. if omitted, it extracts the rest of the string.
// start position is included ie inclusive, but end position is not included i.e exclusive.

let str3 = "Hello World";
console.log(str3.substring(1,8)); // "ello Wo"


//================================================================
// 20) toLowerCase() => used to convert a string to lowercase letters.

let str4 = "Hello World";
console.log(str4.toLowerCase()); // "hello world"
console.log(str4); // "Hello World"

//================================================================
// 21) toUpperCase() => used to convert a string to uppercase letters.
let str5 = "Hello World";
console.log(str5.toUpperCase()); // "HELLO WORLD"
console.log(str5); // "Hello World"

//================================================================
// 22) toString() => used to convert a a datatype value to a string.

let num = 123;

console.log(num.toString()); // "123"
console.log(123..toString()); // "123"
console.log(true.toString()); // "true"
console.log(typeof true.toString()); // string

// console.log(null.toString()) // error
// console.log(undefined.toString())   // error

//================================================================
// 23) trim()   => used to remove whitespace from both ends of a string.

let str6 = "   Hello World   ";
console.log(str6.trim()); // "Hello World"
console.log(str6); // "   Hello World   "

//================================================================
// 24) trimEnd() => used to remove whitespace from the end of a string.

let str7 = "   Hello World   ";
console.log(str7.trimEnd()); // "   Hello World"

// 25) trimStart()

let str8 = "   Hello World   ";
console.log(str8.trimStart()); // "Hello World   "

//================================================================
// 26) valueOf() => used to return the primitive value of a string object.

let str9 = new String("Hello World");
console.log(str9); // String {"Hello World"}
console.log(str9.valueOf()); // "Hello World"
