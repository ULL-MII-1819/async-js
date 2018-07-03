const fetch = require("node-fetch");


/*
  A recursive method can be used to iterate through the Promises yielded by a generator
  returning the fulfilled values
*/

function run(genF) {
  const genO = genF();

  function iterate(iteration) {
    if (iteration.done)
      return Promise.resolve(iteration.value);
    return Promise.resolve(iteration.value).then(
        x => iterate(genO.next(x))
      ).catch( e => iterate(genO.throw(e)))
  }
  try {
    return iterate(genO.next()); // Start iteration
  } catch(e) {
    return Promise.reject(e);
  }
}

/*
  The run() function shown above takes in a Generator function as an argument and
  uses the recursive iterate() function to process through all of the Generator
  function's yield statements.
  If a Promise is yielded, the fulfillment value of that Promise is sent back to
  the Generator function. If an integer, string or object is yielded, then those
  values are sent back as is to the Generator function.
*/
function *gen(){

        var post1Stream = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
        var post1 = yield post1Stream.json();
        console.log(post1.title);
        //post1.title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        var post2Stream = yield fetch("https://jsonplaceholder.typicode.com/posts/2");
        var post2 = yield post2Stream.json();
        console.log(post2.title);
        //post2.title = "qui est esse"

        var error = yield Promise.reject(Error("error message!"));
        //error thrown here, generator function terminates

        var number = yield 12345;
        console.log(number); //doesn't occur because an earlier promise was rejected

        return 'done'; //doesn't occur because an earlier promise was rejected

}

run(gen).then(x => console.log(x))
        .catch(err => console.log(err.message)); //logs "error message!" from the rejected Promise
