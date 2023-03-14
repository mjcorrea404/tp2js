let numeros = [];
let suma = 0;

while (true) {
  let input = prompt("Introduce un número:");

  
  if (input === null) {
    break;
  }

  
  if (isNaN(input)) {
    alert("Por favor, introduce un numero válido.");
    continue;
  }

  
  let num = Number(input);
  numeros.push(num);
  suma += num;
}

console.log("Los números introducidos son:", numeros);
console.log("La suma de los números es:", suma);

