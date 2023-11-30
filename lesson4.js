// Interaction with Browser
// 1. Alert
// 2. Prompt
// 3. Confirm


// 1. Alert - message display in browser
window.alert("This is a Javascript Tutorial");
alert('This is second alert message');


//2. Prompt - take input from user in the form of string or null

let resultPrompt = window.prompt("Enter your name","Guest");
console.log(typeof resultPrompt);   // "true" // "123"
alert(resultPrompt);


//3. Confirm - take input from user in the form of boolean

let resultConfirm = window.confirm("Are you a student?");
console.log(typeof resultConfirm);  // true or false
alert(resultConfirm);
