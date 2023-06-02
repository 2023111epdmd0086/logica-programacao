// 7.	Crie um algoritmo que entre com cinco números e imprimir o quadrado de cada número.

let num = [];

for (i=0; i<5; i++) {
    num[i] = Number(prompt('Digite um número'));
}
console.log('---------- Valores ao quadrado ---------- ');
for (i=0; i<num.length; i++) {
    console.log(`${num[i]} ao quadrado = ${num[i]**2}`);
}