window.promises = [];
const container = document.getElementById("output")
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

let ans = Promise.any([a,b,c,d,e])

ans.then(data => {
	return container;
})

// Do not change the code above this
// add your promises to the array `promises`
