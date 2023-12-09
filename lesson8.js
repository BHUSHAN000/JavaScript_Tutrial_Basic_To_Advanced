
// loops
 
// while loop

// syntax

/*
initialization of variable

while(condition){
...
...
...
...
operation on variable
}
*/

let age = 11;  // initialization of variable

while (age <= 10) {        // condition
    console.log(age)
    age++;  // operation on variable
}


// do-while loop

/* syntax

initialization of variable

do{
    ...
    ...
    ...

    operation on variable
}while(condition)

*/

let age1 = 11;                           // initialization of variable

do {
    console.log(age1)
    age1++;                             // operation on variable
}while (age1 <= 10)                    // condition

// for loop

/*

for(initialization of variable; condition; operation on variable){

}


*/

for(let age2 = 1; age2 <= 10; age2++){
    console.log(age2)
}


// break and continue

// // break
for (let age2 = 1; age2 <= 10; age2++) {
    console.log(age2);
    if(age2 == 5){
        break;
    }
}


// continue
for (let age2 = 1; age2 <= 10; age2++) {
    if(age2 == 5){
        continue;
    }
    console.log(age2);
}

// for loop flow
//1. initialization
//2. condition check
//3. inside code execution if condition is true
//   or exit from loop if condition is false
//4. operation on variable (increment or decrement)
//5. goto step2
 
for (let i = 11; i <= 10; i++){
    console.log(i);
}

for (; ;){
    console.log("hello");
}

for (let i = 1; i < 11; i++);
