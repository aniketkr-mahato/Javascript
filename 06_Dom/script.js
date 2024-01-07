//WINDOW OBJECT
//The window object represents an open window in a browser. It is browser's object
//(not JS's) & is automatically created by browser.
//It is a global objct with lots of properties & methods.


//DOM
// -when a webpage is loaded, the browser creates a Document Object Model(DOM) of the page

//DOM is used to access html code using js.
console.dir(window);    //WE USE .dir FOR OBJECTS
console.dir(window.document);
console.dir(document);
console.dir(document.body);
console.log(document.body);

console.dir(document.body.childNodes[1]);
//based on the interaction of user and website we may want to show some changes
//these changes are called dynamic changes or manipulation.


// document.body.childNodes[1].innerText = "Changed Heading";


/* DOM MANIPULATION -->
  1) selecting with id
  document.getElementById("myId")
  -returns null if searched id does not exist

  2) selecting with class
  document.getElementsByClassName("myClass")
  -returns html collection

  3) selecting with tag
  document.getElementsByTagName("p")
  -returns html collection
    
*/
let heading = document.getElementById("heading"); //h1
console.dir(heading);

let headings =  document.getElementsByClassName("headings");
console.dir(headings);
console.log(headings);

let para = document.getElementsByTagName("p");
console.dir(para);

/**
 * DOM MANIPULATION -->

 * QUERY SELECTOR
   1) document.querySelector("myId/ myClass/ tag") -returns first element
   2) document.querySelectorAll("myId/ myClass/ tag") -returns a NodeList
 */

let firstEle = document.querySelector("p");  //first element
console.dir(firstEle);

let allElements = document.querySelectorAll("p");  //all elements
console.dir(allElements);

let ele = document.querySelector(".headings");   //classes are searched with .(dot)
console.dir(ele);

let allEle = document.querySelectorAll(".headings");
console.dir(allEle);

let btnSelector = document.querySelector("#myId");
console.dir(btnSelector);

/**
 * DOM MANIPULATION -->Properties

 * tagName -returns tag for element nodes
 * innerText -returns the text content of the element and its children
 * innerHTML -returns the plain text or HTML contents in the element
 * textContent -returns textual content even for hidden elements

 */

//three types of nodes form in dom tree
//text nodes, comment nodes and element nodes.
//in dom we are mostly working with element nodes.


//try btnSelector.tagName in console
//try document.querySelector("div")  then document.querySelector("div").children

let div = document.querySelector("div");
console.dir(div);
// type div.innerText in console
// div.innerHTML gives a string all tags and content inside div
//the content can be changed using these two properties

let hhead = document.querySelector("#h2heading");
//will not show because h2 has visibility hidden

//type hheading.innerText then hheading.textContent




//Q. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.

let h3 = document.querySelector("h3");
console.dir(h3.innerText);

h3.innerText = h3.innerText + " from Apna College Students";
console.dir(h3.innerText);


//Q. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
console.log(divs[0]);

let idx = 0;
for(div of divs) {
  div.innerText = `new unique value ${idx}`;
  idx++;
}