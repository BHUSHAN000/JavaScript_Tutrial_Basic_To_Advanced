
// Objects => it is a collection of keys and values



// how to create an object => 2 ways

//1) object can be created by using literals (object literals)

// let user1 = {}  // object literal

//2) object can be created by using constructor (Object constructor)

// let user2 = new Object()

// console.log(user1)
// console.log(user2)


// how to use objects

// let user1 = {
//     "name": 'bhushan',
//     "city": 'Pune',
//     "address": 'ABC Road',
//     "age": 30,
//     "salary": 20000,
// }


// console.log(user1);

//adding property in object

//syntax: object_name.newKey = newValue

// user1.vehicle1 = '2 Wheeler'
// user1["vehicle2"] = '4 Wheeler'

//syntax: object_name["newKey_withSpace"] = newValue

// user1["landmark location"] = 'near city plaza'


// let grade = 'class'

// user1[grade] = 'class one officer'
// console.log(user1)


let user1 = {
  name: "bhushan",
  age: 30,
  adult: true,
  getName: function () {
    console.log('this is bhushan')
  }
};

// console.log(user1);
console.log(user1.name);
console.log(user1["name"]);
user1.getName()

// how to delete a key / value from an object

delete user1.age;

delete user1['adult']

console.log(user1);
