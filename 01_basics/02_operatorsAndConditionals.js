// Operators -->

// Arithmetic Operators -->
//  +,   -,   *,   /,   %,   **

// Unary Operators -->
//  a++,    ++a,    a--,    --a

// Assignment Operators -->
//  =,    +=,    -=,    *=,    %=,    **=

// Comparison Operators
//  ==,   !=,   ===(equal to & type),   !==(not equal to & type),   <,   <=,   >,   >=

// Logical Operators
// &&(logical and),   ||(logical or),    !(logical not)

// Ternary Operators
// condition ? true output : false output
let age = 9;
age > 18 ? console.log("adult") : console.log("not adult");


// Conditional Statement -->

// if-else Statement
let num = 11;
if(num % 2 ===0){
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

// else-if Statement



// Practice Question
// Q1. Get user to input a number using prompt("Enter a number:").
// Check if the number is a mulltiple of 5 or not.

let num1 = prompt("Enter a number:");
if(num1 % 5 == 0){
    console.log(num1, " is multiple of 5.");
} else {
    console.log(num1, " is not a multiple of 5.")
}
