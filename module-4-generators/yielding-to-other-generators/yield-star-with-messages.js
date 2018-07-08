#!/usr/bin/env node

/* You don't know JS. Async 6 Performance. Kyle Simpson.
  Chapter 4: Generators. Section: Generator Delegation. Subsection: Delegating messages
*/

function* foo() {
  console.log("inside *foo():",yield "B");
  console.log("inside *foo():",yield "C");
  return "D";
}

function *bar() {
  console.log("Inside *bar():", yield "A");

  // yield delegation
  console.log("Inside *bar():", yield* foo());

  console.log("Inside *bar():", yield "E");
  return "F";
}

let it = bar();

console.log("outside:", it.next());
// outside: { value: 'A', done: false }
console.log("outside:", it.next(1));
// Inside *bar(): 1  // Observa como el resultado del yield se computa antes del "resume"
// outside: { value: 'B', done: false }
console.log("outside:", it.next(2));
// Inside *foo(): 2
// outside: { value: 'C', done: false }
console.log("outside:", it.next(3));
// Inside *foo(): 3
// Inside *bar(): D
// outside: {value: "E", done: false }
console.log("outside:", it.next(4));
// Inside *bar(): 4
// outside: { value: 'F', done: true }
