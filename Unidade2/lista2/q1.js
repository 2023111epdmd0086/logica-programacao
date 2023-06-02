// 1.	Faça um programa que receba quatro notas de um aluno, calcule e mostre a média aritmética das notas e a mensagem de aprovado ou reprovado, considerando para aprovação média 7.
let nota;
let soma = 0; //variavel que irá incrementar pra depois tirar a media
let media = 0;

for (i = 1; i <= 4; i++) { //percorrer o for pra pegar as notas dos bimestres
    nota = parseFloat(prompt(`Qual a nota ${i}?`));
    soma = parseFloat(soma + nota); //incrementar variavel soma com a nota
    console.log('Nota '+i, nota);
}
media = parseFloat(soma/4).toFixed(2); //calcular a media
if (
    media >= 7? //a média do aluno foi maior ou igual a 7?
    console.log(`Aluno aprovado com média ${media}`): // se sim
    console.log(`Aluno reprovado com média ${media}`) // se não
    );

