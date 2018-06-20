let promise = new Promise(function(resolve, reject) {
  let isSuccessful = Math.random() > 0.5;
  setTimeout(function() {
    if (isSuccessful) {
      resolve("success!!");
    }
    else {
      reject(Error('failure!'));
    }
  }
  ,2000);
});

promise.then((v) => console.log(v)
).catch((e) => console.log(e.message));
