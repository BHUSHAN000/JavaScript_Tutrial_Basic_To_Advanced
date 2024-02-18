
// Set Data Structure

let newArr = [
  10,
  "hello",
  true,
  99.99,
  undefined,
  null,
  NaN,
  Infinity,
  Symbol("hello"),
  "hello",
    10,];
  
for (let key of newArr.entries()) {
    console.log(key);
}

// console.log(newArr);

// set allows us to store unique values of any type it always stores unique values

// let mySet = new Set(newArr);
// console.log(mySet);

// Set Methods
let newSet = new Set(); // creates a new set which is empty
// // add() - adds a new element to the set
newSet.add(10);
newSet.add("hello");
newSet.add(true);
newSet.add(99.99);
newSet.add(undefined);
newSet.add(null);
newSet.add(NaN);
newSet.add(Infinity);
newSet.add(Symbol("hello"));
newSet.add("hello");
newSet.add(10);

console.log(newSet)



// // delete() - removes a specified element from the set

// newSet.delete(99.99);
// console.log(newSet);
// newSet.delete("Bye");


// // has() - checks if a specified element exists in the set

// console.log(newSet.has(10));
// console.log(newSet.has("Bye"));

// // clear() - removes all elements from the set
// console.log(newSet.size);
// newSet.clear();
// console.log(newSet);
// // size - returns the number of elements in the set

// console.log(newSet.size);

// Set Iteration

// for...of loop

// Keys() - returns an iterator of all the keys in the set

for(let key of newSet.keys()) {
    console.log(key);
}
// Values() - returns an iterator of all the values in the set
console.log("==========================================")
for (let value of newSet.values()) {
    console.log(value);
}

// Entries() - returns an iterator of all the key/value pairs in the set
console.log("==========================================");
// [[10,10],[10,"hello"], ["hello", "hello"], [true, true], [99.99, 99.99], [undefined, undefined], [null, null], [NaN, NaN], [Infinity, Infinity], [Symbol("hello"), Symbol("hello")
for (let entry of newSet.entries()) {
    console.log(entry);
}
