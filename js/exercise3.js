let cadenas = [];

while (true) {
  let cadena = prompt("Introduce una cadena de texto (o 'cancelar' para salir):");
  if (cadena === null || cadena.toLowerCase() === "cancelar") {
    break;
  }
  cadenas.push(cadena);
}

if (cadenas.length > 0) {
  let resultado = cadenas.join(" - ");
  console.log("Cadenas introducidas: " + resultado);
} else {
  console.log("No se han introducido cadenas.");
}