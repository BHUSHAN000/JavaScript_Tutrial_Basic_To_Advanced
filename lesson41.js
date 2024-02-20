
// Weakmap => it is a collection of key-value pairs where the keys are weakly referenced.

// object => keys => string, symbol
// map => keys => any data type
// weakmap => keys => only objects

// {
//     let newMap = new Map();
//     let newObj = { age: 35 }
    
//     newMap.set(newObj, "John Doe");
    
//     newObj= null   // => it is garbage collected
//     console.log(newMap); // Map { { age: 35 } => 'John Doe', 'name' => 'Bhushan' }
// }

// console.log('-------------------');

// {
//   let newWeakMap = new WeakMap();
//   let newObj = { age: 35 };

//   newWeakMap.set(newObj, "John Doe");

//   newObj = null; // => it is garbage collected
//   console.log(newWeakMap);
// }



// Weakmap methods

  let newWeakMap = new WeakMap();
  let newObj = { age: 35 };

  newWeakMap.set(newObj, "John Doe");

//   newObj = null; // => it is garbage collected
console.log(newWeakMap); 

//1. set(key, value)
newWeakMap.set(newObj, "John Doe");

//2. get(key)
console.log(newWeakMap.get(newObj)); // John Doe
//3. has(key)

console.log(newWeakMap.has(newObj)); // true
//4. delete(key)
newWeakMap.delete(newObj);
// console.log(newWeakMap.size);
// console.log(newWeakMap.clear());




// difference between map and weakmap

// 1. In map, the keys are strongly referenced, so even if the key is not used, it will not be garbage collected.
// 2. In weakmap, the keys are weakly referenced, so if the key is not used, it will be garbage collected.
// 3. In map, the keys can be of any type.
// 4. In weakmap, the keys can only be objects.
// 5. In map, we can iterate through the keys.
// 6. In weakmap, we cannot iterate through the keys.
// 7. In map, we can get the size of the map.
// 8. In weakmap, we cannot get the size of the weakmap.
// 9. In map, we can clear the map.
