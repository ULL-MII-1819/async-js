const ins = require("./ins.js");

const slowP = new Promise((resolve, reject) => {
  setTimeout( () => {
    let x = "slow Promise!";
    ins(x);
    resolve(x);
  }
  , 4000);
  setTimeout(() => {
    reject("this promise will not wait for the other if it takes more than 1s!")
  }, 1000);
});



slowP.catch((x) => ins(x));
