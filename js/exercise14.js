let texto = prompt("Escribe un texto:");
let textoSeparado = "";

for(let i=0; i<texto.length; i++){
  if(i === texto.length - 1){
    textoSeparado += texto[i];
  } else {
    textoSeparado += texto[i] + "-";
  }
}
document.write(textoSeparado);
