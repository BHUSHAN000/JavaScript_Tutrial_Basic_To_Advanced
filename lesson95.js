// Web API
// 1. Fetch API
// 2. Storage API
// 3. History API
// 4. Geolocation API

// 1. Fetch API- It is used to make network requests similar to XMLHttpRequest
//
// fetch(url, options)

//https://jsonplaceholder.typicode.com/users/5

// fetch('https://jsonplaceholder.typicode.com/users/5')
// .then(response => response.json())
// .then(data => console.log(data))

// console.log(fetch('https://jsonplaceholder.typicode.com/users/5'))

fetch("https://jsonplaceholder.typicode.com/usersadad/5")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error: ", response.status);
    }
    return response.json();
  })
  .then((data) => console.log("then block", data))
  .catch((error) => console.log("Catch block:", error));

// async function getData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users/5"
//     );
//     if (!response.ok) {
//       throw new Error("Error: ", response.status);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Catch block:", error);
//   }
// }

// getData();

// Options
// method: GET, POST, PUT, DELETE
// GET => Read (default)
// POST => Create
// PUT => Update
// DELETE => Delete
// CRUD Operations
