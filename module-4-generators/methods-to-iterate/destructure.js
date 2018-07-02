function* genFunc(){
    yield 'a';
    yield;
    yield* [1,2,3];
    yield 123;

    return "finished";

}

var [a,b,c,d,e,f,g] = genFunc(); //destructuring assignment
console.log(a); // a = 'a'
console.log(b); // b = undefined
console.log(c); // c = 1
console.log(d); // d = 2
console.log(e); // e = 3
console.log(f); // f = 123
console.log(g); // g = undefined <-- g is undefined because there are no more yield
