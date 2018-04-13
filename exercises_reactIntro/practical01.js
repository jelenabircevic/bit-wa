/* let arr100 = Array(100).fill().map((v, i) => i);
console.log(arr100); */

let arr100 = Array(100).fill().map((v, i) => i).map((elem, i) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const marker = Math.random();
        if (marker < 0.85) {
            resolve(i);
        } else {
            reject(`reject ${i}`);
        }
    }, parseInt(500));
}))

arr100.forEach((elem) => {
    elem.then((value) => {
        console.log(value)
    }, (value) => {
        console.log(value)
    })
})

Promise.race(arr100).then((value) => {
    console.log(`Completed first: ${value}, time: ${(new Date()).getTime()}`);
}, (value) => {
    console.log(`first ${value}`)
});

Promise.all(arr100).then(() => {
    console.log(`All complete! time: ${(new Date()).getTime()}`);
}, (value) => {
    setTimeout(console.log, 2000, `Not all completed`);
})