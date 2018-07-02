function* genFunc() {

    yield 'a';
    yield 'b';
    throw new Error("error thrown by genFunc()!");
    yield 'c';
    yield 'd';

}

let genObject = genFunc();

try{
    let a = genObject.next(); // Object {value: 'a', done: false}
    console.log(a);
    let b = genObject.next(); // Object {value: 'b', done: false}
    console.log(b);
    let c = genObject.next(); // never occurs
    console.log(b);
    let d = genObject.next(); // never occurs
    console.log(d);
}
catch(e){
  console.log("Catched! "+e.message); // Catched! error thrown by genFunc()!
}
