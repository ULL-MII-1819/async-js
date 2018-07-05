/* https://youtu.be/u2axmPnxUoo
 * Cómo funciona Async/Await en menos de 15 minutos
 */
const fetch = require("node-fetch");

const url = "https://api.github.com/users/";

async function getNombre(userName) {

  let respuesta = await fetch(url+userName);
  if (respuesta.status !== 200) throw new Error("El usuario no existe!")
  // console.log(respuesta.json());
  let json      = await respuesta.json();

  return json.name;
}

(async function() {
  try {
    let name = await getNombre("usuario-no-existe");
    console.log(name);
  } catch(e) {
    console.log("Brrr! "+e);
  }
})()
