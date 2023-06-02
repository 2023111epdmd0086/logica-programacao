// 4.	Faça um programa que receba três números e mostre o maior.

let n1 = Number(prompt('Digite o primeiro número'));
let n2 = Number(prompt('Digite o segundo número'));
let n3 = Number(prompt('Digite o terceiro número'));
let maior = n1;

if (n2 > maior) {
    maior = n2;
} 
if (n3 > maior) {
    maior = n3;
} 
if (n1 === n2 && n1 === n3) {
    console.log('Os números são iguais')
}
console.log('Maior número: '+maior);