/* Q. You are creating a website for you college.
    Create a class USER with 2 properties, name & email.
    It also has a method called viewData() that allows user to website data.
*/

let DATA = "secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    viewData() {
        console.log("data =", DATA);
    }
}

let student1 = new User("Raju", "raju123@gmail.com");
let student2 = new User("Kaju", "kaju123@gmail.com");


/* Q. Create a new class called ADMIN which inherits from USER.
Add a new method called editData to Admin that allows it to edit website data.
*/

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "some new value";
    }
}

let admin1 = new Admin("admin", "admin@college.com");


/* ERROR HANDLING -->
    try-catch block

    try {
        //normal code
    } 
    catch (err) { //err is error object
        //handling error
    }

    if error is found in try block then catch prints the error and execution does not stop.
*/

let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a + b);
try{
    console.log("a+b = ", a + c); //error
} catch (err) {
    console.log(err);  //prints error
}
console.log("a+b = ", a + b); //execution continues
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);