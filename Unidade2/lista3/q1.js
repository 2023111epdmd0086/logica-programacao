// Faça um programa que peça ao usuário para digitar um texto e informe quantos caracteres possui o texto informado pelo usuário.

let txt = prompt('Digite um texto para contarmos os caracteres');

console.log(`Quantidade de caracteres: ${txt.length}`);

// quebrar a string em arrays separados por espaço em branco
// depois disso é feito a junção do array em uma string só
txt = txt.split(' ').join(''); 

console.log(`Quantidade de caracteres sem espaços em branco: ${txt.length}`);
