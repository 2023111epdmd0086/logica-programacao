// Fazer um programa para contar quantos espaços em branco existem em uma frase fornecida pelo usuário.

let txt = prompt('Escreva sua frase com quantos espaços quiser :)');
let aux = 0

for (let i = 0; i<txt.length; i++) {
    if(txt[i] === ' ') {
        aux++;
    }
}

console.log('Quantidade de espaços em branco: '+aux);