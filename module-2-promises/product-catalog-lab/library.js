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
    };

    let catalog = createRandomCatalog(100);

    const searchProductById = function() {}; 
    const searchProductsByType = function() {}; 
    const searchProducstByPrice = function() {}; 
    
    const searchAllProducts = function() {
      return new Promise(function(resolve, reject) {
        setTimeout(
          function() {
            resolve(catalog);
          }, 1000)
      });
    };


    return {
      searchProductById,
      searchProductsByType,
      searchProducstByPrice,
      searchAllProducts
    };
  }

  if (window.api === undefined) 
    window.api = myLibrary();
})(window);
