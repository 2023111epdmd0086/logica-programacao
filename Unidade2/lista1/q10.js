// 10.	Escreva um programa que receba um número com quatro dígitos e imprima o primeiro e último digito.

let num = parseInt(prompt('Digite um número com 4 dígitos'));

//recuperar o último dígito pelo resto da divisão por 10
let last = num%10; 

//recuperar o primeiro dígito pelo inteiro da divisão por 1000
let first = parseInt(num/1000); 

console.log(`Primeiro dígito: ${first}`);
console.log(`Ultimo dígito: ${last}`);