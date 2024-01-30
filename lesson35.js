
// Instance methods of String data type

// 1) at() => ES2021 => used to get the character at a specific index in a string
// Syntax: string.at(index)
// it takes argument as index and returns the character at that index and argument can be negative also
// if index is negative then it starts from the end of the string
// if index is greater than the length of the string then it returns undefined string

// let str1 = "Hello World";

// console.log(str1.at(1))
// console.log(str1[str1.length - 1]);
// console.log(str1.at(-1))
// console.log(str1.at(-2))
// console.log(str1.at(12)) // undefined

//================================================================
// 2) charAt() => used to get the character at a specific index in a string

// Syntax: string.charAt(index)
// it takes arguments as positive index and returns the character at that index
// if index is negative then it returns empty string


// let str2 = "Hello World";
// console.log(str2.charAt(1))
// console.log(str2.charAt(-1))    // empty string
// console.log(str2.charAt(12))    // empty string

//================================================================
// 3) concat() => used to concatenate two or more strings

// Syntax: string.concat(string1, string2, string3, ...)

// let str3 = "Hello";
// let str4 = "World";
// let str5 = "JavaScript";

// console.log(str3.concat(" ",str4," ", str5));

//================================================================
// 4) endsWith()

// Syntax: string.endsWith(searchString, length)
// it takes two arguments, first is searchString and second is length
// length is optional and it is used to specify the length of the string
// it returns true if the string ends with the given searchString otherwise it returns false
// let str6 = 'welcome to javascript tutorial';
// console.log(str6.endsWith('tutorial'));
// console.log(str6.endsWith('l'));
// console.log(str6.length)
// console.log(str6.endsWith("tutorial",30));
// console.log(str6.endsWith("tutorial",29));


//================================================================
// 5) includes() => used to check whether a string contains the specified string or not
// Syntax: string.includes(searchString, position)
// NOTE: atleast one time searchString should be present in the string
// it takes two arguments, first is searchString and second is position
// position is optional and it is used to specify the position from where the search starts
// it returns true if the string contains the given searchString otherwise it returns false

// let str7 = "welcome to javascript tutorial";

// console.log(str7.includes("javascript"));
// console.log(str7.includes("Javascript"));
// console.log(str7.includes("javascript",14));
// console.log(str7.includes("javascript",10));


//================================================================
// 6) indexOf() => used to find the index of the first occurrence of the specified string

// Syntax: string.indexOf(searchString, position)

// position is optional and it is used to specify the position from where the search starts
// it returns the index of the first occurrence of the given searchString
// if the string does not contain the given searchString then it returns -1

let str8 = "welcome to javascript tutorial javascript";

console.log(str8.indexOf("javascript"));    // 11
console.log(str8.indexOf("javascript", 12));    // 31
console.log(str8.indexOf("Javascript")); 

//================================================================
// 7) lastIndexOf() => used to find the index of the last occurrence of the specified string

// Syntax: string.lastIndexOf(searchString, position)

// position is optional and it is used to specify the position from where the search starts
// it returns the index of the last occurrence of the given searchString
// if the string does not contain the given searchString then it returns -1

let str9 = "welcome to javascript tutorial javascript";
console.log(str9.lastIndexOf("javascript"));    // 31
console.log(str9.lastIndexOf("javascript",12));    
console.log(str9.lastIndexOf("javascript",-12));    

//================================================================
// 8) match()
// 9) padEnd()
// 10) padStart()
// 11) repeat()
// 12) replace()
// 13) replaceAll()
// 14) search()
// 15) slice()
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

