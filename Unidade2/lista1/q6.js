// Escreva um programa em pseudocódigo que calcule o valor de uma prestação em atraso, utilizando a seguinte fórmula: prestação=valor+(valor×(taxa/100)×tempo)

let valor = parseFloat(prompt('Escreva o valor da prestação em R$:'));
let taxa = parseFloat(prompt('Escreva a taxa da prestação em porcentagem:'));
let tempo = parseFloat(prompt('Escreva o tempo de prestação em dias:'));

let prestacao = valor+(valor*(taxa/100)*tempo);
console.log(`O valor da prestação é: ${prestacao} R$`);
