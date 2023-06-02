// 3.	Faça um programa que receba dois números e mostre o menor.

let n1 = Number(prompt('Digite o primeiro número'));
let n2 = Number(prompt('Digite o segundo número'));

if (n1 < n2) {
    console.log(`${n1} é menor que ${n2}`);
} else if (n1 === n2) {
    console.log(`${n1} é igual a ${n2}`);
} else {
    console.log(`${n2} é menor que ${n1}`);
}