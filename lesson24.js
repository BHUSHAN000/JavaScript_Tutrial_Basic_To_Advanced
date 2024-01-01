
// Number => we can store a number in a variable
// we have 2 type of number formats in JS=> integer and float like 10,20 there are integer and 10.5,20.5 there are float

// var num1 = 10.5;                // literal way i.e primitive way
// let num2 = 20.5;
// const num3 = 30;


// var num4 = new Number(10);      // constructor way => it attaches its prototype to the variable

// var num5 = Number(20);          // constructor way  => it does not attach its prototype to the variable

// console.log(num4);
// console.log(num5);

let numb6 = 10;
let numb7 = 20;
let numb8= '10'

console.log(numb6 + numb7);     // 30

console.log(typeof numb8, typeof numb6);  // string number
console.log(numb8 + numb6 + numb7);     // concatenation of string and number
console.log(numb6 + numb7 + numb8);     // concatenation of number and string => string

// in case subtraction string variable gets converted into number
// in case of multiplication and division string variable gets converted into number

console.log(numb6 - numb7);
console.log(numb7 - numb8)

console.log(numb6 * numb7);
console.log(numb7 * numb8);

console.log(numb6 / numb7);
console.log(numb7 / numb8);

let numb9 = 'Hello'

console.log(numb9 + numb6)
console.log(numb6 + numb9)

console.log(numb9 - numb6)    // NaN => Not a Number
console.log(numb6 * numb9)
console.log(numb6 / numb9)
