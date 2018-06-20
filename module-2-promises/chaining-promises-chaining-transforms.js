let p = Promise.resolve([1,2,3,4]);
// const inspect = require("util").inspect;
const ins = require("./ins.js"); // (x) => console.log(inspect(x, {depth: null}));
let q = p.then((r) => {
  ins(r);
  return r.map((x)=>x*x);
}).then((r) => {
  console.log(r.constructor.name);
  ins(r);
  //throw "Muero!!!";
  return r.filter((x)=> x>=10);
}).then((r) => {
  ins(r);
  //throw "Me desmayo!!!";
  return r.toString()+"!!";
}).then((r) => {
  ins(r);
  return r;
}).catch((e) => ins(e));
ins(q);
