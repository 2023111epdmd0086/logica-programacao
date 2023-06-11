//      aça um programa que mostre a seguinte saída: (Utilize o método substr())
// I
// If
// Ifp
// Ifpi
// Ifp
// If
// I

const txt = 'IFPI';
let aux = '';

for (let i = 1; i< txt.length; i++) {
    aux = txt.substring(0, i); // aux vai incrementar por caracteres nas posições
    console.log(aux+'\n');
}
for (let i = txt.length; i > 0; i--) {
    aux = txt.substring(0, i); // pegar o trecho da string pela posição
    console.log(aux+'\n');
}