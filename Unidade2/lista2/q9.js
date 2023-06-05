// Faça um programa que receba dez números, calcule e mostre a soma dos números pares e dos números impares.

let num = [];
let somaPar = 0;
let somaImpar = 0;
for (i = 0; i<10 ; i++) {
    num[i] = parseFloat(prompt('Digite o número '+(i+1)));
    // se for um número float, iremos calcular se é par ou não
    if(Math.floor(num[i])%2 ==0? somaPar +=num[i]:somaImpar+=num[i]);
}
console.log('----------VALORES INSERIDOS----------\n\n'+num);

console.log(`Soma dos números pares: ${somaPar}`);
console.log(`Soma dos números ímpares: ${somaImpar}`);

