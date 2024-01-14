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


/* PROMISES -->
    -Promise is for "eventual" completion of task. It is an object in JS.
    It is a solution to callback hell.

    let promise = new Promise((resolve, reject) => {...}) //Function with 2 handlers

    *resolve & reject are callbacks provided by JS.
*/