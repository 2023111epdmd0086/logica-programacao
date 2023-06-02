// 2.	Entrar com um número e imprimir uma das mensagens: é múltiplo de 3 ou não é múltiplo de 3.

let num = parseInt(prompt('Digite um número inteiro'));

if (
    num%3 === 0? // resto de divisão = 0 -> é multiplo
    console.log(`O número ${num} é múltiplo de 3`):     // se sim
    console.log(`O número ${num} não é múltiplo de 3`)  // se não
    ); 