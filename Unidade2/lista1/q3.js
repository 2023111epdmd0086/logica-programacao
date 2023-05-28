// Escreva um programa que calcule a área de um triângulo. A=bxh/2

let base = parseFloat(prompt("Qual a base do triangulo em cm?"));
let altura = parseFloat(prompt("Qual a altura do triangulo em cm?"));

let area = parseFloat(base*altura/2).toFixed(2);

console.log(`A área do triângulo é: ${area}cm²`);