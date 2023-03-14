let edad = prompt("Ingresa tu edad:");

if(isNaN(edad)){
  alert("La edad ingresada no es un número válido.");
} else {
  edad = parseInt(edad);
  if (edad >= 18) {
    alert("Puedes conducir.");
  } else {
    alert("Todavía no puedes conducir.");
  }
}