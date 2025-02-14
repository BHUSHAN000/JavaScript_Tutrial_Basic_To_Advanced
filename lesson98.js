// POST => used to send data to a server
// PUT => used to update data ( full data needs to be pass)
// DELETE => used to delete data

// fetch("https://jsonplaceholder.typicode.com/albums/2", {
//   method: "DELETE",
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Catch block:", error));

// async - await

async function deleteData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/2",
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Catch block:", error);
  }
}
deleteData();
