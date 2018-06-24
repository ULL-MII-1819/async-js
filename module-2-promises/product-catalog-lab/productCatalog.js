const title = ["ProductId", "Type", "Price", "Examine"];
function createTableHeader(tableId) {
  var tableHeaderRow = document.createElement("TR");
  for(let i = 0; i<4; i++) {
    let th = document.createElement("TH");
    th.appendChild(document.createTextNode(title[i]));
    tableHeaderRow.appendChild(th);
  }
  document.getElementById(tableId).appendChild(tableHeaderRow);
}

function removeTableHeader(tableId) {
  let table = document.getElementById(tableId);
  while (table.hasChildNodes()) table.removeChild(table.firstChild);
}

function updateTable(tableId, productArray) {
  const kind = ["TD", "TD", "TD"];
  const type = ["id", "type", "price"];
  const table = document.getElementById(tableId);
  removeTableHeader(tableId);
  createTableHeader(tableId);
  productArray.map((item, index) => {
    let tr = document.createElement("tr");
    for(let i = 0; i<kind.length; i++) {
      let td = document.createElement(kind[i]);
      td.appendChild(document.createTextNode(item[type[i]]));
      tr.appendChild(td);
    }
    let td4 = document.createElement("button");
    td4.addEventListener('click',function(){
      // to change
      processSearch(index);
    });
    td4.appendChild(document.createTextNode("Examine"));
    tr.appendChild(td4);
    table.appendChild(tr);
  });
}

function updateExamineProduct(product) {
  document.getElementById("productText").innerHTML = `
    Product Id: ${product.id} <br/>
    Price:      ${product.price} <br/>
    Type:       ${product.type} <br/>
  `;
}

function processSearch(id) {
  api.searchProductById(id).then((item) => {
     updateExamineProduct(item);
    return api.searchProductsByTypeAndPrice(item.type, item.price, 50);
  }).then((items) => updateTable("examineTable", items)
);.catch((err) => alert(err));
}

api.searchAllProducts().then(
  (catalog) => updateTable("allTable", catalog)
);

document.getElementById("inputButton").addEventListener('click',function(){
    processSearch(document.getElementById('input').value);
});
