// 8.	Faça um programa que receba a idade, a altura e o peso de 25 pessoas, calcule e mostre:
// a.	A quantidade de pessoas com idade superior a 50 anos;
// b.	A média das alturas das pessoas com idade entre 10 e 20 anos;
// c.	O percentual de pessoas com peso inferior a 40 quilos entre todas as pessoas analisadas.

let pessoa = []; //criar uma lista de pessoas

function criarPessoa(i, a, p) { //criar função que vai passar os atributos pra pessoa
    return {
        idade: i,
        altura: a,
        peso: p
    };
}

const qtdReg = 25; //criar uma constante que armazena a quantidade de registros

for (i = 0; i < qtdReg; i++) { //rodar um loop pela quantidade de registros
    let idade = parseInt(prompt('Escreva sua idade'));
    let altura = parseFloat(prompt('Escreva sua altura em m'));
    let peso = parseFloat(prompt('Escreva seu peso em kg'));
    // aqui estamos passando pra lista de pessoa um objeto pessoa com seus atributos
    pessoa.push(criarPessoa(idade, altura, peso));
}
console.log(pessoa);
contarIdade(); //chamar função que irá imprimir o valor pedido no item A
mediaAltura(); //chamar função que irá imprimir o valor pedido no item B
pctPeso();     //chamar função que irá imprimir o valor pedido no item C    

// FUNÇÃO QUE IRÁ CONTAR A QTD PESSOAS COM IDADE MAIOR QUE 50:
function contarIdade() {
    let cont = 0 //variável que irá incrementar o contador
    for (i = 0; i < pessoa.length; i++) {
        if (pessoa[i].idade > 50) {
            cont++; //caso a idade seja maior que 50 será incrementado o contador
        }
    }
    console.log(`Qtd de pessoas com idade maior que 50: ${cont}`);
}

// FUNÇÃO QUE IRÁ CALCULAR A MEDIA DAS ALTURAS COM BASE NA IDADE:
function mediaAltura() {
    let cont = 0; //variável que irá incrementar o contador
    let soma = 0; //variável que riá auxiliar no calculo da média
    let media = 0;
    for (i = 0; i < pessoa.length; i++) {
        if (pessoa[i].idade >= 10 && pessoa[i].idade <= 20) {
            soma = soma + pessoa[i].altura;
            cont++;
        }
    }
    media = parseFloat(soma / cont).toFixed(2);
    console.log(`A média da altura das pessoas com idade entre 10 e 20 anos é: ${media}`);

}

// FUNÇÃO QUE IRÁ MEDIR O PERCENTUAL DE PESO:
function pctPeso() {
    let pct = 0; //variável que irá armazenar o valor da porcentagem
    let cont = 0; //variável que irá incrementar o contador
    for (i = 0; i < pessoa.length; i++) {
        if (pessoa[i].peso < 40) {
            cont++
        }
    }
    pct = parseFloat((cont / pessoa.length) * 100).toFixed(2);
    console.log(`A porcentagem de pessoas com peso menor que 40kg é: ${pct}%`);
}