// Implemente um algoritmo que leia as notas e os nomes de 5 alunos armazenando os dados em vetores de 5 posições, sendo que as notas serão armazenadas em um vetor de reais e os nomes em um outro vetor do tipo cadeia de caracteres. Ao final o algoritmo deve escrever na tela somente os nomes dos alunos que tiraram nota maior que 5.0.

const notas = [];
const nomes = [];

// Loop para ler as notas e os nomes dos alunos
for (let i = 0; i < 5; i++) {
  const nome = prompt(`Digite o nome do aluno ${i + 1}:`);
  const nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));

  nomes.push(nome);
  notas.push(nota);
}

// Loop para exibir os nomes dos alunos com nota maior que 5.0
console.log("Alunos com nota maior que 5.0:");
for (let i = 0; i < 5; i++) {
  if (notas[i] > 5.0) {
    console.log(nomes[i]);
  }
}
