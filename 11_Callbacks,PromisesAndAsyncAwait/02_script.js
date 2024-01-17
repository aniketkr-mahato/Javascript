// PROMISE CHAIN
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 2000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 2000);
    });
}

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//     });
// });

asyncFunc1().then((res) => {
    console.log("fetching data2...");
    asyncFunc2().then((res) => {
    });
});



// applying in callback hell
function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data ", data);
            resolve(`success ${data}`);
        }, 4100);  
    });
}

// Promise Chain
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     })
// });

getData(1)
    .then((res) => {
        console.log(res);
        return getData(2);
    })
    .then((res) => {
        console.log(res);
    });

//callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });
 