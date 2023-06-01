// 9.	Escreva um programa que calcule o desconto de um produto. O novo valor deve possui um desconto de 12%.

let precoAntes = parseFloat(prompt('Digite o valor em reais do produto'));

let precoDepois = parseFloat(precoAntes * (1-0.12)).toFixed(2);

console.log(`O preço do produto com desconto é: ${precoDepois}R$`);