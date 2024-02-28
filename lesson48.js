
class ABC{
    constructor() {
        this.firstName = "John";
        this.lastName = "Doe";
        this.address = "Mumbai";
    }
    static firstName = 'Bhushan'
    static lastName = 'Pawar'
    static address = 'Pune'
    getFullName() {                                     // non-static method\
        console.log(this)
        return ABC.firstName + " " + ABC.lastName + " " + ABC.address;
    }

    static displayFullName() {                          // static method
        console.log(this);
        return this.firstName+ " " + this.lastName + " " + this.address;
    }
}


const abc = new ABC();
console.log(abc.getFullName());     // non-static method can be called using object name
// console.log(ABC.getFullName());     // non-static method can't be called using class name

console.log(ABC.displayFullName());   // static method can be called using class name
// console.log(abc.firstName);        // static method can't be called using object name


// NOTES:

// 1. Static method can be called using class name only.
// 2. Non-static method can be called using object name only.
// 3. Static method can't access non-static properties.
// 4. Non-static method can't access static properties directly.
// 5. Non-static method can access static properties using class name only.
// 6. Static method can access static properties directly.

