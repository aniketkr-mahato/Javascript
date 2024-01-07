/*Arrow Functions 
-compact way of writing a function

const functionName = (param1, param2,...) => {

}
*/

//sum function
function sum(a, b){
    return a + b;
}

//sum function as arrow
const arrowSum = (a, b) => {
    console.log(a + b);
};
arrowSum(3, 5);

//mul function
function mul(a, b){
    return a * b;
}

//mul function as arrow
const arrowMul = (a, b) => {
    console.log(a * b);
}
arrowMul(3, 8);

//arrow function can be defined without parameters/arguments
const printHello = () => console.log("hello");


//Q1. Create a function using the "function" keyword that takes a 
//String as an argument & returns the number of vowels in the string.
function vowelCount(str) {
    let count = 0;
    for(const i of str){
        if(i === "a" || i === "e" || i === "i" || i === "o" ||i === "u" )
        count ++;
        else if(i === "A" || i === "E" || i === "I" || i === "O" ||i === "U" )
        count++;
        
    }
    return count;
};

console.log(`No. of vowels in your string = ${vowelCount("ApnaCollege")}`);



/* forEach Loop in Arrays
   arr.forEach(callBackFunction)
   here callbackfunction is a function to execute for each element in the array

   A callback is a function passed as an argument to another function.
*/

let arr = ["pune", "delhi", "mumbai", "ranchi"];
arr.forEach(function printVal(val){ //forEach passes each element ass val
    console.log(val);
});

arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
});

//Higher Order Function/Methods -
//those functions which take another function as parameter of return a function.


//Q1. For a given array of numbers, print the square of each value using the forEach loop.
nums = [19, 12, 33, 24, 25, 16];
nums.forEach((i) => {
    console.log(`${i**2}`); //i^2
});

console.log("\n");

let calcSquare = (i) => {
    console.log(`${i**2}`); //i^2
};
nums.forEach(calcSquare);


//Some More Array Methods

/* MAP
   -creates a *new array* with the results of some operation.
   The value its callback returns are used to form new array.
   
   arr.map(callbackFnx(value, index, array))
*/

let newArr = nums.map((val) => {
    return val;
});
console.log(newArr);


/* FILTER
    -creates a new array of elements that give true for a condition/filter.
    Ex -all even elements

    let newArr = arr.filter( (val) =>{
        return val % 2 === 0;
    });
*/

let naturalNum = [1, 2, 3, 4, 5, 6, 7];
let evenNum = naturalNum.filter( (val) => {
    return val % 2 === 0;
});
console.log(evenNum);

/* REDUCE
    -performs some operations & reduces the array to a single value.
    It returns that single value.
*/

arr = [1, 2, 3, 4];
const output = arr.reduce((result, current) =>{
    return result + current;
});
console.log(output);


//Q. We are given array of marks of students. Filter out of the marks of students that scored 90+.
let marksArr = [36, 78, 97, 90, 92, 89, 93, 69, 95];
let above90 = marksArr.filter( (val) => {
    return val > 90;
});
console.log(above90);

//Q. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use reduce method to calculate sum of all numbers in the array.
// Use reduce method to calculate product of all number in the array.

const n = prompt("Enter a number: "); 
let array = [];
for(let i=1; i<=n; i++) {
    array[i-1] = i;
};

let arrSum = array.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(arrSum);

let arrMul = array.reduce( (accumulator, currentValue) => {
    return accumulator * currentValue;
});
console.log(arrMul);
