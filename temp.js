// NOTES:
// 1. export is used to export a variable, function, or class from a module.
// 2. import is used to import a variable, function, or class from a module.
// 3. The exported variable must be imported with the same name.
// 4. The exported variable must be imported with curly braces.
// 5. script which utilizing the exported variable must be having type module in the script tag.

// named export
let firstName = 'John';
function display() {
    console.log('Hello', firstName);
}
let age = 25;   
let newObj = {
    city: 'New York'
}

export { firstName, display, age, newObj };

// default export

let lastName = 'Doe';
export default lastName;
