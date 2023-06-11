//     7. Escreva um programa que dado um valor numérico digitado pelo usuário (armazenado em uma variável inteira), imprima cada um dos seus dígitos por extenso.
// Exemplo:
// Entre o número: 4571
// Resultado: quatro, cinco, sete, um

const map = {
    1: 'um',
    2: 'dois',
    3: 'tres',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove',
    0: 'zero'
}

let num = prompt('Digite um número:');
let conv = []; // variável que vai armazenar o convertido
for(let i = 0; i < num.length; i++) {
    conv[i] = map[num[i]]; // vai armazenar o valor do map
}
console.log(conv);