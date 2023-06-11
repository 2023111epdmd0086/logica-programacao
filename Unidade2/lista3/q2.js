//     2. Faça um programa em JavaScript que mostre a seguinte saída (use o método charAt)
// I
// If
// Ifp
// Ifpi
// Ifp
// If
// I

const txt = 'IFPI';
let aux = '';

for (let i = 0; i< txt.length; i++) {
    aux += txt.charAt(i); // aux vai incrementar por caracteres nas posições
    console.log(aux+'\n');
}
// para evitar repetir ifpi vai ser txt.length -1 (ifp)
for (let i = txt.length-1; i > 0; i--) {
    aux = '';
    // para evitar repetir ifpi, vai ser usado -1
    for(let j = 0; j<i; j++) {
        aux += txt.charAt(j);
    }
    console.log(aux)
}