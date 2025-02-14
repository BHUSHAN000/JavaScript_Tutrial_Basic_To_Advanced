// POST => used to send data to a server
// PUT => used to update data ( full data needs to be pass)

// PUT request

// fetch("https://jsonplaceholder.typicode.com/albums/4", {
//   method: "PUT",
//   body: JSON.stringify({
//     userId: 11,
//     id: 4,
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

async function putData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/4",
      {
        method: "PUT",
        body: JSON.stringify({
          userId: 11,
          id: 4,
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
putData();
