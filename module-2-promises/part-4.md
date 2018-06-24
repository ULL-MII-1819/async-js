In Part 4 of the tutorial, we will edit the JavaScript file `productCatalog.js` to do the following:

* Populate the "Examined Product" section when a product id is searched or when an `Examine Button` is pressed
* Populate the "List of Similar Products" with products similar to the `searched/examined` product when a product `id` is searched or when an `Examine` button is pressed.
    - The "List of Similar Products" table is populated with products that have the same type as the examined product and are  also within $50 of the examined product's price.
    - Thus, we can get an array of these similar products by using the api.searchProductByType(type) and api.searchProductByPrice(price,difference) library functions and getting the intersection of the two arrays that are returned.
