
// Types of Errors

// 1. Compile Time Errors
// 2. Runtime Errors

// Compile Time Errors
// Syntax Errors

// console.log('Hello');

// // Semantic Errors or Logical Errors

// let a = 10;
// while (a = 10) {
//     console.log('Hello');
//     a++
// }

// Runtime Errors


// console.log(b);
// console.log('Hello');
// console.log('World');

// try {
//    console.log(b);
// } catch (err) {
//     console.log("Error",err)
// }

// let a = {
//     name: 'John',
//     disp: function(){
//         console.log(this.name);
//     }
// }
// try {
//     console.log('before');
//     a.disp2();
//     console.log('after');
// } catch(error) {
//     console.log('Error');
// }

// try {
//     throw new Error('This is an error');
// } catch (error) {
//     console.log(error);
// }
let a = 1;

while (a < 10) {
    try {
        console.log(a);
        if (a == 5) {
            throw new ReferenceError("This is an error 2");
        }
    } catch (error) {
      console.log(error);
    }
    a++;
}
