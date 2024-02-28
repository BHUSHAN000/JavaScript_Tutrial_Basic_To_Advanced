
class ABC  {  // Parent class
    constructor() {
      console.log('This is ABC class');
    }
}

class PQR extends ABC { // Inheritance by child class
    constructor() {
        super(); // Call parent class constructor
        console.log('This is PQR class');
    }
}

const pqrObj = new PQR();


// NOTES:
// 1) Inheritance is a mechanism in which one class acquires the property of another class.
// 2) Inheritance is used to define a new class based on an existing class.
// 3) flow of function call in inheritance: bottom to top
// 4) flow of constructor call in inheritance: top to bottom
// 5) if child class has constructor then it must call super() to call parent class constructor
// 6) super() must be called before any other statement in the constructor of child class
// 7) super() is used to call parent class constructor
// 8) if parent class has constructor and child class does not have constructor then parent class constructor gets called automatically because of super() in child class's constructor
