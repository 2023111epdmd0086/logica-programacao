// Crie uma função que recebe um vetor e um número. Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou último índice em que o número aparece.

function mostrarIndices(vetor, numero) {
    const indices = [];
  
    // Loop para percorrer o vetor e encontrar os índices onde o número aparece
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] === numero) { // Verifica se o elemento atual é igual ao número
        indices.push(i); // Adiciona o índice ao array de índices
      }
    }
  
    // Exibir os índices onde o número aparece
    if (indices.length > 0) {
      console.log(`O número ${numero} aparece nos índices: ${indices.join(", ")}`);
    } else {
      console.log(`O número ${numero} não foi encontrado no vetor.`);
    }
  }
  
  // Exemplo de uso da função
  const vetor = [3, 8, 2, 3, 5, 2, 1];
  const numero = 2;
  
  mostrarIndices(vetor, numero);
  