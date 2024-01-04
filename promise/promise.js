// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, 1000);
//     });
// }

// sleep(1000)
//     .then(() => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(3);
//         return sleep(1000);
//     })

var promise1 = new Promise((resolve) => {
    setTimeout(() => resolve([1]), 1000);
});

var promise2 = new Promise((resolve) => {
    setTimeout(() => resolve([2, 3]), 2000);
});

Promise.all([promise1, promise2])
    .then(([result1, result2]) => {
        console.log(result1.concat(result2));
    })
    .catch(() => {
        console.log("error");
    })