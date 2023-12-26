// function add(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

// let result = add(1, 2, 3, 4, 5);
// console.log(result);


// Function currying => instead of passing all parameter at one time we can pass them one by one and it will return a function which will take the next parameter and so on.


// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
        
//     }
// }

// console.log(add(1)(2)(3));


// infinite currying

function add(a) {
    return function (b) {
        if (b) {
          return add(a + b)
        } else {
            return a
      }
    }

}
console.log(add(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)());
