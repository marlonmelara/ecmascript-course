// Declaración de un arreglo anidado.
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];

// Utiliza 'flat' para aplanar el arreglo hasta una profundidad de 1 nivel.
console.log(array.flat(1)); // Resultado: [1, 1, 2, 3, 4, 1, 3, 5, 6, [1, 2, 4]]

// El método flat(1) aplanará los elementos del arreglo hasta una profundidad de un nivel. En tu ejemplo, el subarreglo [1, 3, 5, 6, [1, 2, 4]] se aplanará un nivel, resultando en 1, 3, 5, 6, [1, 2, 4]. El arreglo más interno [1, 2, 4] permanece sin cambios, ya que el método flat se ha aplicado solo a una profundidad de 1 nivel.
