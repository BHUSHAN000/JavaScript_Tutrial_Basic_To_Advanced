// WebSocket => used for communication between the client and the server

// Create a WebSocket connection

const sender = new WebSocket("wss://echo.websocket.org");

// Open the connection
// socket.addEventListener("open", () => {
//   console.log("Connection established");
// });

/**
 * OR
 *
 */

sender.onopen = function (e) {
  console.log("Connection established");
};

function onButtonClicked() {
  const inputBox = document.getElementById("input1").value.trim();
  if (inputBox) {
    sender.send(inputBox);
  }
}
// message communication
sender.onmessage = function (event) {
  const messageDiv = document.getElementById("messages");
  const messageInfo = document.createElement("p");
  messageInfo.textContent = event.data;
  messageDiv.appendChild(messageInfo);
  console.log("Message received: ", event.data);
};

// // manually close the connection
// window.onbeforeunload = function () {
//   socket.close();
// };

// Close the connection
sender.close = function (e) {
  console.log("Connection closed");
};
