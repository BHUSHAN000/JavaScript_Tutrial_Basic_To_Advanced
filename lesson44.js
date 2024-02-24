
function Mobile() {
    this.brand = 'Samsung';
    this.color = 'black';
}

const mobile1 = new Mobile();
// mobile1.color = 'white'
const mobile2 = new Mobile();
// mobile2.color = 'white'
Mobile.prototype.color = 'white'
console.log(mobile1)
console.log(mobile2)
console.log(mobile1.color)  // it will fetch instance property
console.log(mobile2.color)  // it will fetch instance property

console.log(Mobile.prototype.color)  // it will fetch prototype property

console.log(mobile1.__proto__.color)

// console.log(Mobile.prototype === mobile1.__proto__)

const temp1 = Object.getPrototypeOf(mobile1.__proto__);

console.log(temp1)
