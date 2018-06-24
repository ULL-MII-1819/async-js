(function(window) {

  function myLibrary() {

    const types = ['Electronic', 'Book', 'Clothing', 'Food'];
    const createRandomProduct = function(id) {
      const price = (Math.random()*500).toFixed(2);
      const t = types[Math.floor(Math.random()*types.length)];
      return {id: id, type:t, price: price};
    };

    function createRandomCatalog(num) {
      let catalog = [];
      for(let i = 0; i < num; i++) {
        catalog.push(createRandomProduct(i));
      }
      return catalog;
    }

    let catalog = createRandomCatalog(100);

    const searchAllProducts = function() {
      return new Promise(function(resolve, reject) {
        setTimeout(
          function() {
            resolve(catalog);
          }, 1000);
      });
    };

    const searchProductById = function(id) {
      id = Number(id);
      return new Promise(function(resolve,reject) {
        setTimeout(function() {
          let x = catalog.find((x) => x.id === id);
          if (x !== undefined) return resolve(x);
          else return reject("Product "+id+" Not found");
        }, 1000);
      });
    };

    const searchProductsByType = function(t) {
      return new Promise(function(resolve, reject) {
        setTimeout( () => resolve(catalog.filter((x) => x.type === t)) , 1000);
      });
    };

    const searchProductsByPrice = function(price, difference) {
      price = Number(price);
      difference = Number(difference);
      return new Promise(function(resolve, reject) {
        setTimeout( () => resolve(catalog.filter((x) => Math.abs(x.price -price) < difference)), 1000);
      });
    };

    return {
      //createRandomCatalog,
      searchProductById,
      searchProductsByType,
      searchProductsByPrice,
      searchAllProducts
    };
  }

  if (window.api === undefined)
    window.api = myLibrary();
})(window);
