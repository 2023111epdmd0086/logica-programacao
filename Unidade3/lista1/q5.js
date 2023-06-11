// Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array. Modifique os elementos do array de modo a sequência de números ficar do contrário. Ou seja, se digitou: 1,2,3 Vai aparecer: 3,2,1

const numeros = [] // Criar o array com os números que serão digitados

for (let i=0; i<3; i++) {
    let numero = parseInt(prompt(`Digite o número ${i+1}`));
    numeros.push(numero); // Enviar para o array os números digitados

}

console.log('Números invertidos');
console.log(numeros.reverse()); // Inverter a sequência dos números no array
