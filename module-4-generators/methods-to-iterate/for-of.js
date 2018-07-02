function* genFunc(){
    yield 'a';
    yield;
    yield* [1,2,3];
    yield 123;

    return "finished";

}

let g = genFunc();
for (var x of g){ //for...of statement
    console.log(x);
}
//Outputs:
//'a'
// undefined
// 1
// 2
// 3
// 123
// <-- return value is not outputted
