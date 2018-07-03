var fetch = require("node-fetch");
/*
Using Generators with Asynchronous Functions

Generator functions work well with asynchronous functions that return Promises.
This is because Generator functions can yield a Promise,
process the Promise result asynchronously,
and then receive the Promise result back.
This allows asynchronous code to be written inside generator functions like normal synchronous functions.

Notice how Promises can be written in a synchronous way inside Generator functions:
*/

function* genFunc(){ //looks synchronously written

        var post1title = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
        /* {
              "userId": 1,
              "id": 1,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        */
        console.log(post1title);
        //post1title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        var post2title = yield fetch("https://jsonplaceholder.typicode.com/posts/2");
        /*
          {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          }
        */
        console.log(post2title);
        //post2title = "qui est esse"
}

var genObject = genFunc(); //creating generator object

var yieldedObject = genObject.next(); //starting generator and returning first yielded object
var promise = yieldedObject.value; //getting promise from value property of the yielded object
promise.then(function(val){ //callback for then() of promise
    return val.json(); //getting json stream from fetch response
}).then(function(val){ //chaining another then()
    var secondYieldedObject = genObject.next(val); //sending title back to generator function
                                                   //and receiving second yielded object from generator function
    var secondPromise = secondYieldedObject.value; //getting promise from value property of second yielded object
    secondPromise.then(function(val){ //callback for then() of promise
       return val.json();  //getting json stream from fetch response
    }).then(function(val){ //chaining another then()
      genObject.next(val); //sending back the second object to the generator function
    })
})
/*
  The code inside the generator function is clean and readable,
  however all the iterating code below it is a mess.
  Luckily, there is a recursive method for iterating through promises
*/
