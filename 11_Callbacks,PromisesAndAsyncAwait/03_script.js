/* Async-Await
    -async function always returns a promise.

    async function myFunc(){...}

    await pauses the execution of its surrounding async function until the promise is settled

*/

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 500);
    });
}

async function getWeatherData() {
    await api();  //1st
    await api();  //2nd
}

getWeatherData();


function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data ", data);
            resolve(`success ${data}`);
        }, 2000);  
    });
}

// Async-await
(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
})();




/* IIFE: Immediately Invoked Function Expression
 -IIFE is a function that is called immediately as soon as it is defined.

 1:
 (function () {

 })();

 2:
 (() => {

 })();

 3:
 (async () => {

 })();

*/