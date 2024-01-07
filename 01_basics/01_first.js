// DataTypes in JS-->
// Number, String, Boolean, Undefined, Null BigInt, Symbol


// Object Dataype -->
const student = {
    fullName: "Aniket Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};


// Two ways to access 'keys' and their 'value' of an object -->

console.log(student["fullName"]);
console.log("Pass:", student.isPass);


// updation -->
// event if 'student' is a const object the values of its keys can be changed
// const variables cannot be changed

student["age"] = student["age"] + 1;
console.log(student.age);

student["fullName"] = "Rajesh Kumar";
console.log(student.fullName);


// Practice Q1
const product = {
    title: "Ball Pen",
    rating: 4,
    discount: 5,
    price: 270
};


// in js if we add number to string it converts into string -->
let assets = "Car";
assets = assets + 123;
console.log(assets);


// practice Q2
const profile = {
    userName: "@shradhakhapra",
    fullName: "Shradha Khapra",
    work: "Entrepreneur",
    followers: 569,
    isFollow: true
}