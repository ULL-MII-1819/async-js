const ins = require("./ins.js");

let p1 = Promise.resolve("hello");
let p2 = Promise.resolve([1,2,3]);
let p3 = 42; // normal values work with Promise.all
let p4 = Promise.reject("Trump!");
let p5 = Promise.resolve(Error("The End!"));

Promise.all([p1, p2, p3]).then((r) => {
  ins(r);
}).catch((e) => ins(e));

Promise.all([p1, p2, p3, p4]).then((r) => {
  ins(r);
}).catch((e) => ins(e));

Promise.all([p1, p2, p3, p5]).then((r) => {
  ins(r);
}).catch((e) => ins(e));
