// Escreva um programa que receba um número inteiro como entrada e imprima o sucessor e antecessor desse número.

let num = parseInt(prompt("Digite o número"));
// Definindo as variáveis:
let ant = num - 1;
let suc = num + 1;
// Imprimindo no console
console.log(`O ancecessor de ${num} é: ${ant}`);
console.log(`O sucessos de ${num} é: ${suc}`);