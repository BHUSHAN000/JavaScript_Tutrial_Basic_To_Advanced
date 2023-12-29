
// Optional Chaining Operator  ?.   => for checking nested object presence

let newObject = {
    name: "John",
    age: 30,
    city: {
        zip: 12345,
    },
    disp() {
        console.log("Hello")
    }
};


// console.log(newObject.name)
// // console.log(newObject.city.road)


// //legacy way for checking nested object presence
// if (newObject.city) {
//     console.log(newObject.city.road)
// }


// //using optional chaining operator

// console.log(newObject.city?.road)


//using optional chaining operator with function

// newObject.disp?.()

// note: execess use of optional chaining operator may lead to performance issue

console.log(newObject.city?.zip)
newObject.disp?.()
