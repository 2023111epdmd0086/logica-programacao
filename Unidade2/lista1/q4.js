// 4.	Escreva um programa que calcule o salário líquido de um professor.  Os dados fornecidos são: valor da hora aula, número de aulas dadas no mês e percentual de desconto do INSS.

let valHora = parseFloat(prompt("Escreva o valor da hora em R$"));
let qtdAulas = parseFloat(prompt("Escreva o número de aulas dadas no mês"));
let desconto = parseFloat(prompt("Escreva o percentual de desconto do INSS"));

let salario = parseFloat(valHora*qtdAulas*(1-(desconto/100))).toFixed(2);

console.log(`O salário do professor é: ${salario}R$`);