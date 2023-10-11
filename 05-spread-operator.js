// Spread Operator (Operador de Propagación)
/*El Spread Operator permite expandir las propiedades de un objeto (o elementos de un array) en un nuevo objeto o en una lista de argumentos.*/
let person = { name: "Pepe", age: 28 };
let country = "MX";

// Aquí, se está creando un nuevo objeto 'data' que contiene una propiedad 'id' con valor 1,
// todas las propiedades del objeto 'person' y una propiedad 'country' con valor "MX".
// El Spread Operator (...) está expandiendo las propiedades del objeto 'person' dentro del nuevo objeto 'data'.
let data = { id: 1, ...person, country };

console.log(data); // Output: { id: 1, name: "Pepe", age: 28, country: "MX" }

// Rest (Parámetros Rest)
// Los Parámetros Rest permiten representar un número indefinido de argumentos como un array.
// Se usan en la definición de la función, precedidos por '...' antes del nombre del parámetro que
// representará el array de argumentos.

// En esta función, 'num' es el primer argumento, y 'values' es un array que contiene todos los
// argumentos adicionales pasados a la función.
function sum(num, ...values) {
  console.log(values); // Output: [1, 2, 3] en la llamada sum(9, 1, 2, 3)
  console.log(num + values[0]); // Output: 10 en la llamada sum(9, 1, 2, 3)
  return num + values[0]; // Retorna la suma del primer argumento 'num' y el primer elemento del array 'values'
}

sum(9, 1, 2, 3); // Llamada a la función 'sum' con cuatro argumentos.
