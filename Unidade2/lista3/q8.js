// Faça um programa que, a partir de um texto digitado pelo usuário, conte o número de caracteres total e o número de palavras (palavra é definida por qualquer sequência de caracteres delimitada por espaços em branco) e exiba o resultado.

let txt = prompt('Escreva sua frase');

let qtdChar = txt.length;
let qtdWord = txt.split(' ');
qtdWord = qtdWord.length;

console.log(`Qtd de caracteres: ${qtdChar}`);
console.log(`Qtd de palavras: ${qtdWord}`);