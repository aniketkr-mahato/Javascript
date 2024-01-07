/**EVENTS -->
 * The change in the state of an object is known as an Event.
 * Events are fired to notify code of "interesting changes" that may affect code execution.

 * Event Handling in JS -->
 node.event = () => {
    handle here
 }

*/


let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {   //event handler
    console.log("btn was clicked!");
    let a = 25;
    a++;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div")
}



/**EVENT OBJECT -->
 * It is a special object that has details about the event.
 * All event handlers have access to the Event Object's properties and methods.

 node.event = (e) => {
    handle here
 }

*/

//redefining event overwrites previous one
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);  //prints event type
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}



/**EVENT LISTENERS -->
 * node.addEventListener(event, callback)
 * node.removeEventListener(event, callback)

 * NOTE: the callback reference should be same to remove (ex- handler3 below)
*/

//normally only one event handler is executed(line-38), but using event listener we can make multiple event handlers
let btn2 = document.querySelector("#btn2"); 

btn2.addEventListener("click", (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log("button2 was clicked - handler 1");
});

btn2.addEventListener("click", () => {
    console.log("button2 was clicked - handler 2");
});

const handler3 = () => {
    console.log("button2 was clicked - handler 3");
};

btn2.addEventListener("click", handler3);

btn2.addEventListener("click", () => {
    console.log("button2 was clicked - handler 4");
});


btn2.removeEventListener("click", handler3); //removes handler 3



//PRACTICE QUE
//Q. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let darkModeBtn = document.querySelector("#darkModeBtn");
let body = document.querySelector("body");
let currMode = "light";

darkModeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.replace("light", "dark");
    } else {
        currMode = "light";
        body.classList.replace("dark", "light");
    }
    console.log(currMode);
});
