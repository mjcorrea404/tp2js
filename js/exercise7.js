let num = prompt("Ingresa un número menor o igual a 50:");
let numMaximo = Math.min(num, 50);

for(let i=numMaximo; i>=1; i--){
  let fila = "";
  for(let j=i; j>=1; j--){
    fila += j;
  }
  document.write(fila);
}
