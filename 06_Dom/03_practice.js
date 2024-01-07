// Q. Create a new button element. Give it a text "click me", background color of
// red & text color of white. Insert the button as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
console.log(newBtn);

document.querySelector("body").prepend(newBtn);


/**
 * Q.Create a <p> tag in html, give it a class & some styling.
 * Now create a new class in CSS and try to append this class to the <p> element
 * Did you notice, how yo overwrite the class name when you add a new one?
 * Solve this problem using classList.
 */

let para = document.querySelector("p");
// para.setAttribute("class", "newClass");  -removes old class and applies new class

console.log(para.classList);  //shows all classes applied
para.classList.add("newClass");  //adds new class to the element
// para.classList.remove("newClass");  removes newClass class