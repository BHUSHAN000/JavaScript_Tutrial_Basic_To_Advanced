// let user = {
//     name: 'bhushan',
//     age: 30,
//     salary: 20000
// }

// console.log(user['name'])
// delete user.age;

// console.log(user)
// console.log(user.age)
// console.log(user.salary)

// console.log('age' in user)  // this is the way for checking whether property is present or not in an object


// if ('age' in user) {
//     console.log('Property present')
// } else {
//     console.log('Property not present')
// }

// if (user.age !== undefined) {
//   console.log("Property present");
// } else {
//   console.log("Property not present");
// }

// for-in loop for an object => return keys of an object
// for (let i in user) {
//     console.log("key=>",i,"value=>", user[i])
// }

let newObject1 = {
    name: 'Bhushan',
    age: 30
}

let newObject2 = newObject1


newObject1.name = 'John'

// console.log(newObject1)
// console.log(newObject2)

// garbage collection

newObject1 = null


console.log(newObject1);
console.log(newObject2);
