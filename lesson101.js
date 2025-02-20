  // 1) create
const bChannel = new BroadcastChannel("channel-1");

// 2) send message
function sendMessage() {
  const message = document.getElementById("messageInput").value;
  bChannel.postMessage(message); // send message
  document.getElementById("messageInput").value = "";
}

// 3) receive message
bChannel.onmessage = (event) => {
  console.log("Received message:", event.data);
  document.getElementById("output").innerHTML += `<p>${event.data}</p>`;
};
