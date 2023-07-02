window.promises = [];

let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("output")
    }, 1000);
})
let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("output")
    }, 2000);
})
let c = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("output")
    }, 3000);
})
let d = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("output")
    }, 4000);
})
let e = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("output")
    }, 5000);
})
promise.push(a);
promise.push(b);
promise.push(c);
promise.push(d);
promise.push(e);
let ans = Promise.any([a,b,c,d,e])

ans.then(data => {
	return data;
})

// Do not change the code above this
// add your promises to the array `promises`
