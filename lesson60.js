import { age, firstName as firstName1, display, newObj } from "./temp.js"; // named import

import lastName from "./temp.js";  // default import
// module

console.log(firstName1);
// console.log(firstName);
display()
// import - export in module


console.log(age);
// age = 30;    // TypeError: Assignment to constant variable because exported members are read-only

console.log(newObj.city);
newObj.city = 'New Delhi';
console.log(newObj.city);

console.log(lastName);
