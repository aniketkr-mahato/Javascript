// String is a sequence of characters used to represent text

let str = "AniketKumar"; //create string
let l = str.length; //length of string
for(let i=0; i<str.length; i++){
    console.log("str[", i, "] =", str[i]); //string indicies
}




// TEMPLATE LITERALS -->
// a way to have embedded expressions in strings
// `this is a template literal`

// String Interpolation ${expression}-
// to create strings by doing substitution of placeholders. 

// `string text ${expression} string text`

let specialString = `This is a template literal.`;
console.log(specialString);

let obj = {
    item: "pen",
    price: 10,
};
console.log("the cost of", obj.item, "is", obj.price, "rupees.");
let output = `the cost of ${obj.item} is ${obj.price} rupees.`; //template literal
console.log(output); // note that a template literal converts output in a single string(numbers too)



//ESCAPE CHARACTERS - '\n', '\t'
// escape characters count as one single characters

let str1 = "Aniket\nKumar"; //string length 11 because '\n'&'\t' counts as 1 character
console.log(str1, str.length);



//STRING METHODS
//these are built-in functions to manipulate a string
/*  1)str.toUpperCase()
    2)str.toLowerCase()
    3)str.trim()   -removes whitespace from starting and end
*/
    
console.log(str1.toUpperCase());
//try str1.toUpperCase() in console

//*Applying string method in a string doesnot change the string but returns a new string*
console.log(str.toUpperCase()); //does not change original string
console.log(str);
let newStr = str.toUpperCase();
console.log(newStr);


/*  4)str.slice(start,end)  -returns part of string
    5)str.concat(str1)      -joins str with str1
    6)str.replace(searchVal, newVal)
    7)str.charAt(idx)
*/
//string concatenation can also be achieved by using '+' between two strings.

str = "0123456";
console.log(str.slice(2,6)); //prints from 2nd idx to 5th idx
console.log(str.slice(3)); //returns from 3rd idx to end

let str2 = "hellololo";
console.log(str2.replace("lo","p")); //replaces first matching substring
console.log(str2.replaceAll("lo","k")); //replaces all matching substring

console.log(str2.charAt(3));


//Practice Que
//Q.Prompt the user to enter their full name. Generate a username for them based on the input.
//Start username with @, followed by their full name and ending with the fullname length.

let fullName = prompt("Enter your name in small and without any spaces: ");
let userName = `@${fullName}${fullName.length}`;
console.log("Your usename is:", userName);