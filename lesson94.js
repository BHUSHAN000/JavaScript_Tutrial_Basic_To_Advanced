// Event Delegation
// need of event delegation
// 1. Performance
// 2. Less memory consumption
// 3. Easy to maintain code

// const li1Ele = document.querySelector("#li1");
// const li2Ele = document.querySelector("#li2");
// const li3Ele = document.querySelector("#li3");

// li1Ele.addEventListener("click", function () {
//   console.log("Item1 Clicked");
// });

// li2Ele.addEventListener("click", function () {
//   console.log("Item2 Clicked");
// });

// li3Ele.addEventListener("click", function () {
//   console.log("Item3 Clicked");
// });

/**
 * 
<ul id="myList">
  <li id="li1" class="childEle">Item1</li>
  <li id="li2" class="childEle">Item2</li>
  <li id="li3" class="childEle">Item3</li>
</ul>

 */

// const ulEle = document.querySelector("#myList");

// ulEle.addEventListener("click", function (event) {
//   console.log(event.target.tagName);
//   console.log(event.target.textContent);
// });

/**
 * 
 * <ul id="myList">
  <li>
    <p>Item 1</p>
    <button>Click me</button>
  </li>
  <li>
    <p>Item 2</p>
    <a href="#">Link</a>
  </li>
  <li>
    <p>Item 3</p>
    <input type="checkbox" name="Javascript" />
  </li>
</ul>
 */
const ulEle = document.querySelector("#myList");

ulEle.addEventListener("click", function (event) {
  console.log(event.target.tagName);
  console.log(event.target.textContent);

  if (event.target.tagName === "BUTTON") {
    console.log("Button Clicked");
  }
  if (event.target.tagName === "A") {
    console.log("Link Clicked");
  }
  if (event.target.tagName === "INPUT") {
    console.log("Checkbox Clicked");
  }
});
