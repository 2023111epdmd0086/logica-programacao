// Elabore um algoritmo que armazene o nome e duas notas de 5 alunos e imprima uma listagem contendo nome, as duas notas e a média de cada aluno.

const alunos = [];
// Loop para ler o nome e as notas dos alunos
for (let i = 0; i < 5; i++) {
  const aluno = {};

  aluno.nome = prompt(`Digite o nome do aluno ${i + 1}:`);
  aluno.nota1 = parseFloat(prompt(`Digite a primeira nota do aluno ${i + 1}:`));
  aluno.nota2 = parseFloat(prompt(`Digite a segunda nota do aluno ${i + 1}:`));

  aluno.media = (aluno.nota1 + aluno.nota2) / 2;

  alunos.push(aluno);
}
// Exibindo a listagem com nome, notas e média de cada aluno
console.log("Listagem de alunos:");
for (let i = 0; i < 5; i++) {
  const aluno = alunos[i];
  console.log(`Nome: ${aluno.nome}`);
  console.log(`Nota 1: ${aluno.nota1}`);
  console.log(`Nota 2: ${aluno.nota2}`);
  console.log(`Média: ${aluno.media}`);
  console.log('------------------');
}
