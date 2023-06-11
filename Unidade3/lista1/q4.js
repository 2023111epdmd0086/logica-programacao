// Elabore um algoritmo que leia a nota de 80 alunos e que imprima ao final a nota de cada aluno e a média da turma

const notas = [];
let somaNotas = 0;

// Loop para ler as notas dos alunos
for (let i = 0; i < 80; i++) {
  const nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
  notas.push(nota);
  somaNotas += nota;
}

// Exibindo as notas individuais dos alunos
console.log("Notas dos alunos:");
for (let i = 0; i < 80; i++) {
  console.log(`Aluno ${i + 1}: ${notas[i]}`);
}

// Calculando e exibindo a média da turma
const mediaTurma = somaNotas / 80;
console.log(`Média da turma: ${mediaTurma}`);
