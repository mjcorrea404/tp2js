let texto = "";
let cadena;

do {
  cadena = prompt("Introduce una cadena de texto:");
  if (cadena !== null) {
    texto += cadena + "-";
  }
} while (cadena !== null);

alert("Las cadenas introducidas son: " + texto.slice(0, -1));
