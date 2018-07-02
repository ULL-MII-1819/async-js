function* genFuncA() {
    yield 'a';
    yield 'b';

    return "done with genFuncA()!"

}

function* genFuncB(){
    yield 1;
    let returnVal = yield* genFuncA(); // contains iterable list [a,b] and returns with value "done with genFuncA()!"
    yield returnVal; // returnVal is equal to"done with genFuncA()
    yield 2;

    return "done with genFuncB()!";
}

let genObject = genFuncB();

let a = genObject.next(); //Object {value: 1, done: false};
console.log(a);
let b = genObject.next(); //Object {value: 'a', done: false};
console.log(b);
let c = genObject.next(); //Object {value: 'b', done: false};
console.log(c);
let d = genObject.next(); //Object {value: "done with genFuncA()!", done: false};
console.log(d);
let e = genObject.next(); //Object {value: 2, done: false};
console.log(e);
let f = genObject.next(); //Object {value: "done with genFuncB()!", done: true};
console.log(f);
