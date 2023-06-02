// 8.	Faça um programa que receba a idade, a altura e o peso de 25 pessoas, calcule e mostre:
// a.	A quantidade de pessoas com idade superior a 50 anos;
// b.	A média das alturas das pessoas com idade entre 10 e 20 anos;
// c.	O percentual de pessoas com peso inferior a 40 quilos entre todas as pessoas analisadas.
let idade = [];
let altura = [];
let peso = [];

for (i = 0; i < 5; i++) {
    idade[i] = parseInt(prompt('Escreva sua idade'));
    altura[i] = parseFloat(prompt('Escreva sua altura em m'));
    peso[i] = parseFloat(prompt('Escreva seu peso em kg'));
}

contarIdade();

// FUNÇÃO QUE IRÁ CONTAR A QTD PESSOAS COM IDADE MAIOR QUE 50:
function contarIdade() {
    let cont = 0
    for (i = 0; i < idade.length; i++) {
        if (idade[i] > 50) {
            cont++;
        }
    }
    console.log(`Qtd de pessoas com idade maior que 50: ${cont}`);
}

// FUNÇÃO QUE IRÁ CALCULAR A MEDIA DAS ALTURAS COM BASE NA IDADE:
function mediaAltura() {

}

// FUNÇÃO QUE IRÁ MEDIR O PERCENTUAL DE PESO:
function pctPeso(){

}