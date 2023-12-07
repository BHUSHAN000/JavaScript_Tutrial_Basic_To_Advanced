// Relational / Comparison Operators (< , >, >=,<=, ==,===,!=)

let x = 10;
let y = '10';

// type conversion done automatically
console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);

// == and === difference


console.log(x == y);    // not a strict equality  // auto typecasting
console.log(x === y);    // a strict equality
// type matching is done in strict equality and then value matching is done


// Logical Operators (|| , &&, !, ??)

let temp= true
let temp2 = false

console.log(temp && temp2); // and operator
console.log(temp || temp2); // or operator
/*
&& operator

T - T = T
T - F = F
F - T = F
F - F = F

|| operator
T - T = T
T - F = T
F - T = T
F - F = F

*/

let temp3 = true;
console.log(!temp3); // not operator
console.log(!!temp3); // not not operator

let a = 0;

console.log(!a) // 0 is a falsy value
console.log(!!a)    // 0 is a falsy value so !!a is a truthy value

//nullish coalescing operator (??) => to check value is null or undefined

// let b = null;

console.log(null ?? 'hello'); 

console.log(undefined ?? 'Bye');

console.log(10 ?? 'hello again')
console.log(true ?? 'hello again')






