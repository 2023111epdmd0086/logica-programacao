//     6. Faça um programa que converta os valores do tipo inteiro, para uma única String. Depois, substitua os valores referentes para a letra correspondente e mostre a palavra gerada. (Utilize o método replace())
// Substituir: 1 = a, 3 = c, 4 = d, 12 = m, 14 = o, 15 = p, 17 = r, 19 = t, 20 = u
// Código da palavra: 3 – 14  – 12  – 15  – 20 - 19 – 1 – 4 – 14 –17

const map = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13,
    n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 
    26
};
// iremos deixar o prompt minúsculo pra poder fazer o map
let word = prompt('Digite a palavra a ser convertida').toLowerCase();
// aqui iremos remover qualquer acento ou ç
word = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
let sep = word.split('').join('-'); // iremos separar a palavra com "-"
let conv = ''; // variável que vai auxiliar na conversão
for (let i = 0; i<sep.length; i++){
    if (sep[i] in map) { // caso a letra estiver no map, conv vai receber seu valor int
        conv += map[sep[i]];
    } else {
        conv += sep[i]; // caso não esteja, vai receber seu valor normalmente
        
    }
}

// sep = sep.replace()
console.log('Texto convertido\n'+conv);