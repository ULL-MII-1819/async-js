function *genFun() {
  yield 'a';
  yield;
  yield 123;
  return "finished";
  // Yield statements after the return statement are ignored.
  yield "never seen!";
}

// A Generator Object is returned from calling a Generator function.
// It is important to not confuse Generator Objects with Generator functions.
let genObject = genFun();

console.log(genObject.next()); // { value: 'a', done: false }
console.log(genObject.next()); // { value: undefined, done: false }
console.log(genObject.next()); // { value: 123, done: false }
/*
  After all of the yield statements have been processed with next(),
  the following next() call returns an object with a value property equal to the Generator function return value and a done property set to true.
  If the return statement was omitted from the Generator function then the value property will be undefined.
*/
console.log(genObject.next()); // { value: 'finished', done: true }

/*
After the the done property is true in one of the returned objects,
additional next() calls will return objects with an undefined value property and a true done property.
*/
console.log(genObject.next()); // { value: 'finished', done: true }
