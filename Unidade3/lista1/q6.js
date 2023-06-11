// Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. Depois, o usuário vai preenchendo elemento por elemento do vetor. Ao final, exiba o array e o array ao contrário (generalização do script anterior).

// Perguntar ao usuário quantos números deseja inserir no array
const quantidade = parseInt(prompt("Quantos números deseja inserir no array?"));

// Criar um array vazio
const numeros = [];

// Loop para preencher o array com os números informados pelo usuário
for (let i = 0; i < quantidade; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}:`));
  numeros.push(numero);
}
// Exibir o array original
console.log("Array original:", numeros);
// Inverter a sequência dos números no array
const numerosInvertidos = numeros.reverse();
// Exibir o array invertido
console.log("Array invertido:", numerosInvertidos);