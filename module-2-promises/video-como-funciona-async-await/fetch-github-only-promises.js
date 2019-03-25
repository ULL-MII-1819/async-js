/* https://youtu.be/u2axmPnxUoo
 * Cómo funciona Async/Await en menos de 15 minutos
 */
const fetch = require("node-fetch");

const url = "https://api.github.com/users/";

function getNombre(userName) {

  fetch(url+userName)
    .then(respuesta => respuesta.json())
    .then(j => console.log(j.name))
}

getNombre(process.argv[2] || "crguezl");
