/* let arr100 = Array(100).fill().map((v, i) => i);
console.log(arr100); */

let arr100 = Array(100).fill().map((v, i) => i).map((elem, i) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(i);
    }, parseInt(Math.random() * 500));
}))

arr100.forEach((elem) => {
    elem.then((value) => {
        console.log(`done...${value}`);
    })
})

let first = Promise.race(arr100);
first.then((value) => {
    console.log(`Completed first...${value}`);
}, first);

Promise.all(arr100).then(() => {
    console.log('All complete!');
})