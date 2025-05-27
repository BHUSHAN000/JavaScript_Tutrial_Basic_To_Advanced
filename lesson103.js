// sessionStorage
// sessionStorage is similar to localStorage, but the data is only available for the duration of the page session.

// when to use sessionStorage ?
// 1. when we want to store data that is sensitive or private.
// 2. when we want to store data that is too large.
// 3. when we want to store data that is too complex.
// 4. when we want to store data that is too frequently updated.

// methods and properties
// 1. setItem(key, value) => it stores the value in session storage with the given key.
// 2. getItem(key) => it retrieves the value from session storage with the given key.If the key does not exist, it returns null.
// 3. removeItem(key) => it removes the value from session storage with the given key. if the key does not exist, it does nothing.
// 4. clear() => it clears all the data from session storage.
// 5. key(index)a => it retrieves the key at the given index from session storage.
// 6. length => it returns the number of items in session storage.

// insert data in session storage
sessionStorage.setItem("name1", "bhushan");
sessionStorage.setItem("name2", "bhushan2");
sessionStorage.setItem("data", JSON.stringify({ name: "bhushan" }));
sessionStorage.setItem("data2", JSON.stringify([10, 20, 30]));
sessionStorage.setItem("name3", "bhushan3");

//get data
console.log(sessionStorage.getItem("name1")); // bhushan
console.log(JSON.parse(sessionStorage.getItem("data")));

//remove data
sessionStorage.removeItem("name1");

//length
console.log(sessionStorage.length); // 4

//key
console.log(sessionStorage.key(0)); // name2
console.log(sessionStorage.key(1)); // data
console.log(sessionStorage.key(2));

// // clear
// sessionStorage.clear(); // it clears all the data from session storage.
