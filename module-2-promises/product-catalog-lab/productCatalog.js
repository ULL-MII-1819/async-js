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
  productArray.map((item) => {
    let tr = document.createElement("tr");
    for(let i = 0; i<kind.length; i++) {
      let td = document.createElement(kind[i]);
      td.appendChild(document.createTextNode(item[type[i]]));
      tr.appendChild(td);
    }
    let td4 = document.createElement("button");
    td4.addEventListener('click',function(){
    });
    td4.appendChild(document.createTextNode("Examine"));
    tr.appendChild(td4);
    table.appendChild(tr);
  });
}

api.searchAllProducts().then(
  (catalog) => updateTable("allTable", catalog)
)
