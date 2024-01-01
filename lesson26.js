//instance methods
// 1) num1.toExponential() => it is used to convert a number into exponential notation. (return type=> string formatted as exponential notation.)

let num1= 123450000
console.log(num1.toExponential())

// here 3 denotes the number of digits after the decimal point. and it is optional. default value is 0.

console.log(num1.toExponential(3)); // 3 is the number of digits after the decimal point.
console.log(num1.toExponential(8)); // 3 is the number of digits after the decimal point.
console.log(123450000..toExponential());
console.log((123450000).toExponential());


//==================================================================================================
// 2) num1.toFixed()   => it is used to convert a number into fixed point notation. (return type=> string formatted as fixed point notation.)

let num1 = 123450000;
console.log(num1.toFixed());
// // here 5 and 3 denotes the number of digits after the decimal point. and it is optional. default value is 0.
console.log(num1.toFixed(5));
console.log(num1.toFixed(3));

let num2 = 123.458;
console.log(num2.toFixed());
console.log(num2.toFixed(5));
console.log(num2.toFixed(2));


//==================================================================================================
// 3) num1.toPrecision() => it is used to convert a number into exponential notation. (return type=> string formatted as exponential notation.)

let num1 = 123450000;
console.log(num1.toPrecision());
// // here 5 and 3 denotes the number of digits after the decimal point. and it is optional. default value is 0.
console.log(num1.toPrecision(5));
console.log(num1.toPrecision(3));

let num2 = 123.458;
console.log(num2.toPrecision());
console.log(num2.toPrecision(5));
console.log(num2.toPrecision(2));

//==================================================================================================
// 4) num1.toString()   => it is used to convert a number into string. (return type=> string)

let num1 = 123450000.223;
console.log( num1);
console.log( num1.toString());

 
// 5) num1.valueOf()    => it is used to convert a number into primitive value. (return type=> number but always return that value in the form string

console.log( num1.valueOf());
let num2 = '2345.45'
console.log(num2.valueOf());

