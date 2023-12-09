
// Control Statements
// if

var age = 20;

if (age < 18) {
    console.log("You are a minor / teenager");
}

if(age > 18){
    console.log("You are a young adult or adult");
}

// if-else

if (age < 18) {
    console.log("You are a minor / teenager");
} else {
    console.log("You are a young adult or adult");
}


// ternary operator => if-else replacement ( when only one statement is there in if-else )

// sytax => condition ? statement1 : statement2
age < 18 ? console.log("You are a minor / teenager") : console.log("You are a young adult or adult");


// if-else-if

if (age < 18) {
    console.log("You are a minor / teenager");
} else if (age > 18 && age < 60) {
    console.log("You are a young adult or adult");
} else {
    console.log("You are a senior citizen");
}

//switch-case => replacement of if-else-if
age= 60
switch (age) {
    case 18: console.log("You are a minor / teenager");
        break;
    case 20: console.log("You are a young adult or adult");
        break;
    case 60: console.log("You are a senior citizen");
        break;
    default: console.log("This is default case");
}

let firstName = 'Bhushanmnnnnn'

switch (firstName) {
    case 'Bhushan': console.log("You are Bhushan");
        break;
    case 'Rahul': console.log("You are Rahul");
        break;
    case 'Rohit': console.log("You are Rohit");
        break;
    default: console.log("This is default case");
}
