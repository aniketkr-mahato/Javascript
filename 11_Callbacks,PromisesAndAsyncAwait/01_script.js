// async await >> promise chains >> callback hell

/* Synchronous -->
    -Synchronous means the code runs in a particular sequence of instructions given in the program.
    Each instruction waits for the previous instruction to complete its execution.

    Asynchronous -->
    -Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions,
    which causes a delay in the UI. Asynchronous code execution allows to execute next instructions
    immediately and doesn't block the flow.
*/

// Callbacks -->
// -A callback is a function passed as an argument to another function.

/* Callback Hell -->
    -Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom)
*/

function getData(data, getNextData) {

    setTimeout(() => {
        console.log("data ", data);  //prints data 1 then data 2
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});


/* PROMISES -->
    -Promise is for "eventual" completion of task. It is an object in JS.
    It is a solution to callback hell.

    let promise = new Promise((resolve, reject) => {...}) //Function with 2 handlers

    *resolve & reject are callbacks provided by JS.
*/


let promise = new Promise((resolve, reject) => {
    console.log("I am a new promise.");
    resolve("promise resolved.");
});
/*
Promise {<fulfilled>: promise resolved.}
    [[Prototype]]: Promise
    [[PromiseState]]: "fullfilled"  -->three states: pending, fullfilled and rejected
    [[PromiseResult]]: "promise resolved."

    A JS Promise object can be:
    Pending: the result is undefined
    Resolved: the result is a value (fulfilled)  // resolve(result)
    Rejected: the result is an error object  // reject(error)
*/