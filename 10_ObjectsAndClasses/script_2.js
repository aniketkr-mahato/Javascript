/**Classes in JS -
  
 * Constructor() method is -->
 * automatically invoked by new
 * initializes object
   
 * class My Class {
   constructor() {...}
   myMethod() {...}
   }

*/
// Constructor is used to do work which we want when the object is initialized for first time

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    
    start() {
        console.log("start");
    }
    
    stop() {
        console.log("stop");
    }
    
    // setBrand(brand) {
    //     this.brand = brand;
    // }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
// fortuner.setBrand("fortuner");

let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);
// lexus.setBrand("lexus");



/* Inheritence -->
    -Inheritence is passing down properties & methods from parent class to child class.

    class Parent {

    }

    class Child extends Parent {

    }

    *If Child & Parent have same method, child's method will be used. [Method Overriding]
*/

class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {}
let obj = new Child;


class Person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");  //gets overriden by work fn of child
    }
}

class Doctor extends Person {
    work() {
        console.log("solve problems, build something");
    }
}

let shradhaObj = new Doctor();



/* super Keyword
    -The super keyword is used to call the constructor of its parent class
    to access the parent's properties and methods.

    super(args)  //calls Parent's constructor
    super.parentMethod(args)

*/

class Engineer extends Person {
    constructor (branch, name) {
        super(name);  // to invoke parent class constructor [necessary]
        this.branch = branch;
    } 
    work() {
        super.eat();
        console.log("solve problems, build something");
    }
}

let engObj = new Engineer("chemical engg", "shradha");