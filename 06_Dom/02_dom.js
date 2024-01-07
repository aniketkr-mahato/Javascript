/** ATTRIBUTES -->
 * getAttribute(attr)  -to get the attribute value
 * setAttribute(attr, newValue)  -to set the attribute value

*/
let div = document.querySelector("div");
console.dir(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);


let para = document.querySelector("p");
console.log(para.getAttribute("class"));
para.setAttribute("class", "newClass");



/**STYLE
 * node.style

*/
div = document.querySelector("div");
div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";

div.style.fontSize = "26px";

div.innerText = "Hello World!";



/**DOM MANIPULATION:
 * let el = document.createElement("div")
 * INSERT ELEMENTS -->

 * node.append(el)  -adds at the end of node (inside)
 * node.prepend(el) -adds at the start of node (inside)
 * node.before(el)  -adds before the node (outside)
 * node.after(el)  -adds after the node (outside)

 * DELETE ELEMENT -->
 * node.remove()  -removes the node

*/
let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);

let div1 = document.querySelector("#box1");
// div1.append(newBtn);
// div1.prepend(newBtn);
// div1.before(newBtn);
div1.after(newBtn);



let newHeading = document.createElement("h1")
newHeading.innerHTML = "<i>Hi, I am new!<i>";

document.querySelector("body").prepend(newHeading);

//deleting
para = document.querySelector("p");
para.remove(); //deletes the paragraph