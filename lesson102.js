
// local storage=>  it stores data in key/value pairs in the browser.

// when to use localStorage ?
// 1. when we want to store data that is not sensitive or private.
// 2. when we want to store data that is not too large.
// 3. when we want to store data that is not too complex.
// 4. when we want to store data that is not too frequently updated.


// localstorage always take data in string format. so we need to convert it to string before storing it in local storage.
// and we need to convert it back to object when we retrieve it from local storage.

//localstorage methods and properties
// 1. setItem(key, value) => it stores the value in local storage with the given key.
// 2. getItem(key) => it retrieves the value from local storage with the given key.If the key does not exist, it returns null.
// 3. removeItem(key) => it removes the value from local storage with the given key. if the key does not exist, it does nothing.
// 4. clear() => it clears all the data from local storage.
// 5. key(index) => it retrieves the key at the given index from local storage.
// 6. length => it returns the number of items in local storage.


localStorage.setItem('name1','bhushan');
localStorage.setItem('name2','bhushan2');
localStorage.setItem('data',JSON.stringify({name: 'bhushan'}))
localStorage.setItem('data2',JSON.stringify([10,20,30]))
localStorage.setItem('name3','bhushan3');
localStorage.setItem('name4','bhushan4');
localStorage.setItem('name5','bhushan5');

//get data

console.log(localStorage.getItem('name1')); // bhushan
console.log(localStorage.getItem('name2')); // bhushan2
console.log(JSON.parse(localStorage.getItem('data'))); // {"name":"bhushan"}
console.log(JSON.parse(localStorage.getItem('data2'))); // [10,20,30]

//remove data
localStorage.removeItem('name1');

//length
console.log(localStorage.length); // 3

//key
console.log(localStorage.key(0)); // name2
console.log(localStorage.key(1)); // data

// clear
localStorage.clear(); // it clears all the data from local storage.
