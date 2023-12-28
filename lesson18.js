
// this keyword

// this keyword using normal function

// let newObj = {
//     city: 'Delhi',
//     dispCity: function () {
//         console.log(this.city); // here this refers to the object newObj
//     }
// }

// newObj.dispCity();   // dot operator
// // newObj['dispCity']();   // bracket notation


//=======================================================


// this keyword using arrow function
// let newObj = {
//     city: 'Delhi',
//     dispCity:  () => {
//         console.log(this.city);  // here this refers to the window object
//     }
// }

// newObj.dispCity();   // dot operator

//=======================================================

// window.city = 'Mumbai';
// let newObj = {
//     city: 'Delhi',
//     dispCity: () => {
//         console.log(this);
//         console.log(this.city);  // here this refers to the window object
//     }
// }

// newObj.dispCity();   // dot operator

//=======================================================

// this keyword using normal function
// window.city = 'Mumbai';

// function dispCity() {
//     console.log(this.city);
// }

// window.dispCity();


//=======================================================

//this keyword using arrow function

window.city = 'Mumbai';
const dispCity = () => {
  console.log(this);    // here this refers to the window object
  console.log(this.city);  
}

dispCity();
