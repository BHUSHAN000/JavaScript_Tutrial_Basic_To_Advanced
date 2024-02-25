// // ES5 => Constructor Function
// function Mobile() {
//     this.brand = 'Samsung';
//     this.color= 'black'
// }

// const samsung = new Mobile();
// console.log(samsung);

// // ES5 => class expression
// const Handset = function Mobile() {
//   this.brand = "Samsung";
//   this.color = "black";
// }

// const samsung1 = new Handset();
// console.log(samsung1);


// // ES6 => class declaration

// class Mobile2{
//     constructor() {
//         this.brand = "Samsung";
//         this.color = "black";
//         this.showPrice = function () {
//             console.log('Price: 10000');
//         }
//     }
// }

// const samsung2 = new Mobile2();
// console.log(samsung2);


class Mobile3{
    constructor() {
        // properties inside constructor act as instance properties
        this.brand = 'Samsung';
        this.color = 'black';
        this.showPrice = function () {
            console.log('Price: 20000');
        }
    }
    // methods outside constructor act as prototype methods
    showPrice() {
        console.log('Price: 10000');
    }
    temp = 10;  // instance property
}

Mobile3.prototype.temp2 = 20;  // prototype property

const samsung3 = new Mobile3();
console.log(samsung3);
samsung3.showPrice();
// samsung3.showPrice2();  // Error
