//Strings are immutable in js.
// Arrays are mutable in js.

let marks = [2, 5, 6, 9, 24];
console.log(marks);
console.log(marks.length); //property

// Looping over an array
// Loops -->iterable - strings, objects, arrays

let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
for (let city of cities) {
    console.log(city.toUpperCase());
}

// Q1. For a given array with marks of students.
// Find the average marks of the entire class.

marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i of marks) {
    sum += i;
}
console.log(sum);
let avg = sum/marks.length;
console.log(`average marks = ${avg}`);

//Q2. For a given array with prices of 5 items. All items have an offer of 10% off on them.
// Change the array to store final price after applying offer.
let prices = [250, 645, 300, 900, 50];
for(let i of prices) {
    i = 0.9*i;
    console.log(`Price after discount = ${i}`);
}


// <--- ARRAY METHODS --->
/*  push() -add to end
    pop() -delete from end & return
    toString() -converts array to string
*/
let foodItems = ["potato", "apple", "litchi", "tomato"];
console.log(foodItems);

foodItems.push("chips");  //push(item)
console.log(foodItems);

foodItems.pop();          //pop()
console.log(foodItems);

console.log(foodItems.toString()); //toString() -return a new string
console.log(foodItems);


/* concat() -joins multiple arrays & returns result
   unshift() -adds to start
   shift() -deletes from start
*/
let marvel_heroes = ["thor", "spiderman","hulk","hawkeye", "captain america"];
let dc_heroes = ["superman", "batman"];
let indian_heroes = ["shaktiman", "krrish"];

let heroes = marvel_heroes.concat(dc_heroes, indian_heroes); //concat()
console.log(heroes);

marvel_heroes.unshift("antman"); //unshift
console.log(marvel_heroes);

marvel_heroes.shift(); //shift
console.log(marvel_heroes);


/* slice() -returns a piece of the array
    slice(startIdx, endIdx)

   splice() -changes original array (add, remove, replace)
    splice(startIdx, delCount, newEli...)
*/
console.log(marvel_heroes.slice(1, 3)); //slice(startIdx, endIdx)
console.log(marvel_heroes.slice(1));

let arr = [1, 2, 3, 4, 5, 6, 7];
//arr.splice(2, 2, 101, 102);   -from idx 2, deletes 2elements, adds 101 and 102

//Add Element
// arr.splice(2, 0, 101);   -deletes no element, adds 101 at idx 2

//Delete Element
// arr.splice(2, 1);  -deletes 3 from idx 2

//Replace Element
// arr.splice(3, 1, 101);   -form idx3, deletes 1element, adds 101

arr.splice(4);  // -deletes all elements from idx 4



//Q2. Create an array to store companies.
// a. Remove the first company from the array.
// b. Remove Uber & add Ola in its place.
// c. Add Amazon at the end.

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift(); //removes first company
companies.splice(1, 1, "Ola"); //replaces uber by ola
companies.push("Amazon"); //adds amazon at the end

for(let i of companies) {
    console.log(i);
}