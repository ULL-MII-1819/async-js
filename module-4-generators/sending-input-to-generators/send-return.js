function* genFunc(){
    let a = yield 'a';
    console.log(a); // a = 'a!'
    let b = yield 'b';
    console.log(b); // b = 'B'
    let c = yield 'c';
    console.log(c); // c = 'abc'

}

let genObject = genFunc();

let w = genObject.next(); //starts genFunc(), w = Object {value: 'a', done: false}
console.log(w);
let x = genObject.next(w.value + '!'); //sends a value of "a!" to genFunc(), x = Object {value: 'b', done: false}
console.log(x);
let y = genObject.next(x.value.toUpperCase()); //sends a value of 'B' to genFunc(), y = Object {value: 'c', done: false}
console.log(y);
let z = genObject.next(w.value + x.value + y.value); //sends a value of 'abc' to genFunc(), z = Object {value: 'undefined', done: true}
console.log(z); 
