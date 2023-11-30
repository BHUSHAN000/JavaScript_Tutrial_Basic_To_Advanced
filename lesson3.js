// Number datatype

var rollNo = 1;         // Integer
var marks = 99.99;      // Floating point number


let temp = Infinity;
let temp2 = -Infinity;

let temp3 = "Hell0" / 2;
console.log(temp3);

console.log(typeof rollNo);
console.log(typeof marks);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);


// BigInt DataType

let num = 2 ** 53 - 1;
console.log(typeof num);
console.log(num + 1);
console.log(num + 2);

const num2 = 900719925474099207199254740990719925474099n;
console.log(typeof num2);
console.log(num2)

// String DataType

const lastName = "pawar"
const name1 = "John Doe " + lastName;
const name2 = 'John Doe ' + lastName;
const name3 = `John
Doe ${lastName}`;

console.log(name1);
console.log(name2);
console.log(name3);

const result = `Addition of two number
 is ${10 + 20} and
 subtraction is ${10 - 20}`
console.log(result);


// Boolean DataType

true / false

const isValid = true;
const isInvalid = false;

console.log(typeof isValid);
console.log(typeof isInvalid);

const result = 10 < 20;
console.log(result);
console.log(typeof result);

// null datatype

let temp = null;

console.log(temp)
console.log(typeof temp)

// undefined datatype
let temp2;
console.log(temp2)
console.log(typeof temp2)


//Excersise
console.log(typeof 10);
console.log(typeof 1.20);
console.log(typeof 100000n);
console.log(typeof "Hello");
console.log(typeof "");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof false);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(typeof Math)
