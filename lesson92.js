/**
 *  <form id="form" >
      <input type="text" id="input1" placeholder="Enter your first name" />
      <br>
      <br>
      <input type="text" id="input2" placeholder="Enter your last name" />
      <br>
      <br>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
 * 
 */

// focus

// document.querySelector("#input1").addEventListener("focus", (event) => { 
//     console.log("Focus on input1");
// })

// blur

// document.querySelector("#input1").addEventListener("blur", (event) => {
//   console.log("blur on input1");
// });

// input
// document.querySelector("#input1").addEventListener("input", (event) => { 
//     console.log("Input event on input1",event.target.value);
// })
// // change
// document.querySelector("#input2").addEventListener("change", (event) => {
//   console.log("change event on input2", event.target.value);
// });
// // submit

// document.querySelector("#form").addEventListener("submit", (event) => { 
//     event.preventDefault();
//     console.log('Form submitted');
// });

// // reset
// document.querySelector("#form").addEventListener("reset", (event) => {
//   console.log("Form reset");
// });

// // invalid

// document.querySelector("#input2").addEventListener("invalid", (event) => { 
//     console.log("Invalid input2");
// });
// // select

document.querySelector("#input2").addEventListener("select", (event) => {
  console.log("select event on input2");
});


















































// const list = document.getElementById("myList");

// list.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     console.log(`Clicked on: ${event.target.textContent}`);
//   } else if (
//     event.target.tagName === "BUTTON" ||
//     event.target.tagName === "A"
//   ) {
//     console.log(`Clicked on: ${event.target.textContent} ${event.target.href}`);
//   } else if (
//     event.target.tagName === "INPUT" &&
//     event.target.type === "checkbox"
//   ) {
//     console.log(`Checkbox clicked: ${event.target.checked}`);
//   } else if(event.target.tagName === "P") {
//     console.log(`Paragraph value: ${event.target.textContent}`);
//   }
// });

// // const list = document.getElementById("myList");

// // list.addEventListener("click", (event) => {
// //   const target = event.target;

// //   if (target.tagName === "P") {
// //     console.log(`Paragraph clicked: ${target.textContent}`);
// //   } else if (target.tagName === "BUTTON") {
// //     console.log(`Button clicked: ${target.textContent}`);
// //   } else if (target.tagName === "A") {
// //     console.log(`Link clicked: ${target.textContent}`);
// //   } else if (target.tagName === "INPUT" && target.type === "checkbox") {
// //     console.log(`Checkbox clicked: ${target.checked}`);
// //   }
// // });

// const list = document.getElementById("myList");
// list.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     console.log(`Clicked on: ${event.target.textContent}`);
//   }
// });
