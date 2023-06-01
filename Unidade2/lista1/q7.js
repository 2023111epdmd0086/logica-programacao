// 7.	Escreva um programa que receba como entrada dois números inteiros. Os números devem ser armazenados nas variáveis A e B. O algoritmo deve efetuar a troca dos valores de forma que a variável A passe a ter o valor da variável B e que a variável B passe a ter o valor da variável A. Ao final, o algoritmo deve imprimir os valores trocados.

let A = parseInt(prompt('Digite o primeiro número'));
let B = parseInt(prompt('Digite o segundo número'));

console.log(`Estamos realizando a troca das variáveis A(${A}) e B(${B})`);
// A variável auxiliar aux irá receber o valor de A para depois B receber aux
let aux = A;
A = B;
B = aux;

console.log(`Valores trocados: A: ${A}, B: ${B}`);
