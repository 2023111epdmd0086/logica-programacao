// 5.	Faça um programa que receba dois números e execute as operações listas a seguir, de acordo com a escolha do usuário.
// 1 = media; 2 = diferenca do menor pro maior; 3 = produto; 4 = divisão

let n1 = Number(prompt('Digite o primeiro número'));
let n2 = Number(prompt('Digite o segundo número'));
let op = Number(prompt(
    'Escolha a opção que deseja: ' +
    '\n1 - Média entre os números' +
    '\n2 - Diferença do maior para o menor' +
    '\n3 - Produto entre os números digitados' +
    '\n4 - Divisão do primeiro pelo segundo número'
    ));
console.log(`Operação: ${op}\nNúmero 1: ${n1}\nNúmero 2: ${n2}`);
switch(op) {
    case 1:
        let media = (n1 + n2)/2;
        console.log(`A média é: ${media}`);
        break;
    case 2:
        if(n1<n2?console.log(`Diferença: ${n2-n1}`):console.log(`Diferença: ${n1-n2}`));
        break;
    case 3:
        console.log(`Produto: ${n1*n2}`);
        break;
    case 4:
        console.log(`Divisão: ${parseFloat(n1/n2).toFixed(2)}`);
        break;
    default:
        alert('Digite valores válidos!!')
        location.reload();
}