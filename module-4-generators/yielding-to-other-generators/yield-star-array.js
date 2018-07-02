function* genFunc(){
    yield 1;
    yield* [2,3,4]; //the array [2,3,4] is iterable
    yield 5;

}

let genObject = genFunc();

let a = genObject.next(); //Object {value: 1, done: false};
console.log(a);
let b = genObject.next(); //Object {value: 2, done: false};
console.log(b);
let c = genObject.next(); //Object {value: 3, done: false};
console.log(c);
let d = genObject.next(); //Object {value: 4, done: false};
console.log(d);
let e = genObject.next(); //Object {value: 5, done: false};
console.log(e);
let f = genObject.next(); //Object {value: undefined, done: true};
console.log(f);
