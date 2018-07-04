const fetch = require("node-fetch");

const url = "https://api.github.com/users/";

function getNombre(userName) {

  fetch(url+userName)
    .then(respuesta => respuesta.json())
    .then(j => console.log(j.name))
}

getNombre("crguezl");
