// Elabore um programa que receba a idade e a altura de várias pessoas, calcule e mostre a média das alturas daquelas com mais de 50 anos. Para encerrar a entrada de dados, digite idade menor ou igual a zero.

let media = 0;
let soma = 0;
let cont = 0;
let idade = 0;
let altura = 0;

do {
    idade = parseInt(prompt('Digite sua idade e aperte enter.\n\nPara encerrar a entrada de dados, digite idade menor ou igual a zero.\n'));
    altura = parseFloat(prompt('Digite sua altura e aperte enter.\n'));
    if (idade > 50) {
        soma += altura;
        cont ++;
    }
} while(idade > 0);
if (soma >0) {
    media = parseFloat(soma / cont).toFixed(2);
    console.log(`A média das alturas de quem tem mais de 50 anos é: ${media}`);
} else {
    console.log(`Não tem ninguém com idade maior que 50 anos`);
}