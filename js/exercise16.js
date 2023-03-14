let texto = prompt("Escribe un texto:");
let textoReverso = "";

for(let i=texto.length-1; i>=0; i--){
    textoReverso += texto[i];
  }
  document.write(textoReverso);
