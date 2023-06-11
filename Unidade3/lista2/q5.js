// Leitura do valor da compra e número de parcelas
const v = parseInt(prompt("Digite o valor da compra:")); // Valor da compra
const p = parseInt(prompt("Digite o número de parcelas desejado:")); // Número de parcelas

// Cálculo do valor das parcelas
const valorParcela = Math.floor(v / p); // Valor das parcelas sem o ajuste
const resto = v % p; // Resto da divisão

// Array para armazenar os valores das parcelas
const parcelas = [];

// Preenchimento do array com as parcelas
for (let i = 0; i < p; i++) {
  parcelas.push(valorParcela); // Adiciona o valor das parcelas sem o ajuste
  if (resto > 0) {
    parcelas[i]++; // Incrementa 1 no valor das parcelas iniciais para ajustar o resto
    resto--;
  }
}

console.log("Valores das parcelas:");
console.log(parcelas);
