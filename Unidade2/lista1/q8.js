// Escreva um programa que calcule o volume de uma lata de óleo, utilizando a seguinte fórmula: volume=3.14×R^2×altura

let raio = parseFloat(prompt('Digite o valor do raio da lata em cm'));
let altura = parseFloat(prompt('Digite o valor da altura da lata em cm'));

let volume = parseFloat(3.14*(raio**2)*altura);

console.log(`O volume da lata de óleo é: ${volume}cm³`);