// function clickHandler() {
//   console.log('click event');
// }

// function btnHandler() {
//     console.log('button click event');
// }
const btnElement = document.querySelector("#btnId");
// btnElement.onclick = btnHandler;

btnElement.addEventListener("click", function () {
  console.log("button click event");
});

const liElement = document.querySelector("#list1");
liElement.addEventListener("mouseenter", function () {
  liElement.style.color = "red";
});
liElement.addEventListener("mouseleave", function () {
  liElement.style.color = "black";
});

liElement.ondblclick = function () {
  console.log("double click event");
};
