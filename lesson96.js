// fetch(url, options)
// options are optional
// if options are not provided, it will be a GET request

// fetch("https://jsonplaceholder.typicode.com/albums", {
//   method: "GET",
// })
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log("Catch block:", error));

// POST request

// fetch("https://jsonplaceholder.typicode.com/albums", {
//   method: "POST",
//   body: JSON.stringify({
//     userId: 11,
//     title: "Javascript tutorial",
//   }),
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Catch block:", error));

// async - await

async function postData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums",
      {
        method: "POST",
        body: JSON.stringify({
          userId: 11,
          title: "Javascript tutorial",
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Catch block:", error);
  }
}
postData();
