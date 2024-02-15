
// Map Data structure

// Object is a collection of key-value pairs
// let obj = {}    // literal way
// let obj2 = new Object() // constructor way

// let newObj = {
//     name: 'John',
//     age: 30,
//     occupation: 'Software Engineer',
//     true: 'yes'
// }

// limitation: keys are always strings

// console.log(typeof newObj.true) // string

// Map is a new data structure in ES6 => it is a collection of key-value pairs but the key can be of any type

// let newMap = new Map()  // constructor way

// Map methods
// set() => adds a key-value pair
// get() => returns the value for a given key
// has() => returns a boolean based on the presence of a key
// delete() => removes a key-value pair
// clear() => removes all key-value pairs
// size => returns the number of key-value pairs
// keys() => returns an iterator for keys
// values() => returns an iterator for values
// entries() => returns an iterator for entries

//1) set() method

// syntax: map.set(key, value)
// let objkey = {
//     address: 'Pune'
// }
// let arrayKey = [1, 2, 3]
// newMap.set('name', 'John')
// newMap.set('lname', 'Pawar')
// newMap.set(true, "yes")
// newMap.set(1, "one")
// newMap.set(objkey, "empty object");
// newMap.set(arrayKey, "empty array")

// console.log(newMap) // Map { 'name' => 'John' }

// newMap['age'] = 30 // it is not a good way to add key-value pair in map
//                     // it will be treated as a string key
// console.log(newMap)

//============================================================
//2) get() method

// syntax: map.get(key)
// console.log(newMap.get('name')) // John
// console.log(newMap.get(true)) // yes
// console.log(newMap.get(1)) // one
// console.log(newMap.get(objkey)); // empty object
// console.log(newMap.get(arrayKey)) // empty array

//============================================================

//3) has() method => returns a boolean based on the presence of a key

// syntax: map.has(key)
// console.log(newMap.has('name')) // true
// console.log(newMap.has('name2')) // false

//============================================================

//4) delete() method => removes a key-value pair

// syntax: map.delete(key)

// newMap.delete('name')
// console.log(newMap) // Map { 'lname' => 'Pawar', true => 'yes', 1 => 'one', { address: 'Pune' } => 'empty object', [ 1, 2, 3 ] => 'empty array' }

//============================================================

//5) clear() method => removes all key-value pairs

// syntax: map.clear()
// newMap.clear()
// console.log(newMap);

//============================================================
//6) size property => returns the number of key-value pairs

// syntax: map.size

// console.log(newMap.size) // 6

//============================================================

//7) keys() method => returns an iterator for keys

// syntax: map.keys()

// let keys = newMap.keys() // returns an iterator for keys
// console.log(keys) // [Map Iterator] { 'name', 'lname', true, 1, { address: 'Pune' }, [ 1, 2, 3 ] }

// for (let key of keys) {
//     console.log(key)
// }

//============================================================
//8) values() method => returns an iterator for values

// syntax: map.values()

// let values = newMap.values() // returns an iterator for values

// for (let value of values) {
//     console.log(value)
// }

//============================================================
//9) entries() method => returns an iterator for entries

// syntax: map.entries()

// let entries = newMap.entries()  // returns an iterator for entries
// // console.log(entries)

// for (let entry of entries) {
//     console.log(entry)
// }
