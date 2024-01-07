// Loops are used to execute a piece of code again and again


// sum of first 10 natural numbers
let sum = 0;
for(let i=1; i<=10; i++) {
    sum += i;
}
console.log("sum =", sum);


// while loop
let a = 0;
while(a<=5) {
    console.log(a);
    a++;
}

// do while loop
let b = 0;
do {
    console.log(b);
    b++
} while (b<=5);

// for-of loop
let strVar = "Javascript";
for(let val of strVar) {     //iterator -> characters
    console.log("val =", val)
}

//for-in loop
// key-value pairs can be accessed through for-in loops
let student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.5,
    isPass: true
};

for(let key in student) {
    console.log("key =", key, "value =", student[key]);
}


//Practice Que
//Q1. Print all even numbers from 0 to 100.
let x = 0;
while(x<=10) {
    if(x%2 === 0){
        console.log(x);
    }
    x++;
}

//Q2.Generate a gameNo. Take input from user and match with gameNo. again and again until input matches.
let gameNum = 32;
let userNum = prompt("Guess the game number: ");
while(userNum != gameNum){
    userNum = prompt("You entered wrong number, Try again: ");
}
console.log("congo!, you entered the right number.");