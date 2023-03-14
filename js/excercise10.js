let filas = parseInt(prompt("Ingresa el número de filas:"));
let columnas = parseInt(prompt("Ingresa el número de columnas:"));

let numero = filas * columnas;

let tabla = "<table>";
for(let i=0; i<filas; i++){
  tabla += "<tr>";
  for(let j=0; j<columnas; j++){
    tabla += "<td>" + numero + "</td>";
    numero--;
  }
  tabla += "</tr>";
}
tabla += "</table>";

document.write(tabla);
