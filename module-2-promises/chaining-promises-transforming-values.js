let p = Promise.resolve("hello");

let p2 = p.then((v) => {
  return v+" world!";
});

p2.then((v) => {
  console.log(v);
});

console.log("starting ...");
