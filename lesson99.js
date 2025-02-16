// AbortController => interface represents a controller object that allows you to abort one or more Web requests as and when desired.
let controller;

function getData() {
  console.log("before", controller);
  if (controller) {
    controller.abort();
    console.log("abort", controller);
  }

  controller = new AbortController();

  fetch("https://jsonplaceholder.typicode.com/albums", {
    signal: controller.signal,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("after", controller);
}

// AbortSignal => interface represents a signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required.
// AbortSignal.timeout() => method creates a new AbortSignal object instance, which will be aborted after the specified number of milliseconds.

function getData() {
  fetch("https://jsonplaceholder.typicode.com/albums", {
    signal: AbortSignal.timeout(3000),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
