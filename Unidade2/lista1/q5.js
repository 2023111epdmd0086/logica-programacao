// Escreva um programa que calcule o IMC de uma pessoa. IMC=peso/〖altura〗^2 

let peso = parseFloat(prompt('Escreva o seu peso em kg:'));
let altura = parseFloat(prompt('Escreva a sua altura em m:'));

let imc = parseFloat(peso/(altura ** 2)).toFixed(2);

console.log(`O seu IMC é: ${imc}`);
