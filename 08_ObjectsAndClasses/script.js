const student = {
    fullName : "Aniket kumar",
    marks : 89,
    printMarks: function() {
        console.log("marks = ", this.marks); // 'this' keyword is used to access current object -same as student.marks
    },
}

/**PROTOTYPE IN JS -->
 * A js object is an entity having state and behavior (properties and method).
 * JS objects have a special property called prototype.
 * We can set peototype using _ _proto_ _
 * 
 * If object & prototype have same method, object's method will be used.
*/

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary : 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

karanArjun.__proto__ = employee;
// adds employee object's properties & methods as prototype for karanArjun.
// If object & prototype have same method object's method will be used.


/**CLASSES in JS -->
 * Class is a program-code template for creating objects.
 * Those objects will have some state(variables) & some behaviour (functions) inside it.

 * class MyClass {
   constructor() {...}
   myMethod() {...}
   }

   let myObj = new MyClass()
*/

class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {   // !focus
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();


// Constructor() method is:
// -automatically invoked by new
// -initializes object