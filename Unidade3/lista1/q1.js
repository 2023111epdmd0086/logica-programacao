// Implemente um algoritmo que leia as notas de 10 alunos armazenando as em um vetor de 10 posições Ao final escreva na tela somente as notas maiores que 5.0.

let notas = [];

for (let i = 0; i<10; i++) {
    notas[i] = parseInt(prompt('Digite a nota '+(i+1)));
}
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >5) {
        console.log(notas[i]);
    } 
        
}