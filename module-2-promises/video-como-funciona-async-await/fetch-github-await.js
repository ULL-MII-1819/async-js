/* https://youtu.be/u2axmPnxUoo
 * Cómo funciona Async/Await en menos de 15 minutos
 */
const fetch = require("node-fetch");

const url = "https://api.github.com/users/";

async function getNombre(userName) {

  let respuesta = await fetch(url+userName);
  console.log(respuesta.json());
  let json      = await respuesta.json();
  console.log(json.name);
}

getNombre("crguezl");

