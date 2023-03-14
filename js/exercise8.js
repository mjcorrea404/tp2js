let num = prompt("Introduce Numero menor a 50:"); 
let niveles = parseInt(num); 


for (let i = 1; i <= niveles; i++) {
  let fila = "";
  
  
  for (let j = 1; j <= i; j++) {
    fila += j + " ";
  }
  
 document.write(fila);
}
