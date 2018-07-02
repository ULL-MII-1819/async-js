/*
  Generator Objects have a throw() method that causes an error to be thrown at the most recent yield statement.
  The throw() method takes in one argument, which is commonly an Error object.

  Notice how throw() affects the Generator function:
*/

function* genFunc(){

        var a = yield 'a';
        console.log("genFun "+a); // a = 123
        var b = yield 'b'; //exception is thrown, function exits
        //the code below never occurs because an exception occurred and was uncaught
        console.log("genFun "+b);
        var c = yield 'c';
        console.log("genFun "+c);

        return "finished!";



}

var genObject = genFunc();

var w = genObject.next(); // w = Object {value: 'a', done: false}, starts generator function
console.log(w);
var x = genObject.next(123); // x = Object {value: 'b', done: false}
console.log(x);
var y = genObject.throw(new Error("error thrown!")); // thrown() is called, y = undefined
console.log(y);
var z = genObject.next('abc'); // z = undefined
console.log(z);
