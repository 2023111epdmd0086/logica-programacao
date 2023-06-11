// Dada uma coleção de N números, imprimir o índice do primeiro número negativo, se houver.

const numeros = [2, 4, 0, 5, -3, 0];
let indiceNegativo = null;

// Percorre a coleção de números
for (let i = 0; i < numeros.length; i++) {
  // Verifica se o número atual é negativo
  if (numeros[i] < 0) {
    indiceNegativo = i; // Armazena o índice do primeiro número negativo encontrado
    break; // Interrompe o loop, já que encontramos o primeiro número negativo
  }
}
console.log('Lista de números:\n'+numeros+'\n--------------------------------------------');
// Verifica se foi encontrado um número negativo
if (indiceNegativo !== null) {
  console.log(`O primeiro número negativo está no índice ${indiceNegativo}`);
} else {
  console.log("Não foi encontrado número negativo na coleção");
}
