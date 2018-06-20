const ins = require("./ins.js");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Took me 1s to solve it");
  },1000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("I'm the slow one!");
  }, 2000)
});

Promise.race([p2, p1]).then((res) => {
  ins(res);
});
