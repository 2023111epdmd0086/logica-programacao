// 6.	Faça um programa que receba um número, calcule e mostre a tabuada desse número.
let n = parseInt(prompt('Digite um número inteiro'));

for (i = 0; i<= 10; i++){
    console.log(`${n} x ${i} = ${n*i}`);
}