function* genFunc(){
    yield 'a';
    yield;
    yield* [1,2,3];
    yield 123;

    return "finished";

}
var arr = [...genFunc()]; //...spread operator
console.log(arr); // arr = ['a',undefined,1,2,3,123]
