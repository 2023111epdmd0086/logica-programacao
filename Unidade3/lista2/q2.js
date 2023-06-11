// Faça um programa que solicite um número inteiro de até 4 dígitos ao usuário e inverta a ordem de seus algarismos. Ex.: Entrada = 5382 - Saída = 2835

// Leitura do número digitado pelo usuário
const numero = prompt("Digite um número inteiro de até 4 dígitos:");

// Verifica se o número possui até 4 dígitos
if (numero.length <= 4) {
  // Inverte a ordem dos algarismos utilizando o método split(), reverse() e join()
  const numeroInvertido = numero.split("").reverse().join("");
  console.log(`Número invertido: ${numeroInvertido}`);
} else {
  console.log("O número deve ter até 4 dígitos.");
}
