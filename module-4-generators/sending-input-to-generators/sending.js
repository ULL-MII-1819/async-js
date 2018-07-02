function* genFunc(){
    var a = yield 'a';
    console.log(a); //a = 1
    var b = yield 10*a;
    console.log(b); //b = 2
    var c = yield 10*b;
    console.log(c); //c = 3
}

var genObject = genFunc();

console.log(genObject.next(0)); //starts genFunc(), the value inside the next()) call is ignored
console.log(genObject.next(1)); //sends a value of 1 to genFunc())
console.log(genObject.next(2)); //sends a value of 2 to genFunc())
console.log(genObject.next(3)); //sends a value of 3 to genFunc())
console.log(genObject.next(4)); //the value inside next() is ignored because genFunc()) has no more yields
