const receiverSocket = new WebSocket("wss://echo.websocket.org");

receiverSocket.onopen = function () {
  console.log("Receiver: Connected to WebSocket server");
};


receiverSocket.onmessage = function (event) {
  console.log("Receiver: Message received -", event.data);
  console.log("hi");
  const messagesDiv = document.getElementById("messages");
  const newMessage = document.createElement("p");
  newMessage.textContent = "Received: " + event.data;
  messagesDiv.appendChild(newMessage);
};

receiverSocket.onclose = function () {
  console.log("Receiver: Disconnected from WebSocket server");
};
