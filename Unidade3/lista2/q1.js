// Faça um programa que leia um número inteiro e informe se ele é perfeito ou não. Um número perfeito é aquele que é igual à soma de seus divisores. Ex.: 6 = 1 + 2 + 3 = número perfeito

const numero = parseInt(prompt("Digite um número inteiro:"));
let somaDivisores = 0;

// Percorre os possíveis divisores do número
for (let i = 1; i < numero; i++) {
  if (numero % i === 0) {
    somaDivisores += i; // Adiciona o divisor à soma
  }
}

// Verifica se a soma dos divisores é igual ao número
if (somaDivisores === numero) {
  console.log(`${numero} é um número perfeito.`);
} else {
  console.log(`${numero} não é um número perfeito.`);
}
