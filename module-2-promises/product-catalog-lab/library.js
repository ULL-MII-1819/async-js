(function(window) {

  function myLibrary() {
  
    const searchProductById = function() {}; 
    const searchProductsByType = function() {}; 
    const searchProducstByPrice = function() {}; 
    const searchAllProducts = function() {};

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
    console.log(createRandomCatalog(4));

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
