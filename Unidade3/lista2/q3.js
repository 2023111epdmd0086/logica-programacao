// Escreva um programa para verificar se um número é palíndromo (Número que é igual ao seu reverso Ex.: 14541)

// Leitura do número digitado pelo usuário
const numero = parseInt(prompt("Digite um número inteiro:"));

const numeroString = numero.toString(); // Converte o número em uma string

// separar em array, depois inverte, depois junta novamente
const numeroReverso = numeroString.split("").reverse().join("");

// Verifica se o número original é igual ao número reverso
if (numeroString === numeroReverso) {
  console.log(`${numero} é um número palíndromo.`);
} else {
  console.log(`${numero} não é um número palíndromo.`);
}
