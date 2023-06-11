// Construa um programa que solicite uma frase escrita pelo usuário. Peça ao usuário para escolher uma palavra da frase escrita e substituí-la por outra palavra. (Utilize o método replace())

let txt = prompt('Escreva a frase original');
let word = prompt('Escreva palavra que quer substituir');
let word2 = prompt('Escreva palavra vai substituir');

console.log('Texto original\n'+txt);
txt = txt.replace(word, word2);
console.log('Texto novo\n'+txt);