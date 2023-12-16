
// Default Parameters => ES6


//Rules of Default Parameters

// 1) Default parameters should be at the end of the parameter list.
// 2) Default parameters should be from right to left.
// 3) Default parameters should not be skipped.
// 4) Default parameters should not be re-declared.
// 5) Default parameters should not be used in function declaration.
// 6) At least one parameter can be declared as default parameter.


function display(name, age = 20) {
    // let age = 30; // Error
    console.log(name, age);
}

display("Rahul");    // calling of function

// Default Parameters => ES5

function display2(name, age) {
    if (age === undefined) {
        age = 20;
    }
    console.log(name, age);
}

display2("Rahul");


