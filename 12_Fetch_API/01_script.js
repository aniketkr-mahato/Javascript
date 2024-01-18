/* Fetch API-->
    -The fetch API provides an interface for fetching (sending/receiving) resources.
    -It uses Request and Response objects.
    -The fetch() method is used to fetch a resource (data).

    let promise = fetch(url, [options]);

*//*
    AJAX is Asynchronous JS & XML
    JSON is JavaScript Object Notation.
    json() method: returns a second promise that resolves with the result of
    parsing the response body text as JSON. (Input is JSON, output is JS Object)
*/

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// const getFacts = async () => {
//     console.log("getting data.....");
//     let response = await fetch(URL);
//     console.log(response); // JSON format
//     let data = await response.json(); // JSON to JS Object
//     factPara.innerText = data[0].text;
// }

function getFacts() {
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            factPara.innerText = data[2].text;
        });
}

btn.addEventListener("click", getFacts);



