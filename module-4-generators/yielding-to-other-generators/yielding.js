function* genFuncA() {
    yield 'a';
    yield 'b';
    yield 'c';

    return "done with genFuncA()!";

}

function* genFuncB(){
    yield 1;
    yield* genFuncA(); // contains iterable [a,b,c]
    yield 2;
    yield 3;

    return "done with genFuncB()!";
}

let genObject = genFuncB();

let a = genObject.next(); //Object {value: 1, done: false};
console.log(a);
let b = genObject.next(); //Object {value: 'a', done: false};
console.log(b);
let c = genObject.next(); //Object {value: 'b', done: false};
console.log(c);
let d = genObject.next(); //Object {value: 'c', done: false};
console.log(d);
let e = genObject.next(); //Object {value: 2, done: false};
console.log(e);
let f = genObject.next(); //Object {value: 3, done: false};
console.log(f);
let g = genObject.next(); //Object {value: "done with genFuncB()!", done: true};
console.log(g);
