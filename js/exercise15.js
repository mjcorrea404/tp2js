let texto = prompt("Escribe un texto:");
let numVocales = 0;

for(let i=0; i<texto.length; i++){
  if(/[aeiouáéíóú]/i.test(texto[i])){
    numVocales++;
  }
}
document.write("El texto tiene " + numVocales + " vocales.");
