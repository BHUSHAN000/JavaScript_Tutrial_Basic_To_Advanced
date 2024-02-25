
// class Mobile{
//     constructor(brandName='Nokia', brandPrice=5500){
//         this.name = brandName;
//         this.price = brandPrice;
//     }
//     showMobile(){
//         return `Name: ${this.name}, Price: ${this.price}`;
//     }
// }

// // default constructor
// const mobile = new Mobile();
// console.log(mobile.showMobile());
// // parameterized constructor
// const mobile1 = new Mobile('Samsung', 15000);
// const mobile2 = new Mobile('Apple', 150000);
// console.log(mobile1.showMobile());
// console.log(mobile2.showMobile());


//=============================================================
// const Display = function show() {   // function expression
//     console.log('Display');
// }

// Display();  // valid
// show();    // invalid => ReferenceError: show is not defined

//=============================================================

// class Expression
const Mobile3 = class Mobile{
    constructor(brandName='Nokia', brandPrice=5500){
        this.name = brandName;
        this.price = brandPrice;
    }
    showMobile(){
        return `Name: ${this.name}, Price: ${this.price}`;
    }
}

const mobile3 = new Mobile3();
console.log(mobile3.showMobile());
const mobile4 = new Mobile();
console.log(mobile4.showMobile());
