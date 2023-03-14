let texto = prompt("Escribe un texto:");
let vocalUno = texto.search(/[aeiouáéíóú]/i);

document.write(" vocal uno primera posicion " + vocalUno);
