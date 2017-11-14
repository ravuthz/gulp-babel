let name = `Ravuthz`;

let add = (a, b) => a + b;

let sum = (...numbers) => {
    console.log(numbers);
    return numbers.reduce((previous, current) => previous + current);
};

// Promises

let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`It's gooood to goooo`);
    }, 1000);
    setTimeout(() => {
        reject("Oh noooooooooooooooo!");
    }, 500);
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`What 's the next??>>??`);
    }, 1500);
});

myPromise1.then(
    res => {
        console.log("res: " + res);
    },
    err => {
        console.log("err: " + err);
    }
);

myPromise1
    .then(res => {
        console.log("res: " + res);
    })
    .catch(err => {
        console.log("err: " + err);
    });

Promise.all([myPromise1, myPromise2]).then(
    res => {
        console.log("Promise.all, res: " + res);
    },
    err => {
        console.log("Promise.all, err: " + err);
    }
);

fetch("https://jsonplaceholder.typicode.com/posts").then(
    res => {
        res.json().then(data => {
            console.log("data: " + data);
        });
    },
    err => {
        console.log("err: " + err);
    }
);